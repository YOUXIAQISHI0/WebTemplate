function initCommonSlideGiant(moduleId, layout, option) {
  //swiper组件有缺陷，当放在display=none的容器中时，初始化会有问题，导致无法正常工作，在我们系统中，在此模块可能会放在
  //标签模块中，当某标签默认不显示时，swiper就会无法工作，所以都要加上 window["initSwiperFunc" + moduleId] 这个函数，以
  //便在全局中可以遍历 window 对象，对 swiper 进行重新初始化；目前，在 jscript.js 中的 initModuleTabContainer() 方法中对标签模块所以处理，其它的暂时未处理，后面看情况酌情处理
  //请copy以下句子进入--window["initSwiperFunc" + moduleId] = function(){initCommonSiteGalleryGiant(moduleId, layout, option,isclick)};
  var moduleIdSelector = "#module_" + moduleId;
  var module = $('#module_' + moduleId);
  var galleryTop, galleryThumbs;
  // 是否自动轮播
  var isAutoPlay = (parseInt(option.Param_SwitchBy) === 0 && option.SlideCount > 1 && window.CanDesign === 'False');
  option.autoplay = isAutoPlay ? option.autoplay : false;
  window['oldWinWidth'] = $(window).width();
  openSrcWindow(moduleIdSelector)
  $(document).ready(function () {
    var DEFAULT_VERSION = 9;
    var ua = navigator.userAgent.toLowerCase();
    var isIE = ua.indexOf("msie") > -1;
    var safariVersion;
    if (isIE) {
      safariVersion = ua.match(/msie ([\d.]+)/)[1];
      var sa = parseInt(safariVersion);
      if (safariVersion <= DEFAULT_VERSION) {
        //ie9以下，调用swiper2
        // $(moduleIdSelector+ ' .slidegiant-container').css({'height':'500px','overflow':'hidden','white-space':'nowrap'})
        galleryTop = new Swiper(moduleIdSelector + ' .gallery-top', {
          pagination: moduleIdSelector + ' .swiper-pagination',
          paginationClickable: true,
          loop: option.loop,
          autoplay: option.autoplay,
          speed: option.speed,
          noSwiping: option.hasOwnProperty('noSwiping') ? option.noSwiping : false,
          onInit: function (swiper) {
            $(swiper.container).find('.swiper-wrapper').css({'height': ''}).find('.swiper-slide').css('height', '')
          }
        });
        if ($.inArray(layout, ['101', '102']) > -1) {
          // 不知道这段代码用来干嘛的在IE上报错了
          // $(moduleIdSelector+" .slidegiant-container").addClass("forie");
          $(moduleIdSelector + " .swiper-pagination").css('opacity', 1);
          $(moduleIdSelector + " .gallery-thumbs").hide();
          $(moduleIdSelector + " .gallery-thumbs").hide();
          $(moduleIdSelector + " .swiper-pagination").css('opacity', 1);
        } else if ($.inArray(layout, ['103', '104', '105', '106']) > -1) {
          if (layout == 105) {
            $(moduleIdSelector + " .swiper-slideshow-1-autoplay").hide();
            $(moduleIdSelector + " .swiper-tit").hide();
          } else if (layout == 106) {
            $(moduleIdSelector + " .gallery-thumbs").hide();
            $(moduleIdSelector + " .swiper-pagination").css('opacity', 1);
          }
          $(moduleIdSelector + '  .swiper-slideshow-1-next').on('click', function (e) {
            e.preventDefault()
            galleryTop.swipeNext()
          })
          $(moduleIdSelector + ' .swiper-slideshow-1-prev').on('click', function (e) {
            e.preventDefault()
            galleryTop.swipePrev()
          });
        } else if (layout == 107) {
          $(moduleIdSelector + " .swiper-pagination").on('mouseover', moduleIdSelector + ' .swiper-pagination-switch', function () {
            var _this = $(this);
            var parentoffset = $(this).closest('.slideshow-1').offset();
            var left = $(this).offset().left - parentoffset.left;
            var top = $(this).offset().top - parentoffset.top;
            var tempHeight = $('.tiles-nav ').find('li').eq(_this.index()).height();
            var tempWidth = $('.tiles-nav ').find('li').eq(_this.index()).width();
            tempWidth = tempWidth / 2 - 2;
            $(moduleIdSelector + ' .tiles-nav ').find('li').eq(_this.index()).css({
              'position': 'absolute',
              'left': left - tempWidth,
              'top': top - tempHeight,
              'display': 'block'
            })

          });

          $(moduleIdSelector + " .swiper-pagination").on('mouseout', '.swiper-pagination-switch', function () {
            var _this = $(this);
            var parentoffset = $(this).closest('.slideshow-1').offset();
            var left = $(this).offset().left - parentoffset.left;
            var top = $(this).offset().top - parentoffset.top;
            $('.tiles-nav ').find('li').eq(_this.index()).css({'display': 'none'})
          });
        } else {
          swipertwo(moduleId)
        }
      } else {
        //ie9以上，调用swiper3
        swipertwo(moduleId)
      }
    } else {
      //非ie
      swipertwo(moduleId)
    }
  });

  function swipertwo(moduleId) {
    var moduleIdSelector = "#module_" + moduleId;
    if ($(moduleIdSelector).is(':hidden')) {
      return
    }
    galleryTop && galleryTop.destroy && galleryTop.destroy(true, true)

    galleryThumbs && galleryThumbs.destroy && galleryThumbs.destroy(true, true)

    galleryTop = null;
    galleryThumbs = null;

    module.find(".slidegiant-container").addClass("fornotie")

    //设置slidesPerViewParma参数;

    var slidesPerViewParma = 1;
    if (layout == 103 && window.CanDesign === 'False') {
      var windowwidth = $(window).width();
      // if (windowwidth >= 1200) {
      if (windowwidth >= 768) {
        slidesPerViewParma = 3
      }
    }

    //定义swiper选择器
    var swiperSelector = moduleIdSelector + ' .gallery-top';

    //初始化大图 swiper
    galleryTop = new Swiper(swiperSelector, {
      pagination: moduleIdSelector + ' .swiper-pagination',
      preventClicks: true,
      paginationClickable: true,
      mode: "horizontal",
      loop: option.loop,
      slidesPerView: slidesPerViewParma,
      speed: option.speed,
      nextButton: moduleIdSelector + ' .swiper-slideshow-1-prev',
      prevButton: moduleIdSelector + ' .swiper-slideshow-1-next',
      autoplay: option.autoplay,
      loopAdditionalSlides: 2,
      autoplayDisableOnInteraction: true,
      onInit: function (swiper) {
        if (layout == 105) {
          //Swiper2.x的初始化是onFirstInit
          swiperAnimateCache(swiper); //隐藏动画元素
          swiperAnimate(swiper); //初始化完成开始动画
        } else if (layout == 108) {
          if (swiper.params.autoplay) {
            var swiperHover = $(moduleIdSelector + ' .swiper-container:visible,' + moduleIdSelector + ' .gallery_thumbs .thumbs_list:visible');
            swiperHover.off('mouseenter').on('mouseenter', function () {
              swiper.stopAutoplay();
            })
            swiperHover.off('mouseleave').on('mouseleave', function () {
              if (isAutoPlay) {
                swiper.startAutoplay();
              }
            })
          }
        } else if (layout == 109) {
          var isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) ? true : false
          if ((swiper.params.autoplay && !isMobile)) {
            var swiperHover = $(moduleIdSelector + ' .gallery-top,' + moduleIdSelector + ' .gallery-thumbs');
            swiperHover.off('mouseenter').on('mouseenter', function () {
              try {
                swiper.stopAutoplay();
              } catch (e) {
                console.log(e);
              }
            })
            swiperHover.off('mouseleave').on('mouseleave', function () {
              if (isAutoPlay) {
                swiper.startAutoplay();
              }
            })
          }
        }
        if ($.inArray(layout, ['102', '103', '104', '105', '106', '107']) > -1 && option.autoplay == 0) {
          swiper.stopAutoplay();
        }
      },
      onSlideChangeStart: function (swiper) {
        // 数字递增模块重新实例化，除了demo103貌似无法重新实例化外
        if ($('.'+swiper.classNames).find('.swiper-wrapper .swiper-slide-active .ModuleSlideContainer').find("[moduletype='ModuleDigitalIncreaseGiant']").length > 0) {
          window.initNumber()
        }
        //让下层滚轮选择
        if ($.inArray(layout, ['101', '102']) > -1) {
          if (galleryThumbs) {
            galleryThumbs.slides.removeClass('swiper-slide-active')
            galleryThumbs.slides.eq(swiper.realIndex).addClass('swiper-slide-active');
          }
        } else if ($.inArray(layout, ['103', '105']) > -1) {
          /*进度条函数动画效果*/
          var bar = $(".bar span");
          var oSj = option.autoplay + 500;
          $(".bar span").animate({width: '100%'}, oSj, function () {
            $(this).css('width', 0);
          });
        } else if (layout == 108) {
          function count_scroll(idx, el) {
            var gallery_thumbs = el.find('ul');
            var gallery_thumbs_height = el.height();
            var currentimg = gallery_thumbs.find('li').eq(idx);
            var currentscrolltop;
            if (gallery_thumbs.position()) {
              currentscrolltop = gallery_thumbs.position().top;
            }
            //计算当前的位置
            if (currentimg[0] != undefined) {
              var currentscroll = currentimg[0].offsetTop + currentimg.outerHeight(true);
              if (currentscroll > gallery_thumbs_height) {
                gallery_thumbs.animate({
                    'top': gallery_thumbs_height - currentimg[0].offsetTop - currentimg.outerHeight(true)
                  },
                  200);
              } else if (Math.abs(currentimg[0].offsetTop) <= Math.abs(currentscrolltop)) {
                gallery_thumbs.animate({
                    'top': -currentimg[0].offsetTop
                  },
                  200);
              }
            }
          };
          count_scroll(swiper.realIndex, $(moduleIdSelector + ' .gallery_thumbs'));
          $(moduleIdSelector + ' .gallery_thumbs').find('li').eq(swiper.realIndex).addClass('active').siblings().removeClass('active');
        } else if (layout == 109 || layout == 106) {
          $(moduleIdSelector + ' .gallery-thumbs').find('.swiper-slide').removeClass('active');
          $(moduleIdSelector + ' .gallery-thumbs').find('.swiper-slide').eq(swiper.realIndex).addClass('active');
          if ((swiper.autoplaying || !swiper.params.autoplay) && galleryThumbs) {
            var slide = calcslide(galleryThumbs, swiper);
            if (slide['extraslide'] > 0) {
              galleryThumbs.setWrapperTranslate(slide['realPos']);
              galleryThumbs.setWrapperTransition(1000);
            }
          }
        }
        else {
          return false;
        }

      },
      onSlideChangeEnd: function (swiper) {
        if (layout == 105) {
          swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
      },
    });

    //初始化小图 swiper
    galleryThumbs = new Swiper(moduleIdSelector + ' .gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 'auto',
      virtualTranslate: (layout == 106 || layout == 109) ? false : true,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      slidesPerView: layout == 109 ? getSlidesGroup(moduleIdSelector) : 'auto',
      onInit: function (swiper) {
        var extslide = calcslide(swiper, galleryTop);
        if (layout == 106 && extslide['extraslide'] > 0) {
          swiper.update(true);
          $(swiper.container).find('.swiper-wrapper').removeClass('justify-content');
        } else {
          $(swiper.container).find('.swiper-wrapper').addClass('justify-content');
        }

        if (layout == 109) {
          swiper.update(true);
        }
      }
    });
    module.find(".slidegiant-container").mouseenter(function () {
      galleryTop.stopAutoplay();
    })
    module.find(".slidegiant-container").mouseleave(function () {
      if (isAutoPlay) {
        galleryTop.startAutoplay();
      }
    })
    $(galleryThumbs.container).find('.swiper-slide').off('click').on('click', function () {
      var realIndex = $(this).index() + ($('#module_' + moduleId + ' .gallery-top .swiper-slide').length - $('#module_' + moduleId + ' .gallery-thumbs .swiper-slide').length) / 2;
      $(galleryThumbs.container).find('.swiper-slide').removeClass('active').eq($(this).index()).addClass('active')
      galleryTop.slideTo(realIndex, 500, true)
    })

    if (layout == 107) {
      $('#module_' + moduleId + " .ModuleSlideGiant.layout-107 .swiper-pagination").on('mouseover', '.swiper-pagination-bullet', function () {
        var _this = $(this);
        var parentoffset = $(this).closest('.slideshow-1').offset();
        var left = $(this).offset().left - parentoffset.left;
        var top = $(this).offset().top - parentoffset.top;
        var tempHeight = $('.tiles-nav ').find('li').eq(_this.index()).height();
        var tempWidth = $('.tiles-nav ').find('li').eq(_this.index()).width();
        tempWidth = tempWidth / 2 - 2;
        $('#module_' + moduleId + ' .tiles-nav ').find('li').eq(_this.index()).css({
          'position': 'absolute',
          'left': left - tempWidth,
          'top': top - tempHeight,
          'display': 'block'
        })
      });

      $('#module_' + moduleId + " .ModuleSlideGiant.layout-107 .swiper-pagination").on('mouseout', '.swiper-pagination-bullet', function () {
        var _this = $(this);
        var parentoffset = $(this).closest('.slideshow-1').offset();
        var left = $(this).offset().left - parentoffset.left;
        var top = $(this).offset().top - parentoffset.top;
        $('#module_' + moduleId + ' .tiles-nav ').find('li').eq(_this.index()).css({'display': 'none'})
      });
    }

    if (layout == 108) {
      var moduleIdSelector = "#module_" + moduleId + ' .phon_box',
        startY = 0,
        cha = 0,
        curren = 0,
        endY = 0,
        movey = 0,
        st;

      function touchstart(e) {
        e = window.event || e;
        if (e.touches) {
          startY = e.targetTouches[0].clientY;
        } else {
          startY = e.clientY;
        }
        ;
        st = Date.now();
        $(moduleIdSelector + ' .thumbs_list').off('mousemove').on('mousemove', touchmove)
      }

      function touchmove(e) {
        e.preventDefault();
        //防止出现滚动条
        e = window.event || e;
        if (!IsPC()) {
          //移动端
          cha = e.targetTouches[0].clientY - startY;
          movey = (cha + curren);
          $(this).css('top', movey);
        } else {
          //pc端
          cha = e.clientY - startY;
          movey = (cha + curren);
          $(this).css('top', movey);
        }
        ;
      }

      function touchend(e) {
        var blo = IsPC();
        var mintop = $(moduleIdSelector + ' .gallery_thumbs').height() - $(this).height();
        //if (Date.now() - st < 150){
        if (!blo) {
          endY = e.originalEvent.changedTouches[0].clientY;
        } else {
          endY = e.clientY;
          $(moduleIdSelector + ' .thumbs_list').off('mousemove');
        }
        ;

        curren = movey;//记录最后的位置
        var _this = $(this);
        if (Date.now() - st > 150) {
          if (curren > 0 || $(this).height() < $(moduleIdSelector + ' .gallery_thumbs').height()) {
            //回到zui,
            $(this).stop().animate({'top': 0});
            curren = 0;
          } else if (curren < mintop) {
            $(this).stop().animate({'top': mintop - 10});
            curren = mintop - 10;
          }
        }
        ;
        $(moduleIdSelector + ' .thumbs_list').off('mousemove');
      }

      function IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
          "SymbianOS", "Windows Phone",
          "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
          if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
          }
        }
        return flag;
      }

      $(moduleIdSelector + ' .thumbs_list').off('touchstart').on('touchstart', touchstart)
      $(moduleIdSelector + ' .thumbs_list').off('touchmove').on('touchmove', touchmove);
      $(moduleIdSelector + ' .thumbs_list').off('touchend').on('touchend', touchend);
      $(moduleIdSelector + ' .thumbs_list').off('mousedown').on('mousedown', touchstart);
      $(moduleIdSelector + ' .thumbs_list').off('mouseup').on('mouseup', touchend);


      $(moduleIdSelector + ' .gallery_thumbs').off().on('mouseover click', 'li', function (event) {
        //给缩略图绑定事件
        // 如果是图片展开的
        event.stopPropagation();
        // 修复在标签模块时第0个点击无效的bug
        var index = $(this).index();
        var realIndex = index + ($(moduleIdSelector + ' .swiper-container .swiper-slide').length - $(moduleIdSelector + ' .thumbs_list img').length) / 2;
        galleryTop.slideTo(realIndex, 1000, false);
        $(moduleIdSelector + ' .gallery_thumbs').find('li').removeClass('active');
        $(this).addClass('active');
        var gallery_thumbs_height = $(moduleIdSelector + ' .gallery_thumbs').height();
        var listheight = $(this).closest('.thumbs_list');
        var listheight_height = $(this).closest('.thumbs_list').height();
        var currentop = listheight.position().top;
        var min_top = -(listheight_height - gallery_thumbs_height);
        //自动上去缩略图的高度大于父级的高度时
        if (gallery_thumbs_height < listheight_height && currentop <= 0) {
          var maxtop = gallery_thumbs_height - listheight_height;
          var windowwidth = $(window).width();
          var speed = 39;
          if (windowwidth >= 481) {
            speed = 92
          } else {
            speed = 39
          }
          //到了倒数第二个
          if (this.offsetTop + currentop >= speed * 3) {
            if (currentop - speed < maxtop - 10) {
              listheight.animate({
                'top': maxtop - 10,
              });
              curren = maxtop - 10;//记录最后的位置
            } else {
              listheight.animate({
                'top': currentop - speed,
              });
              curren = currentop - speed;//记录最后的位置
            }
            ;
          } else if (this.offsetTop + currentop <= speed) {

            if ($(this).index() > 3 && min_top <= currentop) {
              listheight.animate({
                'top': currentop + speed,
              });
              curren = currentop + speed;//记录最后的位置
            } else if (!(min_top <= currentop)) {
              listheight.animate({
                'top': min_top,
              });
              curren = min_top;
            } else {
              listheight.animate({
                'top': 0,
              });
              curren = 0;//记录最后的位置
            }
            ;
          }
          ;
        }
        ;

      })
      $(moduleIdSelector + ' .gallery_thumbs').off('touchmove').on('touchmove', function (e) {
        e.preventDefault();
      })

      //扩展板做相应处理
      if ($('meta[name="viewport"]').length <= 0) {
        $(moduleIdSelector + ' .phon_box').show()
        $('.ModuleSlideGiant.layout-108 .pc_pic').show()
      }
      if ($(moduleIdSelector + ' .phon_box').is(':visible')) {
        initSwiperFunc()
      }
    }

    if (layout == 109) {
      if (window.innerWidth < 767) {
        loopToIpad(moduleIdSelector)
      }

      function loopToIpad(moduleIdSelector) {
        var thumbs_bttom = '-' + ($(moduleIdSelector + ' .gallery-thumbs').find('.explain').outerHeight() + $(moduleIdSelector + ' .gallery-thumbs').find('.swiper-slt').outerHeight(true));
        $(moduleIdSelector + ' .showbtn').attr('show', 'true').removeClass('show_btn').addClass('close_btn').trigger('click');
      }
    }

    function calcslide(swiper, swiperTop) {
      var slideWidth = swiper.wrapper.find('.swiper-slide').width(),
        wrapperWidth = swiper.wrapper.width(),
        lideLength = swiper.wrapper.find('.swiper-slide').length;
      var realPos = ((slideWidth + 10) * lideLength - 10 - wrapperWidth) / (lideLength - 1) * parseInt(swiperTop.realIndex);
      var arr = new Array();
      arr['realPos'] = -realPos;
      arr['extraslide'] = (slideWidth + 10) * lideLength - 10 - wrapperWidth;
      return arr;
    }

    function getSlidesGroup(moduleIdSelector) {
      // 计算slides的个数
      var slidesGroup;
      if ($(moduleIdSelector).width() > 800 && $(moduleIdSelector).width() < 1000) {
        slidesGroup = 6
      } else if ($(moduleIdSelector).width() > 1000) {
        slidesGroup = 7
      } else {
        slidesGroup = 3
      }
      return slidesGroup
    }
  }

  $('#module_' + moduleId).off('resize.' + moduleId).on('resize.' + moduleId, function () {
    var ua = navigator.userAgent.toLowerCase();
    var isIE = ua.indexOf("msie") > -1;
    var safariVersion;
    if (!isIE && Math.abs(parseInt(window['oldWinWidth']) - parseInt($(window).width())) > 40) { //当窗口宽度变化比较大时，才重新初始化swiper，避免页面抖动
      window['oldWinWidth'] = $(window).width();
      swipertwo(moduleId);
    }
  });
  window["initSwiperFunc" + moduleId] = function () {
    swipertwo(moduleId)
  }
}

function openSrcWindow(moduleIdSelector) {
  $(moduleIdSelector).find("div[module-container-type='ModuleSlide']").off('click.openSrcWindow').on('click.openSrcWindow', function (e) {
    if (e.target.classList.contains('ModuleSlideContainer') && window.CanDesign === 'False' && $(this).attr('a-link-value') != '') {
      window.location.href = $(this).attr('a-link-value')
    }
  })
}
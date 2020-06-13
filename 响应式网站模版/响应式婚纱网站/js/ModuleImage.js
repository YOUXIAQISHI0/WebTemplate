function ImageModuleResultfn(moduleid, layout, option) {
  var module = $('#module_' + moduleid);
  if (layout == '108') {
    var moduleIdSelector = "#module_" + moduleid;
    loadStyleSheet('../css/lightgallery.min.css');
    addScript('../js/lightgallery.js', function () {
      addScript('../js/lg-fullscreen.min.js');
      addScript('../js/lg-thumbnail.min.js');
      addScript('../js/lg-zoom.min.js');
      if ($(moduleIdSelector + ' .gallery-list').css('display') !== 'none') {
        // 瀑布流插件
        if ($(moduleIdSelector + ' .gallery-list').attr('isCarousel') != 1 && layout == '108') {
          $(moduleIdSelector + ' .gallery-list').imagesLoaded(function () {
            $(moduleIdSelector + ' .gallery-list').masonry({
              itemSelector: '.grid-item',
              fitWidth: true
            });
          });
        }
      }
    })
  }
  if (layout == '102') {
    //图片的半透明效果
    module.find('.image-animation').off('mouseover').on('mouseover', function () {
      $(this).animate({
        opacity: 0.7
      }, 300, function () {
        // 4
      });
    })
    //图片不透明
    module.find('.image-animation').off('onmouseout').on('onmouseout', function () {
      $(this).animate({
        opacity: 1
      }, 300, function () {
      });
    })
  }

  if (layout == '104' || layout == '105' || layout == '106') {
    //浮影
    var oSetTimeout = null;

    function ImgShade(obj, type) {
      var windowWidth = $(window).width();
      var oDiv = $(obj).parent().find("div[name='shade']");
      $(obj).parent().css("position", "relative");
      if ($(obj).parent().is("a")) $(obj).parent().css("display", "block");
      if (oDiv.length == 0) {
        oDiv = $("<div name='shade'>" + $(obj).attr('alt') + "</div>").appendTo($(obj).parent()).css('height', 0);
      }
      var bc = $(obj);
      var left = bc.offset().left - $(obj).closest('.BodyCenter').offset().left;
      var w = bc.outerWidth();
      var h = bc.outerHeight();
      var BodyCenter = $(obj).closest('.BodyCenter');
      if (type == 'ShadeTop') {
        var Top = BodyCenter.css('padding-top');
        $(oDiv).attr("class", "showShadeTop").css({'width': w, 'left': left, 'top': Top}).show();
      } else if (type == 'ShadeBottom') {
        $(oDiv).css({
          'width': w,
          'left': left,
          'bottom': BodyCenter.css('paddingBottom'),
          'position': 'absolute',
          'color': '#fff',
          'background': 'rgba(0,0,0,.7)',
          'line-height': '40px'
        }).show();
      } else {
        $(oDiv).attr("class", "showShadeTop").css({'width': w, 'left': left, 'top': 0}).show();
      }
      var isShadeAll = type == 'Shade';
      var tp = BodyCenter.css('padding-top');
      if (isShadeAll) $(oDiv).css({'line-height': h + 'px', 'font-size': '16px', 'top': tp});
      $(oDiv).stop().animate({height: (isShadeAll ? h + 'px' : "40px")}, (isShadeAll ? 500 : 200), function () {
      })
      if (windowWidth >= 768) {
        $(oDiv).off('mouseenter').on('mouseenter', function () {
          clearTimeout(oSetTimeout);
        });
        $(oDiv).off('mouseleave').on('mouseleave', function () {
          divZoom(oDiv, type);
        });
      }
    }

    function unImgShade(obj, type) {
      if ($(window).width() < 768) {
        return
      }

      if ($(obj).parent().find("div[name='shade']").length == 0) $(obj).parent().append("<div name='shade'>" + $(obj).attr('alt') + "</div>");
      var oDiv = $(obj).parent().find("div[name='shade']");
      oSetTimeout = setTimeout(function () {
        divZoom(oDiv, type);
      }, 200);

    }

    function divZoom(obj, type) {
      $(obj).stop().animate({
        height: "0px"
      }, layout == '106' ? 500 : 200, function () {
        if (type == 'ShadeTop') $(obj).attr("class", "hideShadeTop").hide();
        else $(obj).attr("class", "hideShadeBottom").hide();
      });
    }

    var windowWidth = $(window).width();
    switch (layout) {
      case '104':
        direction = 'ShadeBottom';
        break;
      case '105':
        direction = 'ShadeTop';
        break;
      case '106':
        direction = 'Shade';
    }
    module.find('.image-animation').off('mouseover').on('mouseover', function () {
      switch (layout) {
        case '104':
          direction = 'ShadeBottom';
          break;
        case '105':
          direction = 'ShadeTop';
          break;
        case '106':
          direction = 'Shade';
      }
      if (layout == '106') {
        if (windowWidth >= 768) {
          ImgShade(this, direction)
        }
        return;
      }
      ImgShade(this, direction)
    })
    module.find('.image-animation').off('mouseout').on('mouseout', function () {
      unImgShade(this, direction);
    })
    /*#module_moduleid*/
    var prevwimg = module.find('.image-animation');
    if (windowWidth < 768) {
      prevwimg.mouseover();
      prevwimg[0].onload = function () {
        if (layout != '106') {
          ImgShade(this, direction)
        }
      }
    }
    $(window).off('resize.' + moduleid).on('resize.' + moduleid, function () {
      var bt = (prevwimg.closest('.BodyCenter').outerHeight() - prevwimg.outerHeight()) / 2;
      var windowWidth = $(window).width();
      module.find("div[name='shade']").css({
        'left': prevwimg.offset().left - prevwimg.closest('.BodyCenter').offset().left,
        'bottom': bt,
        'width': prevwimg.outerWidth()
      });
      if (windowWidth < 768) {
        layout == '106' ? prevwimg.parent().find('div').removeClass('showShadeTop') : prevwimg.mouseover();
      } else {
        prevwimg.mouseout()
      }
      module.find('.image-animation').off('mouseover').on('mouseover', function () {
        switch (layout) {
          case '104':
            direction = 'ShadeBottom';
            break;
          case '105':
            direction = 'ShadeTop';
            break;
          case '106':
            direction = 'Shade';
        }
        if (layout == '106') {
          if (windowWidth >= 768) {
            ImgShade(this, direction)
          }
          return;
        }
        ImgShade(this, direction)
      })
      module.find('.image-animation').off('mouseout').on('mouseout', function () {
        unImgShade(this, direction);
      })
    })
  }
  if (layout == '107') {
    function ImgZoom(obj) {
      var scale = $(obj).width() > 500 ? 1.02 : 1.10;
      var step = $(obj).width() > 500 ? 0.001 : 0.005;

      $(obj).attr('zoom-step', step);
      $(obj).parent().attr('zoom-overflow', $(obj).parent().css('overflow'));
      $(obj).parent().css({'overflow': 'hidden'});
      if ($(obj).parent().is('a')) $(obj).parent().css({'display': 'block'});
      $(obj).css({
        '-webkit-transform': 'scale(' + scale + ')',
        '-ms-transform': 'scale(' + scale + ')',
        '-moz-transform': 'scale(' + scale + ')',
        '-o-transform': 'scale(' + scale + ')',
        'transform': 'scale(' + scale + ')'
      });
    }

    function unImgZoom(obj) {
      var scale = 1;

      $(obj).css({
        '-webkit-transform': 'scale(' + scale + ')',
        '-ms-transform': 'scale(' + scale + ')',
        '-moz-transform': 'scale(' + scale + ')',
        '-o-transform': 'scale(' + scale + ')',
        'transform': 'scale(' + scale + ')'
      });
    }

    module.find('.image-animation').off('mouseover').on('mouseover', function () {
      ImgZoom(this, 'Zoom')
    })
    module.find('.image-animation').off('mouseout').on('mouseout', function () {
      unImgZoom(this, 'Zoom')
    })
  }
}
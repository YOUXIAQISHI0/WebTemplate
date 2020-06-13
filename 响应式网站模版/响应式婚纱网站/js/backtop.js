 function initModuleBackTopGiant(moduleId, layout) {
     $(function () {
         $('#module_' + moduleId).appendTo('body');

         $(window).off('scroll.backTop' + moduleId).on('scroll.backTop' + moduleId, function () {
             var bodyScrollTop = $('body').scrollTop();
             var module = $('#module_' + moduleId);
             if (bodyScrollTop == 0) bodyScrollTop = $(window).scrollTop();
             if (bodyScrollTop == 0) {
                 module.fadeOut();
             } else {
                //  module.removeClass('hidden').fadeIn();return;
                 if ((window.innerWidth >= 1200 && module.hasClass('mhidden-lg')) ||
                     (window.innerWidth < 1200 && window.innerWidth >= 992 && module.hasClass('mhidden-md')) ||
                     (window.innerWidth < 992 && window.innerWidth >= 768 && module.hasClass('mhidden-sm')) ||
                     (window.innerWidth < 768 && module.hasClass('mhidden-xs'))
                 ) {
                     module.addClass('hidden');
                 } else {
                     module.removeClass('hidden').fadeIn();
                 }
             }
         });

         $('#module_' + moduleId).off('click.backTop').on('click.backTop', function () {
             $('body,html').animate({
                 scrollTop: 0
             }, 1000);
             return false;
         });
     });
 }
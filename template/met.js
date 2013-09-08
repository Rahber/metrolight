var totalWidth = 0;
        totalWidth = $(window).width()-140;
		
		var max = (totalWidth/3)-40;
		if(totalWidth>750){

			$(".s-name").removeClass('met-lg-c').removeClass('met-no-f');
			$(".pmt").removeClass('hide');
			$(".pull-right").removeClass('hide');
			$(".met-row").width(max);
			$(".met-section").width(totalWidth);
			$(".mtt").width(totalWidth);
			$(".met-header").width(totalWidth).addClass('fixedf');
			$(".met-stats").width(totalWidth);
			$("#page-body").width(totalWidth);
			$(".forumbg").width(totalWidth);
			$(".met-row").css( "margin", "0 20px" );
			$(".postprofile").removeClass('hide');
			$("#page-footer").width(totalWidth);
			$(".topic-actions").removeClass('hide');
			$(".met-smod").removeClass('hide');
			$(".section-viewforum .display-options").removeClass('hide');
			$(".postbody").width('76%');
			$(".display-options").width(totalWidth);
			$(".section-viewtopic .lbl-hd").removeClass('hide');
			$("#login").width(500);
		
		} else if(totalWidth<750 && totalWidth>350){

			$(".mtt").width(totalWidth);
			$(".met-smod").addClass('hide');
			$(".s-name").addClass('met-lg-c').addClass('met-no-f');
			$(".pmt").addClass('hide');
			$(".pull-right").addClass('hide');
			$(".met-row").width(totalWidth); 
			$(".met-row").css( "margin", "0px" );
			$(".postbody").width('100%');
			$(".section-viewforum .display-options").addClass('hide');
			$(".postprofile").addClass('hide');
			$(".display-options").width(totalWidth);
			$(".met-section").width(totalWidth);
			$(".met-header").width(totalWidth).removeClass('fixedf');
			$(".met-stats").width(totalWidth);
			$("#page-body").width(totalWidth);
			$(".forumbg").width(totalWidth);
			$(".topic-actions").addClass('hide');
			$("#page-footer").width(totalWidth);
			$(".section-viewtopic .lbl-hd").addClass('hide');
			$("#login").width(500);
		}else{
        totalWidth = 350;
		
		$("#page-footer").width(totalWidth);
			$(".mtt").width(totalWidth);
			$(".section-viewforum .display-options").addClass('hide');
			$(".section-viewtopic .lbl-hd").addClass('hide');
			$(".met-smod").addClass('hide');
			$(".topic-actions").addClass('hide');
			$(".s-name").addClass('met-lg-c').addClass('met-no-f');
			$(".pmt").addClass('hide');
			$(".pull-right").addClass('hide');
			$(".met-row").width(totalWidth); 
			$(".met-row").css( "margin", "0px" );
			
			$(".postprofile").addClass('hide');
			$(".postbody").width('100%');
			$(".display-options").width(totalWidth);
			$(".met-section").width(totalWidth);
			$(".met-header").width(totalWidth).removeClass('fixedf');
			$(".met-stats").width(totalWidth);
			$("#page-body").width(totalWidth);
			$(".forumbg").width(totalWidth);
			$("#login").width('auto');

		}
		
		
		$(window).bind('resize', function() { 
		totalWidth = $(window).width()-140;
		var  max = (totalWidth/3)-40;
		//alert(max);
		if(totalWidth>750){
			$(".mtt").width(totalWidth);

			$("#page-footer").width(totalWidth);
			$(".display-options").width(totalWidth);
			$(".met-smod").removeClass('hide');
			$("#wrap").addClass('mtt');
			$(".pmt").removeClass('hide');
			$(".pull-right").removeClass('hide');
			$(".section-viewforum .display-options").removeClass('hide');
			$(".postprofile").removeClass('hide');
			$(".topic-actions").removeClass('hide');
			$(".met-row").width(max);
			$(".met-section").width(totalWidth);
			$(".met-header").width(totalWidth).addClass('fixedf');
			$(".met-stats").width(totalWidth);
			$("#page-body").width(totalWidth);
			$(".forumbg").width(totalWidth);
			$(".met-row").css( "margin", "0 20px" );
			$(".s-name").removeClass('met-lg-c').removeClass('met-no-f');	
			$(".section-viewtopic .lbl-hd").removeClass('hide');
			$(".postbody").width('76%');
			$("#login").width(500);
			
		}else if(totalWidth<750 && totalWidth>350){
		  
			$("#page-footer").width(totalWidth);
			$(".mtt").width(totalWidth);
			$(".section-viewforum .display-options").addClass('hide');
			$(".section-viewtopic .lbl-hd").addClass('hide');
			$(".met-smod").addClass('hide');
			$(".topic-actions").addClass('hide');
			$(".s-name").addClass('met-lg-c').addClass('met-no-f');
			$(".pmt").addClass('hide');
			$(".pull-right").addClass('hide');
			$(".met-row").width(totalWidth); 
			$(".met-row").css( "margin", "0px" );
			
			$(".postprofile").addClass('hide');
			$(".postbody").width('100%');
			$(".display-options").width(totalWidth);
			$(".met-section").width(totalWidth);
			$(".met-header").width(totalWidth).removeClass('fixedf');
			$(".met-stats").width(totalWidth);
			$("#page-body").width(totalWidth);
			$(".forumbg").width(totalWidth);
            $("#login").width(500);
		}else{
        totalWidth = 350;
		
		$("#page-footer").width(totalWidth);
			$(".mtt").width(totalWidth);
			$(".section-viewforum .display-options").addClass('hide');
			$(".section-viewtopic .lbl-hd").addClass('hide');
			$(".met-smod").addClass('hide');
			$(".topic-actions").addClass('hide');
			$(".s-name").addClass('met-lg-c').addClass('met-no-f');
			$(".pmt").addClass('hide');
			$(".pull-right").addClass('hide');
			$(".met-row").width(totalWidth); 
			$(".met-row").css( "margin", "0px" );
			$("#login").width('auto');
			$(".postprofile").addClass('hide');
			$(".postbody").width('100%');
			$(".display-options").width(totalWidth);
			$(".met-section").width(totalWidth);
			$(".met-header").width(totalWidth).removeClass('fixedf');
			$(".met-stats").width(totalWidth);
			$("#page-body").width(totalWidth);
			$(".forumbg").width(totalWidth);

		}

}		);
		
		
		
		$( document ).tooltip();
		
$(".glyph").click(function() {
	$('.met-charms').addClass('show');
});


$(".gb-arrow").click(function() {
	$('.met-charms').removeClass('show');
});


$(".metclk").click(function() {

	$(".met-u-m").toggleClass('show');
	$(this).toggleClass('icon-arrow-up');
	
});

$(".tps").click(function() {

	$(".met-u-m").toggleClass('show');
	$(".tps.icon-arrow-down").toggleClass('icon-arrow-up');
	
});

$(".clpse").click(function() {

	$(this).toggleClass('icon-arrow-up');
	
	 $(this).next(".met-cat-cat").toggle("hide");
	
  });
	
(function($) {
    var pluginName = 'Input',
        initAllSelector = '.input-control',
        paramKeys = [];

    $[pluginName] = function(element, options) {
        if (!element) {
            return $()[pluginName]({initAll: true});
        }

        var defaults = {
        };

        var plugin = this;
        plugin.settings = {};
        var $element = $(element);

        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);

            if ($element.hasClass('text')) {
                initTextInput();
            } else if ($element.hasClass('password')) {
                initPasswordInput();
            }
        };

        /**
         * initialize text input element behavior
         */
        var initTextInput = function () {
            var $helper,
                input;
            $helper = $element.children('.helper');

            if (!$helper.get(0)) {
                return;
            }

            $helper.attr('tabindex', '-1');
            $helper.attr('type', 'button');

            // clear text when click on helper
            $helper.on('click', function () {
                input = $element.children('input');
                if (input.prop('readonly')) {
                    return;
                }
                input.val('');
                input.focus();
            });
        };

        /**
         * initialize password input element behavior
         */
        var initPasswordInput = function () {
            var $helper,
                password,
                text;
            $helper = $element.children('.helper');
            if (!$helper.get(0)) {
                return;
            }

            text = $('<input type="text" class="with-helper shwp"  />');
            password = $element.children('input');
            $helper.attr('tabindex', '-1');
            $helper.attr('type', 'button');

            // insert text element and hode password element when push helper
            $helper.on('mousedown', function () {
                password.hide();
                text.insertAfter(password);
                text.val(password.val());
            });

            // return password and remove text element
            $helper.on('mouseup, mouseout', function () {
                text.detach();
                password.show();
                password.focus();
            });
        };

        plugin.init();

    };

    $.fn[pluginName] = function(options) {
        var elements = options && options.initAll ? $(initAllSelector) : this;
        return elements.each(function() {
            var that = $(this),
                params = {},
                plugin;
            if (undefined == that.data(pluginName)) {
                $.each(paramKeys, function(index, key){
                    params[key[0].toLowerCase() + key.slice(1)] = that.data('param' + key);
                });
                plugin = new $[pluginName](this, params);
                that.data(pluginName, plugin);
            }
        });
    };
    // autoinit
    $(function(){
        $()["Input"]({initAll: true});
    });

})(jQuery);



;(function($){
    function textarea_content() {
    	CKEDITOR.replace('ckeditor');
    }
    function wizard()	{
	    $(".tab-wizard").steps({
	        headerTag: "h6",
	        bodyTag: "section",
	        transitionEffect: "fade",
	        titleTemplate: '<span class="step">#index#</span> #title#',
	        labels: {
	            finish: "Submit"
	        },
	        onFinished: function(event, currentIndex) {
	            swal("Form Submitted!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat eleifend ex semper, lobortis purus sed.");

	        }
	    });
    }
    new textarea_content();
    new wizard();
}(jQuery));

//# sourceMappingURL=cms-contents.js.map

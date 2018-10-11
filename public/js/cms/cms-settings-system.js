;(function($){

	function RangerSlider() {

		var RegisterForPage = $('.register-for-page').attr('data-value');
		var PhotosForPage = $('.photos-for-page').attr('data-value');

		var one = $(".register-for-page").asRange({
			step: 1,
			range: false,
			min: 0,
			max: 30,			
			value: RegisterForPage,
			onChange: function(value) {
				$('#register_for_page').val(value);
			}
		});

		var one = $(".photos-for-page").asRange({
			step: 1,
			range: false,
			min: 0,
			max: 20,				
			value: PhotosForPage,
			onChange: function(value) {
				$('#photos_for_page').val(value);
			}
		});

	}
	
	new RangerSlider();

}(jQuery));
;(function($){

	function labelauty() {

		$(".to-labelauty").labelauty({
			 icon: false
		});
		$(".to-labelauty-icon").labelauty({
			label: false
		});

	}
	
	new labelauty();

}(jQuery));
//# sourceMappingURL=cms-settings-system.js.map

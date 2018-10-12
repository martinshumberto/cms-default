;(function($){

	function CheckBoxModules() {

		$('.ckt').click(function(){
			var str = $(this).attr('name').split('-');
			var id = str[0];

			if ($(this).prop("checked")) {
				$('[name="'+id+'"').prop('disabled', false);
			}else{
				$('[name="'+id+'"').prop('disabled', true);
			}
		});

		$(document).ready(function(){

			if ($('.ckt').prop("checked")) {
				var str = $(this).attr('name').split('-');
				var id = str[0];
				$('[name="'+id+'"').prop('disabled', false);
			}else{				
				var str = $(this).attr('name').split('-');
				var id = str[0];
				$('[name="'+id+'"').prop('disabled', true);
			}

		});
		$(function() {
			console.log( "ready!" );
		});
	}
	
	new CheckBoxModules();

}(jQuery)); 
//# sourceMappingURL=cms-modules-show.js.map

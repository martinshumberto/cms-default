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
	}
	
	new CheckBoxModules();

}(jQuery)); 
;(function($){

	function StatesCities(){	

		$('#state_select').change(function(){


			var code = $(this).val();
			if( code ) {

				$.ajax({
					url: $("#app_url").val() + "/api/states/"+ code,
					method: "POST",
					states_id: code,
					dataType: 'json',
					success: function(response){


						$('#cities_select').removeClass(' disabled ');
						
						var options = '<option value=""></option>';
						for (var i = 0; i < response.length; i++) {

							options += '<option value="' +
							response[i].cities_id + '">' +
							response[i].name + '</option>';
						}
						$('#cities_select').html(options);

					}
				});
			}

		});
	} 
	new StatesCities();	


}(jQuery));
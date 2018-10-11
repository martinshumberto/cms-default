;(function($){

    function Mask() {
        
        $('[name=phone]').mask('(00) 0000-0000');
        $('[name=cellphone]').mask('(00) 00000-0000');
        $("[name=zip_code]").mask("99999-999");
        $('[name=cpf]').mask('999.999.999-99');
        $("[name=cnpj]").mask("99.999.999/9999-99");
        $("[name=birthday]").mask("99/99/9999");
        $("[name=postal_code]").mask("99999-999");
        $('[data-money]').mask('000.000.000.000.000,00', {reverse: true});
        $('[data-integrate]').mask('0#');
        $('[data-percentage]').mask('##0.00', {reverse: true});
        $('[data-cref]').mask('999999-A/AA');
    }

    new Mask();

}(jQuery));
 
 
 
 

;(function($){

	function Select2() {

		$('.select2').select2({});
	}

	new Select2();

}(jQuery));
;(function($){

	function MaxLength() {

		$('input.maxlength-input').maxlength({

			alwaysShow: true,
			threshold: 10,
			warningClass: "badge badge-boxed badge-success",
			limitReachedClass: "badge badge-boxed badge-danger",

		});

		$('textarea.maxlength-textarea').maxlength({

			alwaysShow: true,
			threshold: 10,
			warningClass: "badge badge-boxed badge-success",
			limitReachedClass: "badge badge-boxed badge-danger",

		});

	}

	new MaxLength();

}(jQuery));
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
//# sourceMappingURL=cms-settings-site.js.map

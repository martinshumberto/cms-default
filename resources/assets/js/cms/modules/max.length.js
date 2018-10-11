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
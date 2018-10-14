;(function($){

	function Select2() {

		$('.select2').select2({});
	}

	new Select2();

}(jQuery));
;(function($){

	function StrengthPassword(){	

		$(".password-input").strength();
	} 
	new StrengthPassword();	


}(jQuery));
;(function($){

	function DataPicker() {
		$('.datepicker').datepicker({
			format: 'dd/mm/yyyy'
		});

	}
	
	new DataPicker();

}(jQuery)); 
 ;(function($){

 	function CheckBoxModules() {

 		$("#FileUpload").on("change", function(){
 			$('.cover').hide();
 			$('.btn-thumb').hide();
 			$('#PreviewPicture').show();
 			var files = !!this.files ? this.files : [];
 			if (!files.length || !window.FileReader) return;
 			if (/^image/.test( files[0].type)){ 
 				var ReaderObj = new FileReader(); 
 				ReaderObj.readAsDataURL(files[0]); 
 				ReaderObj.onloadend = function(){ 
 					$("#PreviewPicture").css("background-image", "url("+this.result+")");
 				}
 			}else{
 				alert("Upload an image");
 			}
 		});
 	}

 	new CheckBoxModules();

 }(jQuery)); 
//# sourceMappingURL=cms-users-show.js.map

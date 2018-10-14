;(function($){

	function Select2() {

		$('.select2').select2({});
	}

	new Select2();

}(jQuery));
;(function($){

	function Summernote() {
		$('#summernote').summernote({
			placeholder: 'Editor de Texto',
			tabsize: 2,
			height: 380
		});

	}
	
	new Summernote();

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

	function DataPicker() {

		$('.clockpicker').clockpicker({
			placement: 'top',
			align: 'left',
			donetext: 'Done'
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
//# sourceMappingURL=cms-contents-show.js.map

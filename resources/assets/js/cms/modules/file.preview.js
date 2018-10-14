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
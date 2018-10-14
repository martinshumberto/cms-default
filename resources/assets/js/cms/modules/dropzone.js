;(function($){

	function Dropzones() {

		$("div#myId").dropzone({ url: "/file/post" });
	}
	
	new Dropzones();

}(jQuery)); 

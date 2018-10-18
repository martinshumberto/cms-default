;(function($){
    function dropzone() {
       $(".dropzone").dropzone({ url: "/file/post" });
    }
    new dropzone();
}(jQuery));

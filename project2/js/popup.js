//************************ Templates ************************

// Button to open a modal
$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#button1').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#artwork-modal").toggleClass("visible");
        $(".fadeout").toggleClass("visible");
});

// Button to close a modal
$(document).ready(function (){
    $('#button1').click(function() {
        $("#artwork-modal").toggleClass("visible");
         $(".fadeout").toggleClass("visible");
});
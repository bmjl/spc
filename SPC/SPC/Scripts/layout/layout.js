$(function () {
    $(".title_ul").children().click(function () {
        $this = $(this);
        $this.parent().children("li").removeClass("active");
        $this .addClass("active");
    });


})
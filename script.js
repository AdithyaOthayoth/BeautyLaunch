const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
//Toggle menu visibility
menuOpenButton.addEventListener("click",()=>{
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click",()=>menuOpenButton.click());

$(document).ready(function() {

});

$(document).ready(function() {
    // Open modal
    $("#openModal").click(function() {
        $("#myModal").fadeIn();
    });

    // Close modal on 'X'
    $(".close").click(function() {
        $("#myModal").fadeOut();
    });

    // Close modal if background is clicked
    $(window).click(function(event) {
        if ($(event.target).is("#myModal")) {
            $("#myModal").fadeOut();
        }
    });
});

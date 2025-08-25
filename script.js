const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
//Toggle menu visibility
menuOpenButton.addEventListener("click",()=>{
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click",()=>menuOpenButton.click());

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

function sendToWhatsApp() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("services-dropdown");
    let selectedText = message.options[message.selectedIndex].text;
    if(!name || !phone || !selectedText){
        document.getElementById("errormessage").style.display = "block";
        return;
    }
    else{
        let url = "https://wa.me/447570323962?text="
        + "Name: " + name + "%0a"
        + "Phone: " + phone + "%0a"
        + "Message: " + selectedText;
        window.open(url, '_blank').focus();
    }
  }

function openDropDown() {
	$("#myDropdown").addClass("show").toggle();
}

/////////////////////////////////////

// mailto contact page

function sendMail()
{
    var fullName = $("#inputFullName").val();
    var message = $("#messageInput").val();
    var subject = $("#subjectOfMail").val();
    document.location.href = "mailto:test@yahoo.com?subject="+ encodeURIComponent(subject)+ "&body=" + encodeURIComponent(message) + encodeURIComponent(fullName);

    return false;
}


/////////////////////////////////////
// var oldOpenCategory;

function showProducts(categoryID){

    $( "*[id^='category']" ).hide();
    $("#category"+categoryID).show();

}

function openModal(productID) {
    $("#productModal"+productID).show();
}

function closeModal(productID) {
    $("#productModal"+productID).hide();
}
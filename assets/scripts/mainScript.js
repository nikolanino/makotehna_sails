function openDropDown() {
	$("#myDropdown").addClass("show").toggle();
}

/////////////////////////////////////

// mailto contact page

function sendMail()
{
    var email = $("#emailInput").val();
    var subject = $("#subjectInput").val();
    var message = $("#messageInput").val();
    if(email == "" || subject == "" || message == ""){
        $('#modalText').html('<strong>Упс.</strong> Сите полиња во формата не се пополнети.');
        $('#errorModal').css('background', 'red');
            $('#errorModal').show('slow');
            setTimeout(function () {
                $('#errorModal').hide('slow'); 
            }, 3000);
            return false;
    }else{
        $.ajax({
            url: '/contact/sendmail', 
            type : "POST", 
            dataType : 'json', 
            data : {
                emailFrom: $('#emailInput').val(),
                subject: $('#subjectInput').val(),
                message: $('#messageInput').val()
            }
        }).done(function(data){   
            $('#modalText').html('<strong>Ви Благодариме.</strong> Пораката е успешно пратена.');  
            $('#errorModal').css('background', 'green');  
            $('#errorModal').show('slow');
            setTimeout(function () {
                $('#errorModal').hide('slow'); 
            }, 3000);
            $("#emailInput").val(' ');
            $("#subjectInput").val(' ');
            $("#messageInput").val(' ');
        })
        
    }
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
function openDropDown() {
	document.getElementById("myDropdown").classList.toggle("show");
}

    window.onload = function(){
        var lang = sessionStorage.getItem("lang");
        $('html').attr('lang', lang);

        if(lang == 'en'){
            $('#enLang').hide();
            $('#mkLang').show();
            if(window.location.pathname != "/"){
                $('#enLang2').hide();
                $('#mkLang2').show();
            }
            $('.enCat').show();
            $('.mkCat').hide();
        }else{
            $('#mkLang').hide();
            $('#enLang').show();
            if(window.location.pathname != "/"){
                $('#mkLang2').hide();
                $('#enLang2').show();
            }
            $('.enCat').hide();
            $('.mkCat').show();
        }
    };


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
            if(sessionStorage.getItem('lang') == 'us'){
                $('#modalText').html('<strong>Ooops.</strong> All fields are required.');
            }else{
                $('#modalText').html('<strong>Упс.</strong> Сите полиња во формата не се пополнети.');
            }
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
            if(sessionStorage.getItem('lang') == 'us'){ 
                $('#modalText').html('<strong>Thanks.</strong> Your message is sent and you will get an answer soon.'); 
            }else{
                $('#modalText').html('<strong>Ви Благодариме.</strong> Пораката е успешно пратена.');
            } 
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
        //document.getElementById("footerBox").style.position = "inherit";
        $('#footerBox').css('position', 'inherit');
        $('#btnCategory' + categoryID).css('border-bottom-left-radius', '0px');
        $('#btnCategory' + categoryID).css('border-bottom-right-radius', '0px');
        $('#ctgPanel' + categoryID).css('border-bottom-right-radius', '6px');
        $('#ctgPanel' + categoryID).css('border-bottom-left-radius', '6px');

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

    //Index image background dynamic change
    setTimeout(alertFunc, 3000);
    var niza=[
        'url("images/pozadina-slika.jpeg")',
        'url("images/pozadina-slika1.jpeg")',
        'url("images/pozadina-slika2.jpeg")'
    ]; 
    var i = 0;
    function alertFunc() {
        i++;
        if(i == 3){
            i=0;
        }
        $('#bck-image').css('background-image', niza[i]);
        setTimeout(alertFunc, 3000);
    } 

//////////////////////////////////

    function callLocale(lang) {
            
        if(lang == 'en'){
            $('html').attr('lang', 'en');
            $('#enLang').hide();
            $('#mkLang').show();
            sessionStorage.setItem("lang", "en");
            if(window.location.pathname != "/"){
                $('#enLang2').hide();
                $('#mkLang2').show();
            }
            $('.enCat').show();
            $('.mkCat').hide();
        } else if(lang == 'mk'){
            $('html').attr('lang', 'mk');
            $('#mkLang').hide();
            $('#enLang').show();
            sessionStorage.setItem("lang", "mk");
            if(window.location.pathname != "/"){
                $('#mkLang2').hide();
                $('#enLang2').show();
            }
            $('.enCat').hide();
            $('.mkCat').show();
        }
    }

/////////////////////////////////////

function openCategory(idCategory){
    window.location.href = "/category/show/"+idCategory;
}

////////////////////////////////////




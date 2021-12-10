function openDropDown() {
	document.getElementById("myDropdown").classList.toggle("show");
}

/////////////////////////////////////

// mailto contact page

function sendMail()
{
	var fullName = document.getElementById("inputFullName").value;
    var message = document.getElementById("messageInput").value;
    var subject = document.getElementById("subjectOfMail").value;
    document.location.href = "mailto:test@yahoo.com?subject="+ encodeURIComponent(subject)+ "&body=" + encodeURIComponent(message) + encodeURIComponent(fullName);

    return false;
}

document.getElementById("dashboardButton").onclick = function() { hideShow("dashboard"); };
document.getElementById("categoriesButton").onclick = function() { hideShow("categories"); };
document.getElementById("productsButton").onclick = function() { hideShow("products"); };

/////////////////////////////

function hideShow(type) {

	if(type == "categories"){
		document.getElementById("dashboardCounts").style.display = "none";
		document.getElementById("products").style.display = "none";
		document.getElementById("categories").style.display = "block";
		document.getElementById("categoriesButton").classList.add("active");
		document.getElementById("dashboardButton").classList.remove("active");
		document.getElementById("productsButton").classList.remove("active");
	}

	if(type == "products"){
		document.getElementById("dashboardCounts").style.display = "none";
		document.getElementById("products").style.display = "block";
		document.getElementById("categories").style.display = "none";
		document.getElementById("productsButton").classList.add("active");
		document.getElementById("categoriesButton").classList.remove("active");
		document.getElementById("dashboardButton").classList.remove("active");
	}

	if(type == "dashboard"){
		document.getElementById("dashboardCounts").style.display = "block";
		document.getElementById("products").style.display = "none";
		document.getElementById("categories").style.display = "none";
		document.getElementById("dashboardButton").classList.add("active");
		document.getElementById("categoriesButton").classList.remove("active");
		document.getElementById("productsButton").classList.remove("active");
	}
}

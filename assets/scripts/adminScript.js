
document.getElementById("dashboardButton").onclick = function() { hideShow("dashboard"); };
document.getElementById("categoriesButton").onclick = function() { hideShow("categories"); };
document.getElementById("productsButton").onclick = function() { hideShow("products"); };

function required()
{
	$('#overlay').show();
}

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

/////////////////////////////
function openEditForm(id) {
	var idProduct = '"'+id+'"';
	$.ajax({

		url: '/get/infoProduct/'+id,
		type : "POST",
		dataType : 'json',
		data: { id: id },

	}).done(function(data) {  
		// console.log(data.data)
		$('#editForm').attr('id', 'editForm' + id);
		$('#formTag').attr('onsubmit', 'editProduct('+idProduct+'); return false;');
		$('#editForm' + id).show();
		$('#productName').val(data.data.productName);
		$('#productCode').val(data.data.productCode);
		$('#productCategory').val(data.data.productCategory);
		$('#productDescription').val(data.data.productDescription);
		
	});
}

function editProduct(id)
{
	var imageIDProduct;
	if($('#productImageIDEdit').val() != ""){
		imageIDProduct = $('#productImageIDEdit')[0].files[0];

		// imageIDProduct = $('#productImageIDEdit').prop('files');
		console.log("NOVA: ",imageIDProduct);
	}else{
		imageIDProduct = "current";
		// imageIDProduct = $('#tableImageID').val();
		// console.log("SEGASHNA: ",imageIDProduct);
	}
	$.ajax({

		url: '/update/product/'+id,
		type : "POST",
		dataType : 'json',
		data: { 
			productName: $('#productName').val(),
			productCode: $('#productCode').val(),
			productCategory: $('#productCategory').val(),
			productDescription: $('#productDescription').val(),
			productImageID: imageIDProduct,
		},

	}).done(function(data) {  
		// console.log(data.data)
		$('#editForm' + id).hide();
		$('#editForm' + id).attr('id', 'editForm');
		$('#formTag').attr('onsubmit', 'editProduct()');

		$('#tablePN' + id).text($('#productName').val());
		$('#tablePCategory' + id).text($('#productCategory').val());
		
	});

	return false;
}



// function edit(id, productName, productCode, productCategory, productDeskription,  productImageID){
	
// }

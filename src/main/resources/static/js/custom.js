function validateForm() {
	var letters = /^[a-zA-Z]+$/;
	var name = document.getElementById("name");
	var orginal_price = document.getElementById('orginal_price');
	var selling_price = document.getElementById('selling_price');
	if (name.value.trim() == "" || selling_price.value.trim() == "" || orginal_price.value.trim() == "") {
		document.getElementById("demo1").innerHTML="No blank fields allowed";
		return false;
	}

	if (orginal_price.value.match(letters)) {
		document.getElementById("demo2").innerHTML = "Invalid Orginal price";
		return false;
	}


	if (selling_price.value.match(letters)) {
		document.getElementById("demo3").innerHTML = "Invalid Selling price";
		return false;
	}

	else {
		return true;
	}
}









//for delete modal
$(document).ready(function () {
	$('.btnDelete').click(function (event) {
		event.preventDefault();
        $('#btnDeleteConfirm').attr("href",$(this).attr("href"));
		$("#deleteModal").modal();

});  
});


							 
////////adding product to modal for edit
				 
$(document).ready(function(){
	$('.btnEdit').click(function (event){
		event.preventDefault();
		var href=$(this).attr('href');
        $.get(href,function(product) {
			console.log(product);
			$('#id').val(product.id);
			$('#name').val(product.name);
			$('#orginal_price').val(product.orginal_price);
			$('#selling_price').val(product.selling_price);
		});
	   $('#editModal').modal();
					$('#btnSave').click(function () {

//getting values from the text field and combining it to one product
						var product = {
							id: $('#id').val(),
							name: $('#name').val(),
							orginal_price: $('#orginal_price').val(),
							selling_price: $('#selling_price').val(),
						};
						var jsonProduct = JSON.stringify(product);  //converting strings product to JSON
						console.log(jsonProduct);
						if (validateForm() == true) {
							$.ajax({
								type: 'PUT',
								url: 'products',
								contentType: 'application/json',
								data: jsonProduct,
								success: function () {
									document.getElementById('demo4').innerHTML = "SUCCESS";
								}
							});
							$(document).ajaxError(function () {
								document.getElementById('demo4').innerHTML = "Product name already exist";
							});

								

						}
						else (console.log("husle"))
						$("#demo4").fadeOut(3000);
					 
					});
		$('#btnClose').click(function (event) {
			window.location.replace("product");
		});
    	});
});

///////////////Adding product to database from modal

 $(document).ready(function () {
		$('.btnAdd').click(function () {
			
		 $('#btnSave').click(function () {

			 var product = {
				 name: $('#name').val(),
				 orginal_price: $('#orginal_price').val(),
				 selling_price: $('#selling_price').val(),
			 };
		    var jsonProduct = JSON.stringify(product);
			console.log(jsonProduct); 
			if(validateForm()==true){

				$.ajax({
					type:'POST',
					url:'products',
					contentType: 'application/json',
					data:jsonProduct,
					cache:false,
					success:function () {
						document.getElementById('demo4').innerHTML = "SUCCESS";
					}
					
					
				});
				$(document).ajaxError(function () {
					document.getElementById('demo4').innerHTML="Product name already exist";
				});

			}
			else(console.log("again brother"))
			

		});
			$('#btnClose').click(function (event) {
				window.location.replace("product");
			});
	
    });
		
 });

///////////////add to cart
$(document).ready(function () {
	$('.btnAddCart').click(function (event) {
		event.preventDefault();
		var href = $(this).attr('href');
		$.get(href, function (product) {
			console.log(product);
			$('#productname').val(product.name);
			$('#selling_price').val(product.selling_price);

			 $('#submit').click(function(event){
	 

      sales={
           customername:$('#customername').val(),
           vehicle:$('#vehicle').val(),
           productname:$('#productname').val(),
           quantity:parseInt($('#quantity').val()),
           total:parseInt($('#total').val())
         };


      var jsonSales=JSON.stringify(sales);
	  console.log(jsonSales);
	  
	  if(CheckoutValidate()==true){
		 $.ajax({
            type:'POST',
            url:'sales',
            contentType:'application/json',
			data:jsonSales,
			cache:false,
          success: function () {
			  window.location.replace("home");
			}
			
		});
	  }
	  else( console.log("failed"));
       
	 
	});
		});




		


});	
});	

////////////Auto calculating price

$(document).ready(function () {
	var total_amount = function () {

		var sum = 0;

		$('#quantity').each(function () {
			var num2 = $(this).val();
			var num1 = $('#selling_price').val();
			if (num1 !== 0 || num2 !== 0){

				sum = parseFloat(num1 * num2);

			}
		});
		$('#total').val(sum);
	}
	$('#quantity').keyup(function () {
		total_amount();
	});

});





function CheckoutValidate() {
	var letters = /^[a-zA-Z]+$/;
	if (customername.value.trim() == "" || productname.value.trim() == "" || quantity.value.trim() == "") {
		return false;
	}

		// 
	

  if (quantity.value.match(letters)) {
		
		return false;
	}
	else{
		return true;
	}
}

//from cart to database
$(document).ready(function(){	
  

});

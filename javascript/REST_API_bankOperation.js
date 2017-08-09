$(document).ready(function() {
	    $.ajax({
	    	type: "GET",
	    	dataType: "json",
	    	url: "http://localhost:8080/sgp/api/collaborateurs/",
	    }).then(function(data) {
	    	
	    	for (var i = 0; i < data.length; i++) {
	    		
	    		var tagTDAction = document.createElement("td");
				var inputValue = document.createElement("input");
				inputValue.setAttribute('type',"submit");
				inputValue.setAttribute('value',"Choisir");
				inputValue.setAttribute('class',"btn btn-info btn-sm");
				inputValue.setAttribute('id',data[i].matricule);
				tagTDAction.appendChild(inputValue);
	    		
	    		
	    		
				var tagTR = document.createElement("tr");
				
				var textNodeNom = document.createTextNode(data[i].nom);
				var tagTDNom = document.createElement("td");
				tagTDNom.appendChild(textNodeNom);
		
				
				var textNodePrenom = document.createTextNode(data[i].prenom);
				var tagTDPrenom = document.createElement("td");
				tagTDPrenom.appendChild(textNodePrenom);
				var tagTDMatricule = document.createElement("td");
				var textNodeMatricule = document.createTextNode(data[i].matricule);
				tagTDMatricule.appendChild(textNodeMatricule);
				
				var textNodeId = document.createTextNode(i+1);
				var tagTDId = document.createElement("td");
				tagTDId.appendChild(textNodeId);
				
				
				tagTR.appendChild(tagTDId);
				tagTR.appendChild(tagTDNom);
				tagTR.appendChild(tagTDPrenom);
				tagTR.appendChild(tagTDMatricule);
				tagTR.appendChild(tagTDAction);
				
				document.getElementById('placeInfos').appendChild(tagTR);
				
				
				$(inputValue).click(function(){
					 var matriculeChoisi = $(this).attr("id");
					 
					 $.get("http://localhost:8080/sgp/api/collaborateurs/"+matriculeChoisi+"/banque",function(data, status ){
						 document.getElementById("inputBanque").value = data.banque;
						 document.getElementById("inputBic").value = data.bic;
						 document.getElementById("inputIban").value = data.iban;
						 document.getElementById("editButton").value = matriculeChoisi;
					 });
				})
				
				
			};
	    	
	    });
	    
	    
	
	});


$(document).ready(function() {
	$("#editButton").click(function() {
		var banque = $("#inputBanque").val();
		var bic = $("#inputBic").val();
		var iban = $("#inputIban").val();
		var matricule = $("#editButton").val();
		var collaborateur = {'banque':banque, 'bic':bic, 'iban': iban };
			$.ajax({
				url : "http://localhost:8080/sgp/api/collaborateurs/'"+matricule+"'/banque/ ",
				data : collaborateur,
				type : "POST",
				dataType : "JSON",
				success : function(response) {
					alert(response.status);
				},
				error : function() {
					alert("error");
				},
			});

		});		

});	

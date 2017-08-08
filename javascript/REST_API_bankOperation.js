function getAllCollabs() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:8080/sgp/api/collaborateurs/", true);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	
    	res = JSON.parse(this.responseText);
    	var i =1;
    	var tableData = '<h2>List Collaborateur</h2>';
    	tableData += '<table class="table table-striped"><tr><th>Id</th><th>Nom</th><th>Prenom</th><th>Email</th><th>Matricule</th><th>Action</th></tr>';
    	
    	$.each(res, function(index, data) {
    	 tableData += '<tr><td>'+i++ +'</td><td>'+data.nom+'</td><td>'+data.prenom+'</td><td>'+data.emailPro+'</td><td>'+data.matricule+'</td><td><a href="#">Choisir</a></td></tr>';
    	
    	});

    	$('#myTable').html(tableData);
    }
  };
 
  xhttp.send();
}


function getBankInfos() {
	  var xhttp = new XMLHttpRequest();
	  xhttp.open("GET", "http://localhost:8080/sgp/api/collaborateurs/", true);
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	
	    	res = JSON.parse(this.responseText);
	    	var i =1;
	    	var tableData = '<h2>List Collaborateur</h2>';
	    	tableData += '<table class="table table-striped"><tr><th>Id</th><th>Nom</th><th>Prenom</th><th>Email</th><th>Matricule</th><th>Action</th></tr>';
	    	
	    	$.each(res, function(index, data) {
	    	 tableData += '<tr><td>'+i++ +'</td><td>'+data.nom+'</td><td>'+data.prenom+'</td><td>'+data.emailPro+'</td><td>'+data.matricule+'</td><td><a href="#">Choisir</a></td></tr>';
	    	
	    	});

	    	$('#myTable').html(tableData);
	    }
	  };
	 
	  xhttp.send();
	}
		var xmlhttp = new XMLHttpRequest();
		var blogurl = "projectsdata.json";

		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				myFunctionProjects(this.responseText);
			}
		}
		xmlhttp.open("GET", blogurl, true);
		xmlhttp.send();

		function myFunctionProjects(response) {
			var arr = JSON.parse(response);
			var i;
			var out = "";
			for (i = 0; i < arr.length; i++) {

				out += "<div class=\"card horizontal\"><div class=\"card-stacked\"><div class=\"card-content\">"+
				"<div><h5 class=\"header\">"+ arr[i].ProjectTitle+ "</h5><br>"+
				"<h6><b> Tools Used : </b>"+ arr[i].SoftwareToolsTechnology+ "</h6><br>"+
				"<h6><b> Problem : </b>"+ arr[i].Problem+ "</h6><br>"+
				"<b>Description</b><br>"+
						 decodeURI(arr[i].ProjectDescription)+"<br>"+
						 "<i>Organization : "+arr[i].Organization+"</i>"+
						 "</div></div></div></div>";
			}
			document.getElementById("projectblock").innerHTML = out;
		}

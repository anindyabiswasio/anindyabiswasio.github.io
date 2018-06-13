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

				out += "<div><h5 class=\"header\">"
						+ arr[i].ProjectTitle
						+ "</h5><h6>"
						+ arr[i].SoftwareToolsTechnology
						+ "</h6><div class=\"card horizontal\"><div class=\"card-stacked\"><div class=\"card-content\">"
						+ decodeURI(arr[i].ProjectDescription)
						+ "</div></div></div></div>";
			}
			document.getElementById("projectblock").innerHTML = out;
		}

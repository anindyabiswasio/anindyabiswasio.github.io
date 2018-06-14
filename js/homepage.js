		var quoteurlhttp = new XMLHttpRequest();
		var blogurlhttp = new XMLHttpRequest();
		var projectsurlhttp = new XMLHttpRequest();

		var quoteurl = "quotedata.json";
		var projecturl = "projectsdata.json";
  	var blogurl = "blogdata.json";

		quoteurlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				myFunctionQuotesOne(this.responseText);
			}
		}
		quoteurlhttp.open("GET", quoteurl, true);
		quoteurlhttp.send();

		blogurlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				myFunctionBlogsOne(this.responseText);
			}
		}
		blogurlhttp.open("GET", blogurl, true);
		blogurlhttp.send();

		projectsurlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				myFunctionProjectsOne(this.responseText);
			}
		}
		projectsurlhttp.open("GET", projecturl, true);
		projectsurlhttp.send();

		/**
		 * Returns a random integer between min (inclusive) and max (inclusive)
		 * Using Math.round() will give you a non-uniform distribution!
		 */
		function getRandomInt(min, max) {
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		function myFunctionQuotesOne(response) {
			var arr = JSON.parse(response);
			var out = "";
			var rand = getRandomInt(0,arr.length)
			out += "<p class=\"light\">"+arr[rand].quote+"<br><b>"+arr[rand].author+"</b></p>";
			document.getElementById("quoteblock").innerHTML = out;
		}

		function myFunctionProjectsOne(response) {
			var arr = JSON.parse(response);
			var out = "";
			var ProjectTitle = arr[0].ProjectTitle;
			var ProjectDescription = arr[0].ProjectDescription;
			out += "<p class=\"light\"><b>"+arr[0].ProjectTitle+"</b><br>"+ProjectDescription.substring(0, 400)+"</p>...</p>";
			document.getElementById("projectsblock").innerHTML = out;
		}

		function myFunctionBlogsOne(response) {
			var arr = JSON.parse(response);
			var out = "";
			out += "<p class=\"light\">"+arr[0].quote+"<br><b>"+arr[0].author+"</b></p>";
			document.getElementById("blogblock").innerHTML = out;
		}

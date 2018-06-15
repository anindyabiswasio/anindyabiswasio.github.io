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
			ProjectDescription = ProjectDescription.replace("<p>","");
			ProjectDescription = ProjectDescription.replace("</p>","");
			out += "<p class=\"light\"><h6>"+arr[0].ProjectTitle+"</h6><br>"+ProjectDescription.substring(0, 400)+"...</p>"+
			"<a href=project.html#"+ arr[0].anchor+">More...</a>";
			document.getElementById("projectsblock").innerHTML = out;
		}

		function myFunctionBlogsOne(response) {
			var arr = JSON.parse(response);
			var out = "";
			var BlogEncoded = arr[0].BlogEncoded;
			ProjectDescription = BlogEncoded.replace("<p>","");
			ProjectDescription = BlogEncoded.replace("</p>","");
			out += "<p class=\"light\"><h6>"+arr[0].Title+"</h6><br>"+BlogEncoded.substring(0, 400)+"...</p>"+
			"<a href=blog.html#"+ arr[0].anchor+">More...</a>";
			document.getElementById("blogblock").innerHTML = out;
		}

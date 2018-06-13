		var xmlhttp = new XMLHttpRequest();
		var blogurl = "blogdata.json";

		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				myFunctionBlog(this.responseText);
			}
		}
		xmlhttp.open("GET", blogurl, true);
		xmlhttp.send();

		function myFunctionBlog(response) {
			var arr = JSON.parse(response);
			var i;
			var out = "";
			for (i = 0; i < arr.length; i++) {

				out += "<div><h5 class=\"header\">"
						+ arr[i].Title
						+ "</h5><h6>"
						+ arr[i].Date
						+ "</h6><div class=\"card horizontal\"><div class=\"card-stacked\"><div class=\"card-content\">"
						+ decodeURI(arr[i].BlogEncoded)
						+ "</div></div></div></div>";
			}
			document.getElementById("blogblock").innerHTML = out;
		}

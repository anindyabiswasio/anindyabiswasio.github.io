		var xmlhttp = new XMLHttpRequest();
		var blogurl = "quotedata.json";

		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				myFunctionQuotes(this.responseText);
			}
		}
		xmlhttp.open("GET", blogurl, true);
		xmlhttp.send();

		/**
		 * Returns a random integer between min (inclusive) and max (inclusive)
		 * Using Math.round() will give you a non-uniform distribution!
		 */
		function getRandomInt(min, max) {
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		function myFunctionQuotes(response) {
			var arr = JSON.parse(response);
			var out = "";
			var rand = getRandomInt(0,arr.length)
			out += "<p class="light">"+arr[rand].quote+"<br><b>"+arr[rand].author+"</b></p>";
			document.getElementById("quoteblock").innerHTML = out;
		}

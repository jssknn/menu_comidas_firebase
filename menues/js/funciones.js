var filtro = "h3";

	function search() {
		var input, filter, ul, li, a, i, txtValue,b;
		input = document.getElementById("myInput");
		filter = input.value.toUpperCase();
		ul = document.getElementById("fila");
		li = ul.getElementsByTagName(filtro);
		for (i = 0; i < li.length; i++) {
			a = li[i];
			txtValue = a.textContent || a.innerText;
			b = ul.getElementsByClassName("col-lg-4 col-md-6 mb-4 text-center")[i];
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				b.style.display = "";
			} else {
				b.style.display = "none";
			}
		}
	}
	
	function clickfood() {
		filtro = "h3",
		$("#food").css("background-color", "#009975"),
		$("#store").css("background-color", "#2e8b57"),
		$("#myInput").attr("placeholder", "Comida...");
		$("#myInput").focus();
	}
	function clickstore() {
		filtro = "p",
		$("#food").css("background-color", "#2e8b57"),
		$("#store").css("background-color", "#009975"),
		$("#myInput").attr("placeholder", "Comercio...");
		$("#myInput").focus();
	}
	function disp(k) {
		if (k.style.display === "none") {
			k.style.display = "block";
		} else {
			k.style.display = "none";
		}
	}

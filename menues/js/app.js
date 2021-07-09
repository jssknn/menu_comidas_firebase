(function() {
  // Set the configuration for your app
	var firebaseConfig = {
	apiKey: "",
	authDomain: "",
	databaseURL: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: "",
	appId: "",
	measurementId: ""
	};
	
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
	firebase.analytics();
  		var d = new Date();
		var day = d.getDay();
		var hora = d.getHours();
		var shift = ""	;
	
	var ref = firebase.database().ref();
	ref.once("value", function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			var key = childSnapshot.key;
			var childData = childSnapshot.val();
			var userName = childData.userFullName;
			var userHour = childData.userHour;
			var userAddress = childData.userAddress;
			var userLink = childData.userFb;
			var userObs = childData.userObs;
			var userPhone = childData.userPhone;
			var userPrice = childData.userPrice;
			var userWp = childData.userWp;
			var userEnabled = childData.userEnabled;
			var userFood;
			var userShift;
			var fin = false;
			switch (day) {
			case 1:
				userFood = childData.userDay1;
				userShift = childData.userShift1;
				break;
			case 2:
				userFood = childData.userDay2;
				userShift = childData.userShift2;
				break;
			case 3:
				userFood = childData.userDay3;
				userShift = childData.userShift3;
				break;
			case 4:
				userFood = childData.userDay4;
				userShift = childData.userShift4;
				break;
			case 5:
				userFood = childData.userDay5;
				userShift = childData.userShift5;
				break;	
			case 6:
				userFood = childData.userDay6;
				userShift = childData.userShift6;
				break;
			case 0:
				userFood = childData.userDay0;
				userShift = childData.userShift0;
				break;	
			}

		if(hora > 14){
			shift = 'MEDIODÍA'
		}	
		if(userShift != "CERRADO" && userFood != "" && userEnabled){
		var div = document.createElement('div');
		div.className = 'col-lg-4 col-md-6 mb-4 text-center';
		
		var divcard = document.createElement('div');
		divcard.className = 'card h-100';
		
		var titulo = document.createElement('p');
		titulo.className = 'card-header ';
		titulo.style = 'font-family:Work Sans;font-size:20px;color:#417F67; background-color: #f0f1f5; font-weight:600';
		titulo.innerHTML = userName;
		
		var divcardbody = document.createElement('div');
		divcardbody.className = 'card-body ';
		divcardbody.style = 'background-color: #f0f1f5';
		var food = document.createElement('h3');
		food.className = 'card-text';
		food.style = 'font-family: "Noto Serif"'
		food.innerHTML = userFood;
		
		if (userShift == 'FINALIZADO' || shift == userShift ){
		food.style = 'text-decoration: line-through';
		divcardbody.style = 'background-color: #cccccc';
		food.className = 'card-text ; text-muted';
		//finalizados++ ;
		//fin = true;
		}
		var divbodyweek = document.createElement('div');
		divbodyweek.className = 'card-body text-left';
		divbodyweek.style = 'background-color: #f0f1f5;display:none';

		var lun = document.createElement('a');
		lun.innerHTML = '-LUN: <b>'+childData.userDay1+'<b><br>';;
		lun.style = 'font-size:16px;';

		var mar = document.createElement('a');
		mar.innerHTML = '-MAR: <b>'+childData.userDay2+'<b><br>';;
		mar.style = 'font-size:16px;';
		
		var mie = document.createElement('a');
		mie.innerHTML = '-MIÉ: <b>'+childData.userDay3+'<b><br>';;
		mie.style = 'font-size:16px;';

		var jue = document.createElement('a');
		jue.innerHTML = '-JUE: <b>'+childData.userDay4+'<b><br>';
		jue.style = 'font-size:16px;';

		var vie = document.createElement('a');
		vie.innerHTML = '-VIE: <b>'+childData.userDay5+'<b><br>';
		vie.style = 'font-size:16px;';
		
		var sab = document.createElement('a');
		sab.innerHTML = '-SÁB: <b>'+childData.userDay6+'<b><br>';
		sab.style = 'font-size:16px;';	
		
		var dom = document.createElement('a');
		dom.innerHTML = '-DOM: <b>'+childData.userDay0+'<b><br>';
		dom.style = 'font-size:16px;';
		
		divbodyweek.appendChild(lun);
		divbodyweek.appendChild(mar);
		divbodyweek.appendChild(mie);
		divbodyweek.appendChild(jue);
		divbodyweek.appendChild(vie);
		divbodyweek.appendChild(sab);
		divbodyweek.appendChild(dom);

		var price = document.createElement('h4');
		price.className = 'card-text';
		price.style = 'font-weight:600;color:#C38E4C;font-size:20px'
		price.innerHTML = userPrice;
		
		var obs = document.createElement('h6');
		obs.className = 'card-text text-dark';
		obs.innerHTML = userObs; 
		
		var shift = document.createElement('h6');
		shift.className = 'card-text ';
		shift.style = 'font-weight:600; color:#417F67';
		shift.innerHTML = userShift;
		
		divcardbody.appendChild(food);
		divcardbody.appendChild(price);
		divcardbody.appendChild(shift);
		divcardbody.appendChild(obs);
		
		var divcardfooter = document.createElement('div');
		divcardfooter.className = 'card-footer';
		divcardfooter.style = 'background-color: #f0f1f5';
		
		var divrow = document.createElement('div');
		divrow.className = 'row justify-content-center';
		
		var divcol = document.createElement('div');
		divcol.className = 'col-3';
		var phone = document.createElement('a');
		phone.href = 'tel:'+userPhone;
		phone.target = '_blank';
		var iconphone = document.createElement('i');
		iconphone.className = 'fa fa-phone fa-2x text-primary';
		phone.append(iconphone);
		divcol.appendChild(phone);
		
		var divcol2 = document.createElement('div');
		divcol2.className = 'col-3';
		var whatsapp = document.createElement('a');
		whatsapp.href = 'https://api.whatsapp.com/send?phone=+54'+userWp;
		whatsapp.target = '_blank';
		var iconwp = document.createElement('i');
		iconwp.className = 'fab fa-whatsapp fa-2x text-success';
		whatsapp.append(iconwp);
		divcol2.appendChild(whatsapp);
		
		var divcol3 = document.createElement('div');
		divcol3.className = 'col-3';
		var hlink = document.createElement('a');
		hlink.href = 'https://'+userLink;
		hlink.target = '_blank';
		var iconlink = document.createElement('i');
		iconlink.className = 'fa fa-link  fa-2x text-secondary';
		//iconlink.style =  'color:#5f6579';
		hlink.append(iconlink);
		divcol3.appendChild(hlink);
		
		var divcol4 = document.createElement('div');
		divcol4.className = 'col-3';
		var iconcale = document.createElement('i');
		iconcale.className = 'fa fa-calendar-alt  fa-2x';
		iconcale.style =  'color:#7f3a60';
		var iconfood = document.createElement('i');
		iconfood.className = 'fa fa-calendar-times  fa-2x';
		iconfood.style =  'color:#7f3a60;display:none';
		divcol4.appendChild(iconcale);
		divcol4.appendChild(iconfood);
		divcol4.onclick = function mostrarDorso() { disp(this.parentNode.parentNode.previousSibling); disp(this.parentNode.parentNode.previousSibling.previousSibling),disp(this.children[0]);disp(this.children[1])};
		
		
		var hour = document.createElement('a');
		hour.className = 'card-text text-dark';
		hour.text = ' '+userHour;
		hour.style = 'font-size:12px; font-weight:600';
		var iconclock = document.createElement('i');
		iconclock.className = 'fa fa-clock text-info';
		hour.prepend(iconclock);
		
		var address = document.createElement('a');
		address.className = 'card-text text-dark';
		address.href = 'https://maps.google.com/?q='+userAddress+',venado tuerto';
		address.target = '_blank';
		address.text = ' '+userAddress;
		address.style = 'font-size:12px; font-weight:600';
		var iconaddress = document.createElement('i');
		iconaddress.className = 'fa fa-map-marker-alt text-danger';
		address.prepend(iconaddress);
		
		divrow.appendChild(divcol);
		divrow.appendChild(divcol2);
		divrow.appendChild(divcol3);
		divrow.appendChild(divcol4)
		
		divcardfooter.appendChild(divrow);
		divcardfooter.appendChild(hour);
		var br = document.createElement("br");
		divcardfooter.appendChild(br);
		divcardfooter.appendChild(address);
		
		divcard.appendChild(titulo);
		divcard.appendChild(divcardbody);
		divcard.appendChild(divbodyweek);
		divcard.appendChild(divcardfooter);
		
		div.appendChild(divcard);
		var max = document.getElementById("fila").childElementCount;
		var random = Math.floor(Math.random() * (max+1) );
		var list = document.getElementById("fila");
		list.insertBefore(div, list.childNodes[random-1]);
		/*
		if (fin){
			list.appendChild(div);
		} else{
			list.insertBefore(div, list.childNodes[random-1]);
		}*/
		}
		
		});
	}, function (error) {
   console.log("Error: " + error.code);
	});

}());

// xxxxxxxxxx Working For Sign In Form xxxxxxxxxx
// xxxxxxxxxx Sign In Email Validation xxxxxxxxxx
function checkUserSIEmail(){
    var userSIEmail = document.getElementById("userSIEmail");
    var userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag;
    if(userSIEmail.value.match(userSIEmailFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("userSIEmailError").style.display = "block";
    }else{
        document.getElementById("userSIEmailError").style.display = "none";
    }
}
// xxxxxxxxxx Sign In Password Validation xxxxxxxxxx
function checkUserSIPassword(){
    var userSIPassword = document.getElementById("userSIPassword");
    var userSIPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;      
    var flag;
    if(userSIPassword.value.match(userSIPasswordFormate)){
        flag = false;
    }else{
        flag = true;
    }    
    if(flag){
        document.getElementById("userSIPasswordError").style.display = "block";
    }else{
        document.getElementById("userSIPasswordError").style.display = "none";
    }
}
// xxxxxxxxxx Check email or password exsist in firebase authentication xxxxxxxxxx    
function signIn(){
    var userSIEmail = document.getElementById("userSIEmail").value;
    var userSIPassword = document.getElementById("userSIPassword").value;
    var userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var userSIPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;      

    var checkUserEmailValid = userSIEmail.match(userSIEmailFormate);
    var checkUserPasswordValid = userSIPassword.match(userSIPasswordFormate);

    if(checkUserEmailValid == null){
        return checkUserSIEmail();
    }else if(checkUserPasswordValid == null){
        return checkUserSIPassword();
    }else{
        firebase.auth().signInWithEmailAndPassword(userSIEmail, userSIPassword).then((success) => {
                    window.location.replace("./profile.html");
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                type: 'error',
                title: 'Error',
                text: "Usuario/contraseña incorrectos o no habilitado",
            })
        });
    }
}
// xxxxxxxxxx Working For Profile Page xxxxxxxxxx
// xxxxxxxxxx Get data from server and show in the page xxxxxxxxxx
firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
    //   User is signed in.
        let user = firebase.auth().currentUser;
        let uid
        if(user != null){
            uid = user.uid;
        }
        let firebaseRefKey = firebase.database().ref().child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{

			document.getElementById("userPfDay1").innerHTML = dataSnapShot.val().userDay1;
            document.getElementById("userPfShift1").innerHTML = dataSnapShot.val().userShift1;
			document.getElementById("userPfDay2").innerHTML = dataSnapShot.val().userDay2;
            document.getElementById("userPfShift2").innerHTML = dataSnapShot.val().userShift2;			
			document.getElementById("userPfDay3").innerHTML = dataSnapShot.val().userDay3;
            document.getElementById("userPfShift3").innerHTML = dataSnapShot.val().userShift3;		
			document.getElementById("userPfDay4").innerHTML = dataSnapShot.val().userDay4;
            document.getElementById("userPfShift4").innerHTML = dataSnapShot.val().userShift4;		
			document.getElementById("userPfDay5").innerHTML = dataSnapShot.val().userDay5;
            document.getElementById("userPfShift5").innerHTML = dataSnapShot.val().userShift5;		
			document.getElementById("userPfDay6").innerHTML = dataSnapShot.val().userDay6;
            document.getElementById("userPfShift6").innerHTML = dataSnapShot.val().userShift6;		
			document.getElementById("userPfDay0").innerHTML = dataSnapShot.val().userDay0;
            document.getElementById("userPfShift0").innerHTML = dataSnapShot.val().userShift0;						
            // userEmail = dataSnapShot.val().userEmail;
            // userPassword = dataSnapShot.val().userPassword;
			document.getElementById("userPfFullName").innerHTML = dataSnapShot.val().userFullName;
            document.getElementById("userPfFb").innerHTML =  dataSnapShot.val().userFb;
            document.getElementById("userPfPhone").innerHTML = dataSnapShot.val().userPhone;
            document.getElementById("userPfWp").innerHTML = dataSnapShot.val().userWp;
            document.getElementById("userPfAddress").innerHTML = dataSnapShot.val().userAddress;
			document.getElementById("userPfHour").innerHTML = dataSnapShot.val().userHour;
			document.getElementById("userPfPrice").innerHTML = dataSnapShot.val().userPrice;
			document.getElementById("userPfObs").innerHTML = dataSnapShot.val().userObs;
        })
    } else {
    //   No user is signed in.
    }
});
// xxxxxxxxxx Show edit profile form with detail xxxxxxxxxx
function showEditProfileForm1(){
    document.getElementById("profileSection1").style.display = "none"
    document.getElementById("editProfileForm1").style.display = "block"
	
	var userPfFullName = document.getElementById("userPfFullName").innerHTML;
	var userPfFb = document.getElementById("userPfFb").innerHTML;
	var userPfPhone = document.getElementById("userPfPhone").innerHTML;
	var userPfWp = document.getElementById("userPfWp").innerHTML;
	var userPfAddress = document.getElementById("userPfAddress").innerHTML;
	var userPfHour = document.getElementById("userPfHour").innerHTML;
	var userPfPrice = document.getElementById("userPfPrice").innerHTML;
	var userPfObs = document.getElementById("userPfObs").innerHTML;

    document.getElementById("userFullName").value = userPfFullName; 
    document.getElementById("userFb").value = userPfFb; 
    document.getElementById("userPhone").value = userPfPhone; 
    document.getElementById("userWp").value = userPfWp; 
    document.getElementById("userAddress").value = userPfAddress; 
    document.getElementById("userHour").value = userPfHour; 
	document.getElementById("userPrice").value = userPfPrice; 
	document.getElementById("userObs").value = userPfObs; 
}
// xxxxxxxxxx Show edit profile form with detail xxxxxxxxxx
function showEditProfileForm(){
    document.getElementById("profileSection").style.display = "none"
    document.getElementById("editProfileForm").style.display = "block"	
	
	var userPfDay1 = document.getElementById("userPfDay1").innerHTML ;
    var userPfShift1 = document.getElementById("userPfShift1").innerHTML; 
	var userPfDay2 = document.getElementById("userPfDay2").innerHTML;
    var userPfShift2 =  document.getElementById("userPfShift2").innerHTML; 			
	var userPfDay3 = document.getElementById("userPfDay3").innerHTML ;
    var userPfShift3 =  document.getElementById("userPfShift3").innerHTML ;	
	var userPfDay4 = document.getElementById("userPfDay4").innerHTML ;
    var userPfShift4 =  document.getElementById("userPfShift4").innerHTML ;	
	var userPfDay5 = document.getElementById("userPfDay5").innerHTML ;
    var userPfShift5 = document.getElementById("userPfShift5").innerHTML ;	
	var userPfDay6 = document.getElementById("userPfDay6").innerHTML ;
    var userPfShift6 = document.getElementById("userPfShift6").innerHTML ;	
	var userPfDay0 = document.getElementById("userPfDay0").innerHTML ;
    var userPfShift0 = document.getElementById("userPfShift0").innerHTML ;		

	document.getElementById("userDay1").value = userPfDay1;
    document.getElementById("userShift1").value = userPfShift1;
	document.getElementById("userDay2").value = userPfDay2;
    document.getElementById("userShift2").value = userPfShift2;			
	document.getElementById("userDay3").value = userPfDay3;
    document.getElementById("userShift3").value = userPfShift3;		
	document.getElementById("userDay4").value = userPfDay4;
    document.getElementById("userShift4").value = userPfShift4;		
	document.getElementById("userDay5").value = userPfDay5;
    document.getElementById("userShift5").value = userPfShift5;		
	document.getElementById("userDay6").value = userPfDay6;
    document.getElementById("userShift6").value = userPfShift6;		
	document.getElementById("userDay0").value = userPfDay0;
    document.getElementById("userShift0").value = userPfShift0;	
}
// xxxxxxxxxx Hide edit profile form xxxxxxxxxx
function hideEditProfileForm1(){
    document.getElementById("profileSection1").style.display = "block";
    document.getElementById("editProfileForm1").style.display = "none";
}
// xxxxxxxxxx Hide edit profile form xxxxxxxxxx
function hideEditProfileForm(){
    document.getElementById("profileSection").style.display = "block";
    document.getElementById("editProfileForm").style.display = "none";
}
// xxxxxxxxxx Save profile and update database xxxxxxxxxx
function saveProfile1(){
	let userFullName = document.getElementById("userFullName").value; 
    let userFb = document.getElementById("userFb").value ; 
    let userPhone = document.getElementById("userPhone").value; 
    let userWp = document.getElementById("userWp").value; 
    let userAddress = document.getElementById("userAddress").value; 
    let userHour = document.getElementById("userHour").value; 
	let userPrice = document.getElementById("userPrice").value; 
	let userObs = document.getElementById("userObs").value ; 
		if (!document.getElementById("userFullName").checkValidity()
		) {
			swal({
            type: 'error',
            title: 'Error en Nombre',
            text: 'Caracteres Admitidos: Letras,números, espacio y simbolos ! $ + ? : . + - ,',
        })
			return false;
		};
		if (!document.getElementById("userFb").checkValidity()) {
			swal({
            type: 'error',
            title: 'Error en Sitio Web',
            text: 'Caracteres Admitidos: Letras,números, espacio y simbolos ! $ + ? : . + - ,',
        })
			return false;
		};
		if (!document.getElementById("userAddress").checkValidity()) {
			swal({
            type: 'error',
            title: 'Error en Dirección',
            text: 'Caracteres Admitidos: Letras,números, espacio y simbolos ! $ + ? : . + - ,',
        })
			return false;
		};		
		
		if (!document.getElementById("userHour").checkValidity()) {
			swal({
            type: 'error',
            title: 'Error en Horario',
            text: 'Caracteres Admitidos: Letras,números, espacio y simbolos ! $ + ? : . + - ,',
        })
			return false;
		};
		
		if (!document.getElementById("userPrice").checkValidity()) {
			swal({
            type: 'error',
            title: 'Error en Precio',
            text: 'Caracteres Admitidos: Letras,números, espacio y simbolos ! $ + ? : . + - ,',
        })
			return false;
		};
		
				if (!document.getElementById("userObs").checkValidity()) {
			swal({
            type: 'error',
            title: 'Error en Observación',
            text: 'Caracteres Admitidos: Letras,números, espacio y simbolos ! $ + ? : . + - ,',
        })
			return false;
		};
		
		if (!document.getElementById("userPhone").checkValidity() || !document.getElementById("userWp").checkValidity() 
		) {
			swal({
            type: 'error',
            title: 'Error',
            text: 'Teléfono y whatsapp solo admiten números',
        })
					return false;
		};
		
		
        let user = firebase.auth().currentUser;
        let uid;
        if(user != null){
            uid = user.uid;
        }
        var firebaseRef = firebase.database().ref();
        var userData = {
			    userFullName: userFullName,
				userAddress: userAddress,
				userHour: userHour,
				userPhone: userPhone,
                userFb: userFb,
				userWp: userWp,
				userPrice: userPrice,
				userObs: userObs
        }
        firebaseRef.child(uid).update(userData);
        
        document.getElementById("profileSection").style.display = "block";
		document.getElementById("profileSection1").style.display = "block";

        document.getElementById("editProfileForm").style.display = "none";
		document.getElementById("editProfileForm1").style.display = "none";
}
function saveProfile(){
		let userDay1 = document.getElementById("userDay1").value;
		let userShift1 = document.getElementById("userShift1").value;
		let userDay2 =	document.getElementById("userDay2").value;
		let userShift2 = document.getElementById("userShift2").value;		
		let userDay3 =	document.getElementById("userDay3").value;
		let userShift3 = document.getElementById("userShift3").value;	
		let userDay4 =	document.getElementById("userDay4").value;
		let userShift4 = document.getElementById("userShift4").value;	
		let userDay5 =	document.getElementById("userDay5").value;
		let userShift5 = document.getElementById("userShift5").value;	
		let userDay6 =	document.getElementById("userDay6").value;
		let userShift6 = document.getElementById("userShift6").value;	
		let userDay0 = document.getElementById("userDay0").value;
		let userShift0 = document.getElementById("userShift0").value;
		if (!document.getElementById("userDay1").checkValidity()) {
			swal({
            type: 'error',
            title: 'Error en Menú de Lunes',
            text: 'Caracteres Admitidos: Letras,números, espacio y simbolos ! $ + ? : . + - ,',
        })
			return false;
		};
		if (!document.getElementById("userDay2").checkValidity()) {
			swal({
            type: 'error',
            title: 'Error en Menú de Martes',
            text: 'Caracteres Admitidos: Letras,números, espacio y simbolos ! $ + ? : . + - ,',
        })
			return false;
		};
		if (!document.getElementById("userDay3").checkValidity()) {
			swal({
            type: 'error',
            title: 'Error en Menú de Miércoles',
            text: 'Caracteres Admitidos: Letras,números, espacio y simbolos ! $ + ? : . + - ,',
        })
			return false;
		};
		if (!document.getElementById("userDay4").checkValidity()) {
			swal({
            type: 'error',
            title: 'Error en Menú de Jueves',
            text: 'Caracteres Admitidos: Letras,números, espacio y simbolos ! $ + ? : . + - ,',
        })
			return false;
		};		
		if (!document.getElementById("userDay5").checkValidity()) {
			swal({
            type: 'error',
            title: 'Error en Menú de Viernes',
            text: 'Caracteres Admitidos: Letras,números, espacio y simbolos ! $ + ? : . + - ,',
        })
			return false;
		};
		if (!document.getElementById("userDay6").checkValidity()) {
			swal({
            type: 'error',
            title: 'Error en Menú de Sábado',
            text: 'Caracteres Admitidos: Letras,números, espacio y simbolos ! $ + ? : . + - ,',
        })
			return false;
		};		

		if (!document.getElementById("userDay1").checkValidity()) {
			swal({
            type: 'error',
            title: 'Error en Menú de Domingo',
            text: 'Caracteres Admitidos: Letras,números, espacio y simbolos ! $ + ? : . + - ,',
        })
			return false;
		};

        let user = firebase.auth().currentUser;
        let uid;
        if(user != null){
            uid = user.uid;
        }
        var firebaseRef = firebase.database().ref();
        var userData = {
			userDay1: userDay1,   
            userShift1: userShift1,
            userDay2: userDay2,
            userShift2: userShift2,
            userDay3: userDay3,
            userShift3: userShift3,
			userDay4: userDay4, 
			userShift4: userShift4,	
			userDay5: userDay5,	
			userShift5: userShift5,	
            userDay6: userDay6,   
			userShift6: userShift6,	
			userDay0: userDay0,	
			userShift0: userShift0	
        }       
        firebaseRef.child(uid).update(userData);

        document.getElementById("profileSection").style.display = "block";
		document.getElementById("profileSection1").style.display = "block";

        document.getElementById("editProfileForm").style.display = "none";
		document.getElementById("editProfileForm1").style.display = "none";

}
// xxxxxxxxxx Working For Sign Out xxxxxxxxxx
function signOut(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
                window.location.replace("./index.html");
    }).catch(function(error) {
        // An error happened.
        let errorMessage = error.message;
        swal({
            type: 'error',
            title: 'Error',
            text: "Error",
        })
    });
}
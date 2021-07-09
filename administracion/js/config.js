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
}());
var paused_count =0;
var resumed_count = 0;
var launched_count = 0;


    function onLoad() {
        var simpsons = {
            "firstName": "Homer",
            "lastName": "Simpson",
            "address": {
                "streetAddress": "742 Evergreen Terrace",
                "city": "Springfield",
                "state": "123"
            }
        }
        
    
        
    var homerString = JSON.stringify(simpsons);
        
    window.localStorage.setItem(“address”, homerString);
        
    var getSimpson = window.localStorage.getItem(“address”);

    var simpsonJSON = JSON.parse(getSimpson);
        
    alert(simpsonsJSON.address.city);
        
    }
	
function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}


    // device APIs are available
    //
    function onDeviceReady() {
		alert("device ready");
        
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() {
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	
	function onResume() {
		alert("resume");
		resumed_count++;
		updateDisplay();
    }
	


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
        
    console.log(simpsons.firstName +" is from " + simpsons.address.city);
        
    var homerString = JSON.stringify(simpsons);
        
    window.localStorage.setItem(“address”, homerString);
        
    var getSimpson = window.localStorage.getItem(“address”);

    var simpsonJSON = JSON.parse(getSimpson);
        
    alert(simpsons.address.city);
        
    }
	
	
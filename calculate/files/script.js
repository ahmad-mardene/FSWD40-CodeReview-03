function calculateInsurance(){	        
    	    var age = parseInt(document.getElementById('age').value);
    	    var country = parseInt(document.getElementById('country').value);
    	    var horsepower = parseInt(document.getElementById('horsepower').value);
    	    var germany = horsepower*120/age + 100;
    	    var austria = horsepower*100/age + 50;
    	    var italy = horsepower*150/(age+2) + 150;
    	    var name = parseInt(document.getElementById('name').value);
    	    
    	    if (document.getElementById('country').value=="Germany") {
    	    	document.write(name + " your insurance is " + germany + " € ")
    	    } else if (document.getElementById('country').value=="Italy" ) {
    	    	document.write( " your insurance is " + italy + " € ")
    	    } else {
    	    	document.write(" your insurance is " + austria + " € ")
    	    } 
}
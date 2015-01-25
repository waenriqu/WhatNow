#pragma strict
var dialogo : boolean = false;
var dC = 0;
var press = 0;
var showButtons: boolean = false;	
var counter = 0;
function Start () {

}


function Update () {

}

function OnMouseOver(){
		if(Input.GetMouseButtonDown(0)){
		dC = 0;
		showButtons = true;
		dialogo = true;
	}
}

function SetToZero(){
 	dC= 0;
 	showButtons = false;
 	dialogo = false;
}


function OnGUI () {

        // Make a background box
        	if(dialogo)
	        GUI.Box(new Rect(40,30,150,100), "Hello, rough night huh?");
	        
	        if(showButtons){
	    	if (GUI.Button(new Rect(20,70,80,20), "Press On")){
		    	dC = 1;
		    	press = press +1;
		    	dialogo = false;
		    	showButtons = false;
	    	}
	    	}
	    	
	    	if(showButtons){
	    	if (GUI.Button(new Rect(20,90,80,20), "Chat")){
		    	dC = 2;
		    	dialogo = false;
		    	showButtons = false;
	    	}
	    	}
	    
    	
    	
    	if(dC ==1 && press == 1){
 		   	GUI.Box (new Rect(10,10,200,100), "What are you implying sir?");
 		
 		}
 		if(dC ==2){
 			GUI.Box(new Rect(10,10,200,100), "What a shame... \nI saw her near my shop \njust yesterday.");
    		
    	}
    	
    	
    	if(dC==1 && press == 2){
    		GUI.Box (new Rect(10,10,200,100), "Just because I'm wearing\n pijamas doesn't mean \nI'm a murderer!");
	
		}
		
		if(dC==1 && press == 3){
			GUI.Box(new Rect(10,10,200,100), "You just made a \nterrible mistake!");
		}
		
		
 }  
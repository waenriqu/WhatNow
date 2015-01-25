﻿#pragma strict

var dialogo : boolean = false;
var dC = 0;
var press = 0;
var itemS = 0;
var showButtons: boolean = false;	
var counter = 0;
var personajes: GameObject[];

function Start () {


}


function Update () {

}

function OnMouseOver(){
		if(Input.GetMouseButtonDown(0)){
		
		
		var personajes = GameObject.FindGameObjectsWithTag("Character");
		for(var p: GameObject in personajes){
			var x : Character = p.GetComponent("Character");
			
			if(x.nombre == "Crazy Joe"){
			var scriptA : DialogueCJ = p.GetComponent(DialogueCJ);
			scriptA.SetToZero();
			}
			if(x.nombre == "Eric Wilson"){
			var scriptB : DialogueEW = p.GetComponent(DialogueEW);
			scriptB.SetToZero();
			}
			if(x.nombre == "Smooth McMoves"){
			var scriptC : DialogueSM = p.GetComponent(DialogueSM);
			scriptC.SetToZero();
			}
			if(x.nombre == "Jack Sorrow"){
			var scriptD : DialogueJSo = p.GetComponent(DialogueJSo);
			scriptD.SetToZero();
			}
			if(x.nombre == "Leslie Smith"){
			var scriptE : DialogueLS = p.GetComponent(DialogueLS);
			scriptE.SetToZero();
			}
			if(x.nombre == "Lucy Chang"){
			var scriptF : DialogueLC = p.GetComponent(DialogueLC);
			scriptF.SetToZero();
			}
			if(x.nombre == "Erina Jhonson"){
			var scriptG : DialogueEJ = p.GetComponent(DialogueEJ);
			scriptG.SetToZero();
			}
			
			if(x.nombre == "Jamal Saline"){
			var scriptH : DialogueJSa = p.GetComponent(DialogueJSa);
			scriptH.SetToZero();
			}
			
			if(x.nombre == "Jenny Lauren"){
			var scriptI : DialogueJL = p.GetComponent(DialogueJL);
			scriptI.SetToZero();
			}
		}
		
		dC = 0;
		showButtons = true;
		dialogo = true;
		
	}
}

function SetToZero(){
 	dC= 0;
 	showButtons = false;
 	dialogo = false;
 	itemS = 0;
}

function OnGUI () {

		var mainC : GameObject = GameObject.FindGameObjectWithTag("MainCamera");
		var scriptX : estado = mainC.GetComponent(estado);

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
	    	
	    	if(showButtons && scriptX.item ==1){
		    	if (GUI.Button(new Rect(20,150,80,20), "Show Item")){
		    				dC = 3;
			    			dialogo = false;
			    			showButtons = false;
							itemS = 1;
							scriptX.duracion = scriptX.duracion - 1;
		    	}
	    	
	    	}
	    	
	    	if(showButtons && scriptX.item ==2){
		    	if (GUI.Button(new Rect(20,150,80,20), "Show Item")){
		    				dC = 3;
			    			dialogo = false;
			    			showButtons = false;
							itemS = 2;
							scriptX.duracion = scriptX.duracion - 1;
		    	}
	    	
	    	}
	    	
	    	if(showButtons && scriptX.item ==3){
		    	if (GUI.Button(new Rect(20,150,80,20), "Show Item")){
		    				dC = 3;
			    			dialogo = false;
			    			showButtons = false;
							itemS = 3;
							scriptX.duracion = scriptX.duracion - 1;
		    	}
	    	
	    	}
	    	
	    
    	
    	if(dC == 3 && itemS == 1){
    		GUI.Box (new Rect(10,10,200,100), "Is that knife?!");
    	}
    	
    	if(dC == 3 && itemS == 2){
    		GUI.Box (new Rect(10,10,200,100), "That's not mine.");
    	}
    	
    	if(dC == 3 && itemS == 3){
    		GUI.Box (new Rect(10,10,200,100), "You can't use that here!");
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
#pragma strict

var dialogo : boolean = false;
var dC = 0;
var press = 0;
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
}

function OnGUI () {


        // Make a background box
        	if(dialogo)
	        GUI.Box(new Rect(40,30,150,100), "Oh god, oh god, I think I'm going to pass out!");
	        
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
 		   	GUI.Box (new Rect(10,10,200,100), "Who would do something\n so horrible?\n It hurts just by looking at it.");
 		
 		}
 		if(dC ==2){
 			GUI.Box(new Rect(10,10,200,100), "Hey I saw that shades guy yesterday\n at the disco. He was hanging\n out with some other girl.");
    		
    	}
    	
    	
    	if(dC==1 && press == 2){
    		GUI.Box (new Rect(10,10,200,100), "Now, now don't get all suspicious on me. /n There's plenty of other weirdos here to blame.");
	
		}
		
		if(dC==1 && press == 3){
			GUI.Box(new Rect(10,10,200,100), "Man,you should definitely \n find another job.");
		}
		
		
 } 
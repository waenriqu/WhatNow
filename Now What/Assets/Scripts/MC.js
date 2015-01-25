#pragma strict
var item: int;
var showButton : boolean = true;

 

function Start () {

}

function Update () {

}


 function OnGUI()
 {
     if(showButton)
     {
         if(GUI.Button(Rect(0, 0, 128, 128), "Click me!"))
             showButton = false;
     }
 }
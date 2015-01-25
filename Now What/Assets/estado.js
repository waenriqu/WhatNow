#pragma strict
var item = 0;
var duracion = 0;

function Start () {

}

function OnGui(){
	if(item == 1)
	
	GUI.Box (new Rect (100,0,100,50), "Knife "+duracion);

	if(item == 2)
	GUI.Box (new Rect (100,0,100,50), "Cellphone "+duracion);
	
	if(item == 3)
	GUI.Box (new Rect (100,0,100,50), "Botle "+duracion);

}

function Update () {

if (duracion == 0)
	item = 0;

}
#pragma strict

var escogido = false;

function Start () {

}

function OnMouseOver(){
		if(Input.GetMouseButtonDown(0)){
				var jugador: GameObject = GameObject.FindGameObjectWithTag("MainCamera");
				var scriptA : estado = jugador.GetComponent(estado);
				if (scriptA.item == 0 && scriptA.duracion == 0 && escogido == false){
					scriptA.item = 3;
					scriptA.duracion = 3;
				}
		}
}
// Inspector variables.
var astroid:GameObject;

function Start()
{
	// create 5 astroids.
	var limit:int = 5;
	
	for (var i:int = 0; i < limit; i++)
	{
		var pos:Vector3 = Vector3(3.5, Random.Range(-2, 2), 0.0);
		Instantiate(astroid, pos, transform.rotation);
	}
}

function Update () {
}
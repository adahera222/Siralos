// Inspector variables.
var speedX:float = 1.0;
var speedY:float = 0.0;
var boundaryHorLeft:float = -6.0;
var boundaryHorRight:float = 6.0;
var boundaryVerTop:float = -4.5;
var boundaryVerBottom:float = 4.5;

function Update()
{
	if (transform.position.x <= boundaryHorLeft)
	{
		reset();
	}
	
	transform.position.x -= speedX *  Time.deltaTime;
}

function OnTriggerEnter(other:Collider)
{
	if (other.tag.Equals('projectile'))
	{
		reset();
	}
}

function reset()
{
	transform.position.x = boundaryHorRight + Random.Range(0, 12);
	transform.position.y = Random.Range(boundaryVerTop, boundaryVerBottom);
}
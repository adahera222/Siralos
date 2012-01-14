// Inspector variables.
var speedX:float = 1.0;
var speedY:float = 0.0;
var boundaryHorLeft:float = -6.0;
var boundaryHorRight:float = 6.0;
var boundaryVerTop:float = -4.5;
var boundaryVerBottom:float = 4.5;
var sceneManager:Camera;
var levelName:String;

function Update()
{
	if ('Level02' == levelName)
	{
		speedX = 1.2;
	}
	else if ('Level02' == levelName)
	{
		speedX = 1.5;
	}

	if (transform.position.x <= boundaryHorLeft)
	{
		reset();
	}
	
	transform.position.x -= speedX *  Time.deltaTime;
	
	if (outOfBounds())
	{
		// if the time is finished, destroy the astroid.
		if (sceneManager.transform.GetComponent(levelName).getTimeLeft() <= 0)
		{
			Destroy(gameObject);
		}
	}
}

function OnTriggerEnter(other:Collider)
{
	if (other.tag.Equals('projectile'))
	{
		reset();
	}
	else if (other.tag.Equals('player'))
	{
		reset();
	}
}

function reset()
{
	transform.position.x = boundaryHorRight + Random.Range(0, 12);
	transform.position.y = Random.Range(boundaryVerTop, boundaryVerBottom);
}

function outOfBounds()
{
	return (transform.position.x <= boundaryHorLeft || transform.position.x >= boundaryHorRight);
}
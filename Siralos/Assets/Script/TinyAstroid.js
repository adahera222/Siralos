// Inspector variables.
var player:Transform;
var speed:float = 3.0;
var boundaryHorLeft:float = -6.0;
var boundaryHorRight:float = 6.0;
var boundaryVerTop:float = -4.5;
var boundaryVerBottom:float = 4.5;

// Private variables.
var targetX:float;
var targetY:float;

function Start()
{
	targetX = -4.0;
	targetY = transform.position.y;
}

function Update()
{
	if (player && player.GetComponent('Player').getLevelName())
	{
		if ('Level02' == player.GetComponent('Player').getLevelName())
		{
			speed = 4.0;
		}
		else if ('Level03' == player.GetComponent('Player').getLevelName())
		{
			speed = 5.0;
		}
		else
		{
			speed = 3.0;
		}
	}
	
	var transformY:float = 0.0;
	if (player && player.GetComponent('Player').getLevelName())
	{
		if ('Level03' == player.GetComponent('Player').getLevelName())
		{
			if (Random.Range(0, 100) >= 50)
			{
				transformY = -1.0 * Time.deltaTime;
			}
			else
			{
				transformY = 1.0 * Time.deltaTime;
			}
		}
	}
	
	transform.Translate(-1 * speed * Time.deltaTime, transformY, 0.0);
	
	if (outOfBounds())
	{
		Destroy(gameObject);
	}
	
	if (player)
	{
		if (0 == player.GetComponent('Player').getLives())
		{
			Destroy(gameObject);
		}
	}
}

function OnTriggerEnter(other:Collider)
{
	if (other.tag.Equals('projectile'))
	{
		Destroy(gameObject);
	}
	else if (other.tag.Equals('player'))
	{
		Destroy(gameObject);
	}
}

function calculateTransformValueForX()
{
	return Time.deltaTime * ((targetX - transform.position.x));
}

function calculateTransformValueForY()
{
	return Time.deltaTime * ((targetY - transform.position.y));
}

function outOfBounds()
{
	return (transform.position.x <= boundaryHorLeft || transform.position.x >= boundaryHorRight);
}
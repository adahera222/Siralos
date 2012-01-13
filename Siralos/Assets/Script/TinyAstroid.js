// Inspector variables.
var player:Transform;
var speed:float = 5.0;

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
	transform.Translate(-1 * speed * Time.deltaTime, 0.0, 0.0);
}

function OnTriggerEnter(other:Collider)
{
	if (other.tag.Equals('projectile'))
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
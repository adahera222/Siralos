// Inspector variables.
var tinyAstroid:Transform;
var lives:int = 50;
var explosion:Transform;

// Private variables.
private var direction:int = 1;

function Start()
{
	startAttack(3.0);
}

function Update()
{
	if (transform.position.x >= 2.8)
	{
		transform.Translate(-1.0 * Time.deltaTime, 0.0, 0.0);
	}
	
	if (transform.position.y <= -2.0)
	{
		direction = 1;
	}
	else if (transform.position.y >= 2.0)
	{
		direction = -1;
	}
	
	transform.Translate(0.0, 0.1 * direction * Time.deltaTime, 0.0);
}

function OnTriggerEnter(other:Collider)
{
	if (other.tag.Equals('projectile'))
	{
		lives -= 1;
	}

	if (lives <= 0)
	{
		// show the explosion.
		Instantiate(explosion, transform.position, transform.rotation);
		
		// destroy the object.
		Destroy(gameObject);
	}
}

function throwAstroids()
{
	for (var i:int = 0; i < 4; i++ )
	{
		var position:Vector3 = Vector3(transform.position.x, Random.Range(transform.position.y - (0.5 * i), transform.position.y + (0.5 * i)) , 0.0);
		Instantiate(tinyAstroid, position, transform.rotation);
	}
}

function stopAttack()
{
	CancelInvoke();
}

function startAttack(time:float)
{
	InvokeRepeating('throwAstroids', time, 3.0);
}
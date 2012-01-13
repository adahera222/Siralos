// Inspector variables.
var speed:float = 5.0;
var explosion:Transform;
var boundaryHorRight:float = 6.0;
var player:Player;

function Update()
{
	transform.Translate(0.0, -1 * speed * Time.deltaTime, 0.0);
	
	if (transform.position.x >= boundaryHorRight - 2.0)
	{
		Destroy(transform.gameObject);
	}
}

function OnTriggerEnter(other:Collider)
{
	if (other.tag.Equals('astroid') || other.tag.Equals('tinyAstroid') || other.tag.Equals('boss'))
	{
		// add score to the player.
		player.incrementScore();
		
		// destroy the projectile.
		Destroy(transform.gameObject);
		
		// show the explosion effect.
		Instantiate(explosion, transform.position, explosion.rotation);
	}
}
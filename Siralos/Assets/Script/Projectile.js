// Inspector variables.
var speed:float = 5.0;

function Update()
{
	transform.Translate(0.0, -1 * speed * Time.deltaTime, 0.0);
	
	if (transform.position.x >= 10.0)
	{
		Destroy(transform.gameObject);
	}
}

function OnTriggerEnter(other:Collider)
{
	if (other.tag.Equals('astroid'))
	{
		Destroy(transform.gameObject);
	}
}
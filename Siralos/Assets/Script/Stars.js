// Inspector variables.
var sceneManager:Camera;

function Update()
{
	if (sceneManager.transform.GetComponent('Level01').getTimeLeft() <= 5)
	{
		transform.Translate(-1.0 * Time.deltaTime, 0.0, 0.0);
	}
	
	if (transform.position.x <= -10.0)
	{
		Destroy(gameObject);
	}
}
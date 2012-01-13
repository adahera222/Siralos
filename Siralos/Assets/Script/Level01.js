// Inspector variables.
var astroid:GameObject;
var player:Player;
var timeLimit:int = 60;

// Private variables.
private var timeLeft:int;

function Start()
{
	// create 5 astroids.
	var limit:int = 5;
	
	for (var i:int = 0; i < limit; i++)
	{
		var pos:Vector3 = Vector3(3.5, Random.Range(-2, 2), 0.0);
		Instantiate(astroid, pos, transform.rotation);
	}
	
	// set the timer.
	timeLeft = timeLimit;
	
	// start the timer.
	InvokeRepeating('countDown', 1.0, 1.0);
}

function Update()
{
	if (timeLeft <= 0)
	{
		Application.LoadLevel('Level02');
	}
}

function OnGUI()
{
	// score.
	GUI.Label(Rect(10, 10, 100, 30), 'Score: ' + player.getScore());
	
	// lives.
	GUI.Label(Rect(10, 30, 100, 30), 'Lives: ' + player.getLives());
	
	// time.
	GUI.Label(Rect(550, 10, 100, 30), 'Time: ' + timeLeft);
}

function countDown()
{
	timeLeft -= 1;
	if (timeLeft < 0 )
	{
		timeLeft = 0;
	}
}
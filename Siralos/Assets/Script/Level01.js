// Inspector variables.
var astroid:GameObject;
var player:Player;
var timeLimit:int = 60;
var boss:Transform;

// Private variables.
private var timeLeft:int;
private var bossCreated = false;

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
	if (timeLeft <= 0 && ! bossCreated)
	{
		// introduce the boss.
		//boss = Instantiate(boss, Vector3(6.0, 0.0, 0.0), transform.rotation);
		
		bossCreated = true;
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
	
	// time.
	GUI.Label(Rect(550, 30, 100, 30), 'Level: 1');
}

function countDown()
{
	timeLeft -= 1;
	if (timeLeft < 0 )
	{
		timeLeft = 0;
	}
}

function getTimeLeft()
{
	return timeLeft;
}

function init()
{
	Start();
}
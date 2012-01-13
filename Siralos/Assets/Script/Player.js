// Inspector variables.
var speedX:float = 1.0;
var speedY:float = 1.0;
var boundaryHorLeft:float = -6.0;
var boundaryHorRight:float = 6.0;
var boundaryVerTop:float = -4.5;
var boundaryVerBottom:float = 4.5;
var projectile:Transform;
var projectileSocket:Transform;
var scoreUnit:int = 1;

// Private variables.
static private var score:int = 0;
static private var lives:int = 3; 

function Update()
{
	var translationX:float = Input.GetAxis('Horizontal') * speedX *  Time.deltaTime;
	var translationY:float = Input.GetAxis('Vertical') * speedX *  Time.deltaTime;
	
	// rotated object.
	transform.Translate(0, translationY, translationX);
	
	// keep the player within the boundaries.
	transform.position.x = Mathf.Clamp(transform.position.x, boundaryHorLeft, boundaryHorRight);
	transform.position.y = Mathf.Clamp(transform.position.y, boundaryVerTop, boundaryVerBottom);
	
	// fire the projectile.
	if (Input.GetKeyDown('space'))
	{
		Instantiate(projectile, projectileSocket.transform.position, projectile.transform.rotation);
	}
}

function incrementScore()
{
	score += scoreUnit;
}

function decrementLives()
{
	lives -= 1;
}

function getScore()
{
	return score;
}

function getLives()
{
	return lives;
}
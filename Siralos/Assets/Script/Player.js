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
var explosion:Transform;
var guiLoseStyle:GUIStyle;

// Private variables.
static private var score:int = 0;
static private var lives:int = 3;
static private var shootingCount:int = 0; 
private var isDead = false;
private var gameOver = false;

function Update()
{
	if (! isDead)
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
			
			// increment the shooting count.
			shootingCount += 1;
		}
	}
}

function OnTriggerEnter(other:Collider)
{
	if (other.tag.Equals('astroid') || other.tag.Equals('tinyAstroid'))
	{
		isDead = true;
		Instantiate(explosion, transform.position, transform.rotation);
		decrementLives();
		transform.position.x = boundaryHorLeft - 10.0;
	}
	
	if (other.tag.Equals('tinyAstroid'))
	{
		GameObject.Find('camMain').GetComponent('Level01').boss.GetComponent('Boss01').stopAttack();
	}
	
	if (0 == lives)
	{
		yield WaitForSeconds(2.0);
		Application.LoadLevel('Lose');
	}
	else if (other.tag.Equals('astroid') || other.tag.Equals('tinyAstroid'))
	{
		Invoke('respawn', 3.0);
	}
}

function incrementScore()
{
	// increment the score.
	score += scoreUnit;
}

function decrementLives()
{
	lives -= 1;
}

function respawn()
{
	transform.position.x = boundaryHorLeft + 1.0;
	isDead = false;
	
	if (GameObject.Find('camMain').GetComponent('Level01').boss)
	{
		GameObject.Find('camMain').GetComponent('Level01').boss.GetComponent('Boss01').startAttack(1.0);
	}
}

function getScore()
{
	return score;
}

function getLives()
{
	return lives;
}

function getAccuracy()
{
	var fScore:float = score;
	
	if (fScore == 0.0)
	{
		return '0';
	}
	
	var fShootingCount:float = shootingCount;
	fScore = ((fScore / fShootingCount) * 100.0);
	if (fScore > 100.0)
	{
		fScore = 100.0;
	}

	return fScore.ToString('#.00');
}

function getFinalScore()
{
	var fScore:float = score;
	
	if (fScore == 0.0)
	{
		return 0;
	}
	
	var fShootingCount:float = shootingCount;
	fScore = ((fScore / fShootingCount) * 100.0);
	if (fScore > 100.0)
	{
		fScore = 100.0;
	}

	return parseInt(fScore) * 2 + score;
}
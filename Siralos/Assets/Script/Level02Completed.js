// Inspector variables.
var guiTransparentBackground:GUIStyle;
var player:Player;

function OnGUI()
{
	GUI.BeginGroup(Rect(10, 10, 620, 460), guiTransparentBackground);
	
	// show the score.
	GUI.Label(Rect(250, 200, 150, 30), 'Raw Score .... : ' + player.getScore());
	
	// show the accuracy.
	GUI.Label(Rect(250, 220, 150, 30), 'Accuracy ..... : ' + player.getAccuracy() + '%');
	
	// show the final score.
	GUI.Label(Rect(250, 240, 150, 30), 'Final Score .. : ' + player.getFinalScore());
	
	// show the buttons.
	if (GUI.Button(Rect(235, 300, 150, 30), 'Next Level'))
	{
		Application.LoadLevel('Level03');
	}
	if (GUI.Button(Rect(235, 340, 150, 30), 'Back to Main Menu'))
	{
		Application.LoadLevel('MainMenu');
	}
	
	GUI.EndGroup();
}
// Inspector variables.
var guiTransparentBackground:GUIStyle;

function OnGUI()
{
	GUI.BeginGroup(Rect(10, 10, 620, 460), guiTransparentBackground);
	
	// show the score.
	GUI.Label(Rect(250, 200, 150, 30), 'Move .... : Arrow keys');
	
	// show the accuracy.
	GUI.Label(Rect(250, 220, 150, 30), 'Shoot ..... : Space bar');
	
	// show the buttons.
	if (GUI.Button(Rect(235, 300, 150, 30), 'Back to Main Menu'))
	{
		Application.LoadLevel('MainMenu');
	}
	
	GUI.EndGroup();
}
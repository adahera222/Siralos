// Inspector variables.
var guiTransparentBackground:GUIStyle;

function OnGUI()
{
	GUI.BeginGroup(Rect(10, 10, 620, 460), guiTransparentBackground);
	
	// show the score.
	GUI.Label(Rect(220, 200, 250, 30), 'Game Design .... : Onur Yaman');
	
	// show the accuracy.
	GUI.Label(Rect(220, 220, 250, 30), 'GUI ..... : Onur Yaman');
	
	// show the accuracy.
	GUI.Label(Rect(220, 240, 250, 30), 'Programming ..... : Onur Yaman');
	
	// show the buttons.
	if (GUI.Button(Rect(235, 300, 150, 30), 'Back to Main Menu'))
	{
		Application.LoadLevel('MainMenu');
	}
	
	GUI.EndGroup();
}
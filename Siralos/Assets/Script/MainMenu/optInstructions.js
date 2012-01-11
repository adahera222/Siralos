// Inspector variables.
var normalTexture:Texture2D;
var hoverTexture:Texture2D;

function OnMouseEnter()
{
	transform.guiTexture.texture = hoverTexture;
}

function OnMouseExit()
{
	transform.guiTexture.texture = normalTexture;
}

function OnMouseDown()
{
	Application.LoadLevel('Instructions');
}
var i=0;
var imagefiles=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
window.setInterval(startSlider,2500);

function startSlider()
{
	document.getElementById("topimg").src="img/slider/"+imagefiles[i];
	i++;
	if(i>4)
	{
		i=0;
	}
}
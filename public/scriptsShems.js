





function loadImagesShems()
{
	
	
	var aImageSourcesShems = [
'/pic/subnav/submenu1.png',
'/pic/subnav/submenu2.png',
'/pic/subnav/submenu3.png',
'/pic/subnav/submenu4.png',
'/pic/subnav/submenu5.png',
'/pic/subnav/submenu6.png',
'/pic/subnav/submenu7.png',
'/pic/subnav/submenu8.png',
'/pic/subnav/submenu1On.png',
'/pic/subnav/submenu2On.png',
'/pic/subnav/submenu3On.png',
'/pic/subnav/submenu4On.png',
'/pic/subnav/submenu5On.png',
'/pic/subnav/submenu6On.png',
'/pic/subnav/submenu7On.png',
'/pic/subnav/submenu8On.png'
];



	var index0 = aImageSourcesShems.length;

	window.aImages0 = new Array();

	while (index0 > 0)
	{
		var img0 = new Image();
		
		img0.src = aImageSourcesShems[--index0];
		window.aImages0[index0] = img0;
	}

}

loadImagesShems();
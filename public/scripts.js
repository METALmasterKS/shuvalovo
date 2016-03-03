var win1 = 0;
var win2 = 0;
var win3 = 0;
var win4 = 0;
var newwin1;
var newwin2;
var newwin3;
var newwin4;

function changePicOn(name) {
    {
        document.getElementById(name).className = name + "On";
    }
}
function changePicOut(name) {
    {
        document.getElementById(name).className = name;
    }
}
var picNameS = "";
var picIdS = "";
function loadPics(picid, picname, flag)
{
    var objects = document.getElementById('fullIMG');
    var pic = document.getElementById(picid);

    if (picNameS != picname)
    {
        if (flag == 'on')
        {
            pic.className = 'TrPix1On';
        }

        if (flag == 'out')
        {
            pic.className = 'TrPix1';
        }
    }

    currentPicName = '/pic/photo/full/' + picname + '.jpg';
    var currentPic = new Image();
    currentPic.onload = function ()
    {
        if (flag == 'in')
        {
            picIdS.className = 'TrPix1';
            picIdS = pic;
            picNameS = picname;
            pic.className = 'TrPix1On';

            objects.innerHTML = '<img src="' + currentPicName + '" class="TrPix1On" border="0" alt="" />';
        }
    }
    currentPic.src = '/pic/photo/full/' + picname + '.jpg';
}

function openImage(obj, title, text)
{
// width = 550;  height = 550;
    width = 450;
    height = 337;
    newwin = window.open('/pic/pixel.gif', 'Information', 'toolbar=0,status=0,menubar=0,scrollbars=0, resizable=1, width=' + width + ', height=' + height);
    newwin.document.open();
    newwin.document.write('<title>' + title + '</title>');
    newwin.document.write('<body onload="window.resizeTo(window.img.width+12, 50+window.img.height);" topmargin=0 leftmargin=0><a href="javascript:void(0)" onClick="window.close()"><img id=img name=img border=0 src="/pic/' + obj + '.jpg" alt=\'\'></a><br />' + text + '</body>');
    newwin.document.close();

}

function openImage2(obj, title)
{
// width = 550;  height = 550;
    width = 550;
    height = 437;
    newwin = window.open('/pic/pixel.gif', 'Information', 'toolbar=0,status=0,menubar=0,scrollbars=0, resizable=1, width=' + width + ', height=' + height);
    newwin.document.open();
    newwin.document.write('<title>' + title + '</title>');
    newwin.document.write('<body onload="window.resizeTo(window.img.width+12, 60+window.img.height);" topmargin=0 leftmargin=0><a href="javascript:void(0)" title="Закрыть" onClick="window.close()"><img id=img name=img border=0 src="/pic/' + obj + '.jpg" alt=\'\'></a></body>');
    newwin.document.close();

}


function openImage3(obj, title, winId)
{
    width = 450;
    height = 337;

    if (winId == 1) {
        win1 = 1;
        topPos = 0;
        leftPos = 0;

        newwin1 = window.open('/pic/pixel.gif', 'Information1', 'toolbar=0,status=0,menubar=0,scrollbars=0, resizable=1, top=' + topPos + ', left=' + leftPos + ', width=' + width + ', height=' + height);
        //focusWin ();
        newwin1.document.open();
        newwin1.document.write('<title>' + title + '</title>');
        newwin1.document.write('<body onload="window.resizeTo(815, 650);" topmargin=0 leftmargin=0><a href="javascript:void(0)" title="Закрыть" onClick="window.close()"><img id="img1" name=img border=0 src="/pic/popupshems/' + obj + '.jpg" alt=\'\'></body>');
        newwin1.document.close();
    }

    if (winId == 2) {
        win2 = 1;
        topPos = 30;
        leftPos = 30;

        newwin2 = window.open('/pic/pixel.gif', 'Information2', 'toolbar=0,status=0,menubar=0,scrollbars=0, resizable=1, top=' + topPos + ', left=' + leftPos + ', width=' + width + ', height=' + height);
        //focusWin ();
        newwin2.document.open();
        newwin2.document.write('<title>' + title + '</title>');
        newwin2.document.write('<body onload="window.resizeTo(815, 650);" topmargin=0 leftmargin=0><a href="javascript:void(0)" title="Закрыть" onClick="window.close()"><img id=img name=img border=0 src="/pic/popupshems/' + obj + '.jpg" alt=\'\'><br /></body>');
        newwin2.document.close();
    }

    if (winId == 3) {
        win3 = 1;
        topPos = 50;
        leftPos = 50;

        newwin3 = window.open('/pic/pixel.gif', 'Information3', 'toolbar=0,status=0,menubar=0,scrollbars=0, resizable=1, top=' + topPos + ', left=' + leftPos + ', width=' + width + ', height=' + height);
        //focusWin ();
        newwin3.document.open();
        newwin3.document.write('<title>' + title + '</title>');
        newwin3.document.write('<body onload="window.resizeTo(815, 650);" topmargin=0 leftmargin=0><a href="javascript:void(0)" title="Закрыть" onClick="window.close()"><img id=img name=img border=0 src="/pic/popupshems/' + obj + '.jpg" alt=\'\'><br /></body>');
        newwin3.document.close();
    }

    if (winId == 4) {
        win4 = 1;
        topPos = 70;
        leftPos = 70;

        newwin4 = window.open('/pic/pixel.gif', 'Information4', 'toolbar=0,status=0,menubar=0,scrollbars=0, resizable=1, top=' + topPos + ', left=' + leftPos + ', width=' + width + ', height=' + height);
        //focusWin ();
        newwin4.document.open();
        newwin4.document.write('<title>' + title + '</title>');
        newwin4.document.write('<body onload="window.resizeTo(815, 650);" topmargin=0 leftmargin=0><a href="javascript:void(0)" title="Закрыть" onClick="window.close()"><img id=img name=img border=0 src="/pic/popupshems/' + obj + '.jpg" alt=\'\'><br /></body>');
        newwin4.document.close();
    }

}


function focusWin()
{
    if (win1 == 1) {
        newwin1.focus();
    }
    if (win2 == 1) {
        newwin2.focus();
    }
    if (win3 == 1) {
        newwin3.focus();
    }
    if (win4 == 1) {
        newwin4.focus();
    }
}


function loadImages()
{


    var aImageSources = [
        '/pic/main_fon_1540.jpg',
        '/pic/marker1.jpg',
        '/pic/marker2.jpg',
        '/pic/marker3.jpg',
        '/pic/marker4.jpg',
        '/pic/marker5.jpg',
        '/pic/marker6.jpg',
        '/pic/marker7.jpg',
        '/pic/marker8.jpg',
        '/pic/marker1On.jpg',
        '/pic/marker2On.jpg',
        '/pic/marker3On.jpg',
        '/pic/marker4On.jpg',
        '/pic/marker5On.jpg',
        '/pic/marker6On.jpg',
        '/pic/marker7On.jpg',
        '/pic/marker8On.jpg',
        '/pic/marker1_1On.jpg',
        '/pic/marker2_1On.jpg',
        '/pic/marker3_1On.jpg',
        '/pic/marker4_1On.jpg',
        '/pic/marker5_1On.jpg',
        '/pic/marker6_1On.jpg',
        '/pic/marker7_1On.jpg',
        '/pic/marker8_1On.jpg',
        '/pic/marker1_1.jpg',
        '/pic/marker2_1.jpg',
        '/pic/marker3_1.jpg',
        '/pic/marker4_1.jpg',
        '/pic/marker5_1.jpg',
        '/pic/marker6_1.jpg',
        '/pic/marker7_1.jpg',
        '/pic/marker8_1.jpg'
    ];



    var index = aImageSources.length;

    window.aImages = new Array();

    while (index > 0)
    {
        var img = new Image();

        img.src = aImageSources[--index];
        window.aImages[index] = img;
    }

}

loadImages();
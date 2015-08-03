window.onload = function() {
    resetPage();
    $$('.ping').addEventListener('webkitAnimationStart', function() {
        $$('.t1').style.display = 'block';
        setTimeout(function() {
            $$('.t2').style.display = 'block';
            setTimeout(function() {
                $$('.t3').style.display = 'block';
                setTimeout(function() {
                    $$('.t4').style.display = 'block'
                }, 200)
            }, 200)
        }, 500)
    });
    $$('.ping').addEventListener('webkitAnimationEnd', function() {
        $$('.y1').style.opacity = 1;
        setTimeout(function() {
            $$('.y1').style.opacity = 0;
            setTimeout(function() {
                $$('.y2').style.opacity = 1;
                setTimeout(function() {
                    $$('.y2').style.opacity = 0;
                    $$('.y3').style.webkitTransform = 'scale(1,1)'
                }, 200)
            }, 200)
        }, 200)
    });
    $$('.pai').addEventListener('touchstart', function(e) {
        $$('.form').style.display = 'block';
        $$('.form .close').onclick = function() {
            $$('.form').style.display = 'none'
        }
    }); $$('.guide').addEventListener('touchstart', function() {
        $$('.form').style.display = 'none';
        $$('.tips').style.display = 'block';
        $$('.tips .close').onclick = function() {
            $$('.tips').style.display = 'none'
        }
    });
    $$('.go-index').addEventListener('touchstart', function() {
        location.href = 'index.html'
    });
    $$('.up').addEventListener('touchstart', function() {
        doInput('inputObj')
    });
    $$('.reset').addEventListener('touchstart', function() {
        canvasInit();
        doInput('inputObj1')
    });

    canvasInit();
    canvasInit1() ;
    $$('.submit').addEventListener('touchstart', function() {
        var name = $$('.name').value;
        var mobile = $$('.mobile').value;
        if (isWord(name) && isTelNum(mobile)) {
            var _u = "http://test.zhangkuo.net/advmessage/adv/addResultJsonP.action?advid=30380&realname=" + name + "&mobile=" + mobile+"&callback=callbackInfo";
            Ajax(_u);
        }
    });
    $$('.sub').addEventListener('touchstart', function() {
        var _u = "http://test.zhangkuo.net/advmessage/advimage/saveImgJsonP.action?advid=30380&resultid=" + resultid;
        //var xmlHttp;
        //try { xmlHttp = new XMLHttpRequest(); }
        //catch( e ){
        //    try { xmlHttp = new ActiveXObject( "Msxml2.XMLHTTP" );}
        //    catch ( e ){
        //        try { xmlHttp = new ActiveXObject( "Microsoft.XMLHTTP" );}
        //        catch( e ) { alert("您的浏览器不支持AJAX！");return false;}
        //    }
        //}
        //xmlHttp.open('POST',_u,true);
        //xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        //xmlHttp.onreadystatechange = function () {
        //    if (xmlHttp.readyState == 4) {
        //        if (xmlHttp.status == 200) {
        //           console.log(xmlHttp.responseText);
        //        } else {
        //            console.log(xmlHttp.responseText);
        //        }
        //    }
        //}
        $.ajax({
            url: _u,
            type: 'POST',
            data:{ imagebase64: strDataURI1 },
            cache: false,
            timeout: 60000,
            dataType:'json',
            success: function(d){
            console.log(d)
        }});

        //Ajax(_u);
    });
}
window.onresize = function() {
    resetPage()
}
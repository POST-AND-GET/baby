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
    if(localStorage.resultid){
        resultid=localStorage.resultid;
        $$('.form').style.display = 'none';
        $$('.upload').style.display = 'block';
    }
    $$('.submit').addEventListener('touchstart', function() {
        var name = $$('.name').value;
        var mobile = $$('.mobile').value;
        if (isWord(name) && isTelNum(mobile)) {
            var _u = "http://test.zhangkuo.net/advmessage/adv/addResultJsonP.action?advid=30380&realname=" + name + "&mobile=" + mobile+"&callback=callbackInfo";
            Ajax(_u);
        }
    });
    $$('.sub').addEventListener('touchstart', function() {
        var _u = "http://test.zhangkuo.net/advmessage/advimage/saveImg.action?advid=30380&resultid=" + resultid;
        $.ajax({
            url: _u,
            type: 'POST',
            data:{ imagebase64: strDataURI1 },
            cache: false,
            timeout: 60000,
            dataType:'json',
            success: function(d){
                console.log(d)
                if(d.success=='1'){
                    if(localStorage.resultid){
                        localStorage.removeItem('resultid');
                    }
                    location.href = 'success.html';
                }else{
                    localStorage.resultid=resultid;
                    alert('非常抱歉，上传失败。');
                }

            },
            error: function(e){
                console.log(e)
                localStorage.resultid=resultid;
                alert('抱歉，由于网络原因上传失败，请检查网络');

            }
        });
    });
}
window.onresize = function() {
    resetPage()
}
/**
 * Created by adwo15513 on 2015/7/31.
 */
window.onload = function() {

    resetPage();
    $('.ping').addEventListener('webkitAnimationStart',function(){
        $('.t1').style.display='block';
        setTimeout(function(){
            $('.t2').style.display='block';
            setTimeout(function(){
                $('.t3').style.display='block';
                setTimeout(function(){
                    $('.t4').style.display='block';
                },200)
            },200)
        },500)
    });
    $('.ping').addEventListener('webkitAnimationEnd',function(){
        $('.y1').style.opacity=1;
        setTimeout(function(){
            $('.y1').style.opacity=0;
            setTimeout(function(){
                $('.y2').style.opacity=1;
                setTimeout(function(){
                    $('.y2').style.opacity=0;
                    $('.y3').style.webkitTransform='scale(1,1)';
                },200)
            },200)
        },200)
    });
    $('.pai').addEventListener('touchstart',function(){
        alert(1)
    })

}
window.onresize = function() {
    resetPage();
}

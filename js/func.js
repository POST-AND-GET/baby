/**
 * Created by adwo15513 on 2015/7/31.
 */
function resetPage() {
    var deviceWidth = document.documentElement.clientWidth,
        scale = deviceWidth / 320;
    document.body.style.zoom = scale;
}
function $$(s){
    return document.querySelector(s);
}
var ctx, cvs, ctx1, cvs1,strDataURI1,resultid,userinfo;
function canvasInit(){
    cvs = $$('#cvs');
    cvs.width = 190;
    cvs.height = 137;
    ctx = cvs.getContext('2d');
    ctx.clearRect(-87,-58,400,244);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0,0,200,137);
}
function canvasInit1(){
    cvs1 = $$('#canvas');
    cvs1.width = 600;
    cvs1.height = 400;
    ctx1 = cvs1.getContext('2d');
    ctx1.clearRect(-300,-200,1200,800);
    ctx1.fillStyle = '#ffffff';
    ctx1.fillRect(0,0,600,400);
}

function readFile(){
    canvasInit();
    canvasInit1();
    var file = this.files[0];
    if(!/image\/\w+/.test(file.type)){
        alert("请选择图片格式！");
        return false;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e){
        var img = new Image;
        img.src=this.result;
        img.onload = function(){

            ctx.drawImage(img,0,0,190,137);
            ctx1.drawImage(img,0,0,600,400);

            $$('.go-index').style.display = 'none';
            $$('.reset').style.display = 'block';
            $$('.up').style.display = 'none';
            $$('.sub').style.display = 'block';

            strDataURI1 = cvs1.toDataURL();
            ctx.translate(87,58);
            ctx1.translate(300,200);
            $$('.evert').addEventListener('touchstart',function(){
                ctx.clearRect(-95,-68,400,244);
                ctx.fillRect(-95,-68,300,400);
                ctx.rotate(-90 * Math.PI / 180);
                ctx.drawImage(img,-95,-68,190,137);
                ctx1.clearRect(-300,-200,600,400);
                ctx1.fillRect(-300,-200,600,400);
                ctx1.rotate(-90 * Math.PI / 180);
                ctx1.drawImage(img,-300,-200,600,400);
                strDataURI1 = cvs1.toDataURL();
                console.log(strDataURI1)
            });

        }
    }
}
function doInput(id){
    var inputObj = document.createElement('input');
    inputObj.addEventListener('change',readFile,false);
    inputObj.type = 'file';
    inputObj.accept = 'image/*';
    inputObj.id = id;
    inputObj.click();
}
function isWord(w) {
    var partten = /^[\u4E00-\u9FFF]+$$/;
    if (partten.test(w)) {
        return true
    } else {
        alert('请正确输入名字！');
        return false
    }
}
function isTelNum(num) {
    var partten = /^1[3,5,7,8]\d{9}$$/;
    if (partten.test(num)) {
        return true
    } else {
    alert('请正确输入手机号！');
        return false
    }
}
function Ajax(url){
    var script = document.createElement('script');
    script.setAttribute("type","text/javascript");
    script.src = url;
    document.body.appendChild(script);
    script.remove();
}
function callbackGetinfo(data){
    console.log(data);
    if(data.success==1){
        resultid = data.resutid;
        $$('.form').style.display = 'none';
        $$('.fc').style.display = 'none';
        $$('.guide').style.display = 'none';
        $$('.cloud').style.display = 'none';
        $$('.ping').style.display = 'none';
        $$('.pai').style.display = 'none';
        $$('.hand').style.display = 'none';
        $$('.upload').style.display = 'block';
    }else{
        alert(info.info);
    }
}
function callbackInfo(data){
    if(data[0].success==1){
        resultid = data[0].id;
        //localStorage.resultid=data[0].id;
        localStorage.userinfo=userinfo;
        console.log(resultid)
        $$('.form').style.display = 'none';
        $$('.fc').style.display = 'none';
        $$('.guide').style.display = 'none';
        $$('.cloud').style.display = 'none';
        $$('.ping').style.display = 'none';
        $$('.pai').style.display = 'none';
        $$('.hand').style.display = 'none';
        $$('.upload').style.display = 'block';
    }
    if(data[0].success==3){
        var _uu = "http://test.zhangkuo.net/advmessage/advimage/getUserinfo.action?advid=30380&userinfo="+$$('.mobile').value/*+"&callback=callbackGetinfo"*/;
        $.ajax({
            url: _uu,
            type: 'GET',
            success: function(d){
                d = JSON.parse(d);
                console.log(d)
                if(d.success==1){
                    resultid = data.resutid;
                    $$('.form').style.display = 'none';
                    $$('.fc').style.display = 'none';
                    $$('.guide').style.display = 'none';
                    $$('.cloud').style.display = 'none';
                    $$('.ping').style.display = 'none';
                    $$('.pai').style.display = 'none';
                    $$('.hand').style.display = 'none';
                    $$('.upload').style.display = 'block';
                }else{
                    alert(d.info);
                }
            }

        });
    }
}


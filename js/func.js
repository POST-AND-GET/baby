/**
 * Created by adwo15513 on 2015/7/31.
 */
function resetPage() {
    var deviceWidth = document.documentElement.clientWidth,
        scale = deviceWidth / 320;
    document.body.style.zoom = scale;
}
function $(s){
    return document.querySelector(s);
}
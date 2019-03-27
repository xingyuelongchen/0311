window.onload = function () {
    //初始化DOM节点
    play();
}
var dom = {
    id: function (a) {
        return document.getElementById(a)
    },
    class: function (a) {
        return document.getElementsByClassName(a);
    },
    log: (a) => {
        console.log(a)
    }
}


function play() {
    var city_btn, city_list;
    dom.id('city_btn').onclick = function () {
            if (dom.id('city_list').style.display == 'block') {
                dom.id('city_list').style.display = 'none';
            } else {
                dom.id('city_list').style.display = 'block';
            }
    };
}
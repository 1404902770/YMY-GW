// 实时判断浏览器宽度并处理：文字 - 宽度
(function (win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;
    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        if (width < 768) { // 最大宽度
            width = 768;
        }
        var rem = width / 19.2;
        docEl.style.fontSize = rem + 'px';
    }
    win.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);
    refreshRem();
})(window);

// 图片懒加载 - 滚动事件
start() //打开页面 调用一次 
$(window).on('scroll', function () {
    start() //滚动页面是 调用一次   方便管理 
})
// 图片懒加载 - 加载函数 
function start() {
    $('.container img').not('[data-isLoaded]').each(function () {
        var $node = $(this)
        if (isShow($node)) {
            //缓冲效果 
            setTimeout(function () {
                loadIng($node)
            }, 500)
        }
    })
}
// 图片懒加载 - 页面逻辑
function isShow($node) {
    // 当一个元素出现在我们眼前    小于 窗口高度 加上窗口滚动的高度的时候    就意味着  到达目标点 
    // 可以开始加载图片 或者其他内容
    return $node.offset().top <= $(window).height() + $(window).scrollTop()
}
// 图片懒加载 - 显示状态
function loadIng($img) {
    // 获取目标元素 并替换 
    $img.attr('src', $img.attr('data-src'))
    //性能优化   进行判断   已经加载的  不会再进行加载  
    $img.attr('data-isLoaded', 1)
}
// 图片懒加载 - 获取url传参参数
function getUrlParam(name) {
    // 用该属性获取页面 URL 地址从问号 (?) 开始的 URL（查询部分）
    var url = window.location.search;
    // 正则筛选地址栏
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    // 匹配目标参数
    var result = url.substr(1).match(reg);
    //返回参数值
    return result ? decodeURIComponent(result[2]) : null;
}
// 公共方法 - 截取字符串后几位
function getString1(str, lengthNum) {
    return str.substr(str.length - lengthNum);
}
// 公共方法 - 截取字符串前几位
function getString2(str, lengthNum) {
    return str.substr(0, lengthNum);
}

// footer - vue实例化
$(function () {
    new Vue({
        el: '#footer',
        data: {
            // 年
            year: new Date().getFullYear(),
            // 资质图片
            zzImg: [
                "images/zz_1.jpeg",
                "images/zz_2.jpeg",
                "images/zz_3.jpeg",
                "images/zz_4.jpeg",
                "images/zz_5.jpeg",
                "images/zz_6.jpeg",
                "images/zz_7.jpg",
                "images/zz_8.jpg",
                "images/zz_9.jpg",
                "images/zz_10.jpg",
                "images/zz_11.jpg",
                "images/zz_12.jpg",
            ]
        },
        // 事件集
        methods: {
            recordNo(){
                window.open('http://beian.miit.gov.cn');
            }
        },
        // 数据监听
        watch: {

        },
        // dom/方法/属性监听
        computed: {},
        // 初始化数据 - 在dom加载完成后
        mounted() {
            
        },
        // 初始化数据 - 在dom加载完成前
        created() {
            let type = 'post';
            let url = this.urlb + "appv1/usdpc1/userLogin";
            let data = {

            }
            // myAjax(type, url, data, res => {

            // });
        }
    })
})

// 封装axios
function myAjax(type, url, data = {}, F) {
    if (type == 'get') {
        axios({
            method: type,
            url: url,
            params: data,
        }).then(res => {
            return F(res);
        },
            err => {
                return err
            })
    } else {
        axios({
            method: type,
            url: url,
            data: data
        }).then(res => {
            return F(res);
        },
            err => {
                return err
            })
    }
}
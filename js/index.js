$(function () {
    new Vue({
        el: '#index',
        data: {
            // 轮播图
            lib: [
                {
                    imgSrc: './images/Glb_1.png'
                },
                {
                    imgSrc: './images/Glb_2.png'
                }
            ],
            // 核心技术
            coreTechnology:[{
                imgSrc:"images/hxjs_1.png",
                title:"短路保护",
                text:"短路时0.04s断电保护采用银动静触点，高等级灭弧材质结构，可在智能电源断开后继续有效。"
            },{
                imgSrc:"images/hxjs_2.png",
                title:"打火断电保护",
                text:"线路接头5s内通断至少10次打火断电"
            },{
                imgSrc:"images/hxjs_3.png",
                title:"漏电保护",
                text:"线路漏电电流达到30mA时， 断路器0.1s断电保护，采用专业漏电电路， 可在智能电源断开后继续有效，"
            },{
                imgSrc:"images/hxjs_4.png",
                title:"过压欠压保护",
                text:"支持过／欠压阀值预警；支持过／欠压阀值断电保护．"
            },{
                imgSrc:"images/hxjs_5.png",
                title:"过流过载保护",
                text:"阀值控制， 及时报警及断路防护，超过额定电流5%, 10s断路， 超过35%,5s断路， 超过100%, 1s断路保护"
            },{
                imgSrc:"images/hxjs_6.png",
                title:"过温保护",
                text:"线路过温70度5s报警，线路过温90度1s断电，"
            },{
                imgSrc:"images/hxjs_7.png",
                title:"电量计量",
                text:"细分各线路用电量"
            },{
                imgSrc:"images/hxjs_8.png",
                title:"手自一体控制",
                text:"支持手动推杆控制通断；支持远程遥控，支待按键自动控制"
            },{
                imgSrc:"images/hxjs_9.png",
                title:"超强分断能力",
                text:"线路漏电流达到30mA时， 断路器0.1s断电保护，采用专业漏电电路， 可在智能电源断开后继续有效。"
            },{
                imgSrc:"images/hxjs_10.png",
                title:"雷击浪涌",
                text:"雷击浪涌最大泄放电流15KA,"
            },{
                imgSrc:"images/hxjs_11.png",
                title:"漏电自动检测",
                text:"阀值控制， 及时报警及断路防护，超过额定电流5%, 10s断路， 超过35%,5s断路， 超过100%, 1s断路保护"
            },{
                imgSrc:"images/hxjs_12.png",
                title:"三相失衡报警",
                text:"当智能用电平台检测到三相电流不平衡度超过报警阀值时，启动报警延时功能。"
            },{
                imgSrc:"images/hxjs_13.png",
                title:"在线检测",
                text:"通过智能用电系统服务平台，客户24小时可以随时、随地通过手机App或Web客户端了解企业用电安全情况"
            },{
                imgSrc:"images/hxjs_14.png",
                title:"app远程监控",
                text:"通过云控智慧用电APP，使用授权的帐号和密码登录，客户可以随时、随地通过手机或上网的电脑了解企业用电安全情况，了解用电系统的安全状态"
            },{
                imgSrc:"images/hxjs_15.png",
                title:"故障报警",
                text:"通过智慧用电系统可以很方便地设置好接收报警的手机APP。通过设置，可将警报信息发送至企业业主、分管安全的责任人手机上。"
            },{
                imgSrc:"images/hxjs_16.png",
                title:"缺相报警",
                text:"当智慧用电监测到电路出现缺相时通过智慧用电app及智慧用电监控设备以声、光形式报警，便于进行实时管理，防范事故、保护电器设备和财产"
            },{
                imgSrc:"images/hxjs_17.png",
                title:"大数据用电分析",
                text:"用户可登录平台随时浏览，也可以根据你的选择，查看单一回路某项参数的历史曲线，对比分析重要负荷的运行状态，对日用电量及日功率峰谷分析"
            },{
                imgSrc:"images/hxjs_18.png",
                title:"故障分析功能",
                text:"通过云控智能用电管理服务平台的大数据服务中心提供异常报警、回路的报警原因分析。"
            }],
            // 合作伙伴
            cooperativePartner:[
                './images/tb_1.jpg',
                './images/tb_2.jpg',
                // './images/tb_3.jpg',
                './images/tb_4.jpg',
                './images/tb_5.jpg',
                './images/tb_6.jpg',
                './images/tb_7.jpg',
                './images/tb_8.jpeg',
                './images/tb_9.jpg',
                './images/tb_10.jpg',
                './images/tb_11.jpg',
                // './images/tb_12.jpg',
                './images/tb_13.png',
                './images/tb_14.jpg',
                './images/tb_15.png',
                // './images/tb_16.jpg',
                // './images/tb_17.jpg',
                // './images/tb_18.png'
            ],
            // 案例展示
            alzs:[{
                title:"北戴河民宿---槐府人家",
                imgSrc:"./images/alzs_1.jpg"
            },{
                title:"河北天粮餐饮管理集团有限公司",
                imgSrc:"./images/alzs_2.jpg"
            },{
                title:"绥中众成中骏汽车车厢制造有限公司众成集团",
                imgSrc:"./images/alzs_3.jpg"
            },{
                title:"秦皇岛旭日家居",
                imgSrc:"./images/alzs_4.jpg"
            },{
                title:"秦皇岛红星美凯龙",
                imgSrc:"./images/alzs_5.jpg"
            },{
                title:"中国石化股份有限河北分公司秦皇岛石油",
                imgSrc:"./images/alzs_6.jpg"
            }]    
        }, 
        // 事件集
        methods: {
            // 跳转 - 产品介绍
            jemlPath1(){
                window.location.href = "productIntroduction.html"; 
            },
            // 跳转 - 案列展示
            jemlPath3(){
                window.location.href = "case.html"; 
            },
            // 跳转 - 关于我们
            jemlPath4(){
                window.location.href = "aboutUs.html"; 
            }
        },
        // 数据监听
        watch: {},
        // dom/方法/属性监听
        computed:{},    
        // 初始化数据 - 在dom加载完成后
        mounted() {},
        // 初始化数据 - 在dom加载完成前
        created() {
            
        }
    })
    new Swiper ('.swiper1', {
        direction: 'horizontal',
        loop: true,
        autoplay:true,
        speed:2000,
        slidesPerView : 4,
        centeredSlides : true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        
        // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
    }) 
})
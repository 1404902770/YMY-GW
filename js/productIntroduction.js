
$(function () {
    new Vue({
        el: '#productIntroduction',
        data: {
            // 浏览器宽度
            fullWidth:document.documentElement.clientWidth,
            // tap位置
            tabPosition: '',    
            // 平台介绍
            ptsj:[{
                title:"短路保护",
                text:"短路时0.04s断电保护采用银动静触点，高等级灭弧材质结构，可在智能电源断开后继续有效。"
            },{
                title:"打火断电保护",
                text:"线路接头5s内通断至少10次打火断电"
            },{
                title:"漏电保护",
                text:"线路漏电电流达到30mA时， 断路器0.1s断电保护，采用专业漏电电路， 可在智能电源断开后继续有效，"
            },{
                title:"过压欠压保护",
                text:"支持过／欠压阀值预警；支持过／欠压阀值断电保护．"
            },{
                title:"过流过载保护",
                text:"阀值控制， 及时报警及断路防护，超过额定电流5%, 10s断路， 超过35%,5s断路， 超过100%, 1s断路保护"
            },{
                title:"过温保护",
                text:"线路过温70度5s报警，线路过温90度1s断电，"
            },{
                title:"电量计量",
                text:"细分各线路用电量"
            },{
                title:"手自一体控制",
                text:"支持手动推杆控制通断；支持远程遥控，支待按键自动控制"
            },{
                title:"超强分断能力",
                text:"线路漏电流达到30mA时， 断路器0.1s断电保护，采用专业漏电电路， 可在智能电源断开后继续有效。"
            },{
                title:"雷击浪涌",
                text:"雷击浪涌最大泄放电流15KA,"
            },{
                title:"漏电自动检测",
                text:"阀值控制， 及时报警及断路防护，超过额定电流5%, 10s断路， 超过35%,5s断路， 超过100%, 1s断路保护"
            },{
                title:"三相失衡报警",
                text:"当智能用电平台检测到三相电流不平衡度超过报警阀值时，启动报警延时功能。"
            },{
                title:"在线检测",
                text:"通过智能用电系统服务平台，客户24小时可以随时、随地通过手机App或Web客户端了解企业用电安全情况"
            },{
                title:"app远程监控",
                text:"通过云控智慧用电APP，使用授权的帐号和密码登录，客户可以随时、随地通过手机或上网的电脑了解企业用电安全情况，了解用电系统的安全状态"
            },{
                title:"故障报警",
                text:"通过智慧用电系统可以很方便地设置好接收报警的手机APP。通过设置，可将警报信息发送至企业业主、分管安全的责任人手机上。"
            },{
                title:"缺相报警",
                text:"当智慧用电监测到电路出现缺相时通过智慧用电app及智慧用电监控设备以声、光形式报警，便于进行实时管理，防范事故、保护电器设备和财产"
            },{
                title:"大数据用电分析",
                text:"用户可登录平台随时浏览，也可以根据你的选择，查看单一回路某项参数的历史曲线，对比分析重要负荷的运行状态，对日用电量及日功率峰谷分析"
            },{
                title:"故障分析功能",
                text:"通过云控智能用电管理服务平台的大数据服务中心提供异常报警、回路的报警原因分析。"
            }],
            // 产品样例
            cpyl:[{
                imgSrc:"images/2P.jpg",
                text:"云控智能2P断路器",
              },{
                imgSrc:"images/3P.jpg",
                text:"云控智能3P断路器",
              },{
                imgSrc:"images/4P.jpg",
                text:"云控智能4P断路器",
              },
            ]         
        },
        // 事件集
        methods: {
            jemlPath(id){
                window.location.href = "productIntroductionInfo.html?id="+ id; 
            }
        },
        // 数据监听
        watch: {
            fullWidth(val) {
                if(val<=768){
                    this.tabPosition = 'top'
                } else if(val>1200){
                    this.tabPosition = 'left'
                }
            }
        },
        // dom/方法/属性监听
        computed: {
           
        },
        // 初始化数据 - 在dom加载完成后
        mounted() {
            if(document.documentElement.clientWidth>1200){
                this.tabPosition = 'left'
            } else {
                this.tabPosition = 'top'
            }
            const that = this
            window.onresize = () => {
                return (() => {
                    that.fullWidth = document.documentElement.clientWidth;
                })()
            }
        },
        // 初始化数据 - 在dom加载完成前
        created() { }
    })

})

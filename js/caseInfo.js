$(function () {
    new Vue({
        el: '#caseInfo',
        data: {
            // 产品介绍 - 产品列表 - id
            id:"",
            // 模拟所有数据
            info:[{
                id:1,
                title:"北戴河民宿---槐府人家",
                imgSrc:"./images/alzs_1.jpg",
                text1:"该民宿具有民族传统文化特色，但因规模小、管理人员少，我们作了智慧用电改造，老板通过手机可直接远程管理提升了管理效能，实现有效节电、并能充分保障了入住游客的安全。老板通过手机可直接远程管理。"
            },{
                id:2,
                title:"河北天粮餐饮管理集团有限公司",
                imgSrc:"./images/alzs_2.jpg",
                text1:"河北天粮餐饮管理集团有限公司，成立于2007年6月30日，致力于服务中小型餐饮创业项目。现有员工600余人，办公场所总面积7000多平米，直营及合作店面300多家。办公大楼人员密集，节电及用电安全问题突出。2019年首先对其用电大户部门进行了改造，月度用电量下降了20%。"
            },{
                id:3,
                title:"绥中众成中骏汽车车厢制造有限公司众成集团",
                imgSrc:"./images/alzs_3.jpg",
                text1:"工业用电安全具有其特殊性，用电场所多、危险系数高、工人用电安全意识较差、应变能力有限等都导致工业电气安全事故的危害格外严重。绥中众成中骏汽车车厢制造有限公司众成集团引入智慧用电一 体化运营平台，突出解决工业用电安全问题。"
            },{
                id:4,
                title:"秦皇岛旭日家居",
                imgSrc:"./images/alzs_4.jpg",
                text1:"商场、家居、建材智慧用电安全与电能监管系统。秦皇岛旭日家居低压配电管理系统；适用于各大商场，对具有高危险的木材，易燃易爆、人流量巨大的场所具有最大化的保障。通过过温过压等方式有效的实时监控用电情况，保障了人员安全和财产安全。"
            },{
                id:5,
                title:"秦皇岛红星美凯龙",
                imgSrc:"./images/alzs_5.jpg",
                text1:"商场、家居、建材智慧用电安全与电能监管系统。秦皇岛旭日家居低压配电管理系统；适用于各大商场，对具有高危险的木材，易燃易爆、人流量巨大的场所具有最大化的保障。通过过温过压等方式有效的实时监控用电情况，保障了人员安全和财产安全。"
            },{
                id:6,
                title:"中国石化股份有限河北分公司秦皇岛石油",
                imgSrc:"./images/alzs_6.jpg",
                text1:"众所周知，石油是易燃易爆，为了降低或把危险系数降到最低，中国石化股份有限河北分公司秦皇岛石油运用智慧云控电力物联网产品，结合一体化运营平台的智能化管理方法，可实现对整个加油站的整体停电、区域停电、数据采集、漏电监测、温度监测、线损监测、三相不平衡等用电故障和安全隐患的实时监测和远程控制，真正实现台区可视化，达到减人增效的目标。"
            }],
            // 模拟当前数据
            qinfo:{
                title:"",
                imgSrc:"",
                text1:""
            }
        },
        // 事件集
        methods: {
            
        },
        // 数据监听
        watch: {
            
        },
        // dom/方法/属性监听
        computed: {},
        // 初始化数据 - 在dom加载完成后
        mounted() {
            this.id = getUrlParam("id");
            for(let i=0;i<this.info.length;i++){
                if(this.id == this.info[i].id){
                    this.qinfo.title = this.info[i].title;
                    this.qinfo.imgSrc = this.info[i].imgSrc;
                    this.qinfo.text1 = this.info[i].text1;
                }
            }
        },
        // 初始化数据 - 在dom加载完成前
        created() { }
    })
})

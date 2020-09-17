$(function () {
    new Vue({
        el: '#case',
        data: {
            list1:[{
                id:1,
                title:"北戴河民宿---槐府人家",
                imgSrc:"./images/alzs_1.jpg"
            },{
                id:2,
                title:"河北天粮餐饮管理集团有限公司",
                imgSrc:"./images/alzs_2.jpg"
            },{
                id:3,
                title:"绥中众成中骏汽车车厢制造有限公司众成集团",
                imgSrc:"./images/alzs_3.jpg"
            },{
                id:4,
                title:"秦皇岛旭日家居",
                imgSrc:"./images/alzs_4.jpg"
            },{
                id:5,
                title:"秦皇岛红星美凯龙",
                imgSrc:"./images/alzs_5.jpg"
            },{
                id:6,
                title:"中国石化股份有限河北分公司秦皇岛石油",
                imgSrc:"./images/alzs_6.jpg"
            }]   
        },
        // 事件集
        methods: {
            jemlPath(id){
                window.location.href = "caseInfo.html?id="+ id; 
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
        created() { }
    })

})

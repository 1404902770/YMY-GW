$(function () {
    new Vue({
        el: '#programme',
        data: {
            list1:[{
                id:1,
                imgSrc: 'http://www.duozhuo.com/uploads/images/service/1527046395.jpeg',
                title:'智能充电桩1',
                text:"多卓物联网为用户提供软件和硬件设备相连控制及扩展功能方案，硬件、软件、培训为一体的完善物联网服务，助力生活、企业改变。"
            },{
                id:2,
                imgSrc: 'http://www.duozhuo.com/uploads/images/service/1527046395.jpeg',
                title:'智能充电桩2',
                text:"多卓物联网为用户提供软件和硬件设备相连控制及扩展功能方案，硬件、软件、培训为一体的完善物联网服务，助力生活、企业改变。"
            },{
                id:3,
                imgSrc: 'http://www.duozhuo.com/uploads/images/service/1527046395.jpeg',
                title:'智能充电桩3',
                text:"多卓物联网为用户提供软件和硬件设备相连控制及扩展功能方案，硬件、软件、培训为一体的完善物联网服务，助力生活、企业改变。"
            },{
                id:4,
                imgSrc: 'http://www.duozhuo.com/uploads/images/service/1527046395.jpeg',
                title:'智能充电桩4',
                text:"多卓物联网为用户提供软件和硬件设备相连控制及扩展功能方案，硬件、软件、培训为一体的完善物联网服务，助力生活、企业改变。"
            }]
        },
        // 事件集
        methods: {
            jemlPath(id){
                window.location.href = "programmeInfo.html?id="+ id; 
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

$(function () {
    new Vue({
        el: '#productIntroductionInfo',
        data: {
            // 产品介绍 - 产品列表 - id
            id:"",
            // 产品介绍 - 产品列表 - 名字
            title:"缴枪不杀"
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
        },
        // 初始化数据 - 在dom加载完成前
        created() { }
    })

})

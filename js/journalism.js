$(function () {
    new Vue({
        el: '#journalism',
        data: {
            fullWidth: document.documentElement.clientWidth,
            tabPosition: '',
            lists: [{
                mame: "公司动态",
                content: [{
                    id: 1,
                    title: "智慧用电，改写电气安全新格局",
                    text: "改革开放的40年，是我国经济发展书写奇迹的40年。在改革开放的大背景下电力工业走出了一条波澜壮阔的改革突破之路，为经济增长和社会进步提供强有力的保障和巨大动力。实现了历史性的大跨越，让整个世界发生了翻天覆地的变化。",
                    time: '2020-04-25'
                }, {
                    id: 2,
                    title: "智慧用电--电老虎时代终结者！",
                    text: "近年来，电气火灾一直呈高发态势。据公安部消防局统计，从已查明原因的火灾看，有10.2万起火灾是由于违反电气安装使用规定引发的，占总数的30.1%，尤其是较大火灾中有56.7%是由于电气原因引发!",
                    time: '2020-04-20'
                }]
            }, {
                mame: "媒体焦点",
                content: [{
                    id: 3,
                    title: "关于公司2020年元旦、春节的放假通知",
                    text: "根据《国务院办公厅关于2020年部分节假日安排的根据《国务院办公厅关于2020年部分节假日安排的通知》的要求，并结合公司实际情况，现将2020年元旦节、春节放假安排通知如下通知》的要求，并结合公司实际情况，现将2020年元旦节、春节放假安排通知如下：",
                    time: '2020-04-27'
                }]
            }, {
                mame: "科技资讯",
                content: [{
                    id: 4,
                    title: "关于公司2020年元旦、春节的放假通知",
                    text: "根据《国务院办公厅关于2020年部分节假日安根据《国务院办公厅关于2020年部分节假日安排的通知》的要求，并结合公司实际情况，现将2020年元旦节、春节放假安排通知如下排的通知》的要求，并结合公司实际情况，现将2020年元旦节、春节放假安排通知如下：",
                    time: '2020-04-27'
                }]
            }]
        },
        // 事件集
        methods: {
            handleClick(tab, event) {
                console.log(tab.label);
            },
            jemlPath(id,tapName) {
                window.open("journalismInfo.html?id=" + id +'&tapName=' +tapName);
            }
        },
        // 数据监听
        watch: {
            fullWidth(val) {
                if (val <= 768) {
                    this.tabPosition = 'top'
                } else if (val > 1200) {
                    this.tabPosition = 'left'
                }
            }
        },
        // dom/方法/属性监听
        computed: {

        },
        // 初始化数据 - 在dom加载完成后
        mounted() {
            if (document.documentElement.clientWidth > 1200) {
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
        created() {

        }
    })

})

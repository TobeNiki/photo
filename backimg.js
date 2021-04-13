Vue.component('back-img1',{
    template:`<img class="backimg" src="./img/NAV_0116.jpg" >`,
});
Vue.component('back-img2',{
    template:`<img class="backimg" src="./img/NAV_0309.jpg">`
});
Vue.component('back-img3',{
    template:`<img class="backimg" src="./img/NAV_0077.jpg">`
});

new Vue({
    el:"#app",
    created:function(){
        let that = this;
        this.interval = setInterval(function(){
            this.flag = !this.flag;
            that.current = (that.current + 1) % that.components.length;
            this.flag = !this.flag;
        },10000);
    },
    beforeDestory:function(){
        clearInterval(this.interval);
    },
    computed:{
        currentImage:function(){
            return 'back-' + this.components[this.current];
        }
    },
    data:{
        flag:true,
        current : 0,
        components : ['img1', 'img2', 'img3']
    }
});
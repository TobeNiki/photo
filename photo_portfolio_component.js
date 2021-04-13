const vueModal = window['vue-js-modal'].default
Vue.use(vueModal);

Vue.component('img-modal',{
    props:{
        title:{
            type:String,
        },
        points:{
            tyoe:String,
        },
        when:{
            type:String,
        },
        name:{
            type:String,
        },
        imgpath:{
            type:String,
        },
        modalname:{
            type:String
        }
    },
    template:`<div><img :src='imgpath' :alt='alt' 
        :title='title' width='30%' height='30%'
        @mouseenter='mouseEnter' @mouseleave='mouseLeave' @click='showModal'>
        <modal :name='modalname' :draggable='true' :resizeable='true' 
        :style="[color, size]" width='700px' height='500px'>
        <div class='modal-header' style='padding: 5px 25px; border-bottom: 1px solid #ddd;'>
        <h2>作品名:{{title}}</h2></div>
        <div class='modal-body' style='padding: 5px 25px;'>
        <p>撮影者:{{name}}</p>
        <p>場所:{{points}}</p>
        <p>撮影日:{{when}}</p>
        <img :src='imgpath' :alt='alt' 
        :title='title' width='70%' height='70%' :style="[position]">
        <button @click='hideModal'>閉じる</button></div>
        </modal>
        <p>{{info}}</p></div>`,
    data:function(){
        return {
            info:'',
            alt:'gazou',
            color:{
                
                color:"Red"
            },
            size:{
                fontSize:"1.2em"
            },
            position:{
                position:"absolute",
                right:"10px",
                top:"100px"
            }
        }
    },
    methods:{
        hideModal:function(){
            this.$modal.hide(this.modalname);
        },
        showModal:function(){
            this.$modal.show(this.modalname)
        },
        mouseLeave:function(){
            this.info = ''
        },
        mouseEnter:function(){
            this.info = `${this.title}(${this.when})`
        },
    }
});


Vue.component('my-hello', {
    props:['yourName'],
    template:`<div>hello, <slot>No Name</slot>!</div>`,
})
new Vue({
    el:'#app'
})
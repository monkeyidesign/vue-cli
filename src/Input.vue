<template>
    <div>
        <p>{{msg}}</p>
<!--        <input type="text" v-model="message">-->
        <input type="text" :value="msg" @input="updateMsg">
        <p>{{ message }}</p>
    </div>
</template>

<script>
    export default {
        props:[
            'msg',
        ],
        data() {
            return {
                message: ''
            }
        },
        methods:{
          updateMsg(event){
            this.message = event.target.value;
            this.$emit('ownEventMessageChanged', this.message);
          }
        }
    }
</script>
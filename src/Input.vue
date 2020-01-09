<template>
    <div>
        <div class="container">
<!--            <input type="text" v-bind:value="propsValue" v-on:input="changeMessage">-->
            <input type="text" :value="propsValue" @input="changeMessage">
            <p>{{parentMsg}}</p>


        </div>
    </div>
</template>

<script>

    export default {
        props:['propsValue'],
        data(){
            return {
                parentMsg: ''
            }
        },
        methods:{
            changeMessage(event){
                this.parentMsg = event.target.value;
                this.$emit('messageChanged', this.parentMsg)
            }
        }
    };
</script>


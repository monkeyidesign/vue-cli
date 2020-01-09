<template>
    <div>
        <h1>{{welcomeMsg}}</h1>
        <app-input :propsValue="parentMsg" @messageChanged="parentMsg = $event"></app-input>

        <p>{{parentMsg}}</p>

    </div>
</template>

<script>
    import Input from './Input.vue';

    export default {
        data() {
            return {
                welcomeMsg: "Hello World",
                parentMsg:'Data Value from database'
            };
        },
        methods: {
            setMessage(msg) {
                this.welcomeMsg = msg;
            }
        },
        components: {
            'app-input': Input
        }
    };
</script>




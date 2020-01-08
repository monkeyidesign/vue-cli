<template>
    <div>
        <h1>{{ message }}</h1>
        <app-input :msg="message"></app-input>
    </div>
</template>

<script>
    import Input from './Input.vue';

    export default {
        data() {
            return {
                message: 'Message From Message'
            }
        },
        components: {
            'app-input': Input
        }
    }
</script>
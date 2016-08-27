<template>
    <div>
        <display></display>
        <increment></increment>
    </div>
</template>

<script>
    import store from './vuex/store'

    export default {
        store,
        components: {
            display: require('./components/display'),
            increment: require('./components/increment')
        }
    }
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
    }
</style>

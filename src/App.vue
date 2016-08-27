<template>
    <div>
        <display></display>
        <increment></increment>
    </div>
</template>

<script>
    export default {
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

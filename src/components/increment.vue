<template>
    <button @click="increment">Increment +1</button>
</template>
<script>
    import {incrementCounter} from '../vuex/actions'

    export default {
        vuex: {
            actions: {
                increment: incrementCounter
            }
        },
        data() {
            return {}
        }
    }
</script>
<style>

</style>

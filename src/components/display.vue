<template>
    <div>
        <h3>Count is {{count}}</h3>
    </div>
</template>
<script>
    export default {
        vuex: {
            getters: {
                count: state => state.count
            }
        },
        data() {
            return {}
        }
    }
</script>
<style>

</style>

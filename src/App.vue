<template>
    <div class="app">
        <h2>todos</h2>
        <input type="text" v-model="todo" @keyup.enter="addTodo(todo)">
        <list></list>
    </div>
</template>

<script>
    import store from './vuex/store'
    import {addTodo} from './vuex/actions'

    export default {
        store,
        vuex: {
            actions: {
                addTodo
            }
        },
        data() {
            return {
                todo: ''
            }
        },
        components: {
            list: require('./components/list')
        }
    }
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
    }

    ul,
    li {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .app {
        width: 500px;
        margin: 0 auto;
    }


</style>

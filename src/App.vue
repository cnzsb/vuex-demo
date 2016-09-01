<template>
    <div class="app">
        <h1>todos</h1>
        <input class="input" type="text" v-model="todo" @keyup.enter="addTodo(todo)" placeholder="add todos">
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

    .app .input {
        width: 100%;
        height: 40px;
        padding: 10px;
        font-size: 30px;
    }
</style>

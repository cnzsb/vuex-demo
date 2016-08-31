<template>
    <div class="app">
        <h2>todos</h2>
        <input type="text" v-model="todo" @keyup.enter="upTodo(todo)">
        <list></list>
    </div>
</template>

<script>
    import store from './vuex/store'
    import {upTodo} from './vuex/actions'

    export default {
        store,
        vuex: {
            getters: {
                todos({todos})
                {
                    return todos
                }
            },
            actions: {
                upTodo
            }
        },
        data() {
            return {
                todo: ''
            }
        },
        watch: {
            todo() {
                console.log(this.upTodo)
            }
        },
        methods: {},
        components: {
            list: require('./components/list')
        }
    }
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
    }

    .app {
        width: 500px;
        margin: 0 auto;
    }


</style>

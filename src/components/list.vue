<template>
    <ul class="list" v-show="todos.length">
        <li class="title">
            <span class="time">Time</span>
            <span class="todo">TODO</span>
        </li>
        <li class="item" v-for="todo in todos">
            <p class="content" :class="{del: todo.done}"><span class="time">{{todo.time}}</span><span class="todo">{{todo.text}}</span></p>
            <button class="done" @click="toggleTodo(todo)">√</button><button class="del" @click="delTodo(todo)">X</button>
        </li>
    </ul>
</template>
<script>
    import {delTodo, toggleTodo} from '../vuex/actions'

    export default {
        vuex: {
            getters: {
                todos({todos}) {
                    return todos
                }
            },
            actions: {
                delTodo,
                toggleTodo
            }
        },
        data() {
            return {}
        }
    }
</script>
<style scoped>
    .list .item .content {
        display: inline-flex;
        position: relative;
    }

    .list .item .content.del::after {
        content: '';
        position: absolute;
        top: calc(50% - 1px);
        left: 0;
        right: 0;
        height: 1px;
        background-color: #ccc;
    }

    .list .title,
    .list .time {
        margin-right: 10px;
        color: #333;
    }

    .list .time {
        display: inline-block;
        width: 90px;
    }

    .list .todo {
        display: inline-block;
        width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>

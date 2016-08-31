<template>
    <ul class="list" v-show="todos.length">
        <li class="title">
            <span class="time">Time</span>
            <span class="todo">TODO</span>
        </li>
        <li class="item" v-for="todo in todos">
            <span class="time">{{todo.time}}</span><span class="todo">{{todo.todo}}</span>
        </li>
    </ul>
</template>
<script>
    export default {
        vuex: {
            getters: {
                todos({todos}) {
                    return todos
                }
            }
        },
        data() {
            return {}
        }
    }
</script>
<style scoped>
    .list .title,
    .list .time {
        margin-right: 10px;
        color: lightslategrey;
    }

    .list .time {
        display: inline-block;
        width: 90px;
    }

    .list .todo {
        display: inline-block;
        width: 300px;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>

<template>
    <div class="list-wrap" v-show="todos.length">
        <p class="status">
            <label><input type="radio" name="status" value="all" v-model="status">全部({{todos.length}})</label>
            <label><input type="radio" name="status" value="active" v-model="status">进行中({{active}})</label>
            <label><input type="radio" name="status" value="done" v-model="status">已完成({{done}})</label>
            <button type="button" v-text="status === 'done' ? '全部标记为未完成' : '全部标记为已完成'"
                    @click="status === 'done' ? toggleAll(false) : toggleAll(true)"></button>
            <button type="button" @click="clearCompleted">删除已完成</button>
        </p>
        <ul class="list">
            <li class="title">
                <span class="time">Time</span>
                <span class="todo">TODO</span>
            </li>
            <li class="item" :class="{hidden: (status === 'active' && todo.done) || (status === 'done' && !todo.done)}"
                v-for="todo in todos">
                <p class="content" :class="{del: todo.done}">
                    <span class="time">{{todo.time}}</span>
                    <span class="todo">{{todo.text}}</span>
                </p>
                <button class="done" @click="toggleTodo(todo)">√</button>
                <button class="del" @click="delTodo(todo)">X</button>
            </li>
        </ul>
    </div>
</template>
<script>
    import {delTodo, toggleTodo, toggleAll, clearCompleted} from '../vuex/actions'

    export default {
        vuex: {
            getters: {
                todos({todos}) {
                    return todos
                }
            },
            actions: {
                delTodo,
                toggleTodo,
                toggleAll,
                clearCompleted
            }
        },
        data() {
            return {
                status: 'all'
            }
        },
        computed: {
            active() {
                return this.todos.filter(todo => {
                    return !todo.done
                }).length
            },
            done() {
                return this.todos.length - this.active
            }
        }
    }
</script>
<style scoped>
    .list .item.hidden {
        display: none;
    }

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

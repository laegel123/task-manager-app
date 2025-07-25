<template>
    <div>
        <h1>Task Page</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>UserID</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="task in taskStore.taskList" :key="task.id">
                    <td>{{task.id}}</td>
                    <td>{{task.userId}}</td>
                    <td>
                        <router-link :to="`/task/${task.id}`">
                            {{ task.title }}
                        </router-link>
                    </td>
                    <td>{{task.completed}}</td>
                </tr>
            </tbody>
        </table>
        <p v-if="taskStore.taskList.length === 0">No tasks available.</p>

        <br />
        <button @click="goNewTask">new Task</button>
    </div>
</template>

<script>
import { useTaskStore } from '../store/taskStore'

export default {
    name: 'TaskItemCompo',
    data(){
        return{
            taskStore:useTaskStore()
        }
    },
    methods: {
        goNewTask() {
            this.taskStore.init();
            this.$router.push('/task/0');
        }
    }
}
</script>

<style>

</style>
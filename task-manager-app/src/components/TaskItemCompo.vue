<template>
    <div>
        <h1>Task Page</h1>
        <h2>Edit Task</h2>
        <form @submit.prevent="submitHandler">
            <label>Title :</label>
            <input type="text" v-model="taskStore.task.title" />
            <br />

            <label>UserId :</label>
            <input type="text" v-model="taskStore.task.userId" />
            <br />

            <label>Completed :</label>
            <input type="checkbox" v-model="taskStore.task.completed" />

            <button type="summit">Save</button>
        </form>


        <button v-if="this.route.params.id > 0" @click="deleteHandler">Delete</button>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useTaskStore } from '../store/taskStore'
export default {
    name: 'TaskItemCompo',
    data() {
        return{
            route: useRoute(),
            taskStore: useTaskStore()
        }
    },
    created() {
        const taskStore = useTaskStore(); 
        if (this.route.params.id > 0) {
            taskStore.loadTaskDataById(this.route.params.id);
        }
    },
    methods: {
        submitHandler() {
            if (this.route.params.id == 0) {
                this.taskStore.createTask().then(() => {
                    alert('Task created successfully!');
                }).catch(() => {
                    alert('Failed to create task.');
                });
            } else {
                this.taskStore.updateTask().then(() => {
                    alert('Task updated successfully!');
                }).catch(() => {
                    alert('Failed to update task.');
                });
            }
        },
        deleteHandler() {
            this.taskStore.deleteTask(this.route.params.id).then(() => {
                alert('Task deleted successfully!');
                this.$router.push('/');
            }).catch(() => {
                alert('Failed to delete task.');
            });
        }
    }
}
</script>

<style>

</style>
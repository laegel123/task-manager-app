import httpServices from "@/services/httpServices";
import { defineStore } from "pinia";

export const useTaskStore = defineStore('task',{
    state: ()=>({
        taskList: [],
        task: { id: 0, userId: '', title: '', completed: false },
    }),
    actions: {
        init() {
            this.task = { id: 0, userId: '', title: '', completed: false };
        },
        setTaskList(newTaskList) {
            this.taskList = newTaskList;
        },
        setTask(newTask) {
            this.task = newTask;
        },

        // GET
        async loadTaskData() {
            const res = (await httpServices.getData('todos?_limit=10')).data;
            this.setTaskList(res);
        },
        async loadTaskDataById(id) {
            const res = (await httpServices.getData(`todos/${id}`)).data;
            this.setTask(res);
        },

        // PUT
        async updateTask() {
            const data = {
                id: this.task.id,
                userId: this.task.userId,
                title: this.task.title,
                completed: this.task.completed
            }

            const res = (await httpServices.putData(`todos/${this.task.id}`, data)).data;
            this.setTask(res);
        },

        // POST
        async createTask() {
            const data = {
                userId: this.task.userId,
                title: this.task.title,
                completed: this.task.completed
            }

            const res = (await httpServices.postData('todos', data)).data;
            this.setTask(res);
        },

        // DELETE
        async deleteTask() {
            await httpServices.deleteData(`todos/${this.task.id}`);
            this.setTask({ id: 0, userId: 0, title: '', body:'', completed: false });
        }
    },
})
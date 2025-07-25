import { createWebHistory, createRouter } from "vue-router";
import TaskList from "../components/TaskListCompo.vue";
import TaskItem from "../components/TaskItemCompo.vue";
import About from "../components/AboutCompo.vue";

const routes = [
    {
        path:"/",
        name:"home",
        component:TaskList
    },
    {
        path:"/task/:id",
        name:"task",
        component:TaskItem
    },
    {
        path:"/about",
        name:"about",
        component:About
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;
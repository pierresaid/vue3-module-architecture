import type { Todo } from "@/types/todo"
import { todosApi } from "./TodoApi"


export const todosService = {
    async getTodos() {
        return todosApi.get<Todo[]>('/todos')
    },
}
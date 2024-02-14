import { ref } from 'vue'
import { defineStore } from 'pinia'
import { todosService } from '@/services/todos/TodoService'
import type { Todo } from '@/types/todo'

export const useTodoStore = defineStore('todos', () => {
  const todos = ref<Todo[]>([])
  const loading = ref(true)

  async function loadTodos() {
    loading.value = true
    await new Promise(resolve => setTimeout(resolve, 1000))
    const res = await todosService.getTodos()
    todos.value = res
    loading.value = false
  }
  return { todos, loading, loadTodos }
})

<script setup lang="ts">
import { onMounted } from 'vue';
import TodoItem from '../components/TodoItem.vue';
import { useTodoStore } from '../stores/todos';
import Skeleton from 'primevue/skeleton';

const store = useTodoStore();


onMounted(() => {
    store.loadTodos();
});

function onDelete(id: number) {
    store.todos = store.todos.filter((todo) => todo.id !== id);
}
</script>

<template>
    <h1>
        Todos
    </h1>
    <Transition name="fade" mode="out-in">
        <div v-if="store.loading" class="flex gap-2 flex-col">
            <Skeleton width="100%" height="50px" />
            <Skeleton width="100%" height="50px" />
            <Skeleton width="100%" height="50px" />
        </div>
        <div class="flex gap-2 flex-col" v-else>
            <TodoItem v-for="(todo, i) in store.todos" :key="todo.id" v-model="store.todos[i]" @delete="onDelete(todo.id)" />
        </div>
    </Transition>
</template>


<style>
/* fade transition vue */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
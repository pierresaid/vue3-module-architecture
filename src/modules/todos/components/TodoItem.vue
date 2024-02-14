<script setup lang="ts">
import type { Todo } from '@/types/todo';
import InputText from 'primevue/inputtext';

const model = defineModel<Todo>({required: true});
const emit = defineEmits<{delete: []}>();
</script>

<template>
    <div>
        <InputText v-model="model.title" />
        <button class="ml-2" @click="emit('delete')">Delete</button>
    </div>
</template>
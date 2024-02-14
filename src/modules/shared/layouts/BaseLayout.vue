<script lang="ts" setup>
import Menubar from 'primevue/menubar';
import { useUserStore } from '../stores/user';
const userStore = useUserStore();
</script>


<template>
    <Menubar>
        <template #start>
            <div class="flex align-items-center gap-2">
                <img alt="logo" src="/logo.svg" width="40" />
                <span>Vue 3</span>
            </div>
        </template>
        <template #end>
            <div class="flex align-items-center gap-2">
                <span>{{ userStore.user?.name }}</span>
                <button @click="">Logout</button>
            </div>
        </template>
    </Menubar>
    <div class="container">
        <slot></slot>
    </div>
</template>


<style>
.container {
    padding: 20px;
}
</style>

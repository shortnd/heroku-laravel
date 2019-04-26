<template>
    <layout>
        <div class="container">
            <template v-if="tasks">
                <div v-for="task in tasks" :key="task.id">
                    <inertia-link :href="`/tasks/${task.id}`">{{ task.title }}</inertia-link>
                </div>
            </template>
            <template v-else>
                <h2 class="text-center">No Tasks</h2>
            </template>
        </div>
    </layout>
</template>

<script>
import Layout from '@/Shared/Layout'
import { InertiaLink } from 'inertia-vue'
export default {
    props: ['tasks'],
    metaInfo: {
        title: 'All Tasks'
    },
    components: {
        Layout,
        InertiaLink
    }
}
</script>

<style>

</style>

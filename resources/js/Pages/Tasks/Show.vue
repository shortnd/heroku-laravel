<template>
    <layout>
        <div class="container">
            <h2>{{ task.title }}</h2>

            <div>
                {{ task.body }}
            </div>

            <div class="row mt-4" v-if="entries">
                <div class="col-md-12">
                    <ul>
                        <li v-for="entry in entries" :key="entry.id">
                            {{ entry.body }}
                        </li>
                    </ul>
                    <nav>
                        <inertia-link :href="`/tasks/${task.id}/new-entry`">Add New Entry</inertia-link>
                    </nav>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
import Layout from '@/Shared/Layout'
import { InertiaLink } from 'inertia-vue'
export default {
    props: ['task', 'entries'],
    components: {
        Layout,
        InertiaLink,
    }
}
</script>

<style>

</style>

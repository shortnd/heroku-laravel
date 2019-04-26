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
                            {{ entry.body }} - <a href="#" class="btn-link" @click.prevent="deleteEntry(entry.id)">delete</a>
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
import { InertiaLink, Inertia } from 'inertia-vue'
import axios from 'axios'

export default {
    props: ['task', 'entries'],
    metaInfo: {
        title: 'Task'
    },
    components: {
        Layout,
        InertiaLink,
    },
    methods: {
        deleteEntry(id) {
            axios.delete(`/tasks/${this.task.id}/${id}`)
                .then(({ request }) => {
                    Inertia.replace(`/tasks/${this.task.id}`,
                    {preserveScroll: true})
                }).catch(({ response }) => console.log(response))
        }
    },
    computed: {

    }
}
</script>

<style>

</style>

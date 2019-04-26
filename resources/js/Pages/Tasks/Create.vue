<template>
    <layout>
        <div class="container">
            <form @submit.prevent="createTask">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" v-model="form.title" id="title" class="form-control">
                </div>
                <div class="form-group">
                    <label for="body">Body</label>
                    <textarea v-model="form.body" id="body" cols="30" rows="10" class="form-control"></textarea>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Add Task</button>
                </div>
            </form>
        </div>
    </layout>
</template>

<script>
import Layout from '@/Shared/Layout'
import axios from 'axios'
import { Inertia } from 'inertia-vue'

export default {
    props: ['errors'],
    metaInfo: {
        title: 'Create new Task'
    },
    data() {
        return {
            form : {
                title: null,
                body: null
            },
        }
    },
    components: {
        Layout
    },
    methods: {
        createTask() {
            Inertia.post('/tasks', this.form)
        }
    }
}
</script>

<style>

</style>

<template>
    <layout>
        <div class="container">
            <div v-if="errors" class="alert alert-danger">
                <ul>
                    <li v-for="(error, index ) in errors" :key="index">
                        {{ error[0] }}
                    </li>
                </ul>
            </div>
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
    data() {
        return {
            form : {
                title: null,
                body: null
            },
            errors: null
        }
    },
    components: {
        Layout
    },
    methods: {
        createTask() {
            axios.post('/tasks', this.form)
            .then(() => Inertia.visit('/tasks'))
            .catch(({ response }) => {
                if (response.status === 422) {
                    this.errors = response.data.errors
                }
            })
        }
    }
}
</script>

<style>

</style>

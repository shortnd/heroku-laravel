<template>
    <layout>
        <div class="container">
            <h2>New Entry</h2>
            <div v-if="errors" class="alert alert-danger">
                <ul>
                    <li v-for="(e, index) in errors" :key="index">
                        {{ e[0] }}
                    </li>
                </ul>
            </div>
            <form>
                <div class="form-group">
                    <label for="body">Body</label>
                    <textarea @keyup.enter="addEntry" v-model="form.body" id="body" cols="30" rows="10" class="form-control"></textarea>
                </div>
                <div class="form-group mb0">
                    <button @click.prevent="addEntry" class="btn btn-primary">Add Entry</button>
                </div>
            </form>
        </div>
    </layout>
</template>

<script>
import Layout from '@/Shared/Layout';
import axios from 'axios';
import {Inertia} from 'inertia-vue';
export default {
    props: ['task'],
    data() {
        return {
            errors: null,
            form: {
                body: null,
            }
        }
    },
    components: {
        Layout,
        Inertia
    },
    methods: {
        addEntry() {
            axios.post(`/tasks/${this.task.id}/new-entry`, this.form)
            .then(({ request }) => {
                Inertia.visit(request.responseURL)
            })
            .catch(({response}) => {
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

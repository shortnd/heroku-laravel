<template>
    <layout>
        <div class="container">
            <h2>New Entry</h2>
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
import { Inertia } from 'inertia-vue';
export default {
    props: ['task'],
    data() {
        return {
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
            Inertia.post(`/tasks/${this.task.id}/new-entry`, this.form)
        },
    }
}
</script>

<style>

</style>

<template>
    <layout>
        <div class="container">
            <div class="row justify-content-center">
                <div class="alert alert-danger" v-if="hasErrors">
                    <ul>
                        <li v-for="(e, index) in errors" :key="index">
                            {{ e }}
                        </li>
                    </ul>
                </div>
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Register</div>
                        <div class="card-body">
                            <form @submit.prevent="register">
                                <div class="form-group row">
                                    <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
                                    <div class="col-md-6">
                                        <input type="text" v-model="form.name" id="name" class="form-control" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>
                                    <div class="col-md-6">
                                        <input type="email" v-model="form.email" id="email" class="form-control" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                    <div class="col-md-6">
                                        <input type="password" v-model="form.password" id="password" class="form-control" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>
                                    <div class="col-md-6">
                                        <input type="password" v-model="form.password_confirmation" id="password-confirm" class="form-control" required>
                                    </div>
                                </div>
                                <div class="form-group row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-primary">
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
import Layout from '@/Shared/Layout'
import axios from 'axios'

export default {
    components: {
        Layout
    },
    data() {
        return {
            form: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null,
            },
            errors: null,
        }
    },
    methods: {
        register() {
            axios.post('/register', this.form)
                .then(({ response }) => {
                    console.log(response)
                }).catch(({ response }) => {
                    if (response.status === 422) {
                        this.errors = response.data.errors
                    }
                })
        }
    },
    computed: {
        hasErrors() {
            return !!this.errors
        }
    }
}
</script>

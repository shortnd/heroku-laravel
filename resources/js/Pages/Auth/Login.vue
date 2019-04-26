<template>
    <layout>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Login</div>
                        <div class="card-body">
                            <div v-if="hasErrors" class="alert alert-danger">
                                <ul>
                                    <li v-for="(er, index) in getErrors" :key="index">
                                        {{ er[0] }}
                                    </li>
                                </ul>
                            </div>
                            <form @submit.prevent="handleLogin">
                                <div class="form-group row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address:</label>

                                    <div class="col-md-6">
                                        <input type="email" v-model="form.email" id="email" required autofocus class="form-control">
                                    </div>
                                </div><!--/.form-group-->

                                <div class="form-group row">
                                    <label for="password" class="col-md-4 text-md-right">Password:</label>

                                    <div class="col-md-6">
                                        <input type="password" v-model="form.password" id="password" class="form-control" required>
                                    </div>
                                </div><!--/.form-group-->

                                <div class="form-group row">
                                    <div class="col-md-6 offset-md-4">
                                        <input type="checkbox" v-model="form.remember" id="remember" class="form-check-input">

                                        <label class="form-check-label" for="remember">Remember Me</label>
                                    </div>
                                </div><!--/.form-group.row-->

                                <div class="form-group row mb-0">
                                    <div class="col-md-8 offset-md-4">
                                        <button type="submit" class="btn btn-primary">Login</button>

                                        <inertia-link href="/password/reset" class="btn btn-link">Forgot Your Password?</inertia-link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div><!--/.card-->
                </div><!--/.col-md-8-->
            </div><!--/.row.justify-content-center-->
        </div><!--/.container-->
    </layout>
</template>

<script>
import axios from 'axios'
import Layout from '@/Shared/Layout'
import { InertiaLink, Inertia } from 'inertia-vue'
export default {
    metaInfo: {
        title: 'Login',
    },
    data() {
        return {
            form: {
                email: null,
                password: null,
                remember: false,
            },
            errors: null,
        }
    },
    components: {
        Layout,
        InertiaLink
    },
    methods: {
        handleLogin() {
            Inertia.post('/login', this.form)
        }
    },
    computed: {
        hasErrors() {
            return !!this.errors
        },
        getErrors() {
            return this.errors
        },
    }
}
</script>

<style>

</style>

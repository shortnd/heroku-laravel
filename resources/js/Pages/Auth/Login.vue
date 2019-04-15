<template>
    <layout>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Login</div>
                        <div class="card-body">
                            <form @submit.prevent="handleLogin">
                                <div class="form-group row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address:</label>

                                    <div class="col-md-6">
                                        <input type="email" v-model="email" id="email" required autofocus class="form-control">
                                    </div>
                                </div><!--/.form-group-->

                                <div class="form-group row">
                                    <label for="password" class="col-md-4 text-md-right">Password:</label>

                                    <div class="col-md-6">
                                        <input type="password" v-model="password" id="password" class="form-control" required>
                                    </div>
                                </div><!--/.form-group-->

                                <div class="form-group row">
                                    <div class="col-md-6 offset-md-4">
                                        <input type="checkbox" v-model="remember" id="remember" class="form-check-input">

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
    data() {
        return {
            email: null,
            password: null,
            remember: false,
        }
    },
    components: {
        Layout,
        InertiaLink
    },
    methods: {
        handleLogin() {
            axios.post('/login', {
                email: this.email,
                password: this.password,
                remember: this.remember
            }).then((response) => {
                Inertia.visit(`${response.request.responseURL}`)
            }).catch((res) => console.error(res) )
        }
    }
}
</script>

<style>

</style>

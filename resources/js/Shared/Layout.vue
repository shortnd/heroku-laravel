<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
            <div class="container">
                <inertia-link href="/" class="navbar-brand">
                {{ page.props.app.name }}
                </inertia-link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <!-- Left Side of Navbar -->
                        <ul class="navbar-nav mr-auto">

                        </ul>

                        <ul class="navbar-nav ml-auto">
                            <template v-if="guest">
                                <li class="nav-item">
                                    <inertia-link href="/login" class="nav-link">Login</inertia-link>
                                </li>
                                <li class="nav-item">
                                    <inertia-link href="/register" class="nav-link">register</inertia-link>
                                </li>
                            </template>
                            <template v-else>
                                <li class="nav-item">
                                    <inertia-link href="/tasks/create" class="nav-link">Add Task</inertia-link>
                                </li>
                                <li class="nav-item dropdown">
                                    <a href="#" id="navbarDropdown" class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expaned="false" >
                                        {{ page.props.auth.user.name }} <span class="caret"></span>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" @click.prevent="logout">Logout</a>
                                    </div>
                                </li>
                            </template>
                        </ul>
                    </div><!--/.collapse.navbar-collapse-->
            </div>
        </nav><!--/.navbar.navbar-expand-md.navbar-light.navbar-laravel-->

        <main class="py-4">
            <slot/>
        </main>
    </div>
</template>

<script>
import axios from 'axios'
import { InertiaLink, Inertia } from 'inertia-vue'
export default {
    inject: ['page'],
    components: { InertiaLink },
    methods: {
        logout() {
            axios.post('/logout')
            .then(() => Inertia.visit('/'))
            .catch((e) => console.error(e))
        }
    },
    computed: {
        guest() {
            return this.page.props.auth.user === null
        }
    }
}
</script>

<style>

</style>

<template>
    <layout>
        <div class="container">
            <h2>{{ task.title }}</h2>

            <div>
                {{ task.body }}
            </div>
        </div>
    </layout>
</template>

<script>
import Layout from '@/Shared/Layout'
export default {
    props: ['task'],
    components: {
        Layout
    }
}
</script>

<style>

</style>

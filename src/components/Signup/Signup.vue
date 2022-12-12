<script setup>
import { ref } from 'vue';

let name = ref('');
let email = ref('');
let pass = ref('')
</script>

<template>
    <form @submit.prevent>
        <div class="row g-3 align-items-center">
            <h1>Sign Up</h1>
            <div class="col-auto d-block mx-auto">
                <input type="text" v-model="name" placeholder="Enter your name" class="form-control" />
            </div>
        </div>
        <br />
        <div class="row g-3 align-items-center">
            <div class="col-auto d-block mx-auto">
                <input type="email" v-model="email" placeholder="Enter your name" class="form-control" />
            </div>
        </div>
        <br />
        <div class="row g-3 align-items-center">
            <div class="col-auto d-block mx-auto">
                <input type="password" v-model="pass" placeholder="Enter your name" class="form-control" />
            </div>
        </div>
        <br />
        <div class="row g-3 align-items-center">
            <div class="col-auto d-block mx-auto">
                <button type="submit" class="btn btn-primary">Sign Up Now</button>
            </div>
        </div>
    </form>
</template>
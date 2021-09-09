<template>
    <!-- <app-alert 
        v-if="alert" 
        title="Работаем с Composition" 
        type="danger"
        @close="close"
    ></app-alert> -->
    <div class="card">
        <h1>Vue Composition Api</h1>
        <small>data, methods, computed, watch</small>
        <hr>
        

        <div class="form-control">
            <!-- <input type="text" ref="textInput"> -->
            <input type="text" v-model="firstName">
        </div>

        <button class="btn" @click="change">Изменить</button>
        <button class="btn danger" @click="toggle">Alert</button>
    </div>

    <frame-work-info 
    @change-version="changeVersion"
    class="test-from-app"
    >
    <template #footer>
    <p>This is footer</p>
    </template>
    </frame-work-info>
</template>

<script>
import AppAlert from '../AppAlert.vue'
import FrameWorkInfo from '../FrameWorkInfo.vue'
import {onBeforeMount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, onBeforeUnmount, provide, reactive, ref, watch} from 'vue'


export default {
    setup() {
        const name = ref('VueJS')
        const version = ref(3)
        const textInput = ref(null)
        const firstName = ref('')



        const framefork = reactive({
        name: 'VueJs',
        version: 3
        })

        onBeforeMount(() => {
        console.log('onBeforeMount')
        })

        onMounted(() => {
        console.log('onMounted');
        })

        onBeforeUpdate(() => {
        console.log('onBeforeUpdate');
        })

        onUpdated(() => {
        console.log('onUpdated');
        })

        onBeforeUnmount(() => {
        console.log('onBeforeUnmount');
        })

        onUnmounted(() => {
        console.log('onUnmounted');
        })

        watch(firstName, (newV, oldV) => {
            console.log(newV)
            console.log(oldV)
        })

        function changeInfo() {
        name.value = 'Vue JS !'
        version.value = 42
        }

        function changeVersion(num) {
        version.value = num
        }

        provide('name', name)
        provide('version', version)

        return {
        change: changeInfo,
        firstName,
        changeVersion,
        }
    },
    components: {
        FrameWorkInfo, AppAlert
    }
}
</script>

<style>

</style>
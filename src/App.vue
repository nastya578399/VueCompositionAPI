<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>
      <hr>
      

      <div class="form-control">
        <!-- <input type="text" ref="textInput"> -->
        <input type="text" v-model="firstName">
      </div>

      <button class="btn" @click="change">Изменить</button>
    </div>
    <frame-work-info 
    :name="name" 
    :version="version"
    @change-version="changeVersion"
    ></frame-work-info>

  </div>
</template>

<script>
import {ref, 
reactive, 
toRefs, 
isRef, 
isReactive, 
computed,
watch
} from 'vue'
import FrameWorkInfo from './FrameWorkInfo.vue'

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

    // const doubleVersion = computed(() => {
    //   return version.value * 2
    // })



    // watch(doubleVersion, (newValue, oldValue) => {
    //   console.log('new', newValue)
    //   console.log('old', oldValue)
    // })

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

    return {
      name,
      version,
      change: changeInfo,
      firstName,
      changeVersion
    }
  },
  components: {
    FrameWorkInfo
  }
}
</script>
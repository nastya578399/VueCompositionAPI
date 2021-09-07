<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>
      <hr>
      <p>Название: <strong>{{ name }}</strong></p>
      <p>Версия: <strong>{{ version }} ({{ doubleVersion }})</strong></p>

      <button class="btn" @click="change">Изменить</button>
    </div>
  </div>
</template>

<script>
import {ref, reactive, toRefs, isRef, isReactive, computed} from 'vue'

export default {
  setup() {
    const name = ref('VueJS')
    const version = ref(3)


    const framefork = reactive({
      name: 'VueJs',
      version: 3
    })

    const doubleVersion = computed(() => {
      return version.value * 2
    })


    console.log(isRef(doubleVersion))
    console.log(doubleVersion.value)


    function changeInfo() {
      name.value = 'Vue JS !'
      version.value = 42
      // framefork.name = 'Vue JS !'
      // framefork.version = 42
    }

    return {
      name: name,
      version: version,
      change: changeInfo,
      doubleVersion
    }
  }
  // data() {
  //   return {
  //     name: 'VueJS',
  //     version: 3
  //   }
  // },
  // methods: {
  //   changeInfo() {
  //     this.name = 'Vue JS!'
  //     this.version = 4
  //   }
  // }
}
</script>
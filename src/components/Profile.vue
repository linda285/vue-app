<template>
  <div>
    <span> </span>
    <button @click="updateProfile">Change the name</button>
  </div>
</template>
<script>

import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters(['name'])
  },
  methods: {
    ...mapMutations(['setName']),
    ...mapActions(['updateProfile'])
  }
}
</script>
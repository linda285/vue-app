<template>
  <div>
    <item v-for="(item, index) in tasks" :key="index" :task="item"></item>
  </div>
</template>
<script>
import Item from './Item'
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  props: ['tasks'],
  // computed: {
  //   // ...mapGetters(['name'])
  // },
  components: {
    Item
  },
  // methods: {}
}
</script>
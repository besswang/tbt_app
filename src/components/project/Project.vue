<template>
  <div class="home" style="margin-top:46px;">
    <x-header :left-options="{showBack: false}" style="width:100%;position:absolute;left:0;top:0;z-index:100;">项目</x-header>
    <w-list ref="projextList"></w-list>
  </div>
</template>

<script>
  import { XHeader } from 'vux'
  import WList from '../Common/List.vue'
export default {
  name:'Home',
  components: {
    XHeader,
    WList
  },
  data () {
    return {

    }
  },
  methods: {
    parentMethod() {
      this.$refs.projextList.goParticulars();
    }
  }
}
</script>
<style scoped>

</style>

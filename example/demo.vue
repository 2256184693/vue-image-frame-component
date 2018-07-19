<template>
  <div class="abc">
    <image-box :width="400" :height="200" :url="url"></image-box>
  </div>
</template>

<script>
  // import imageBox from '../src/main.vue';
  import imageBox from 'vue-image-frame-component';
  export default {
    data() {
      return {
        url: 'http://img3.duitang.com/uploads/item/201508/07/20150807082213_AcdWu.jpeg',
      };
    },
    components: {
      imageBox: imageBox,
    }
  }
</script>

<style scoped>

</style>
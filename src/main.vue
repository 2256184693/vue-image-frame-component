<template>
  <div class="vue-image-frame" :class="frameClass" :style="frameStyle">
    <img v-show="show" ref="el" :src="url" alt="" class="vue-image-frame__inner">
  </div>
</template>

<script>
export default {
  name: 'VueImageFrame',

  data() {
    return {
      show: false,
      imageWidth: 0,
      imageHeight: 0,
    };
  },

  props: {
    url: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 160
    },
    height: {
      type: Number,
      default: 120
    }
  },

  computed: {
    frameStyle: function() {
      if(this.width && this.height){
        return {
          width: this.width + 'px',
          height: this.height + 'px'
        };
      }
      return {};
    },
    frameClass: function() {
      if(this.width >= this.imageWidth && this.height >= this.imageHeight) {
        return 'vue-image-frame-center';
      }
      let _temp = (this.width / this.height) > (this.imageWidth / this.imageHeight);
      return {
        'vue-image-frame-thin': _temp,
        'vue-image-frame-flat': !_temp
      }
    }
  },

  watch: {},

  methods: {
    init() {
      var _t = this;
      const el = _t.$refs.el;
      el.onload = function() {
        _t.imageWidth = el.naturalWidth;
        _t.imageHeight = el.naturalHeight;
        _t.$nextTick(() => {
          _t.show = true;
        })
      }
    },
  },

  mounted() {
    this.init();
  },
};
</script>

<style lang='scss'>
.vue-image-frame{
  background: #FFF;
  border: 1px solid #ddd;
  &__inner{
    display: block;
  }
  &.vue-image-frame-center{
    &::after{
      content: '';
      display: inline-block;
      width: 0;
      height: 100%;
      vertical-align: middle;
    }
    .vue-image-frame__inner{
      display: inline-block;
      margin-left: auto;
      margin-right: auto;
      vertical-align: middle;
    }
  }
  &.vue-image-frame-thin{
    .vue-image-frame__inner{
      height: 100%;
      margin-left: auto;
      margin-right: auto;
    }
  }
  &.vue-image-frame-flat{
    &::after{
      content: '';
      display: inline-block;
      width: 0;
      height: 100%;
      vertical-align: middle;
    }
    .vue-image-frame__inner{
      width: 100%;
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
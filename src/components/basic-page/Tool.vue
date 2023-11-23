<script>
import KtnaButton from './KtnaButton.vue'
export default {
  components: {
    KtnaButton
  },
  props: {
    buttonType: {
      type: String,
      required: true,
      default: 'ktna-btn-primary'
    },
    text: {
      type: String,
      required: true,
    }
  },
  methods: {
    openDrawer() {

    }
  }
}
</script>
<template>
  <div class="tool">
    <div class="tool-left">
      <!-- ktna-btn-plain ktna-btn-primary  -->
      <ktna-button :class="buttonType" @click.stop="$emit('open:drawer')">
        {{ text }}
      </ktna-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tool {
  position: relative;
  display: flex;
  padding: 12px 0;

  .tool-left {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .tool-btn {
    display: inline-block;

    &-right {
      background-color: #4179ff;
      color: #fff;
    }
  }
}

</style>
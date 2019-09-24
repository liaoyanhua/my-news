<template>
  <input
    class="names"
    :placeholder="placeholder"
    :value="value"
    :class="{
      success:status==='success',
      error:status==='error'
    }"
    @change="handleTest"
    @input="handleGet"
  />
</template>

<script>
export default {
  data() {
    return {
      status: ""
    };
  },
  props: ["placeholder", "value", "rule", "err_message"],
  methods: {
    handleGet(e) {
      let value = e.target.value;
      // this.value=value;
      this.$emit("input", value);
      if (this.rule) {
        if (this.rule.test(value)) {
          this.status = "success";
        } else {
          this.status = "error";
        }
      }
    },
    handleTest(e) {
      if (this.err_message && this.status === "error") {
        this.$toast.fail(this.err_message);
        return;
      }
    }
  }
};
</script>

<style scoped lang="less">
.names {
  width: 100%;
  display: block;
  height: 55/360 * 100vw;
  background: rgb(242, 242, 242);
  line-height: 55/360 * 100vw;
  border-bottom: 1px solid #333;
  font-size: 18/360 * 100vw;
}
.success {
  border-bottom-color: green;
}
.error {
  border-bottom-color: red;
}
</style>
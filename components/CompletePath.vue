<template>
  <div
    class="
      mt-5
      flex flex-col
      md:flex-row
      justify-center
      items-center
      space-y-4
      md:space-y-0
    "
  >
    <LinePath :dashed="true" circles="right" />
    <div
      class="
        flex flex-col
        md:flex-row
        justify-center
        items-center
        space-y-4
        md:space-y-0
      "
      v-for="(uni, index) in infos"
      :key="index"
    >
      <Uni :info="uni" />
      <LinePath v-if="index != infos.length - 1" />
    </div>
    <LinePath :dashed="true" circles="left" />
  </div>
</template>

<script>
export default {
  props: {
    infos: {
      type: Array,
      required: true
    }
  }
};
</script>

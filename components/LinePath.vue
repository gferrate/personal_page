<template>
  <svg
    :height="dimensions.height"
    :width="dimensions.width"
    class="transform rotate-90 md:rotate-0"
  >
    <line
      x1="0"
      :y1="dimensions.height / 2"
      :x2="dimensions.width"
      :y2="dimensions.height / 2"
      :style="{ stroke: color, strokeWidth: strokeWidth }"
      :stroke-dasharray="dashed ? '4, 3' : ''"
    />
    <circle
      v-if="circles == 'all' || circles == 'left'"
      cx="0"
      :cy="dimensions.height / 2"
      :r="strokeWidth"
      stroke-width="1"
      :fill="color"
      :stroke="color"
    />
    <circle
      v-if="circles == 'all' || circles == 'right'"
      :cx="dimensions.width"
      :cy="dimensions.height / 2"
      :r="strokeWidth"
      :fill="color"
      :stroke="color"
      stroke-width="1"
    />
  </svg>
</template>

<script>
export default {
  data: function () {
    return {
      dimensions: {
        width: 40,
        height: 8,
      },
      color: "gray",
      strokeWidth: 3,
    };
  },
  props: {
    circles: {
      type: String,
      default: "all",
    },
    dashed: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
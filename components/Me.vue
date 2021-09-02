<template>
  <a
    target="_blank"
    :href="href"
    class="
      rounded-full
      bg-center bg-cover bg-no-repeat
      shadow-md
      hover:shadow-lg
      hover:rotate-6
      hover:scale-110
      transform
      duration-500
      z-20
    "
    :class="getDynamicClasses()"
    :style="{ backgroundImage: `url(${imgPath})` }"
  ></a>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  props: ["imgPath", "size", "centerMethod", "href"],
  methods: {
    getDynamicClasses: function () {
      let classes = [];

      // Add size classes
      if (this.size === "sm") classes.push(...["h-10", "w-10"]);
      else if (this.size === "md") classes.push(...["h-40", "w-40"]);
      else if (this.size === "lg") classes.push(...["h-56", "w-56"]);

      // Add center classes
      if (this.centerMethod === "center") classes.push(...["h-24", "w-24"]);

      return classes.join(" ");
    },
  },
};
</script>
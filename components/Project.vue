<template>
  <div
    class="
      w-64
      h-52
      bg-gray-100
      rounded-xl
      p-2
      shadow-md
      cursor-pointer
      hover:shadow-lg
      hover:scale-105
      transition
      duration-500
      ease-in-out
      transform
      relative
      hover:rotate-6
      overflow-hidden
      group
      m-3
      select-none
    "
    @click="open()"
  >
    <BackgroundFigure v-for="n in 4" :key="n" :color="color" />
    <div class="z-10 relative text-xl text-left font-bold">
      {{ title | capitalize }}
    </div>
    <div class="z-10 relative text-sm text-left text-gray-900 mt-2">
      {{ subtitle }}
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  props: ["title", "subtitle", "link", "color"],
  methods: {
    isMobile() {
      if (process.browser) {
        return "ontouchstart" in document.documentElement;
      }
    },
    open() {
      var link = this.link;
      if (this.isMobile()) {
        setTimeout(function () {
          window.open(link, "_blank").focus();
        }, 500);
      } else {
        window.open(link, "_blank").focus();
      }
    },
  },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      return value.toUpperCase();
    },
  },
};
</script>
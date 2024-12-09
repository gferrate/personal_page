<template>
  <div
    class="w-full h-full bg-gray-100 rounded-xl p-4 shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transition duration-500 ease-in-out transform relative hover:md:rotate-6 hover:rotate-2 overflow-hidden group select-none"
    @click="open()">

    <div class="absolute top-0 right-0 text-xs rounded-bl-lg px-[8px] border-l border-b py-[2px] z-[999]" v-if="starred || isNew"
      :class="isNew ? 'bg-green-200' : 'bg-yellow-200'">
      {{ {
        "new": "🎉 new",
        "starred": "⭐️ starred"
      }[isNew ? "new" : "starred"] }}
    </div>

    <BackgroundFigure v-for="n in 4" :key="n" :color="color" />
    <div class="text-base text-left font-bold mt-1">
      {{ title | capitalize }}
    </div>
    <div class="text-sm text-left text-gray-900 mt-2">
      {{ subtitle }}
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  props: ["title", "subtitle", "link", "color", "starred", "isNew"],
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
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      return value.toUpperCase();
    }
  }
};
</script>

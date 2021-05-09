<template>
  <div
    class="w-64 h-52 bg-gray-200 rounded-xl p-2 shadow-xl cursor-pointer hover:shadow-2xl hover:scale-105 transition duration-500 ease-in-out transform relative hover:rotate-6 overflow-hidden group m-3 select-none"
    @click="open()"
  >
    <div
      class="transform transition duration-500 ease-in-out absolute"
      :class="getClasses1()"
    ></div>
    <div
      class="transform transition duration-500 ease-in-out absolute"
      :class="getClasses2()"
    ></div>
    <div
      class="transform transition duration-500 ease-in-out absolute"
      :class="getClasses3()"
    ></div>

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
  props: ["title", "subtitle", "link", "type"],
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
    getClasses1() {
      switch (this.type) {
        case "1":
          return [
            "left-0",
            "bg-green-500",
            "w-20",
            "h-20",
            "rotate-45",
            "group-rotate:rotate-12",
            "group-hover:scale-125",
            "opacity-50",
          ];
        case "2":
          return [
            "left-0",
            "bg-red-400",
            "w-12",
            "h-64",
            "-rotate-12",
            "group-hover:rotate-12",
            "group-hover:scale-125",
          ];
        case "3":
          return [
            "left-0",
            "bg-blue-400",
            "w-64",
            "h-16",
            "-rotate-12",
            "group-hover:rotate-12",
            "group-hover:scale-125",
          ];
        case "4":
          return [
            "right-0",
            "bg-yellow-500",
            "w-32",
            "h-16",
            "-rotate-12",
            "group-hover:rotate-12",
            "group-hover:scale-125",
            "opacity-50",
          ];
      }
    },
    getClasses2() {
      switch (this.type) {
        case "1":
          return [
            "right-0",
            "bg-green-600",
            "w-28",
            "h-40",
            "group-hover:rotate-12",
            "group-hover:scale-125",
            "opacity-50",
          ];
        case "2":
          return [
            "right-0",
            "bg-red-500",
            "w-28",
            "h-40",
            "rotate-45",
            "group-hover:rotate-12",
            "group-hover:scale-125",
            "opacity-50",
          ];
        case "3":
          return [
            "right-0",
            "bottom-0",
            "bg-blue-500",
            "w-32",
            "h-32",
            "rotate-6",
            "group-hover:-rotate-12",
            "group-hover:scale-125",
            "opacity-50",
          ];
        case "4":
          return [
            "right-0",
            "bottom-0",
            "bg-yellow-500",
            "w-52",
            "h-12",
            "rotate-6",
            "group-hover:-rotate-12",
            "group-hover:scale-125",
            "opacity-50",
          ];
      }
    },
    getClasses3() {
      switch (this.type) {
        case "1":
          return [
            "bottom-0",
            "bg-green-400",
            "w-24",
            "h-24",
            "rounded-full",
            "group-hover:scale-150",
            "opacity-50",
          ];
        case "2":
          return [
            "bottom-0",
            "right-0",
            "bg-red-600",
            "w-12",
            "h-12",
            "rounded-full",
            "group-hover:scale-150",
            "opacity-50",
          ];
        case "3":
          return [
            "bottom-0",
            "left-1",
            "bg-blue-600",
            "w-20",
            "h-20",
            "rounded-full",
            "group-hover:scale-150",
            "opacity-50",
          ];
        case "4":
          return [
            "top-0",
            "left-1",
            "bg-yellow-600",
            "w-20",
            "h-20",
            "rounded-full",
            "group-hover:scale-150",
            "opacity-50",
          ];
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
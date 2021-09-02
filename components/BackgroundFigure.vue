<template>
  <div
    class="
      transform
      transition
      duration-500
      ease-in-out
      z-10
      absolute
      opacity-20
      group-hover:rotate-12 group-hover:scale-125
    "
    :class="getRandomClasses()"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      positioning: {
        left: ["left-0", "left-1/2", "left-1/3", "left-2/3", "left-1/4"],
        top: ["top-0", "top-1/2", "top-1/3", "top-2/3", "top-1/4"],
        rotate: ["rotate-6", "rotate-12", "rotate-45", "rotate-90"],
      },
      colors: [
        "bg-gray-500",
        "bg-red-500",
        "bg-yellow-500",
        "bg-green-500",
        "bg-blue-500",
        "bg-indigo-500",
        "bg-purple-500",
        "bg-pink-500",
      ],
      heights: [
        "h-7",
        "h-10",
        "h-12",
        "h-14",
        "h-20",
        "h-28",
        "h-36",
        "h-40",
        "h-48",
      ],
      widths: [
        "w-7",
        "w-10",
        "w-12",
        "w-14",
        "w-20",
        "w-28",
        "w-36",
        "w-40",
        "w-48",
      ],
      rounding: ["none", "full"],
    };
  },
  props: ["color"],
  methods: {
    getRandomClasses() {
      // Position
      let height = this.randomChoice(this.heights);
      let width = this.randomChoice(this.widths);
      let rounding = this.randomChoice(this.rounding);
      if (rounding == "full") width = height.replace("h-", "w-");
      let classes = [
        this.randomChoice(this.positioning.left),
        this.randomChoice(this.positioning.top),
        this.randomChoice(this.positioning.rotate),
        this.color || this.randomChoice(this.colors),
        height,
        width,
        `rounded-${rounding}`,
      ];

      return classes.join(" ");
    },
    randomNumber(min, max) {
      return Math.random() * (max - min) + min;
    },
    randomChoice(arr) {
      return arr[Math.floor(arr.length * Math.random())];
    },
    getClosest(arr, goal) {
      return arr.reduce(function (prev, curr) {
        return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
      });
    },
  },
};
</script>
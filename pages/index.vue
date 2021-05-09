<template>
  <div class="h-full">
    <div class="h-full pb-16">
      <div class="text-2xl mt-16 text-center px-4">These are some of my personal projects:</div>
      <div class="flex justify-center w-full mt-6 flex-wrap">
        <project
          title="Royalties calculator"
          subtitle="This tool enables you to search for any musician and it approximates how much money generates on royalties on all the major streaming platforms."
          link="https://royalties-calculator.com/"
          type="1"
        />
        <project
          title="Analog Synthesiser and 8-Step sequencer"
          subtitle="I designed a full size analog synthesizer and a 8-step sequencer as my final thesis at Purdue University."
          link="https://www.youtube.com/watch?v=xIo1AV4bAkE"
          type="2"
        />
        <project
          title="Open Source Federated Learning Pytorch Framework"
          subtitle=""
          link="https://github.com/gferrate/pytorch_federated_learning"
          type="3"
        />
        <project
          title="Open Source Federated Learning Pytorch Framework"
          subtitle="holaquetalllll"
          link="https://www.youtube.com/watch?v=xIo1AV4bAkE"
          type="4"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  methods: {},
  watch: {
    nDots: {
      immediate: true,
      handler(newVal, oldVal) {
        setTimeout(function () {
          this.nDots = (this.nDots + 1) % 4;
        }, 500);
      },
    },
  },
};
</script>

<style>
</style>

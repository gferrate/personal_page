<template>
  <div class="h-full pb-16">
    <div class="text-2xl mt-16 text-center px-4">
      These are some of my personal projects:
    </div>
    <div class="text-sm mt-2 text-center px-4 text-gray-600">
      (Click projects to get more info)
    </div>
    <div class="flex justify-center w-full mt-6 flex-wrap">
      <project
        v-for="proj in projects"
        :key="proj.title"
        :title="proj.title"
        :subtitle="proj.subtitle"
        :link="proj.link"
        :type="proj.type"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      projects: [
        {
          title: "Royalties Calculator",
          subtitle:
            "This tool enables you to search for any musician and it approximates how much money generates on royalties on all the major streaming platforms.",
          type: "1",
          link: "https://royalties-calculator.com/",
        },
        {
          title: "Analog Synthesiser and 8-Step sequencer",
          subtitle:
            "Designed a full size analog synthesizer and a 8-step sequencer as my final thesis at Purdue University.",
          type: "2",
          link: "https://www.youtube.com/watch?v=xIo1AV4bAkE",
        },
        {
          title: "Federated Learning Framework",
          subtitle:
            "Designed, implemented, and tested an algorithm for training a Convolutional Neural Network in a distributed manner (Federated Learning).",
          link: "https://github.com/gferrate/pytorch_federated_learning",
          type: "3",
        },
        {
          title: "Drunk Translator",
          subtitle:
            "A prank webpage which simulates drunk behaviour. It accumulates tens of thousands of visits.",
          link: "https://www.drunk-translator.com/?lang=eng",
          type: "4",
        },
        {
          title: "View Instagram Likes",
          subtitle:
            "Designed a workaround to defeat Instagram’s new policy of not showing the number of likes of a given post.",
          link:
            "https://github.com/gferrate/personal_projects/tree/master/instagram_likes",
          type: "5",
        },
        {
          title: "Hodor",
          subtitle:
            "I engineered a system to open and close BMAT’s headquarter’s office with auth0 autentication and access control (taking into account geolocation).",
          link: "https://www.youtube.com/watch?v=_1j-8boMRDQ",
          type: "6",
        },
        {
          title: "My Friend Is on Tinder",
          subtitle:
            "A prank webpage for creating fake tinder profiles (for jokes).",
          link: "https://my-friend-is-on-a-dating-app.com/",
          type: "7",
        },
        {
          title: "The Bus Game",
          subtitle:
            "A classic Spanish cards game made online during the quarintine! The repo is open (click).",
          link: "https://github.com/gferrate/juego_del_bus",
          type: "8",
        },
      ],
    };
  },
  methods: {},
  watch: {},
};
</script>

<style>
</style>

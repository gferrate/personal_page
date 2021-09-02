<template>
  <div class="h-full pb-16">
    <section id="this-is-me" class="py-6">
      <Title class="">This is me:</Title>
      <div
        class="
          flex flex-col
          md:flex-row
          justify-center
          items-center
          space-y-4
          md:space-y-0
          space-x-0
          md:space-x-6
          mt-6
        "
      >
        <me size="lg" :img-path="images.me"></me>
        <div
          class="
            flex
            justify-center
            items-center
            flex-row
            md:flex-col
            space-y-0
            md:space-y-3
            space-x-3
            md:space-x-0
          "
        >
          <me size="sm" :img-path="images.email" :href="links.email"></me>
          <me size="sm" :img-path="images.linkedin" :href="links.linkedin"></me>
          <me size="sm" :img-path="images.github" :href="links.github"></me>
        </div>
      </div>
    </section>

    <section id="this-is-my-path" class="py-6 relative">
      <Title class="">This is my path:</Title>
      <div
        class="
          mt-1
          sm:mt-6
          flex
          justify-center
          items-center
          flex-wrap
          sm:flex-nowrap
          space-y-4
          sm:space-y-0
          p-1
        "
      >
        <LinePath :dashed="true" circles="right" />
        <Uni :img-path="images.upcLogo" :info="unis.upc" />
        <LinePath />
        <Uni :img-path="images.purdueLogo" :info="unis.purdue" />
        <LinePath />
        <Uni :img-path="images.upcLogo" :info="unis.upc_master" />
        <LinePath />
        <Uni :img-path="images.kingsLogo" :info="unis.kings" />
        <LinePath :dashed="true" circles="left" />
      </div>
    </section>

    <section id="this-is-my-work-experience" class="py-6 relative">
      <Title class="">These are my work experiences:</Title>
      <div
        class="
          mt-1
          sm:mt-6
          flex
          justify-center
          items-center
          flex-wrap
          sm:flex-nowrap
          space-y-4
          sm:space-y-0
          p-1
        "
      >
        <LinePath :dashed="true" circles="right" />
        <Uni :img-path="images.caixaLogo" :info="works.caixa" />
        <LinePath />
        <Uni :img-path="images.bmatLogo" :info="works.bmat" />
        <LinePath :dashed="true" circles="left" />
      </div>
    </section>

    <section id="this-is-my-path" class="py-6">
      <Title class="">These are some of my personal projects:</Title>
      <h2 class="text-sm mt-2 text-center px-4 text-gray-600">
        (Click projects to get more info)
      </h2>
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
    </section>
  </div>
</template>

<script>
import meImg from "~/assets/img/jo_low_res.jpg";
import linkedinImg from "~/assets/img/linkedin_logo_sq.png";
import emailLogo from "~/assets/img/email_icon.png";
import githubLogo from "~/assets/img/github_logo.png";
import upcLogo from "~/assets/img/upc_logo.png";
import purdueLogo from "~/assets/img/purdue_logo.png";
import kingsLogo from "~/assets/img/kings_logo.jpeg";
import caixaLogo from "~/assets/img/caixabank_logo.png";
import bmatLogo from "~/assets/img/bmat_logo.jpeg";

export default {
  data: function () {
    return {
      images: {
        me: meImg,
        linkedin: linkedinImg,
        email: emailLogo,
        github: githubLogo,
        upcLogo: upcLogo,
        purdueLogo: purdueLogo,
        kingsLogo: kingsLogo,
        caixaLogo: caixaLogo,
        bmatLogo: bmatLogo,
      },
      works: {
        caixa: {
          name: "Caixabank Consumer Finance",
          degree: "Business Intelligence Intern",
          country: "Barcelona",
          year: 2017,
        },
        bmat: {
          name: "BMAT Music Innovators",
          degree: "Software Engineer",
          country: "Barcelona",
          year: 2017,
        },
      },
      unis: {
        upc: {
          name: "Polytechnic University of Catalonia",
          degree: "Telecommunications Engineering",
          country: "Barcelona",
          year: 2014,
        },
        purdue: {
          name: "Purdue University",
          degree: "Final degree project",
          country: "United States",
          year: 2018,
        },
        upc_master: {
          name: "Polytechnic University of Catalonia",
          degree: "MSE Artificial Intelligence",
          country: "Barcelona",
          year: 2019,
        },
        kings: {
          name: "King's College London",
          degree: "Exchange Research Student",
          country: "London",
          year: 2020,
        },
      },
      links: {
        linkedin: "https://www.linkedin.com/in/gferrate/",
        email: "mailto:g.ferrate.c@gmail.com",
        github: "https://github.com/gferrate",
      },
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
          link: "https://github.com/gferrate/personal_projects/tree/master/instagram_likes",
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

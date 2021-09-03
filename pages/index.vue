<template>
  <div class="h-full pb-16">
    <section id="this-is-me" class="py-6">
      <div class="flex flex-col md:flex-row justify-center items-center mt-5">
        <div
          class="
            flex flex-col-reverse
            md:flex-row
            justify-center
            items-center
            space-y-4
            md:space-y-0
            space-x-0
            md:space-x-4
          "
        >
          <div
            class="
              mt-4
              md:mt-0
              flex
              justify-center
              items-center
              flex-row
              md:flex-col
              space-y-0
              md:space-y-2
              space-x-2
              md:space-x-0
            "
          >
            <me size="sm" :img-path="images.email" :href="links.email"></me>
            <me
              size="sm"
              :img-path="images.linkedin"
              :href="links.linkedin"
            ></me>
            <me size="sm" :img-path="images.github" :href="links.github"></me>
          </div>
          <me size="lg" :img-path="images.me"></me>
        </div>
        <div
          class="
            max-w-md
            px-4
            mt-6
            md:mt-0
            md:p-0
            ml-0
            md:ml-5
            text-sm text-justify
            md:text-left
          "
        >
          <Bio :bio="bio" />
        </div>
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
          :color="proj.color"
          :key="proj.title"
          :title="proj.title"
          :subtitle="proj.subtitle"
          :link="proj.link"
        />
      </div>
    </section>

    <section id="this-is-my-path" class="py-5 relative">
      <Title class="">This is my academic path:</Title>
      <CompletePath :infos="unis"  />
    </section>

    <section id="this-is-my-work-experience" class="py-5 relative">
      <Title class="">These are my work experiences:</Title>
      <CompletePath :infos="works"  />
    </section>

    <section id="these-are-my-academic-distinctions" class="py-5 relative">
      <Title class="">These are my academic awards:</Title>
      <CompletePath :infos="awards"  />
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
import personalProjectsLogo from "~/assets/img/personal_projects_logo.png";
import texasInstrumentsLogo from "~/assets/img/texas_instruments.jpg";

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
        personalProjectsLogo: personalProjectsLogo,
        texasInstrumentsLogo: texasInstrumentsLogo,
      },
      links: {
        linkedin: "https://www.linkedin.com/in/gferrate/",
        email: "mailto:g.ferrate.c@gmail.com",
        github: "https://github.com/gferrate",
      },
      bio: {
        title: "Hi there! Welcome to my site,",
        paragraphs: [
          "I am Gabriel Ferraté, a Barcelona-born, globally-based engineer and music nerd.",
          "I love to create things, either hardware or software, robots or websites, useless or useful. You name it.",
          "Most of my experience is on backend technolgies and databases but I also like to tinker with artificial intelligence, frontend and other cool stuff.",
          "Scroll down to discover me. See you soon!",
        ],
      },
      awards: [
        {
          name: "Eaton Design Award",
          degree: "Best final project of the promotion at Purdue",
          country: "United States",
          year: 2018,
          color: "bg-yellow-500",
          href: "https://engineering.purdue.edu/ECE/News/2019/ohmonics-senior-design-awards",
          image: purdueLogo
        },
        {
          name: "Texas Instruments Senior Design Contest",
          degree: "Best senior design project according to TI",
          country: "United States",
          year: 2018,
          color: "bg-red-500",
          href: "https://www.facebook.com/texasinstruments/videos/395457504534454/",
          image: texasInstrumentsLogo
        },
      ],
      works: [
        {
          name: "Caixabank Consumer Finance",
          degree: "Business Intelligence Intern",
          country: "Barcelona",
          year: 2017,
          color: "bg-blue-500",
          href: "https://www.caixabank.es/",
          image: caixaLogo
        },
        {
          name: "Personal Projects",
          degree: "All kinds of things",
          country: "The Globe",
          year: 2015,
          color: "bg-gray-500",
          href: "https://github.com/gferrate",
          image: personalProjectsLogo
        },
        {
          name: "BMAT Music Innovators",
          degree: "Software Engineer",
          country: "Barcelona",
          year: 2017,
          color: "bg-green-500",
          href: "https://www.bmat.com/",
          image: bmatLogo
        },
      ],
      unis: [
        {
          name: "Polytechnic University of Catalonia",
          degree: "Telecommunications Engineering",
          country: "Barcelona",
          year: 2014,
          color: "bg-blue-500",
          href: "https://telecos.upc.edu/en?set_language=en",
          image: upcLogo
        },
        {
          name: "Purdue University",
          degree: "Final degree project",
          country: "United States",
          year: 2018,
          color: "bg-yellow-500",
          href: "https://engineering.purdue.edu/ECE",
          image: purdueLogo
        },
        {
          name: "Polytechnic University of Catalonia",
          degree: "MSE Artificial Intelligence",
          country: "Barcelona",
          year: 2019,
          color: "bg-blue-500",
          href: "https://matt.masters.upc.edu/",
          image: upcLogo
        },
        {
          name: "King's College London",
          degree: "Exchange Research Student",
          country: "London",
          year: 2020,
          color: "bg-red-500",
          href: "https://www.kcl.ac.uk/research/ctr",
          image: kingsLogo
        },
      ],
      projects: [
        {
          title: "Royalties Calculator",
          subtitle:
            "This tool enables you to search for any musician and it approximates how much money generates on royalties on all the major streaming platforms. It has hundreds of thousands of page visits.",
          link: "https://royalties-calculator.com/",
          color: "bg-indigo-500",
        },
        {
          title: "Analog Synthesiser and 8-Step sequencer",
          subtitle:
            "Designed a full size analog synthesizer and a 8-step sequencer as my final thesis at Purdue University.",
          link: "https://www.youtube.com/watch?v=xIo1AV4bAkE",
          color: "bg-gray-500",
        },
        {
          title: "Federated Learning Framework",
          subtitle:
            "Designed, implemented, and tested an algorithm for training a Convolutional Neural Network in a distributed manner (Federated Learning).",
          link: "https://github.com/gferrate/pytorch_federated_learning",
          color: "bg-yellow-500",
        },
        {
          title: "Bestwatch",
          subtitle:
            "Ranks all Netflix catalog from nearly all countries by IMDB rating. It amasses thousands of page visits.",
          link: "https://bestwatch.app/",
          color: "bg-pink-500",
        },
        {
          title: "Drunk Translator",
          subtitle:
            "A prank webpage which simulates drunk behaviour. It accumulates tens of thousands of visits.",
          link: "https://www.drunk-translator.com/?lang=eng",
          color: "bg-blue-500",
        },
        {
          title: "View Instagram Likes",
          subtitle:
            "Designed a workaround to defeat Instagram’s new policy of not showing the number of likes of a given post.",
          link: "https://github.com/gferrate/personal_projects/tree/master/instagram_likes",
          color: "bg-pink-500",
        },
        {
          title: "Hodor",
          subtitle:
            "I engineered a system to open and close BMAT’s headquarter’s office with auth0 autentication and access control (taking into account geolocation).",
          link: "https://www.youtube.com/watch?v=_1j-8boMRDQ",
          color: "bg-purple-500",
        },
        {
          title: "My Friend Is on Tinder",
          subtitle:
            "A prank webpage for creating fake tinder profiles (for jokes).",
          link: "https://my-friend-is-on-a-dating-app.com/",
          color: "bg-indigo-500",
        },
        {
          title: "The Bus Game",
          subtitle:
            "A classic Spanish cards game made online during the quarintine! The repo is open (click).",
          link: "https://github.com/gferrate/juego_del_bus",
          color: "bg-green-500",
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

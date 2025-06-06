<template>
  <div>
    <section id="this-is-me" class="py-6">
      <div class="flex flex-col md:flex-row justify-center items-center mt-5">
        <div
          class="flex flex-col-reverse md:flex-row justify-center items-center space-y-4 md:space-y-0 space-x-0 md:space-x-4"
        >
          <div
            class="mt-4 md:mt-0 flex justify-center items-center flex-row md:flex-col space-y-0 md:space-y-2 space-x-2 md:space-x-0"
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
          class="max-w-md px-4 mt-6 md:mt-0 md:p-0 ml-0 md:ml-5 text-sm text-justify md:text-left"
        >
          <Bio :bio="bio" />
        </div>
      </div>
    </section>

    <section id="this-is-my-path" class="py-6">
      <Title class="">These are some of my projects:</Title>
      <h2 class="text-sm mt-2 text-center px-4 text-gray-600">
        (Click any project to get more info)
      </h2>
      <div
        class="w-full mt-6 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 px-4"
      >
        <project
          v-for="proj in projects"
          :color="proj.color"
          :key="proj.title"
          :title="proj.title"
          :starred="proj.starred"
          :subtitle="proj.subtitle"
          :link="proj.link"
          :isNew="proj.isNew"
        />
      </div>
    </section>

    <section id="this-is-my-work-experience" class="py-5 relative">
      <Title class="">These are my work experiences:</Title>
      <CompletePath :infos="works" />
    </section>

    <section id="this-is-my-path" class="py-5 relative">
      <Title class="">This is my academic path:</Title>
      <CompletePath :infos="unis" />
    </section>

    <!--<section id="these-are-my-academic-distinctions" class="py-5 relative">
      <Title class="">These are my academic awards:</Title>
      <CompletePath :infos="awards" />
    </section>-->

    <section
      id="like-what-you-see"
      class="py-8 text-center text-gray-500 text-sm"
    >
      <div
        class="mx-auto border-t pt-8 flex justify-between items-center flex-col md:flex-row space-y-4 md:space-y-0"
      >
        <p>
          Like what you see?
          <a
            class="underline"
            href="https://github.com/gferrate/personal_page"
            target="_blank"
            >Fork it on Github</a
          >
        </p>
        <p>Gabriel Ferraté, {{ currentYear }}</p>
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
import tweenvestLogo from "~/assets/img/tweenvest_logo.png";
import datadogLogo from "~/assets/img/datadog_logo.png";
import bmatLogo from "~/assets/img/bmat_logo.jpeg";
import aldaraLogo from "~/assets/img/aldara.png";
import personalProjectsLogo from "~/assets/img/personal_projects_logo.png";
import texasInstrumentsLogo from "~/assets/img/texas_instruments.jpg";

export default {
  data: function () {
    return {
      currentYear: new Date().getFullYear(),
      images: {
        me: meImg,
        linkedin: linkedinImg,
        email: emailLogo,
        github: githubLogo,
        upcLogo,
        purdueLogo,
        kingsLogo,
        caixaLogo,
        bmatLogo,
        tweenvestLogo: tweenvestLogo,
        datadogLogo,
        aldaraLogo,
        personalProjectsLogo: personalProjectsLogo,
        texasInstrumentsLogo: texasInstrumentsLogo,
      },
      links: {
        linkedin: "https://www.linkedin.com/in/gferrate/",
        email: "mailto:hello@gabrielferrate.com",
        github: "https://github.com/gferrate",
      },
      bio: {
        title: "Hi there! Welcome to my site,",
        paragraphs: [
          "I am Gabriel Ferraté, a Barcelona-born, globally-based engineer and music nerd.",
          "I love to create things, either hardware or software, robots or websites, useless or useful. You name it.",
          "Most of my experience is on distributed systems and databases, but I also like to tinker with artificial intelligence, electronics, frontend development, and other cool stuff.",
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
          image: purdueLogo,
        },
        {
          name: "Texas Instruments Senior Design Contest",
          degree: "Best senior design project according to TI",
          country: "United States",
          year: 2018,
          color: "bg-red-500",
          href: "https://www.facebook.com/texasinstruments/videos/395457504534454/",
          image: texasInstrumentsLogo,
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
          image: caixaLogo,
        },
        // {
        //   name: "Personal Projects",
        //   degree: "All kinds of things",
        //   country: "The Globe",
        //   year: 2015,
        //   color: "bg-gray-500",
        //   href: "https://github.com/gferrate",
        //   image: personalProjectsLogo
        // },
        {
          name: "BMAT Music Innovators",
          degree: "Software Engineer",
          country: "Barcelona",
          year: 2017,
          color: "bg-green-500",
          href: "https://www.bmat.com/",
          image: bmatLogo,
        },
        {
          name: "Aldara (YC S22)",
          degree: "Senior Software Engineer",
          country: "Barcelona",
          year: 2022,
          color: "bg-red-500",
          href: "https://www.ycombinator.com/companies/aldara",
          image: aldaraLogo,
        },
        {
          name: "Tweenvest",
          degree: "Co-founder and CTO",
          country: "Barcelona",
          year: 2022,
          color: "bg-gray-500",
          href: "https://www.tweenvest.com/",
          image: tweenvestLogo,
        },
        {
          name: "Datadog",
          degree: "Software Engineer II",
          country: "Madrid",
          year: 2025,
          color: "bg-purple-500",
          href: "https://www.datadoghq.com/",
          image: datadogLogo,
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
          image: upcLogo,
        },
        {
          name: "Purdue University",
          degree: "Final degree project",
          country: "United States",
          year: 2018,
          color: "bg-yellow-500",
          href: "https://engineering.purdue.edu/ECE",
          image: purdueLogo,
        },
        {
          name: "Polytechnic University of Catalonia",
          degree: "MSE Artificial Intelligence",
          country: "Barcelona",
          year: 2019,
          color: "bg-blue-500",
          href: "https://matt.masters.upc.edu/",
          image: upcLogo,
        },
        {
          name: "King's College London",
          degree: "Exchange Research Student",
          country: "London",
          year: 2020,
          color: "bg-red-500",
          href: "https://www.kcl.ac.uk/research/ctr",
          image: kingsLogo,
        },
      ],
      projects: [
        {
          title: "Royalties Calculator",
          subtitle:
            "This tool enables you to search for any musician and approximates how much money they generate in royalties across all major streaming platforms. It has hundreds of thousands of page visits.",
          link: "https://royalties-calculator.com/",
          color: "bg-indigo-500",
          starred: true,
        },
        {
          title: "Analog Synthesizer and 8-Step Sequencer",
          subtitle:
            "Designed a full-size analog synthesizer and an 8-step sequencer as my final thesis at Purdue University.",
          link: "https://www.youtube.com/watch?v=xIo1AV4bAkE",
          color: "bg-gray-500",
          starred: true,
        },
        {
          title: "Track Trivia",
          subtitle:
            "A multiplayer music trivia game where players can guess songs.",
          link: "https://www.track-trivia.com/",
          color: "bg-red-500",
          isNew: true,
        },
        {
          title: "Tweenvest",
          subtitle: "A tool for analyzing the stock market.",
          link: "https://www.tweenvest.com/",
          color: "bg-purple-500",
          starred: true,
        },
        {
          title: "QR Blend",
          subtitle: "The first AI-powered QR code generator in the world.",
          link: "https://www.qrblend.com/",
          color: "bg-green-500",
          starred: true,
        },
        {
          title: "Whalfred",
          subtitle: "Create and receive reminders directly on WhatsApp.",
          link: "https://whalfred.com/",
          color: "bg-pink-500",
          starred: true,
        },
        {
          title: "Meet me",
          subtitle: "Create unique links for your meetings.",
          link: "https://meet-me.co/",
          color: "bg-green-500",
          isNew: true,
        },
        {
          title: "dupla.ai",
          subtitle: "A copywriting tool powered by artificial intelligence.",
          link: "https://www.dupla.ai/",
          color: "bg-red-500",
        },
        {
          title: "Infinite Canvas",
          subtitle:
            "The infinite canvas is an AI-generated image that extends endlessly in all directions. All changes you make are visible to everyone else in real time.",
          link: "https://infinite-canvas.gabrielferrate.com/",
          color: "bg-yellow-500",
          isNew: true,
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
            "Ranks the entire Netflix catalog from nearly all countries by IMDb rating. It attracts thousands of page visits.",
          link: "https://bestwatch.app/",
          color: "bg-pink-500",
        },
        {
          title: "Daily Records",
          subtitle:
            "A design-focused website for mapping pictures to a timeline.",
          link: "https://daily-records.netlify.app/",
          color: "bg-red-500",
        },
        {
          title: "Drunk Translator",
          subtitle:
            "A prank webpage simulating drunk behavior. It has accumulated tens of thousands of visits.",
          link: "https://www.drunk-translator.com/?lang=eng",
          color: "bg-blue-500",
        },
        {
          title: "Hodor",
          subtitle:
            "Engineered a system to open and close BMAT’s headquarters' office with Auth0 authentication and access control, integrating geolocation.",
          link: "https://www.youtube.com/watch?v=_1j-8boMRDQ",
          color: "bg-purple-500",
        },
        {
          title: "Customize Windows Blue Error Screen",
          subtitle:
            "A prank website for customizing the Windows blue error screen.",
          link: "https://windows-blue-screen.netlify.app/",
          color: "bg-blue-500",
        },
      ],
    };
  },
  methods: {},
  watch: {},
};
</script>

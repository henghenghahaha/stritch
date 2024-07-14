<script setup lang="ts">
const page = {
  "title": "Stritch University",
  "description": "",
  "navigation": "False",
  "hero": {
    "title": "Cardinal Stritch University"
  },
  "sections": [
    {
      "title": "GREAT HALL",
      "description": "The Great Hall at Stritch University stands as a testament to the institution's " +
        "commitment to fostering a vibrant and inclusive community. This grand and elegant space, " +
        "with its high vaulted ceilings and stunning architectural details, serves as the heart of " +
        "the university's social and academic life. The hall is adorned with beautiful chandeliers " +
        "that cast a warm, inviting glow over the polished wooden floors and intricately designed walls.",
      "id": "features",
      "img": "/greathall.png",
      "align": "left"
    },
    {
      "title": "BONAVENTURE HALL",
      "description": "Bonaventure Hall is a cornerstone of Stritch University, embodying the spirit of academic " +
        "excellence and community engagement. As one of the primary buildings on campus, Bonaventure " +
        "Hall serves as a central hub for a variety of academic and administrative functions, playing " +
        "a crucial role in the daily life of our students, faculty, and staff.",
      "align": "right",
      "img": "/BONAVENTUREHALL.png"
    },
    {
      "title": "LIBRARY",
      "description": "Welcome to the Stritch University Library, a vibrant hub of learning and research at the heart " +
        "of our campus. Our library is dedicated to providing a welcoming and resource-rich environment " +
        "that supports the academic and personal growth of our students, faculty, and staff.",
      "align": "left",
      "img": "/LIBRARY.png"
    },
    {
      "title": "CAMPUS CENTER",
      "description": "The Campus Center at Stritch University serves as the heart of student life and a central hub " +
        "for the university community. This vibrant space is designed to foster a sense of belonging and " +
        "engagement among students, faculty, and staff.",
      "align": "right",
      "img": "/CAMPUSCENTER.png"
    },
    {
      "title": "CONFERENCE CENTER",
      "description": "The Stritch University Conference Center is a premier venue designed to host a wide range of " +
        "events, from academic conferences and corporate meetings to social gatherings and workshops. " +
        "Nestled within the picturesque campus of Stritch University, the center offers state-of-the-art " +
        "facilities, exceptional services, and a serene environment conducive to productive and memorable events.",
      "align": "left",
      "img": "/CONFERENCECENTER.png"
    }
  ]
}
</script>

<template>
  <div v-if="page">
    <ULandingHero
      :title="page.hero.title"
      :ui="{title: 'text-3xl font-serif font-semibold tracking-tight text-gray-900 dark:text-white sm:text-7xl'}"
    >
      <div
        class="absolute inset-0 landing-grid z-[-1] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"/>

    </ULandingHero>

    <ULandingSection class="!pt-0">
      <ImagePlaceholder/>
    </ULandingSection>

    <ULandingSection
      v-for="(section, index) in page.sections"
      :key="index"
      :title="section.title"
      :description="section.description"
      :align="section.align"
    >
      <div class="container">
        <img class="image" :src=section.img alt="Cardinal Stritch University">
      </div>
    </ULandingSection>

    <ULandingSection>
      <div class="container1">
        <img class="image1" src="/Faith_08_1200X500-1536x640.jpg" alt="Cardinal Stritch University">
      </div>
    </ULandingSection>
  </div>
</template>

<style scoped>
.landing-grid {
  background-size: 100px 100px;
  background-image: linear-gradient(to right, rgb(var(--color-gray-200)) 1px, transparent 1px),
  linear-gradient(to bottom, rgb(var(--color-gray-200)) 1px, transparent 1px);
}

.dark {
  .landing-grid {
    background-image: linear-gradient(to right, rgb(var(--color-gray-800)) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(var(--color-gray-800)) 1px, transparent 1px);
  }
}

.container {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  position: relative;
}

.image {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 10px;
}

.container1 {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 1200px;
  position: relative;
}

.image1 {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>


<script setup lang="ts">

const page = {
  "title": "Cardinal Stritch University",
  "description": "",
  "navigation": "False",
  "hero": {
    "title": "Cardinal Stritch University"
  },
  "sections": [
    {
      "title": "Bonaventure Hall",
      "description": "Bonaventure Hall is the University’s main administration building. The first floor houses the following major offices: President, Admissions, Academic Affairs, Accounts Receivable, Financial Aid, International Education, Registrar’s Office, University Advancement, Office of University Communications, Office of University Marketing, Information Services, Student Support, Academic Advising as well as the offices of the Dean of Students and the Vice President for Student Affairs. Additionally, the Sister Camille Kliebhan Conference Center is located on the first floor. The second floor is home to Human Resources, Accounts Payable, the St. Francis of Assisi Chapel, a nursing skills lab and a suite of offices for faculty members. Offices for Experiential Learning and Career Education, Security, and Math/Computer Science are located in the lower level, as well as computer labs, classrooms and the IT Helpdesk. ",
      "align": "right",
      "img": "/Bonaventure Hall.jpg"
    },
    {
      "title": "The University Library",
      "description": "The University Library seeks to provide welcoming places to satisfy a diversity of needs from individual study to group collaboration to virtual learning environments. Two levels of abundant resources for study and research are located in the Stritch library, along with computer, printers, copiers and collaborative or small group spaces. ",
      "id": "features",
      "img": "/The University Library.jpeg",
      "align": "left"
    },
    {
      "title": "The Fieldhouse",
      "description": "Stritch’s gymnasium, indoor running track and fitness center are all located in the Fieldhouse, as is the Office of the Athletic Director.",
      "align": "right",
      "img": "/The Fieldhouse.jpeg"
    }
  ]
}
</script>

<template>
  <div v-if="page">
    <UContainer>
      <img src="/img.png" />
      <img src="/Transcripts.jpg" />
      <div class="flex flex-wrap mx-2 mt-5">
        <div class="w-full h-1/2 sm:w-1/3 px-2 mb-4" >
          <img
            src="/Stritch_Campus_1.jpg"
            class="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </div>
        <div class="w-full h-1/2 sm:w-1/3 px-2 mb-4">
          <img
            src="/Stritch_Campus_2.jpg"
            class="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </div>
        <div class="w-full h-1/2 sm:w-1/3 px-2 mb-4">
          <img
            src="/Stritch_Campus_3.jpg"
            class="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      </div>
    </UContainer>

    <ULandingSection
      v-for="(section, index) in page.sections"
      :key="index"
      :title="section.title"
      :description="section.description"
      :align="section.align"
      :ui="{wrapper: 'py-8 sm:py-8'}"
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



.container {
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  max-width: 600px;
  position: relative;
}

.container1 {
  border-radius: 10px;
}

.image {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 10px;
}

.container2 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1900px;
  padding: 20px;
  height: 200px;
  background-color: rgb(20,50,150);
}

.stat-item {
  text-align: center;
  padding: 20px;
  color: #FFFFFF;
}

.stat-number {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .container2 {
    flex-direction: column;
  }
  .stat-item {
    margin-bottom: 30px;
  }
}

</style>


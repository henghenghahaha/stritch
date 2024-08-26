<script setup lang="ts">

</script>

<template>
  <UContainer>
    <img style="width: 1920px" src="/Stritch.jpg" />
    <div class="about-us-container">

      <div class="content-section">

        <div class="text-block">
          <h1>Our History</h1>
          <p>Cardinal Stritch University has several colleges covering more than 60 fields of study with a full range of Bachelor's, Master's and Doctoral degree programmes for students.<br><br>
            For example, the College of Business and Management, the College of Education and Leadership, the College of Arts and Sciences, and Ruth S.Coleman of Nursing and Health Sciences, etc.<br><br>
            Cardinal Stritch University is proud of its management and teaching staff. Full-time and part-time staff include highly qualified and experienced individuals in their respective fields. <br><br>
            More than half of the full-time faculty hold terminal degrees in their respective fields, most of which are doctoral degrees. Many faculty members have national reputations for their professional accomplishments and creative talents. <br><br>
            Unlike large institutions of higher education, Cardinal Stritch University does not employ graduate assistants as instructors, so students benefit from direct access to faculty in all classes.</p>
        </div>

        <!--      <div class="image-divider">-->
        <!--        <img src="/history.jpg" alt="Historical photo of Holy Family College" />-->
        <!--      </div>-->

      </div>
    </div>
  </UContainer>

</template>

<style scoped>
.about-us-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}


.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 40px;
  text-align: center;
}

.text-block {
  width: 100%;
  max-width: 1300px;
  margin-bottom: 40px;

}

.text-block h2 {
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.text-block p, .text-block ul {
  font-size: 1.1em;
  color: #555;
  line-height: 1.6;
}

.text-block ul {
  padding-left: 20px;
}

.image-divider {
  width: 1920px;
  height: 300px;
  overflow: hidden;
  margin-bottom: 40px;
}

.image-divider img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {


  .image-divider {
    height: 200px;
  }

  h1 {
    font-size: 2em;
  }

  .text-block h2 {
    font-size: 1.5em;
  }

  .text-block p, .text-block ul {
    font-size: 1em;
  }
}
</style>

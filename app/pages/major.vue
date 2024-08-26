<script setup lang="ts">

const page = {
  "title":"Majors"
}

const posts = [
  {
      "title": 'EDUCATION',
      "description": "The Education program at Stritch University is committed to developing compassionate, knowledgeable, and innovative educators who are prepared to make a positive impact in diverse educational settings. Our program emphasizes a holistic approach to teaching and learning, combining rigorous academic coursework with practical, real-world experience.",
      "image": {
        "src": "/education.png"
      }
  }, {
      "title": 'NURSING',
      "description": "The Nursing program at Stritch University is dedicated to preparing compassionate and skilled nursing professionals who are ready to meet the healthcare needs of diverse populations. Our program combines rigorous academic coursework with hands-on clinical experience, ensuring that our graduates are well-equipped to excel in the dynamic and rapidly evolving field of healthcare.",
      "image": {
        "src": "/nursing.png"
      }
  }, {
      "title": 'THEATER',
      "description": "Welcome to the Theater Program at Stritch University, where creativity, passion, and talent come together to create transformative theatrical experiences. Our program is designed to provide students with a comprehensive education in the performing arts, combining rigorous academic coursework with extensive hands-on experience.",
      "image": {
        "src": "/theater.png"
      }
  }, {
      "title": 'BUSSINESS',
      "description": "Welcome to the Business Program at Stritch University, where we prepare the next generation of business leaders and innovators. Our program is designed to provide students with a comprehensive understanding of the business world, combining theoretical knowledge with practical skills to ensure success in today's dynamic and competitive environment.",
      "image": {
        "src": "/bussiness.png"
      }
  }, {
      "title": 'LAW',
      "description": "Welcome to the Law Program at Stritch University, where we are dedicated to cultivating the next generation of legal professionals who are committed to justice, integrity, and service. Our comprehensive and rigorous curriculum is designed to provide students with a deep understanding of the law, critical thinking skills, and practical experience necessary to excel in the legal field.",
      "image": {
        "src": "/Law.jpg",
      }
  }, {
      "title": 'ART',
      "description": "The Art program at Stritch University is designed to cultivate creativity, critical thinking, and technical skills in students who are passionate about the visual arts. Our comprehensive curriculum offers a balanced blend of traditional techniques and contemporary practices, preparing students for a dynamic and evolving artistic landscape.",
      "image": {
        "src": "/art.png",
      }
  },{
      "title": 'COMMUNICATION',
      "description": "The Communication program at Stritch University is designed to equip students with the skills and knowledge necessary to excel in a rapidly evolving media landscape. Our program emphasizes both the theoretical foundations and practical applications of communication, preparing graduates for diverse careers in media, public relations, corporate communication, journalism, and more.",
      "image": {
        "src": "/Communication.png",
      }
  },{
    "title": 'SPORTS',
    "description": "The Communication program at Stritch University is designed to equip students with the skills and knowledge necessary to excel in a rapidly evolving media landscape. Our program emphasizes both the theoretical foundations and practical applications of communication, preparing graduates for diverse careers in media, public relations, corporate communication, journalism, and more.",
    "image": {
      "src": "/Sport.png",
    }
  },{
    "title": 'SCIENCE',
    "description": "The Communication program at Stritch University is designed to equip students with the skills and knowledge necessary to excel in a rapidly evolving media landscape. Our program emphasizes both the theoretical foundations and practical applications of communication, preparing graduates for diverse careers in media, public relations, corporate communication, journalism, and more.",
    "image": {
      "src": "/Science.png",
    }
  }
]

</script>

<template>
  <img src="/Library.jpg">
  <p class="college-info1">
    Cardinal Stritch University has several colleges covering more than 60 fields of study with a full range of Bachelor's, Master's and Doctoral degree programmes for students.<br>
    For example, the College of Business and Management, the College of Education and Leadership, the College of Arts and Sciences, and Ruth S.Coleman of Nursing and Health Sciences, etc.<br>
  </p>
  <UContainer>
    <UPageBody>
      <UBlogList>
        <UBlogPost
          v-for="(post, index) in posts"
          :key="index"
          :title="post.title"
          :image="post.image"
          :ui="{description: 'line-clamp-2'}"
        />
      </UBlogList>
    </UPageBody>
  </UContainer>
  <p class="college-info">
    Cardinal Stritch University is proud of its management and teaching staff. Full-time and part-time staff include highly qualified and experienced individuals in their respective fields. <br>
    More than half of the full-time faculty hold terminal degrees in their respective fields, most of which are doctoral degrees. Many faculty members have national reputations for their professional accomplishments and creative talents. <br>
    Unlike large institutions of higher education, Cardinal Stritch University does not employ graduate assistants as instructors, so students benefit from direct access to faculty in all classes.
  </p>
</template>

<style>
.college-info {
  font-family: 'Roboto', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  line-height: 1.8;
  color: #2c3e50;
  max-width: 1300px;
  margin: 40px auto;
  padding: 20px 40px;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
  border-top: 5px solid #3498db;
  margin-top: 10px;
}


.college-info p {
  margin: 0;
  text-align: justify;
  hyphens: auto;
}

.college-info p::first-letter {
  font-size: 3em;
  font-weight: 700;
  float: left;
  line-height: 1;
  padding-right: 15px;
  color: #3498db;
}

.college-info1 {
  font-family: 'Roboto', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  line-height: 1.8;
  color: #2c3e50;
  max-width: 1300px;
  margin: 40px auto;
  padding: 20px 40px;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
  border-bottom: 5px solid #3498db;
  margin-top: 10px;
}


.college-info1 p {
  margin: 0;
  text-align: justify;
  hyphens: auto;
}

.college-info1 p::first-letter {
  font-size: 3em;
  font-weight: 700;
  float: left;
  line-height: 1;
  padding-right: 15px;
  color: #3498db;
}
</style>

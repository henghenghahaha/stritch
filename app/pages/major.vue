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
        "src": "/law.png",
      }
  }, {
      "title": 'PSYCHOLOGY',
      "description": "The Psychology program at Stritch University offers a comprehensive and dynamic curriculum designed to provide students with a deep understanding of human behavior, mental processes, and psychological principles. Our program is dedicated to fostering intellectual curiosity, critical thinking, and a passion for helping others, preparing students for a wide range of careers and advanced studies in psychology and related fields.",
      "image": {
        "src": "/psychology.png",
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
        "src": "/communication.png",
      }
  }
]

</script>

<template>
  <UContainer>
    <UPageHeader
      v-bind="page"
      class="py-[50px]"
    />

    <UPageBody>
      <UBlogList>
        <UBlogPost
          v-for="(post, index) in posts"
          :key="index"
          :title="post.title"
          :description="post.description"
          :image="post.image"
          :orientation="index === 0 ? 'horizontal' : 'vertical'"
          :class="[index === 0 && 'col-span-full']"
          :ui="{description: 'line-clamp-2'}"
        />
      </UBlogList>
    </UPageBody>
  </UContainer>
</template>

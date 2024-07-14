<script setup lang="ts">

const links = [{
  label: 'Home',
  to: '/'
}, {
  label: 'Majors',
  to: '/major'
}, {
  label: 'Course Catalogs',
  to: '/course'
}, {
  label: 'Inquery Degree',
  to: '/inquery'
}, ]
</script>

<template>
  <UHeader :links="links"
           :ui="{wrapper: 'bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50 h-35',
           container: 'flex items-center justify-between gap-3 h-22'}">
    <template #logo >
      <div style="margin-top: 8px;margin-bottom: 8px" class="flex">
        <img class='headerlogo' src="/favicon.ico" alt="stritch university">
        <p style="margin-top: 28px;margin-left: 3px;font-size: 17px;  font-family: 'Times New Roman', Times, serif;font-weight: bold">Cardinal Stritch University</p>
      </div>
    </template>

    <template #right>
      <UButton
        label="Location"
        color="gray"
        to="https://maps.app.goo.gl/8sJqc4st6ZQoXnj3A"
      />
    </template>

  </UHeader>
</template>


<style scoped>
.headerlogo{
  width: 13%;
}
</style>

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
  label: 'About Us',
  to: '/aboutus'
}, {
  label: 'Inquery Degree',
  to: '/inquery'
} ]
</script>

<template>
  <UHeader
    :ui="{wrapper: 'bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50 h-35',
           container: 'flex items-center justify-between gap-3 h-22'}">
    <template #logo >
      <div style="margin-top: 8px;margin-bottom: 8px" class="flex">
        <img class='headerlogo' src="/favicon.ico" alt="Cardinal Stritch University">
        <p style="margin-top: 25px;margin-left: 3px;font-size: 30px;  font-family: 'Times New Roman', Times, serif;font-weight: bold">Cardinal Stritch University</p>
      </div>
    </template>

    <template #right>
      <UHeaderLinks :links = "links" :ui="{base: 'text-lg/6 font-semibold flex items-center gap-1',}"/>
    </template>

  </UHeader>
</template>


<style scoped>
.headerlogo{
  width: 10%;
}
</style>

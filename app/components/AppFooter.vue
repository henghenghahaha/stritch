<script setup lang="ts">
const links = [{
  label: 'Resources',
  children: [{
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
}]
</script>

<template>
  <UFooter  :ui="{top: {
    wrapper: 'bg-black',
    container: 'py-8 lg:py-12'
  },}">
    <template #top>
      <UFooterColumns :links="links" :ui="{label: 'text-sm/6 font-semibold text-white dark:text-white',active: 'text-white dark:text-white font-medium',
  inactive: 'text-white dark:text-white hover:text-white dark:hover:text-white',}">
        <template #right >
          <form>
<!--            <UFormGroup-->
<!--              label="Contact us via the email below"-->
<!--              :ui="{-->
<!--              container: 'mt-3',-->
<!--              label: {-->
<!--                  base: 'block font-bold text-white dark:text-white'},-->
<!--            }"-->
<!--            >-->
<!--              <p class="contactemail  w-80 p-2 text-white pl-2 pr-1 underline decoration-1 underline-offset-1">-->
<!--                communications@holyfamilycollege.org-->
<!--              </p>-->
<!--            </UFormGroup>-->
            <div style="height: 20px">
            </div>
            <UFormGroup
              label="Our Location"
              :ui="{
              container: 'mt-3',
              label: {
                  base: 'block font-bold text-white dark:text-white'},
            }"
            >
              <p class="contactemail  w-80 p-2 text-white pl-2 pr-1 underline decoration-1 underline-offset-1">
                6801 N Yates Rd, Fox Point, WI 53217
              </p>
            </UFormGroup>
          </form>
        </template>
      </UFooterColumns>
    </template>
    <template #center>
      <p class="text-gray-500 dark:text-white text-sm">
        © {{ new Date().getFullYear() }} Cardinal Stritch University.
      </p>
    </template>
  </UFooter>
</template>

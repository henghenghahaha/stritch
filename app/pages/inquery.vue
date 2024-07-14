<script setup lang="ts">
import {object, string, type InferType} from 'yup'
import type { FormSubmitEvent } from '#ui/types'
import { supabase } from "~~/utils/supabase"
import { useRouter } from "vue-router"

const router = useRouter()
const recorddeatil = useState('recorddeatil')
const schema = object({
  name: string().required('Required'),
  id: string().required('Required')
})

type Schema = InferType<typeof schema>

const state = reactive({
  name: undefined,
  id: undefined
})

const toast = useToast()
const record = ref([])

function replaceSpacesWithHyphens(input: string): string {
  return input.replace(/ /g, '_'); /* [index] */
}

async function getrecord(id) {
  const { data } = await supabase.from('stritch').select().eq("id",id)
  record.value = data;
  console.log(record.value[0],'312312312')
  if (record.value.length > 0){
    toast.add({ title: 'Inquery Success!!'})
    recorddeatil.value = JSON.stringify(
      {
        datebirth: record.value[0].datebirth,
        dateofattendence: record.value[0].dateofattendence,
        dateofgraduation: record.value[0].dateofgraduation,
        degree: record.value[0].degree,
        gender: record.value[0].gender,
        gpa: record.value[0].gpa,
        id: record.value[0].id,
        imgperson: record.value[0].imgperson,
        imgscore: record.value[0].imgscore,
        major: record.value[0].major,
        name: record.value[0].name,
        nationality: record.value[0].nationality,
        registrationnumber: record.value[0].registrationnumber,
        totalcredits: record.value[0].totalcredits
      })
    router.push(`/record/${replaceSpacesWithHyphens(record.value[0].name)}`)

  }else{
    toast.add({ title: 'Inquery Failed. No data!!'})
  }
}
async function onSubmit(event: FormSubmitEvent<Schema>) {
  const id = event.data.id
  getrecord(id)
}

</script>

<template>
  <UPage>
    <ULandingSection class="!pt-5">
      <div class="container1">
        <img class="image1"
             src="https://4habe7.p3cdn1.secureserver.net/wp-content/uploads/2023/08/Campus-Exterior_05_1200X500.jpg"
             alt="Cardinal Stritch University">
        <UForm class="overlay" :schema="schema" :state="state" @submit="onSubmit">
          <h1>Check your degree here</h1>
          <UFormGroup label="Name" name="name"
                      :ui="{label: {
            wrapper: 'flex content-center items-center justify-between',
            base: 'block font-medium text-white dark:text-white-200',
            required: 'after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400',
          }}">
            <UInput type="text" v-model="state.name" placeholder="Enter your name" style="width: 20rem"/>
          </UFormGroup>
          <UFormGroup label="ID" name="id" :ui="{label: {
            wrapper: 'flex content-center items-center justify-between',
            base: 'block font-medium text-white dark:text-white-200',
            required: 'after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400',
          }}">
            <UInput type="text" v-model="state.id" placeholder="Enter your ID" style="width: 20rem" />
          </UFormGroup>
          <UFormGroup>
            <UButton type="submit">Inquery</UButton>
          </UFormGroup>
        </UForm>
      </div>
    </ULandingSection>

  </UPage>
</template>

<style>
.container1 {
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 500px;
}

.image1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000000;
}

.overlay h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #FFFFFF;
}

.overlay input[type="text"] {
  width: 80%;
  max-width: 400px;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  background-color: #FFFFFF;
}

.overlay button {
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  background-color: #f1c40f;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.overlay button:hover {
  background-color: #e67e22;
}
</style>

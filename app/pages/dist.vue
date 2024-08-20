<script setup lang="ts">
import {object, string, type InferType} from 'yup'
import type { FormSubmitEvent } from '#ui/types'
import { supabase } from "~~/utils/supabase"

const schema = object({
  id: string().required('Required')
})

type Schema = InferType<typeof schema>

const state = reactive({
  id: undefined
})

const record = ref([])

const toast = useToast()

const statedata = reactive({
  datebirth: undefined,
  dateofattendence: undefined,
  dateofgraduation: undefined,
  degree: undefined,
  gender: undefined,
  gpa: undefined,
  id: undefined,
  imgperson: undefined,
  imgscore: undefined,
  major: undefined,
  name: undefined,
  nationality: undefined,
  registrationnumber: undefined,
  totalcredits: undefined
})

function clearstate() {
  statedata.datebirth = undefined
  statedata.dateofattendence = undefined
  statedata.dateofgraduation = undefined
  statedata.degree = undefined
  statedata.gender = undefined
  statedata.gpa = undefined
  statedata.id = undefined
  statedata.imgperson = undefined
  statedata.imgscore = undefined
  statedata.major = undefined
  statedata.name = undefined
  statedata.nationality = undefined
  statedata.registrationnumber = undefined
  statedata.totalcredits = undefined
}

async function getrecord(id) {
  const { data } = await supabase.from('stritch').select().eq("id",id)
  record.value = data;
  statedata.datebirth = record.value[0].datebirth;
  statedata.dateofattendence = record.value[0].dateofattendence;
  statedata.dateofgraduation = record.value[0].dateofgraduation;
  statedata.degree = record.value[0].degree;
  statedata.gender = record.value[0].gender;
  statedata.gpa = record.value[0].gpa;
  statedata.id = record.value[0].id;
  statedata.imgperson = record.value[0].imgperson;
  statedata.imgscore = record.value[0].imgscore;
  statedata.major = record.value[0].major;
  statedata.name = record.value[0].name;
  statedata.nationality = record.value[0].nationality;
  statedata.registrationnumber = record.value[0].registrationnumber;
  statedata.totalcredits = record.value[0].totalcredits;
}
async function onSubmit(event: FormSubmitEvent<Schema>) {
  const id = event.data.id
  getrecord(id)
}

const onimgpersonChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const file = target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      statedata.imgperson = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
};

const onimgscoreChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const file = target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      statedata.imgscore = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
};

async function submitchange() {
  const { data } = await supabase.from('stritch').select().eq("id",statedata.id)
  if (data.length == 0) {
    await supabase.from('stritch').insert({
      "datebirth" : statedata.datebirth,
      "dateofattendence" : statedata.dateofattendence,
      "dateofgraduation" : statedata.dateofgraduation,
      "degree" : statedata.degree,
      "gender" : statedata.gender,
      "gpa" : statedata.gpa,
      "id" : statedata.id,
      "imgperson" : statedata.imgperson,
      "imgscore" : statedata.imgscore,
      "major" : statedata.major,
      "name" : statedata.name,
      "nationality" : statedata.nationality,
      "registrationnumber" : statedata.registrationnumber,
      "totalcredits" : statedata.totalcredits,
    }).eq("id",statedata.id)
  }else{
    await supabase.from('stritch').update({
      "datebirth" : statedata.datebirth,
      "dateofattendence" : statedata.dateofattendence,
      "dateofgraduation" : statedata.dateofgraduation,
      "degree" : statedata.degree,
      "gender" : statedata.gender,
      "gpa" : statedata.gpa,
      "id" : statedata.id,
      "imgperson" : statedata.imgperson,
      "imgscore" : statedata.imgscore,
      "major" : statedata.major,
      "name" : statedata.name,
      "nationality" : statedata.nationality,
      "registrationnumber" : statedata.registrationnumber,
      "totalcredits" : statedata.totalcredits,
    }).eq("id",statedata.id)
  }

  clearstate()
  toast.add({ title: 'Submit Success!!'})
}
</script>

<template>
  <ULandingSection class="!pt-5">
    <UForm :schema="schema" :state="state" @submit="onSubmit">
      <UFormGroup
        :ui="{ container: 'mt-3' }"
      >
        <UInput
          v-model="state.id"
          type="id"
          placeholder="enter ID"
          :ui="{ icon: { trailing: { pointer: '' } } }"
          required
          size="xl"
          autocomplete="off"
          class="max-w-sm mx-auto"
          input-class="rounded-full"
        >
          <template #trailing>
            <UButton
              type="submit"
              size="xs"
              color="primary"
              label="submit"
            />
          </template>
        </UInput>
      </UFormGroup>
    </UForm>
  </ULandingSection>
  <UPage>
    <UForm class="container student-registration" :state="statedata">
      <h1>Student's Registration Information</h1>
      <div class="profile">
        <UFormGroup class="photo">
          <img :src="statedata.imgperson" alt="Student Photo">
          <input
            type="file"
            size="sm"
            @change="onimgpersonChange"
          />
        </UFormGroup>
        <div class="info">
          <UFormGroup class="field">
            <p>Student Name</p>
            <UInput v-model="statedata.name" />
          </UFormGroup>
          <UFormGroup class="field">
            <p>Date of Birth</p>
            <UInput v-model="statedata.datebirth" />
          </UFormGroup>
          <UFormGroup class="field">
            <p>Gender</p>
            <UInput v-model="statedata.gender" />
          </UFormGroup>
          <UFormGroup class="field">
            <p>Nationality</p>
            <UInput v-model="statedata.nationality" />
          </UFormGroup>
          <UFormGroup class="field">
            <p>Reg Number</p>
            <UInput v-model="statedata.registrationnumber" />
          </UFormGroup>
          <UFormGroup class="field">
            <p>ID/Passport No.</p>
            <UInput v-model="statedata.id" />
          </UFormGroup>
          <UFormGroup class="field">
            <p>Major of Study</p>
            <UInput v-model="statedata.major" />
          </UFormGroup>
          <UFormGroup class="field">
            <p>Degrees Awarded</p>
            <UInput v-model="statedata.degree" />
          </UFormGroup>
          <UFormGroup class="field">
            <p>Total Credits for Completion</p>
            <UInput v-model="statedata.totalcredits" />
          </UFormGroup>
          <UFormGroup class="field">
            <p>The Grade Point Average (The GPA)</p>
            <UInput v-model="statedata.gpa" />
          </UFormGroup>
          <UFormGroup class="field">
            <p>Date of Attendance</p>
            <UInput v-model="statedata.dateofattendence" />
          </UFormGroup>
          <UFormGroup class="field">
            <p>Date of Graduation</p>
            <UInput v-model="statedata.dateofgraduation" />
          </UFormGroup>
        </div>
      </div>
      <UDivider label="Student's Score Information" class="mt-4 mb-2" :ui="{ label: 'text-lg text-primary-500 dark:text-primary-400' }"/>
      <UFormGroup>
        <img :src="statedata.imgscore" />
        <input
          type="file"
          size="sm"
          @change="onimgscoreChange"
        />
      </UFormGroup>
      <UFormGroup class="flex justify-center mt-2 ">
        <UButton type="submit" @click="submitchange">submit</UButton>
      </UFormGroup>
    </UForm>
  </UPage>
</template>

<style>
.container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.profile {
  display: flex;
  align-items: flex-start;
}

.photo {
  flex: 1;
  text-align: center;
}

.photo img {
  width: 150px;
  height: auto;
}

.info {
  flex: 2;
  margin-left: 20px;
}

.field {
  margin-bottom: 10px;
}

.field p {
  margin: 0;
  font-weight: bold;
}

.field UInput {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.UDivider {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>


<script setup lang="ts">
import {useRouter} from 'vue-router'

const router = useRouter()
const recorddeatil = useState('recorddeatil')
const record = JSON.parse(recorddeatil.value)

</script>

<template>
  <div class="container">
    <h1>Student's Registration Information</h1>
    <div class="profile">
      <img :src="record.imgperson" alt="Student Photo">
      <table>
        <tr>
          <th>Student Name</th>
          <td>{{record.name}}</td>
        </tr>
        <tr>
          <th>Gender</th>
          <td>{{record.gender}}</td>
        </tr>
        <tr>
          <th>Date of Birth</th>
          <td>{{record.datebirth}}</td>
        </tr>
        <tr>
          <th>Nationality</th>
          <td>{{ record.nationality }}</td>
        </tr>
        <tr>
          <th>Reg Number</th>
          <td>{{ record.registrationnumber }}</td>
        </tr>
        <tr>
          <th>ID/Passport No.</th>
          <td>{{ record.id }}</td>
        </tr>
        <tr>
          <th>Major of Study</th>
          <td>{{ record.major }}</td>
        </tr>
        <tr>
          <th>Degrees Awarded</th>
          <td>{{ record.degree }}</td>
        </tr>
        <tr>
          <th>Total Credits for Completion</th>
          <td>{{ record.totalcredits }}</td>
        </tr>
        <tr>
          <th>The Grade Point Average (The GPA)</th>
          <td>{{ record.gpa }}</td>
        </tr>
        <tr>
          <th>Date of Attendance & Date of Graduation</th>
          <td>{{ record.dateofattendence }} - {{ record.dateofgraduation }}</td>
        </tr>
      </table>
    </div>
    <UDivider label="Student's Score Information" class="mt-4 mb-2" :ui="{ label: 'text-lg text-primary-500 dark:text-primary-400' }"/>
    <div >
      <img :src=record.imgscore />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
}

h1 {
  text-align: center;
  color: #333;
  font-weight: bolder;
  font-size: 25px;
  margin-bottom: 10px;
}

.profile {
  display: flex;
  flex-direction: row;
}

.profile img {
  width: 150px;
  height: 200px;
  margin-right: 20px;
  object-fit: cover;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table th, table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

table th {
  width: 40%;
  background-color: #f4f4f4;
}

table td {
  width: 60%;
}
</style>

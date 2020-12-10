<template>
  <div class="about">
  <v-card width="600px" class="mx-auto my-auto">
     <v-card-title class="pb-0">
        <h1 class="mx-auto mb-5">Formulario de Cursos</h1>
      </v-card-title>
  <v-form>
    <v-text-field
      v-model="course.name"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="course.description"
      label="Description"
      required
    ></v-text-field>

     <v-text-field
      v-model="course.img"
      label="img"
      required
    ></v-text-field>

    <v-btn
      color="success"
      class="mr-4"
      @click="submitCourse"
    >crear
    </v-btn> 
  </v-form>
  </v-card>

  <template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            description
          </th>
          <th class="text-left">
            image
          </th>
          <th class="text-left">
            editar
          </th>
          <th class="text-left">
            eliminar
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="course in courses" :key="course.id"
        >
          <td>{{ course.data.name }}</td>
          <td>{{ course.data.description }}</td>
          <td>{{ course.data.img }}</td>
          <td><v-btn text @click="editCourse(course.id)">editar</v-btn></td>
          <td><v-btn text @click="deleteCourse(course.id)">eliminar</v-btn></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  data() {
    return {
      course: {
        id: null,
        img: '',
        name:'',
        description:''
      }
    }
  },
  methods:{
    ...mapActions(["deleteCourse","createCourse", "updateCourse"]),
    submitCourse(){
      if(this.course.id){
        this.updateCourse(this.course)
      }else{
        this.createCourse(this.course)
      }
      this.resetForm()
    },
    resetForm(){
      this.course.img = ""
      this.course.name = ""
      this.course.description = "" 
      this.course.id = null 
    },
    editCourse(id){
      let target = this.courses.find((course) => course.id == id)
      this.course.name = target.data.name
      this.course.img = target.data.img
      this.course.description = target.data.description
      this.course.id = target.id
    }
  },
  computed:{
    ...mapState(["courses"])
  }
}
</script>
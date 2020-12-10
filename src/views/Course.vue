<template>
<v-main>
  <v-img :src="course.data.img" height="400px"></v-img>
  <v-container>
    <p class="mt-5 text-h6 text-center">Página del curso</p>
    <p class="text-h3 text-center">{{course.data.name}}</p>
    <v-row class="mt-8">
      <v-col v-for="example in course.examples" :key="example.id" cols="12" sm="6" md="4">
        <v-card>
          <v-card-text>
            <p>{{example.data.title}}</p>
            <p>{{example.data.description}}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <audio controls>
              <source :src="example.data.mp3"  type="audio/mp3">
              Your browser does not support the audio tag.
            </audio>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</v-main>
</template>

<script>
import {mapState} from 'vuex'
export default {
 props: ['id'],
 computed:{
   ...mapState(['courses']),
   course(){
     return this.courses.find((course)=> course.id == this.id )
   }
 },
}
</script>

<style>

</style>
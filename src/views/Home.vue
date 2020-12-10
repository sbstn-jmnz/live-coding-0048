<template>
<div>
  <CarouselComponent/>
  <div class="home">
    <v-row class="mt-8 mb-15">
      <v-col v-for="course in courses" :key="course.id" cols="12" sm="6" md="4">
        <v-card>
          <v-img :src="course.data.img" height="250px">
            <p>{{ course.data.name}}</p>
          </v-img>
          <v-card-text>
            {{ course.data.description}}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :to="{ name:'Course', params:{ id: course.id}}">Ver más</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex';
import CarouselComponent  from '@/components/CarouselComponent'
export default {
  name: 'Home',
  components: {
    CarouselComponent
  },
  methods:{
    ...mapActions(['getCourses'])
  },
  computed: {
    ...mapState(['courses'])
  },
  created(){
    this.getCourses()
  }
}
</script>

<template>
<div>
  <CarouselComponent/>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import CarouselComponent  from '@/components/CarouselComponent'
export default {
  name: 'Home',
  components: {
    CarouselComponent
  }
}
</script>

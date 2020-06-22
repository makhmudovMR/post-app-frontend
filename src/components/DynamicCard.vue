<template>
  <div class="card">
    <h5 class="card-header">{{this.title}}</h5>
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">{{this.body}}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
    props: ['title', 'body'],
    data(){
        return {

        }
    }
}
</script>
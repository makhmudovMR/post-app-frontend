<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <Navbar />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-9">
        <Post />
        <Post />
      </div>
      <div class="col-3">
        <DynamicCard v-bind:title="'Dynamic Card'" v-bind:body="'some body text'" class="mb-4"/>
        <News class="mb-4"/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Post from "@/components/Post.vue";
import DynamicCard from "@/components/DynamicCard.vue";
import News from "@/components/News.vue";

export default {
  components: {
    Navbar,
    Post,
    DynamicCard,
    News,
  }
};
</script>

<style scoped>
</style>
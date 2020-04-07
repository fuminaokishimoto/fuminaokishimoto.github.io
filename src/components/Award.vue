<template>
  <div class="d-flex flex-column">
    <h2 class="title mb-2">Award</h2>
    <ol class="ml-6">
      <li
        v-for="(item, i) in award"
        :key="i"
        class="text-justify"
        v-html="item"
      ></li>
    </ol>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      award: 'content/getAward'
    })
  }
}
</script>

<style></style>

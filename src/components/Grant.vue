<template>
  <div class="d-flex flex-column">
    <h2 class="title mb-2">Grant</h2>
    <ol class="ml-6">
      <li
        v-for="(item, i) in grant"
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
      grant: 'content/getGrant'
    })
  }
}
</script>

<style></style>

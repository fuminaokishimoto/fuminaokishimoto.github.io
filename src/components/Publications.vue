<template>
  <div class="d-flex flex-column">
    <h2 class="title mb-2">Publications</h2>
    <div
      v-for="(item, i) in publications"
      :key="i"
      class="ml-2"
      :class="{ 'mt-2': i !== 0 }"
    >
      <h3 class="subtitle-1 font-weight-medium">[{{ item.year }}]</h3>
      <ol class="ml-4">
        <li
          v-for="(content, j) in item.contents"
          :key="j"
          class="text-justify"
          v-html="content"
        ></li>
      </ol>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      publications: 'content/getPublications'
    })
  }
}
</script>

<style></style>

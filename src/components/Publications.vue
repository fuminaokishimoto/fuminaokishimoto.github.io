<template>
  <div class="d-flex flex-column">
    <h2 class="title mb-2">
      Publications
      <a
        href="https://scholar.google.com/citations?user=ug6E06wAAAAJ&hl=en"
        class="subtitle-1"
        >[Google Scholar]</a
      >
    </h2>
    <div
      v-for="(item, i) in publications"
      :key="i"
      class="ml-2"
      :class="{ 'mt-2': i !== 0 }"
    >
      <h3 class="subtitle-1 font-weight-medium">[{{ item.year }}]</h3>
      <ol class="ml-4" :start="startNum(item.year)">
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
    }),
    startNum() {
      return function(year) {
        let number = 1
        for (const item of this.publications) {
          if (item.year === year) {
            return number
          } else {
            number = number + item.contents.length
          }
        }
      }
    }
  }
}
</script>

<style></style>

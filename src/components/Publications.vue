<template>
  <div>
    <div>
      <h2 class="display-title font-weight-regular">Publications</h2>
    </div>
    <div class="mx-4 d-flex-row">
      <div v-for="(item, i) in publications" :key="i" class="d-flex-row my-4">
        <div
          class="title indigo--text text--darken-4 ideograph"
          style="line-height: 1.4;"
          v-html="item.title"
        ></div>
        <div class="ideograph" v-html="item.author"></div>
        <div class="font-weight-light ideograph" v-html="item.info"></div>
      </div>
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

<style>
.ideograph {
  text-align: justify;
  text-justify: inter-ideograph;
}
</style>

<template>
  <div>
    <div>
      <h2 class="display-title font-weight-regular">Link</h2>
    </div>
    <div class="mx-4 d-flex-row">
      <div v-for="(item, i) in link" :key="i" class="d-flex-row my-2">
        <a :href="item.href">{{ item.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      link: 'content/getLink'
    })
  }
}
</script>

<style></style>

<template>
  <div>
    <div>
      <h2 class="display-title font-weight-regular">Education</h2>
    </div>
    <div class="mx-4 d-flex-row">
      <div v-for="(item, i) in education" :key="i" class="d-flex my-2">
        <template v-if="$vuetify.breakpoint.smAndUp">
          <div class="d-flex mr-2">
            <div class="text-center" style="width: 80px">{{ item.from }}</div>
            <div>〜</div>
            <div class="text-center" style="width: 80px">{{ item.to }}</div>
          </div>
        </template>
        <template v-else>
          <div class="d-flex-row mr-2">
            <div class="text-center" style="width: 80px">{{ item.from }}</div>
            <div class="text-center" style="width: 80px">〜</div>
            <div class="text-center" style="width: 80px">{{ item.to }}</div>
          </div>
        </template>
        <div class="d-flex-row">
          <div>{{ item.what }}</div>
          <div>{{ item.where }}</div>
          <div>Advisor: {{ item.advisor }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      education: 'content/getEducation'
    })
  }
}
</script>

<style></style>

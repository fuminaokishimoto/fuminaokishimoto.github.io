<template>
  <div class="d-flex flex-column">
    <h2 class="title mb-2">Professional Profile</h2>
    <div class="d-flex flex-column ml-2">
      <div
        v-for="(item, i) in professionalProfile"
        :key="i"
        class="d-flex"
        :class="{ 'mt-2': i !== 0 }"
      >
        <div
          class="d-flex"
          :class="{
            'flex-column': !breakpointSmAndUp,
            'align-center': !breakpointSmAndUp
          }"
        >
          <div class="text-center" style="width: 80px;">
            {{ item.from }}
          </div>
          <div class="text-center">-</div>
          <div class="text-center" style="width: 80px;">{{ item.to }}</div>
        </div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="ml-4" v-html="item.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      isHydrated: false
    }
  },
  computed: {
    ...mapGetters({
      professionalProfile: 'content/getProfessionalProfile'
    }),
    breakpointSmAndUp() {
      return this.isHydrated ? this.$vuetify.breakpoint.smAndUp : true
    }
  },
  mounted() {
    this.isHydrated = true
  }
}
</script>

<style></style>

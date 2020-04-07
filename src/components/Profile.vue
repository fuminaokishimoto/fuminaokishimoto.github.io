<template>
  <div class="d-flex flex-column">
    <div class="d-flex" :class="{ 'flex-column': !breakpointSmAndUp }">
      <v-img :max-width="selfieWidth" :src="profile.faceImage"></v-img>
      <div
        class="d-flex flex-column"
        :class="{
          'ml-6': breakpointSmAndUp,
          'mt-4': !breakpointSmAndUp
        }"
      >
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="profile.affiliation"></div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="mt-2" v-html="profile.position"></div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="mt-4 headline" v-html="profile.name"></div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="mt-4 d-flex flex-column">
          <div class="d-flex">
            <div class="font-weight-medium" style="width: 60px;">Email:</div>
            <div>{{ profile.email }}</div>
          </div>
          <div class="d-flex">
            <div class="font-weight-medium" style="width: 60px;">Office:</div>
            <div>{{ profile.office }}</div>
          </div>
          <div class="d-flex">
            <div class="font-weight-medium" style="width: 60px;">Tel:</div>
            <div>{{ profile.tel }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column mt-4">
      <div
        class="text-justify"
        v-html="profile.researchInterest.shortBio"
      ></div>
      <div class="d-flex flex-column mt-2 ml-2">
        <div class="subtitle-1 font-weight-medium">Topics</div>
        <ul class="ml-2">
          <li v-for="(topic, i) in profile.researchInterest.topics" :key="i">
            {{ topic }}
          </li>
        </ul>
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
      profile: 'content/getProfile'
    }),
    breakpointSmAndUp() {
      return this.isHydrated ? this.$vuetify.breakpoint.smAndUp : true
    },
    selfieWidth() {
      return this.$vuetify.breakpoint.smAndUp ? '250px' : '1000px'
    }
  },
  mounted() {
    this.isHydrated = true
  }
}
</script>

<style></style>

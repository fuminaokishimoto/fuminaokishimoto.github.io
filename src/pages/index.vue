<template>
  <v-layout column align-center>
    <v-card color="#FAFAFA" width="876">
      <div class="mx-6 mt-6 mb-4">
        <h1 class="display-1 font-weight-regular">
          {{ profile.name }}
        </h1>
      </div>
      <v-divider class="mx-4"></v-divider>
      <profile class="px-6"></profile>
      <research-interest class="mx-6 mb-6"></research-interest>
      <education class="mx-6 my-6"></education>
      <professional-profile class="mx-6 my-6"></professional-profile>
      <publications class="mx-6 my-6"></publications>
      <my-link class="mx-6 mt-6"></my-link>
      <div class="my-10"></div>
    </v-card>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import Profile from '~/components/Profile'
import ResearchInterest from '~/components/ResearchInterest'
import Education from '~/components/Education'
import ProfessionalProfile from '~/components/ProfessionalProfile'
import Publications from '~/components/Publications'
import Link from '~/components/Link'

export default {
  components: {
    Profile,
    ResearchInterest,
    Education,
    ProfessionalProfile,
    Publications,
    MyLink: Link
  },
  computed: {
    ...mapGetters({
      profile: 'content/getProfile'
    })
  }
}
</script>

<style>
p {
  white-space: pre;
}
</style>

<template>
  <div class="mx-8">
    <v-card
      class="mx-auto my-6 d-flex flex-column"
      max-width="1000"
      color="#fafafa"
    >
      <profile class="pt-6 pb-4 px-6"></profile>
      <education class="py-4 px-6"></education>
      <professional-profile class="py-4 px-6"></professional-profile>
      <publications class="py-4 px-6"></publications>
      <award class="py-4 px-6"></award>
      <grant class="py-4 pb-8 px-6"></grant>
    </v-card>
  </div>
</template>

<script>
import Profile from '~/components/Profile'
import Education from '~/components/Education'
import ProfessionalProfile from '~/components/ProfessionalProfile'
import Publications from '~/components/Publications'
import Award from '~/components/Award'
import Grant from '~/components/Grant'

export default {
  components: {
    Profile,
    Education,
    ProfessionalProfile,
    Publications,
    Award,
    Grant
  }
}
</script>

<style></style>

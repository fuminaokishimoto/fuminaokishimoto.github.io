<template>
  <div>
    <div>
      <h2 class="display-title font-weight-regular">Research Interest</h2>
    </div>
    <div class="mx-4 ideograph">
      {{ researchInterest.shortBio }}
    </div>
    <div class="mx-4 my-2">
      <div>
        <h3 class="subtitle-1 font-weight-medium">[Topics]</h3>
      </div>
      <ul class="ml-4">
        <li v-for="(topic, i) in researchInterest.topics" :key="i">
          {{ topic }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      researchInterest: 'content/getResearchInterest'
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

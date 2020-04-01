<template>
  <v-app>
    <v-content class="background">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {}
</script>

<style>
.background {
  background-image: url('~assets/background.png');
  background-repeat: repeat;
}
</style>

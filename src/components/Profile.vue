<template>
  <v-container>
    <v-row>
      <v-col sm="4">
        <v-img :src="profile.faceImage"></v-img>
      </v-col>
      <v-col sm="8">
        <div>
          <div class="mb-1">
            {{ profile.position }}
          </div>
          <div v-html="profile.affiliation"></div>
        </div>
        <div class="mt-4 d-flex-row">
          <div class="d-flex">
            <div
              class="font-weight-bold"
              style="min-width: 60px; max-width: 60px;"
            >
              Email:
            </div>
            <div>{{ profile.email }}</div>
          </div>
          <div class="d-flex">
            <div
              class="font-weight-bold"
              style="min-width: 60px; max-width: 60px;"
            >
              Office:
            </div>
            <div>{{ profile.office }}</div>
          </div>
          <div class="d-flex">
            <div
              class="font-weight-bold"
              style="min-width: 60px; max-width: 60px;"
            >
              Tel:
            </div>
            <div>{{ profile.tel }}</div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      profile: 'content/getProfile'
    })
  }
}
</script>

<style></style>

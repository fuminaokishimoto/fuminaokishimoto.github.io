import content from '~/assets/content.json'

export const state = () => ({
  content
})

export const getters = {
  getProfile(state) {
    return state.content.profile
  },
  getResearchInterest(state) {
    return state.content.researchInterest
  },
  getEducation(state) {
    return state.content.education
  },
  getProfessionalProfile(state) {
    return state.content.professionalProfile
  },
  getPublications(state) {
    return state.content.publications
  },
  getLink(state) {
    return state.content.link
  }
}

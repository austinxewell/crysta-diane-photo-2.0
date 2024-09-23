import { defineStore } from 'pinia';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const useContactInfoStore = defineStore('contactInformation', {
  state: () => ({
    loading: false,
    error: null,
    websiteEmail: null,
    socialLinks: []
  }),

  getters: {
    getWebsiteEmail: (state) => state.websiteEmail,
    getSocialLinks: (state) => state.socialLinks
  },

  actions: {
    async fetchWebsiteEmail() {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get(`${API_URL}/websiteEmail`);
        this.websiteEmail = response.data;
      } catch (err) {
        this.error = err.message;
        console.error(err);
      } finally {
        this.loading = false;
      }
    },

    async fetchSocialLinks() {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get(`${API_URL}/socialLinks`);
        this.socialLinks = response.data;
      } catch (err) {
        this.error = err.message;
        console.error(err);
      } finally {
        this.loading = false;
      }
    }
  }
});

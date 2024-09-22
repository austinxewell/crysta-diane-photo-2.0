import { defineStore } from 'pinia';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const useWebsiteStore = defineStore('website', {
  state: () => ({
    loading: false,
    error: null,
    websiteInfo: {}
  }),

  getters: {
    getWebsiteInfo: (state) => state.websiteGreeting
  },

  actions: {
    // TODO - add website end points when they are created
    async fetchWebsiteInfo() {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get(`${API_URL}/websiteInfo`);
        this.websiteInfo = response.data;
      } catch (err) {
        this.error = err.message;
        console.error(err);
      } finally {
        this.loading = false;
      }
    }
  }
});

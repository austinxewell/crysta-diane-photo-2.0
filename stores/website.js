import { defineStore } from 'pinia';
import Cookies from 'js-cookie';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const useWebsiteStore = defineStore('website', {
  state: () => ({
    loading: false,
    error: null,
    websiteInfo: {}
  }),

  getters: {
    getWebsiteInfo: (state) => state.websiteInfo
  },

  actions: {
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
    },

    async postWebsiteInfo(form) {
      this.loading = true;
      this.error = null;

      try {
        const token = Cookies.get('token'); // Retrieve the token from cookies
        console.log(token);
        await axios.post(`${API_URL}/postWebsiteInfo`, form, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}` // Send the token as Bearer
          }
        });
      } catch (err) {
        this.error = err.response?.data?.message || err.message || 'An error occurred';
        console.error(err);
      } finally {
        this.loading = false;
      }
    }
  }
});

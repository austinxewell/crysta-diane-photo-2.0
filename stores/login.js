import { defineStore } from 'pinia';
import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = import.meta.env.VITE_API_URL;

export const useLoginStore = defineStore('login', {
  state: () => ({
    user: null,
    loading: false,
    error: null,
    message: null
  }),
  getters: {
    isLoggedIn: (state) => !!state.user // This remains unchanged
  },
  actions: {
    async initialize() {
      const token = Cookies.get('token');
      if (token) {
        try {
          const response = await axios.get(`${API_URL}/authenticate`, {
            // Adjust endpoint if needed
            headers: { Authorization: `Bearer ${token}` }
          });
          this.user = response.data.user; // Set user if token is valid
        } catch (err) {
          console.error('Token validation failed:', err);
          Cookies.remove('token'); // Remove invalid token
        }
      }
    },

    async login(credentials, router) {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.post(`${API_URL}/login`, credentials);

        if (response.data.user) {
          this.user = response.data.user;
          const token = response.data.access_token;
          Cookies.set('token', token, { expires: 1, secure: true });
          await router.push('/');
        } else {
          this.message = response.data.message;
        }
      } catch (err) {
        this.error = err.message;
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
    async logout() {
      this.user = null;
      Cookies.remove('token');
    }
  }
});

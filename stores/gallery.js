import { defineStore } from 'pinia';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const useGalleryStore = defineStore('gallery', {
  state: () => ({
    loading: false,
    error: null,
    gallery: [],
    heroPhotos: []
  }),

  getters: {
    getGallery: (state) => state.gallery,
    getHeroPhotos: (state) => state.heroPhotos
  },

  actions: {
    async fetchGallery() {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get(`${API_URL}/gallery`);
        this.gallery = response.data;
      } catch (err) {
        this.error = err.message;
        console.error(err);
      } finally {
        this.loading = false;
      }
    },

    async fetchHeroPhotos() {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get(`${API_URL}/heroPhotos`);
        this.heroPhotos = response.data;
      } catch (err) {
        this.error = err.message;
        console.error(err);
      } finally {
        this.loading = false;
      }
    }
  }
});

import { defineStore } from 'pinia';

const userStore = defineStore('user', {
  state: () => {
    return {
      name: 'xxx',
    };
  },
  // other options...
});

export default userStore;

<template>
  <label>
    <input type="checkbox" v-model="eighties">
    <span>Back to
      <span v-if="!eighties">the future</span>
      <span v-if="eighties">today</span>!
    </span>
  </label>
</template>

<script>
export default {
  name: 'ThemeSwitch',
  data() {
    return {
      eighties: false,
    }
  },
  watch: {
    eighties: function(value) {
      const el = document.documentElement;
      if (value) {
        el.setAttribute('data-theme', 'back-to-the-future')
      } else {
        el.removeAttribute('data-theme')
      }
    }
  }
};
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker');
</style>

<style scoped>
label {
  position: absolute;
  top: var(--spacingS);
  right: var(--spacingS);
  font-size: var(--fontSizeXS);
  opacity: 0.05;
  transition: opacity var(--animationDuration) ease-in;
}
label:hover,
label:focus,
label:active {
  opacity: 1;
}
</style>

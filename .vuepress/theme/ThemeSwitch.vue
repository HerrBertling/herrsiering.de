<template>
  <div class="theme-switch">
    <button
      @click="togglePopup"
      aria-haspopup="true"
      :aria-expanded="popupVisible ? 'true' : 'false'"
    >
      Theme: {{ themoji }}
    </button>
    <div
      :class="['popup', popupVisible && 'visible']"
      :aria-hidden="!popupVisible"
      role="menu"
    >
      <label role="menuitem">
        <input
          type="radio"
          value="light"
          v-model="theme"
        />
        <span>☀️Light</span>
      </label>
      <label role="menuitem">
        <input
          type="radio"
          value="dark"
          v-model="theme"
        />
        <span>🌙Dark</span>
      </label>
      <label role="menuitem">
        <input
          type="radio"
          value="eighties"
          v-model="theme"
        />
        <span>👩‍🎤Eighties</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThemeSwitch",

  data() {
    return {
      theme: "",
      popupVisible: false
    };
  },

  computed: {
    themoji() {
      if (this.theme === "dark") {
        return "🌙";
      }
      if (this.theme === "eighties") {
        return "👩‍🎤";
      }
      if (this.theme === "light") {
        return "☀️";
      }
      return "🤔";
    }
  },

  methods: {
    togglePopup() {
      this.popupVisible = !this.popupVisible;
    }
  },

  watch: {
    theme: function(value) {
      const el = document.documentElement;
      if (value) {
        el.setAttribute("data-theme", value);
        this.popupVisible = false;
      } else {
        el.removeAttribute("data-theme");
      }
    }
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Permanent+Marker");
</style>

<style scoped>
.theme-switch {
  position: absolute;
  top: var(--spacingXS);
  right: var(--spacingXS);
  display: block;
  z-index: 1337;
}
@media (min-width: 840px) {
  .theme-switch {
    position: relative;
    top: auto;
    right: auto;
    transform: translateY(-12px);
  }
}

label {
  display: block;
  font-size: var(--fontSizeXS);
  margin-bottom: var(--spacingXS);
}

label > input {
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; /* added line */
}

button {
  display: block;
  margin: 0;
  background: none;
  appearance: none;
  border: 1px solid currentColor;
  color: var(--textColorLightest);
  border-radius: var(--spacingS);
  padding: calc(var(--spacingXS) / 2) calc(var(--spacingXS) * 1.5);
  font-family: inherit;
  font-size: var(--fontSizeXS);
}

.popup {
  position: absolute;
  top: 110%;
  width: 130%;
  right: var(--spacingXS);
  opacity: 0;
  padding: var(--spacingXS) var(--spacingS);
  z-index: 100;
  background: var(--backgroundBasic);
  color: var(--mainColor);
  border-radius: 4px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.15);
}

.visible {
  opacity: 1;
}
</style>

<!-- ThemeSwitcher.vue -->
<template>
  <div class="theme-container">
    <button
      @click="toggleTheme"
      :class="['theme-toggle', { 'dark-mode': darkMode }]"
      aria-label="Toggle theme"
    >
      <div class="toggle-thumb">
        <svg
          v-if="!darkMode"
          class="sun-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="5" />
          <path
            d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
          />
        </svg>
        <svg
          v-else
          class="moon-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "ThemeSwitcher",
  data() {
    return {
      darkMode: false,
    };
  },
  mounted() {
    // Check initial theme
    this.darkMode = document.documentElement.classList.contains("dark");
    console.log("Initial dark mode:", this.darkMode); // Debug log
  },
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode;
      console.log("Toggle clicked, dark mode:", this.darkMode); // Debug log

      if (this.darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      // Try to save preference
      try {
        localStorage.setItem("theme", this.darkMode ? "dark" : "light");
      } catch (e) {
        console.warn("localStorage not available");
      }
    },
  },
};
</script>

<style scoped>
.theme-container {
  display: inline-block;
  padding: 10px;
}

.theme-toggle {
  position: relative;
  width: 60px;
  height: 30px;
  background-color: #e5e7eb;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background-color 0.3s;
}

.theme-toggle.dark-mode {
  background-color: #4b5563;
}

.toggle-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dark-mode .toggle-thumb {
  transform: translateX(30px);
  background-color: #374151;
}

.sun-icon,
.moon-icon {
  width: 16px;
  height: 16px;
  stroke-width: 2;
}

.sun-icon {
  color: #fbbf24;
}

.moon-icon {
  color: #ffffff;
}
</style>

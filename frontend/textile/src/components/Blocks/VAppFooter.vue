<script setup></script>

<template>
  <v-footer height="40" app>
    <div class="text-caption mx-auto text-disabled">
      &copy; 2023-{{ new Date().getFullYear() }}
      <span>HW, Inc</span>
      —
      <a class="text-decoration-none on-surface" rel="noopener noreferrer" target="_blank">
        MIT License
      </a>
    </div>
  </v-footer>
</template>

<style scoped lang="sass">
.social-link :deep(.v-icon)
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
  text-decoration: none
  transition: .2s ease-in-out

  &:hover
    color: rgba(25, 118, 210, 1)
</style>

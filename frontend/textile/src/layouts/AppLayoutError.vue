<script setup></script>

<template>
  <div class="flex flex-column justify-center items-center mt-20">
    <v-empty-state
      headline="Упс, 404"
      title="Искомая страница не найдена"
      text="Судя по всему, Вы попали на страницу, которой не существует"
      icon="mdi-alert-circle-outline"
      color="error"
    >
    </v-empty-state>

    <slot></slot>
  </div>
</template>

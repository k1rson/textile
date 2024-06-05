<script setup>
// imports
import { ref } from 'vue'
import { api } from '../../api/api'

// data()
const email = ref('')
const password = ref('')
const alertMessage = ref('')

const loading = ref(false)
const showPassword = ref(false)
const showAlert = ref(false)

// validate rules
const rules = {
  // eslint-disable-next-line prettier/prettier
  email: [(v) => !!v || 'Введите Email', (v) => /.+@.+\..+/.test(v) || 'Введите корректный Email'],
  password: [
    (v) => !!v || 'Введите пароль',
    (v) => v.length >= 6 || 'Пароль должен быть не менее 6 символов'
  ]
}

// func
async function login() {
  loading.value = true

  const userData = await api.users.getUserData()
  console.log(userData)
}
</script>

<template>
  <div class="flex flex-column justify-center items-center gap-8">
    <v-img class="mt-48">
      <img width="300" src="@/assets/img/svg/logo-base.svg" alt="logo" />
    </v-img>

    <v-card width="300" variant="tonal" rounded="lg" :loading="loading">
      <template #text>
        <v-scroll-x-transition>
          <v-alert
            v-model="showAlert"
            icon="mdi-alert-circle-outline"
            variant="tonal"
            color="error"
            class="mb-4"
          >
            {{ alertMessage }}
          </v-alert>
        </v-scroll-x-transition>

        <v-text-field
          v-model="email"
          variant="outlined"
          density="compact"
          label="Ваш Email"
          prepend-inner-icon="mdi-email-outline"
          class="mb-2"
          clearable
          :rules="rules.email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          variant="outlined"
          density="compact"
          label="Ваш пароль"
          prepend-inner-icon="mdi-lock-outline"
          class="mb-2"
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          :rules="rules.password"
          @click:appendInner="showPassword = !showPassword"
          clearable
        ></v-text-field>

        <v-btn
          text="Авторизоваться"
          color="brown-lighten-1"
          prepend-icon="mdi-login"
          block
          :disabled="loading"
          @click="login()"
        ></v-btn>
      </template>
    </v-card>
  </div>
</template>

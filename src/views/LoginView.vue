<template>
  <div class="flex md:flex-row flex-col items-center relative">
    <div class="absolute right-0 top-0 p-10 md:w-5/12 w-full">
      <div class="mx-auto md:max-w-md max-w-lg md:pt-10 flex justify-end">
        <Dropdown v-model="country" :options="countryOptions" class="dropdown-country"
          panel-class="2xl:ml-[-96px] xl:w-40">
          <template #value="slotProps">
            <img :alt="slotProps.value.label" :src="slotProps.value.icon" width="25" height="25" />
          </template>
          <template #option="slotProps">
            <div class="flex items-center">
              <img :alt="slotProps.option.label" :src="slotProps.option.icon" class="mr-2" width="25" height="25" />
              <div>{{ slotProps.option.label }}</div>
            </div>
          </template>
        </Dropdown>
      </div>
    </div>
    <header class="md:bg-surface-0 md:dark:bg-surface-950 md:shadow-xl px-10 md:w-7/12 w-full">
      <div class="flex flex-col mx-auto max-w-lg justify-between md:min-h-screen">
        <router-link to="/teste">
          <Logo height="49" width="239" class="md:my-20 mt-10 auth__logo" />
        </router-link>
        <h1 class="md:mt-20 text-4xl leading-tight font-semibold hidden md:block" v-html="t.headline.html" />
        <img class="md:mt-20 hidden md:block" src="/auth-bg-element.svg" height="326" width="280" />
      </div>
    </header>
    <main
      class="bg-transparent p-10 w-full md:w-5/12 min-h-screen flex items-center mt-[-72px] md:mt-0 md:min-h-0">
      <form class="grid gap-5 mx-auto md:max-w-md max-w-lg w-full" @submit.prevent="handleSubmit">
        <div class="flex flex-col gap-1">
          <label for="email">{{ t.email.label }}</label>
          <InputText id="email" size="medium" v-bind="t.email" v-model="form.email" @blur="v$.email.$touch"
            :disabled="submiting" />
          <span class="text-red-700 text-sm" v-if="v$.email.$error">{{ t.email.error }}</span>
        </div>
        <div class="flex flex-col gap-1">
          <label for="password">{{ t.password.label }}</label>
          <div class="relative">
            <InputText :type="showPassword ? 'text' : 'password'" id="password" size="medium" v-bind="t.password"
              v-model="form.password" @blur="v$.password.$touch" :disabled="submiting" />
            <span v-show="!submiting" class="material-symbols-outlined absolute right-0 top-0 px-3 py-1.5 cursor-pointer"
              @click="togglePassword">
              {{ showPassword ? "visibility_off" : "visibility" }}
            </span>
          </div>
          <span class="text-red-700 text-sm" v-if="v$.password.$error">{{ t.password.error }}</span>
        </div>
        <div>
          <router-link to="/teste" class="hover:underline text-surface-700 dark:text-surface-500">
            {{ t.forgotPassword.label }}
          </router-link>
        </div>
        <Button type="submit" size="large" v-bind="t.submit" rounded :loading="submiting" />
        <router-link to="/teste" class="text-primary-500 font-bold text-center text-lg hover:underline">
          {{ t.newAccount.label }}
        </router-link>
      </form>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

import Logo from '../assets/Logo'
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'

import { useRouter } from 'vue-router'
const router = useRouter()

const t = {
  headline: {
    html: 'Soluções que <br/><strong class="text-primary-500 font-bold">maximizam</strong> o resultado <br/>do seu negócio online'
  },
  country: {
    options: {
      portuguese: 'Português',
      english: 'Inglês',
    }
  },
  email: {
    label: 'E-mail',
    placeholder: 'Digite aqui',
    error: 'Por favor verifique seu campo email'
  },
  password: {
    label: 'Senha',
    placeholder: 'Digite aqui',
    error: 'Por favor verifique seu campo senha'
  },
  submit: {
    label: 'Acessar'
  },
  forgotPassword: {
    label: 'Esqueci minha senha'
  },
  newAccount: {
    label: 'Criar conta'
  }
}

const countryOptions = [
  { id: 'portuguese', value: 'pt-BR', icon: 'https://appmax.com.br/_nuxt/img/brazil-flag-icon.050724f.webp' },
  { id: 'english', value: 'en-US', icon: 'https://appmax.com.br/_nuxt/img/usa-flag-icon.3230684.webp' },
].map((option) => ({ ...option, label: t.country.options[option.id] || option.id }))
const country = ref(countryOptions[0])

const showPassword = ref(false)
const togglePassword = () => showPassword.value = !showPassword.value

const form = ref({
  email: '',
  password: '',
})

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(3) }
}

const v$ = useVuelidate(rules, form)

const submiting = ref(false)

const handleSubmit = async () => {
  const isValid = await v$.value.$validate()
  if (!isValid) {
    alert('Formulário possui erros.')
    return
  }
  submiting.value = true
  await new Promise(resolve => setTimeout(resolve, 2000))
  // Processa o formulário (ex: envia para um servidor)
  alert('Formulário enviado com sucesso!')
  router.push('/teste')
  submiting.value = false
}

</script>

<style lang="scss">
.auth__logo {
  @media (max-width: 767px) {
    height: 32px;
    width: 162px;
  }
}

.dropdown-country {
  box-shadow: none;

  [data-pc-section=input] {
    padding-right: 0;
  }

  [data-pc-section=trigger] {
    width: 32px;
  }
}
</style>
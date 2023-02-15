<template>
  <section class="registration overflow-hidden relative min-h-screen p-6 flex justify-center items-center bg-indigo-900">
    <div class="registration__run registration__run--1"><span>LEADS</span> HUNTER</div>
    <div class="registration__run registration__run--2"><span>LEADS</span> HUNTER</div>
    <div class="registration__run registration__run--3"><span>LEADS</span> HUNTER</div>
    <div class="registration__bg"></div>
    <div class="z-10 w-full max-w-sm md:max-w-md p-6 py-10 md:p-10 md:py-14 bg-zinc-800 text-white">
      <div class="text-center">
        <img src="../assets/img/logo.svg" class="m-auto mb-6" alt="leads hunter">
        <h4 class="text-xl font-semibold mb-4">Регистрация</h4>
      </div>
      <form @submit.prevent="registration">

        <div class="relative mb-4">
          <input
            v-model="name"
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-white bg-zinc-700 bg-clip-padding border border-solid border-transparent rounded m-0 focus:border-blue-700 focus:outline-none"
            id="regName"
            placeholder="Имя"
          />

          <p v-if="v$.$dirty && v$.name.required.$invalid" class="absolute left-0 top-0 text-red-700 text-xs text-center w-full">Обязательное поле</p>
        </div>

        <div class="relative mb-4">
          <input
            v-model="email"
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-white bg-zinc-700 bg-clip-padding border border-solid border-transparent rounded m-0 focus:border-blue-700 focus:outline-none"
            id="regEmail"
            placeholder="E-mail"
          />

          <p v-if="v$.$dirty && v$.email.required.$invalid" class="absolute left-0 top-0 text-red-700 text-xs text-center w-full">Обязательное поле</p>
          <p v-else-if="v$.$dirty && v$.email.email.$invalid" class="absolute left-0 top-0 text-red-700 text-xs text-center w-full">Не верный формат</p>
        </div>

        <div class="relative mb-4">
          <input
            v-model="password"
            :type="passwordVisible ? 'text' : 'password'"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-white bg-zinc-700 bg-clip-padding border border-solid border-transparent rounded m-0 focus:border-blue-700 focus:outline-none"
            id="regPassword"
            placeholder="Пароль"
          />
          <div
            @click="passwordVisible = !passwordVisible"
            class="absolute bottom-1/2 right-1 translate-y-1/2 cursor-pointer flex justify-center items-center">
            <span v-if="passwordVisible" class="material-icons-outlined">visibility</span>
            <span v-else class="material-icons-outlined">visibility_off</span>
          </div>

          <p v-if="v$.$dirty && v$.password.required.$invalid" class="absolute left-0 top-0 text-red-700 text-xs text-center w-full">Обязательное поле</p>
        </div>

        <div class="relative mb-4">
          <input
            v-model="passwordConfirm"
            :type="passwordConfirmVisible ? 'text' : 'password'"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-white bg-zinc-700 bg-clip-padding border border-solid border-transparent rounded m-0 focus:border-blue-700 focus:outline-none"
            id="regPasswordConfirm"
            placeholder="Повторите пароль"
          />
          <div
            @click="passwordConfirmVisible = !passwordConfirmVisible"
            class="absolute bottom-1/2 right-1 translate-y-1/2 cursor-pointer flex justify-center items-center">
            <span v-if="passwordConfirmVisible" class="material-icons-outlined">visibility</span>
            <span v-else class="material-icons-outlined">visibility_off</span>
          </div>

          <p v-if="v$.$dirty && v$.passwordConfirm.required.$invalid" class="absolute left-0 top-0 text-red-700 text-xs text-center w-full">Обязательное поле</p>
          <p v-else-if="!coincidencePasswords" class="absolute left-0 top-0 text-red-700 text-xs text-center w-full">Пароли не совпадают</p>
        </div>
        <button
          class="bg-red-800 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg transition duration-150 ease-in-out w-full mb-3"
          type="submit"
        >
          Зарегестрироваться
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  name: "Registration",
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      passwordVisible: false,
      passwordConfirmVisible: false
    }
  },
  computed: {
    coincidencePasswords() {
      if (this.passwordConfirm) {
        return this.password === this.passwordConfirm
      }
      return true
    }
  },
  methods: {
    async registration() {
      const result = await this.v$.$validate()
      if (!result) return
      if (!this.coincidencePasswords) return
      console.log(1)
    }
  },
  validations () {
    return {
      name: { required },
      email: { required, email },
      password: { required },
      passwordConfirm: { required },
    }
  }
}
</script>

<style scoped>

</style>
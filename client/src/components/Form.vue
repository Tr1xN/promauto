<template>
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-4">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Залиште заявку</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Ми звяжемось з вами і дамо безкоштовну консультацію.</p>
      </div>
      <div class="lg:w-1/3 md:w-1/2 mx-auto">

        <form ref="form" @submit.prevent="submitForm" class="flex flex-col -m-2">
          <div class="p-2 w-full">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-600">Ім'я</label>
              <input required v-model="name" type="text" id="name" name="name"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="phone" class="leading-7 text-sm text-gray-600">Номер телефону</label>
              <input required v-model="phone" type="text" id="phone" name="phone"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
          </div>
          <div class="p-2 w-full">
            <button type="submit"
              class="flex mx-auto text-white bg-sky-500 border-0 py-2 px-8 focus:outline-none hover:bg-sky-600 rounded text-lg">Відправити</button>
          </div>
        </form>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phone: '',
    }
  },
  methods: {
    submitForm() {
      this.axios
        .post('/api/order', {
          name: this.name,
          phone: this.phone,
        })
        .then(response => {
          console.log(response);
          this.$refs.form.reset();
          this.$swal({
            icon: 'success',
            title: 'Заявка відправлена!',
            text: "Ми зв'яжемося з вами найближчим часом.",
            confirmButtonColor: '#0ea5e9',
          })
        })
        .catch(error => {
          console.log(error);
          this.$swal({
            icon: 'error',
            title: 'Щось пішло не так!',
            text: 'Заявка не була відправлена',
            confirmButtonColor: '#0ea5e9',
          })        
        });
    }
  }
}
</script>
<template>
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div
        class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0"
          marginwidth="0" scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1820.7473768971254!2d33.43262653441923!3d49.09844471510523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d75251629f5001%3A0xb7de9ff08aef7dd8!2z0JPQstCw0YDQtNC10LnRgdC60LjQuSDQv9C10YAuLCA0LCDQmtGA0LXQvNC10L3Rh9GD0LMsINCf0L7Qu9GC0LDQstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAzOTYwMA!5e0!3m2!1sru!2sua!4v1657896720127!5m2!1sru!2sua"
          style="filter: opacity(0.7);"></iframe>
        <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div class="lg:w-1/2 px-6">
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">АДРЕСА</h2>
            <p class="mt-1">Кременчуг, Гвардійський пров. 4а</p>
          </div>
          <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">ТЕЛЕФОН</h2>
            <p class="leading-relaxed">+38 050 358 7889</p>
          </div>
        </div>
      </div>
      <div class="py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-4">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Залиште заявку</h1>
          <p class=" mx-auto leading-relaxed text-base">Ми звяжемось з вами і дамо безкоштовну консультацію.</p>
        </div>
        <div class=" mx-auto">
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
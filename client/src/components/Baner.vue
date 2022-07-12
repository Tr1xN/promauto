<template>
	<section class="relative bg-white">
		<img class="absolute inset-0 object-[75%] object-cover w-full h-full opacity-30"
			src="https://ddugroup.ua/wp-content/uploads/2019/09/slide_lviv_1.jpg" alt="Couple on a bed with a dog" />
		<div class="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-auto lg:items-center">
			<div class="text-center">
				<h1 class="text-3xl font-extrabold sm:text-5xl">
					Системи вентиляції
					<strong class="font-extrabold text-sky-600 sm:block">
						та кондиціонування
					</strong>
				</h1>
				<p class="max-w-2xl mt-4 sm:leading-normal sm:text-xl mx-auto">
					Широкий спектр кліматичного обладнання: побутові кондиціонери, кондиціонери для комерційного
					застосування, теплові насоси, тощо.
				</p>
			</div>
			<form ref="form" @submit.prevent="submitForm" class="flex flex-wrap place-content-center gap-4 mt-8 text-center">
				<div class="relative w-auto">
					<label class="sr-only" for="placement"> Приміщення </label>
					<select required v-model="placement" id="placement"
						class="w-full py-3 pl-3 text-sm border-2 border-gray-200 rounded">
						<option value="" selected disabled hidden>Приміщення</option>
						<option value="Квартира" selected>Квартира</option>
						<option value="Будинок">Будинок</option>
						<option value="Офіс/магазин">Офіс/магазин</option>
						<option value="Продуктовий магазин">Продуктовий магазин</option>
					</select>
				</div>
				<div class="relative">
					<label class="sr-only" for="square"> Площа, М² </label>
					<input step="0.1" required class="w-full py-3 pl-3 text-sm border-2 border-gray-200 rounded"
						v-model="square" id="square" type="number" placeholder="Площа, М²" min="1" />
				</div>
				<div class="relative">
					<label class="sr-only" for="height"> Висота, М </label>
					<input step="0.1" required class="w-full py-3 pl-3 text-sm border-2 border-gray-200 rounded"
						v-model="height" id="height" type="number" placeholder="Висота, М" min="1" />
				</div>
				<div class="relative">
					<label class="sr-only" for="name"> Ваше ім'я </label>
					<input required class="w-full py-3 pl-3 text-sm border-2 border-gray-200 rounded" v-model="name"
						id="name" type="text" placeholder="Ваше ім'я" />
				</div>
				<div class="relative">
					<label class="sr-only" for="phone"> Номер телефону </label>
					<input required class="w-full py-3 pl-3 text-sm border-2 border-gray-200 rounded" v-model="phone"
						id="phone" type="tel" placeholder="Номер телефону" />
				</div>
				<div class="flex">
					<button type="submit"
						class="mx-auto text-sky-500 bg-white border-0 py-4 px-16 focus:outline-none hover:text-sky-600 rounded text-xl font-bold">
						Розрахувати
					</button>
				</div>
			</form>

		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			placement: '',
			square: '',
			height: '',
			name: '',
			phone: '',
		}
	},
	methods: {
		submitForm() {
			this.axios
				.post('/api/order', {
					placement: this.placement,
					square: this.square,
					height: this.height,
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
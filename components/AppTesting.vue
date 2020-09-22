<template>
	<section class="testing">
		<div class="testing__wrap">
			<div class="testing__wrap__top">
				<p class="text-2xl text-yellow-700 text-center mt-4">
					Simak Apa Kata Mereka
				</p>
				<p class="text-2xl text-center mt-4">
					Tentang Toko Online Kami
				</p>
				<p class="text-base text-center mt-4">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo commodi sapiente ipsam, ad veniam quae quasi maxime adipisci tenetur quaerat.
				</p>
			</div>
			<div class="testing__wrap__last">
				<div class="testing__wrap__last__box">
					<app-img src="/box/testimoni.png" alt="testimoni" />
				</div>
				<div class="testing__wrap__last__box">
					<app-img src="/box/testimoni.png" alt="testimoni" />
				</div>
				<div class="testing__wrap__last__box">
					<app-img src="/box/testimoni.png" alt="testimoni" />
				</div>
				<div class="testing__wrap__last__box">
					<app-img src="/box/testimoni.png" alt="testimoni" />
				</div>
				<div class="testing__wrap__last__box">
					<app-img src="/box/testimoni.png" alt="testimoni" />
				</div>
				<div class="testing__wrap__last__box">
					<app-img src="/box/testimoni.png" alt="testimoni" />
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="postcss">
.testing {
	@apply w-full py-12 px-16 bg-gray-100;
	display: flex;
	align-items: center;
	justify-content: center;
	@media screen and (max-width: 576px) {
		padding: 1rem .5rem;
	}

	&__wrap {
		width: 80%;
		@media screen and (max-width: 576px) {
			width: 95%;
		}

		&__last {
			@apply mt-8;
			display: grid;
			grid-gap: 1rem;
			justify-content: center;
			grid-template-columns: 1fr 1fr 1fr;
			@media screen and (max-width: 576px) {
				grid-template-columns: 1fr 1fr;
			}

			&__box {
				img {
					@apply rounded-lg object-cover;
				}
			}
		}
	}
}
</style>
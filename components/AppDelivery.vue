<template>
	<section class="delivery">
		<div class="delivery__wrap">
			<div class="delivery__wrap__top">
				<p class="text-2xl text-yellow-700 text-center mt-4">
					Lebih Dari 800+ Paket Sudah Dikirim
				</p>
				<p class="text-2xl text-center mt-4">
					Ke Seluruh Kota Besar Di Indonesia
				</p>
				<p class="text-base text-center mt-4">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo commodi sapiente ipsam, ad veniam quae quasi maxime adipisci tenetur quaerat.
				</p>
			</div>
			<div class="delivery__wrap__last">
				<div class="delivery__wrap__last__box">
					<app-img src="/box/package-box.png" alt="package-box" />
				</div>
				<div class="delivery__wrap__last__box">
					<app-img src="/box/package-box.png" alt="package-box" />
				</div>
				<div class="delivery__wrap__last__box">
					<app-img src="/box/package-box.png" alt="package-box" />
				</div>
				<div class="delivery__wrap__last__box">
					<app-img src="/box/package-box.png" alt="package-box" />
				</div>
				<div class="delivery__wrap__last__box">
					<app-img src="/box/package-box.png" alt="package-box" />
				</div>
				<div class="delivery__wrap__last__box">
					<app-img src="/box/package-box.png" alt="package-box" />
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="postcss">
.delivery {
	@apply w-full py-12 px-16 bg-gray-100;
	display: flex;
	align-items: center;
	justify-content: center;
	@media screen and (max-width: 992px) {
		padding: 1rem .5rem;
	}

	&__wrap {
		width: 80%;
		@media screen and (max-width: 992px) {
			width: 95%;
		}

		&__last {
			@apply mt-8;
			display: grid;
			grid-gap: 1rem;
			justify-content: center;
			grid-template-columns: 1fr 1fr 1fr;
			@media screen and (max-width: 768px) {
				grid-template-columns: 1fr 1fr;
			}

			&__box {
				@apply bg-yellow-300 rounded;
			}
		}
	}
}
</style>
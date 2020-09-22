<template>
	<section class="garantee">
		<div class="garantee__wrap">
			<div class="garantee__wrap__last">
				<div class="garantee__wrap__last__box">
					<div class="garantee__wrap__last__box__star">
						<app-img src="/box/garansi-30.png" alt="garansi produk" />
					</div>
					<div class="garantee__wrap__last__box__desc">
						<p class="text-3xl text-center">30 Hari Garansi Produk</p>
						<p class="text-base text-center mt-3">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione voluptas odio cupiditate, ipsa eveniet quis tempore quia quaerat consectetur ut, nobis odit voluptates reprehenderit recusandae qui sunt, maxime magnam nam magni nemo aspernatur dignissimos eaque amet enim. Aliquam, quasi cupiditate.
						</p>
					</div>
				</div>
				<div class="garantee__wrap__last__box">
					<div class="garantee__wrap__last__box__desc">
						<p class="text-3xl text-center">Masih Mikir-Mikir?</p>
						<p class="text-base text-center mt-3 italic">
							Kami tidak menjamin bahwa harga akan terus terjangkau. Sewaktu-waktu harga akan naik seperti sebelumnya, tanpa pemberitahuan. Waktu yang terbaik untuk membeli adalah sekarang. Silahkan pikirkan dan segera ambil keputusan! Semakin cepat kamu membeli, semakin cepat buku keren ini ada di tanganmu.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="postcss">
.garantee {
	@apply w-full py-8 px-16 bg-white;
	display: flex;
	align-items: center;
	justify-content: center;
	@media screen and (max-width: 992px) {
		padding: 1rem .5rem;
	}

	&__wrap {
		width: 70%;
		@media screen and (max-width: 992px) {
			width: 95%;
		}

		&__last {
			@apply mt-8;
			display: grid;
			grid-gap: 1rem;
			justify-content: center;
			grid-template-columns: 1fr;

			&__box {
				@apply bg-yellow-300 rounded py-5 px-5;
				display: flex;
				align-items: center;
				flex-direction: column;
				justify-content: center;

				&__star {
					display: flex;
					align-items: center;
					justify-content: center;
					img {
						@apply h-48 w-48 object-cover;
					}
				}

				&__desc {
					@apply mt-4;
				}
			}
		}
	}
}
</style>
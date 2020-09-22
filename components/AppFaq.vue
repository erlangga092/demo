<template>
	<section class="faq">
		<div class="faq__wrap">
			<div class="faq__wrap__top">
				<p class="text-2xl text-yellow-700 text-center mt-4 font-bold">
					FAQ
				</p>
				<p class="text-2xl text-center mt-4">
					Pertanyaan Yang Sering Ditanyakan
				</p>
			</div>
			<div class="faq__wrap__last">
				<div class="faq__wrap__last__box">
					<div class="faq__wrap__last__box__star">
						<i class="fas fa-star text-4xl text-white"></i>
					</div>
					<div class="faq__wrap__last__box__desc">
						<p class="text-xl text-center">Keuntungan 1</p>
						<p class="text-base text-center">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repellendus ab tenetur. Officia, natus, facilis!
						</p>
					</div>
				</div>
				<div class="faq__wrap__last__box">
					<div class="faq__wrap__last__box__star">
						<i class="fas fa-star text-4xl text-white"></i>
					</div>
					<div class="faq__wrap__last__box__desc">
						<p class="text-xl text-center">Keuntungan 1</p>
						<p class="text-base text-center">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repellendus ab tenetur. Officia, natus, facilis!
						</p>
					</div>
				</div>
				<div class="faq__wrap__last__box">
					<div class="faq__wrap__last__box__star">
						<i class="fas fa-star text-4xl text-white"></i>
					</div>
					<div class="faq__wrap__last__box__desc">
						<p class="text-xl text-center">Keuntungan 1</p>
						<p class="text-base text-center">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repellendus ab tenetur. Officia, natus, facilis!
						</p>
					</div>
				</div>
				<div class="faq__wrap__last__box">
					<div class="faq__wrap__last__box__star">
						<i class="fas fa-star text-4xl text-white"></i>
					</div>
					<div class="faq__wrap__last__box__desc">
						<p class="text-xl text-center">Keuntungan 1</p>
						<p class="text-base text-center">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repellendus ab tenetur. Officia, natus, facilis!
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="postcss">
.faq {
	@apply w-full py-12 px-16 bg-white;
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
			grid-template-columns: 1fr 1fr;
			@media screen and (max-width: 576px) {
				grid-template-columns: 1fr;
			}

			&__box {
				@apply bg-yellow-300 rounded py-5 px-5;
				display: flex;
				align-items: center;
				flex-direction: column;
				justify-content: center;

				&__star {
					@apply h-16 w-16 rounded-full bg-red-500;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				&__desc {
					@apply mt-4;
				}
			}
		}
	}
}
</style>
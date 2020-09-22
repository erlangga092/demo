<template>
	<section>
		<div class="product">
			<div class="product__content">
				<section class="product__content__top">
					<p class="text-white text-center text-2xl font-medium">Mempersembahkan</p>
				</section>
				<section class="product__content__middle">
					<p class="text-white text-center text-3xl font-extrabold">
						Kunci Inggris Inovasi Terbaru
					</p>
				</section>
				<section class="product__content__last">
					<p class="text-white text-center text-lg font-medium">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos perspiciatis esse tempore aliquam quidem, sit aliquid nulla non obcaecati, facilis nam assumenda perferendis odit. Repellendus!
					</p>
				</section>
				<section class="product__content__carousel">
					<app-carousel />
				</section>
				<section class="product__content__order">
					<div class="product__content__order__btn bg-yellow-500 rounded relative">
						<a 
							href="https://wa.me/6285601927930" 
							class="bg-white text-center hover:bg-gray-300"
							rel="noreferrer noopener"
							target="_blank"
						>
							<span class="mr-1">
								<i class="fas fa-shopping-cart"></i>
							</span> Pesan Sekarang!
						</a>
					</div>
				</section>
			</div>
		</div>
		<div class="clip__path h-32 w-full"></div>
	</section>
</template>

<script>
import AppCarousel from '~/components/AppCarousel';

export default {
	components: {
		AppCarousel
	}
}
</script>

<style lang="postcss">
.product {
	@apply w-full px-16 py-20;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #d63447; 
	@media screen and (max-width: 768px) {
		padding: 4rem .5rem;
	}

	.product__content {
		width: 70%;
		@media screen and (max-width: 768px) {
			width: 90%;
		}
		@media screen and (max-width: 576px) {
			width: 95%;
		}

		&__top {
			> p {
				@media screen and (max-width: 768px) {
					font-size: 1.25rem;
				}
			}
		}

		&__middle {
			@apply mt-2;
			> p {
				@media screen and (max-width: 768px) {
					font-size: 1.5rem;
				}
			}
		}

		&__last {
			@apply mt-6;
			> p {
				@media screen and (max-width: 768px) {
					font-size: 1rem;
				}
			}
		}

		&__carousel {
			@apply my-10;
		}

		&__order {
			@apply w-full mt-8;
			display: flex;
			align-items: center;
			justify-content: center;

			&__btn {
				@apply h-12;
				width: 14.2rem;
				display: flex;
				align-items: center;
				justify-content: center;

				> a {
					@apply py-3 px-8 rounded absolute text-base;
					bottom: 5px;
					left: -2px;
				}
			}
		}
	}
}

.clip__path {
	@apply -mt-1;
	background-color: #d63447;
	clip-path: polygon(48% 47%, 0 0, 100% 0);
}
</style>
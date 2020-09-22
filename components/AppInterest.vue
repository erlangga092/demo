<template>
	<section>
		<div class="interest">
			<div class="interest__content">
				<section class="interest__content__top">
					<p class="text-white text-center text-2xl font-medium">Oke, Saya Berminat</p>
				</section>
				<section class="interest__content__middle">
					<p class="text-white text-center text-3xl font-extrabold">
						Berapa Harganya?
					</p>
				</section>
				<section class="interest__content__carousel">
					<div class="interest__content__carousel__desc">
						<p class="text-2xl text-yellow-700 text-center mt-2">
							Kunci Inggris Multifungsi
						</p>
						<p class="text-3xl text-center mt-2">
							SNAP AND GRIP SERBAGUNA UNIVERSAL
						</p>
						<p class="text-base text-center mt-2">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore voluptas repudiandae quam. Quod tenetur suscipit sapiente molestias optio, voluptas praesentium.
						</p>
					</div>
					<app-carousel />
					<div class="interest__content__carousel__price">
						<p class="text-yellow-700 text-xl text-center line-through">
							Rp499.000
						</p>
						<p class="text-center text-4xl font-bold">
							Rp359.000
						</p>
					</div>
				</section>
				<section class="interest__content__order">
					<div class="interest__content__order__btn bg-yellow-500 rounded relative">
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
.interest {
	@apply w-full px-16 py-20;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #d63447; 
	@media screen and (max-width: 992px) {
		padding: 4rem .5rem;
	}

	.interest__content {
		width: 80%;
		@media screen and (max-width: 992px) {
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

		&__carousel {
			@apply my-10 bg-white py-8 px-6 rounded-lg;

			&__price {
				@apply mt-4
			}
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
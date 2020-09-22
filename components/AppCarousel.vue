<template>
	<section class="carousel">
		<div class="carousel__img">
			<div class="carousel__img__wrap">
				<VueSlickCarousel 
					:dots="true" 
					:arrows="false"
					:infinite="true"
					:autoplay="true"
					:slidesToShow="3"
					:slidesToScroll="1"
					:pauseOnFocus="true"
					:swipeToSlide="true"
					:autoplaySpeed="2000"
					:pauseOnDotsHover="true"
				>
					<img src="https://placeimg.com/640/480/any" alt="any" />
					<img src="https://placeimg.com/640/480/any" alt="tech" />
					<img src="https://placeimg.com/640/480/any" alt="nature" />
					<img src="https://placeimg.com/640/480/any" alt="animals" />
				</VueSlickCarousel>
			</div>
		</div>
	</section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
	components: {
		VueSlickCarousel
	}
}
</script>

<style lang="postcss">
.carousel {
	@apply w-full px-3 py-8 bg-white rounded-md;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media screen and (max-width: 576px) {
		padding: 1rem .5rem;
	}

	&__img {
		display: flex;
		align-items: center;
		justify-content: center;

		&__wrap {
			width: 95%;
			img {
				@apply rounded object-cover;
			}
		}
	}
}
</style>
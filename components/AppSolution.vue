<template>
	<section class="solution">
		<div class="solution__wrap">
			<p class="text-2xl text-center font-bold">
				Kabar Baiknya..
			</p>
			<p class="solution__wrap__desc text-center mt-8 text-gray-700 text-lg">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim animi possimus rerum nisi voluptate facilis, nam! Veniam voluptatibus, obcaecati, similique voluptatum, tempora dolores ipsum ratione velit aliquam dolore architecto, delectus?
			</p>
		</div>
	</section>
</template>

<style lang="postcss">
.solution {
	@apply w-full py-16 px-16;
	display: flex;
	align-items: center;
	justify-content: center;
	@media screen and (max-width: 992px) {
		padding: 2rem 1rem;
	}

	&__wrap {
		@apply mx-auto my-auto;
		width: 80%;
		@media screen and (max-width: 992px) {
			width: 95%;
		}

		&__desc {
			@media screen and (max-width: 768px) {
				font-size: 1rem;
				margin-top: 1rem;
			}
		}
	}
}
</style>
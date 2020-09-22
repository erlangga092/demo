<template>
	<section class="problem">
		<div class="problem__wrap">
			<div class="problem__wrap__left">
				<p class="text-gray-700 text-2xl font-bold">
					Apakah Ini Masalah <span class="text-yellow-700 text-2xl font-black">Yang Selalu Kamu Alami</span> Setiap Kali Mencari Kunci Inggris Untuk Kebutuhan Kamu?
				</p>
				<p class="text-gray-700 text-base mt-8">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sapiente, tempora accusantium labore. Quia nostrum provident harum, minima vitae minus neque consequuntur id eum sapiente.
				</p>
				<ul class="mt-8">
					<li>
						<span class="mr-3">
							<i class="fa fa-arrow-circle-right text-red-500"></i>
						</span>
						<p class="text-gray-700">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint accusamus dignissimos quisquam sit laboriosam sed.
						</p>
					</li>
					<li>
						<span class="mr-3">
							<i class="fa fa-arrow-circle-right text-red-500"></i>
						</span>
						<p class="text-gray-700">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint accusamus dignissimos quisquam sit laboriosam sed.
						</p>
					</li>
					<li>
						<span class="mr-3">
							<i class="fa fa-arrow-circle-right text-red-500"></i>
						</span>
						<p class="text-gray-700">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint accusamus dignissimos quisquam sit laboriosam sed.
						</p>
					</li>
					<li>
						<span class="mr-3">
							<i class="fa fa-arrow-circle-right text-red-500"></i>
						</span>
						<p class="text-gray-700">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint accusamus dignissimos quisquam sit laboriosam sed.
						</p>
					</li>
				</ul>
			</div>
			<div class="problem__wrap__right">
				<img src="https://grafisio.com/wp-content/uploads/2020/08/Hand-tools-6.jpg" alt="kunci inggris" sumber="internet" />
			</div>
		</div>
	</section>
</template>

<style lang="postcss">
.problem {
	@apply w-full py-16;
	@media screen and (max-width: 992px) {
		padding: 2.5rem 0;
	}

	&__wrap {
		@apply mx-auto;
		width: 90%;
		display: grid;
		grid-gap: 1rem;
		justify-content: center;
		grid-template-columns: 1fr 1fr;
		@media screen and (max-width: 992px) {
			grid-template-columns: 1fr;
		}

		&__left {
			> ul > li {
				@apply text-base text-gray-700 py-2 px-3 border-b border-gray-300;
				display: flex;
			}
		}
	}
}
</style>
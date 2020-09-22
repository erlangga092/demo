<template>
	<section class="customer">
		<div class="customer__wrap">
			<div class="customer__wrap__head">
				<p class="text-yellow-700 text-2xl text-center">
					Lihat Apa Kata Customer
				</p>
				<p class="text-3xl text-center mt-1 text-gray-700">
					Yang Merasa Puas Belanja Disini
				</p>
				<p class="text-base text-center mt-3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum neque ea esse fugiat rem cupiditate.
				</p>
			</div>
			<div class="customer__wrap__body">
				<div class="customer__wrap__body__card">
					<div class="customer__wrap__body__card__comment">
						<p class="italic">
							"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quaerat. Nostrum molestias quod voluptate amet!"
						</p>
					</div>
					<div class="customer__wrap__body__card__user">
						<div class="customer__wrap__body__card__user__img mr-4">
							<app-img src="/user/pevita.jpeg" alt="pevita pearce" />
						</div>
						<div class="customer__wrap__body__card__user__name">
							<span class="text-base font-semibold">Dian Melia</span><br>
							<span class="text-sm">Pelanggan</span>
						</div>
					</div>
				</div>
				<div class="customer__wrap__body__card">
					<div class="customer__wrap__body__card__comment">
						<p class="italic">
							"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quaerat. Nostrum molestias quod voluptate amet!"
						</p>
					</div>
					<div class="customer__wrap__body__card__user">
						<div class="customer__wrap__body__card__user__img mr-4">
							<app-img src="/user/pevita.jpeg" alt="pevita pearce" />
						</div>
						<div class="customer__wrap__body__card__user__name">
							<span class="text-base font-semibold">Dian Melia</span><br>
							<span class="text-sm">Pelanggan</span>
						</div>
					</div>
				</div>
				<div class="customer__wrap__body__card">
					<div class="customer__wrap__body__card__comment">
						<p class="italic">
							"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quaerat. Nostrum molestias quod voluptate amet!"
						</p>
					</div>
					<div class="customer__wrap__body__card__user">
						<div class="customer__wrap__body__card__user__img mr-4">
							<app-img src="/user/pevita.jpeg" alt="pevita pearce" />
						</div>
						<div class="customer__wrap__body__card__user__name">
							<span class="text-base font-semibold">Dian Melia</span><br>
							<span class="text-sm">Pelanggan</span>
						</div>
					</div>
				</div>
				<div class="customer__wrap__body__card">
					<div class="customer__wrap__body__card__comment">
						<p class="italic">
							"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quaerat. Nostrum molestias quod voluptate amet!"
						</p>
					</div>
					<div class="customer__wrap__body__card__user">
						<div class="customer__wrap__body__card__user__img mr-4">
							<app-img src="/user/pevita.jpeg" alt="pevita pearce" />
						</div>
						<div class="customer__wrap__body__card__user__name">
							<span class="text-base font-semibold">Dian Melia</span><br>
							<span class="text-sm">Pelanggan</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="postcss">
.customer {
	@apply w-full p-16;
	display: flex;
	align-items: center;
	justify-content: center;
	@media screen and (max-width: 992px) {
		padding: 2.5rem .5rem;
	}

	&__wrap {
		width: 70%;
		@media screen and (max-width: 992px) {
			width: 90%;
		}
		@media screen and (max-width: 576px) {
			width: 95%;
		}

		&__body {
			@apply mt-8;
			display: grid;
			grid-gap: 1rem;
			grid-template-columns: 1fr 1fr;
			@media screen and (max-width: 768px) {
				grid-template-columns: 1fr;
			}

			&__card {
				@apply rounded bg-yellow-300 py-6 px-6;

				&__comment {
					> p {
						@apply text-center text-base;
					}
				}

				&__user {
					@apply mt-4;
					display: flex;
					align-items: center;
					justify-content: center;

					&__img {
						img {
							@apply h-20 w-20 object-cover rounded-full;
						}
					}
				}
			}
		}
	}
}
</style>
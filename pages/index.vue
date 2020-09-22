<template>
	<div id="blog">
		<app-header />
		<app-customer />
		<app-problem />
		<app-solution />	
		<app-product />
		<app-delivery />
		<app-plus />
		<app-interest />
		<app-garantee />
		<app-testing />
		<app-faq />
		<app-to-top />
	</div>
</template>

<script>
import AppHeader from '~/components/AppHeader';
import AppCustomer from '~/components/AppCustomer';
import AppProblem from '~/components/AppProblem';
import AppToTop from '~/components/AppToTop';
import AppSolution from '~/components/AppSolution';
import AppProduct from '~/components/AppProduct';
import AppDelivery from '~/components/AppDelivery';
import AppPlus from '~/components/AppPlus';
import AppInterest from '~/components/AppInterest';
import AppGarantee from '~/components/AppGarantee';
import AppTesting from '~/components/AppTesting';
import AppFaq from '~/components/AppFaq';

export default {
	components: {
		AppHeader,
		AppCustomer,
		AppProblem,
		AppToTop,
		AppSolution,
		AppProduct,
		AppDelivery,
		AppPlus,
		AppInterest,
		AppGarantee,
		AppTesting,
		AppFaq
	}
}
</script>

<style lang="postcss">

</style>
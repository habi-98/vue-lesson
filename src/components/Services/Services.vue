<template>
<div>
      <header>
		<div class="container">
			<a href="#" class="logo">керемет<span>банк</span> </a>
			<nav class="main-nav" id="my-menu-wrapper">
				<ul class="menu">
					<li><a href="#">Карты</a></li>
					<li><a href="#">Вклады</a></li>
					<li><a href="#">Кредиты</a></li>
					<li><a href="#">Ипотека</a></li>
					<li><a href="#">Денежные Переводы</a></li>
					<li><a href="#" class="link-portal">Портал</a></li>
					
				</ul>
			</nav>
			<button type="button" class="btn">интернет банк</button>
		</div>
	</header>
		<div class="container">
		<div class="wrap">
			<h1 class="service-title">Государственные услуги</h1>
			<a href="#" class="all-services">Все услуги </a>
		</div>
					<button type="buttonn" @click="isOpen">open</button>

		<div class="items">
			<CardServices  
			v-for="service in services" 
			:card="service"
			:key="service.id"
			:clickHandler="clickHandler"
			:isOpen="isOpen"
			></CardServices>
		</div>
		</div>
		<Modal :show="show" title="Header" :isOpen='isOpen'>
			<input type="text">
		</Modal>
</div>
</template>


<script>
import CardServices from '../CardServices/CardServices'
import Modal from  '../UI/Modal'
import { mapState } from 'vuex'
export default {
	
	name: 'Services',
	data() {
		return {
			show: false,
			
		}
	},
	computed: {
		...mapState(['services'])
	},
	methods: {
		// clickHandler: function(id) {
		// 	console.log(id, 'id card')
		// 	let index =	this.services.findIndex(item => item.id === id)
		// 	Vue.set(this.services[index], 'active', true)
		// },
		isOpen() {
			this.show = !this.show
		}
	},
	mounted() {
		console.log(this.isVisited);
	},
	components: {
		CardServices,
		Modal
	},
	
}

</script>

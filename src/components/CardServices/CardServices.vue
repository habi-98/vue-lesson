<template>
    <router-link tag="a"  :to="{name: 'services', params: {id: card.id, isOpen}}" class="item-wrap"  :class="{'visited': card.active}">
        <div class="item">
            <div class="item-title">
                <img class="item-img" :src="require('../../assets/' + card.img)" :alt="card.img">
                <h4> {{ card.title }}</h4>
            </div>
            <div class="item-text">
                <p>{{ card.description }}...<button class="btn-yet">Еще</button></p>
            </div>
        </div>
    </router-link>
</template>


<script>
export default {
    name: 'CardServices',
    props: {
        card: {
            type: Object
        },
        isOpen: {
            type: Function
        }
        
    }
}
</script>
<style>
    .visited {
        border: 1px solid red;
    }
</style>
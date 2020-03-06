<template>
   <div id="cart-list-container">
     <cart-list-item class="cart-list-item" v-for="(item, index) in cartList" :key="index" :cartListItem="item" />
   </div>
</template>

<script>
import CartListItem from './CartListItem' 
import { mapGetters } from 'vuex'
export default {
   data () {
       return {

       }
   },
   computed: {
     ...mapGetters(['cartList'])
   },
   components: {
     CartListItem
   }
}
</script>

<style scoped>

</style>

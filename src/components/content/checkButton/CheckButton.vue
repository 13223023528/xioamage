<template>
   <div class="check-button" :class="{checked: check}">
     <img src="~assets/img/cart/tick.svg" alt="">
   </div>
</template>

<script>
export default {
   data () {
       return {

       }
   },
   props: {
      check: {
         type: Boolean,
         default: false
      }
   }
}
</script>

<style scoped>
.check-button {
   display: flex;
   justify-content: center;
   align-items: center;
   width: 20px;
   height: 20px;
   border: 2px solid #ccc;
   border-radius: 10px;
}
.checked {
   background-color: #ff8198;
   border: 2px solid #ff8198;
}
</style>

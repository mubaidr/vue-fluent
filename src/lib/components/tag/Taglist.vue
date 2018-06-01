<template>
  <div 
    :class="{ 'has-addons': attached }" 
    class="tags">
    <slot/>
  </div>
</template>

<script>
    export default {
        name: 'BTaglist',
        props: {
            attached: Boolean
        }
    }
</script>

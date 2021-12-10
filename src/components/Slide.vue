<template>
    <div
        class="slider__item"
        ref="slide"
    >
        <img :src="url" alt="">
    </div>
</template>

<script>
export default {
    name: "Slide",
    props: {
        url: String
    },
    data() {
        return {
            width: 0
        }
    },
    mounted() {
        this.width = this.$refs.slide.clientWidth
        this.$emit('widthBlock', this.width)
    }
}
</script>

<style scoped>
.slider__item {
    padding: 0 30%;
    width: 600px;
}
</style>
<template>
    <div class="slider-wrapper">
        <div class="slider">
            <button
                class="slider__btn slider__btn-left"
                @click="changeSlide('back')"
                @keyup.left="changeSlide('back')"
                :disabled="!currentSlide"
            >
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="33" height="44" viewBox="0 0 336 448">
                    <path
                        d="M292.75 75.25l-132.75 132.75 132.75 132.75c6.25 6.25 6.25 16.25 0 22.5l-41.5 41.5c-6.25 6.25-16.25 6.25-22.5 0l-185.5-185.5c-6.25-6.25-6.25-16.25 0-22.5l185.5-185.5c6.25-6.25 16.25-6.25 22.5 0l41.5 41.5c6.25 6.25 6.25 16.25 0 22.5z"></path>
                </svg>
            </button>
            <button
                class="slider__btn slider__btn-right"
                @click="changeSlide('next')"
                @keyup.right="changeSlide('next')"
                :disabled="-currentSlide === photos.length"
            >
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="33" height="44" viewBox="0 0 304 448">
                    <path
                        d="M276.75 219.25l-185.5 185.5c-6.25 6.25-16.25 6.25-22.5 0l-41.5-41.5c-6.25-6.25-6.25-16.25 0-22.5l132.75-132.75-132.75-132.75c-6.25-6.25-6.25-16.25 0-22.5l41.5-41.5c6.25-6.25 16.25-6.25 22.5 0l185.5 185.5c6.25 6.25 6.25 16.25 0 22.5z"></path>
                </svg>
            </button>
            <button
                class="slider__btn slider__btn-close"
                @click="$emit('exit', null)"
            >
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="35" height="44" viewBox="0 0 352 448">
                    <path
                        d="M324.5 330.5c0 6.25-2.5 12.5-7 17l-34 34c-4.5 4.5-10.75 7-17 7s-12.5-2.5-17-7l-73.5-73.5-73.5 73.5c-4.5 4.5-10.75 7-17 7s-12.5-2.5-17-7l-34-34c-4.5-4.5-7-10.75-7-17s2.5-12.5 7-17l73.5-73.5-73.5-73.5c-4.5-4.5-7-10.75-7-17s2.5-12.5 7-17l34-34c4.5-4.5 10.75-7 17-7s12.5 2.5 17 7l73.5 73.5 73.5-73.5c4.5-4.5 10.75-7 17-7s12.5 2.5 17 7l34 34c4.5 4.5 7 10.75 7 17s-2.5 12.5-7 17l-73.5 73.5 73.5 73.5c4.5 4.5 7 10.75 7 17z"></path>
                </svg>
            </button>
            <div class="slider-track" ref="slider-track">
                <slide
                    v-for="photo in photos"
                    :url="photo.url"
                    @widthBlock="getWidth"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Slide from "./Slide";

export default {
    name: "Slider",
    components: {Slide},
    props: {
        photos: Array
    },
    data() {
        return {
            currentSlide: 0,
            totalSlides: this.photos.length,
            widthPhoto: 0
        }
    },
    methods: {
        changeSlide(direction) {
            if (direction === 'back') {
                this.currentSlide += 1

            } else {
                this.currentSlide -= 1
            }
            this.$refs["slider-track"].style.transform = `translateX(${this.widthPhoto * this.currentSlide}px)`
        },
        getWidth(width) {
            this.widthPhoto = width
        }
    },
}
</script>

<style scoped>
.slider-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
}

.slider {
    position: relative;
}

.slider-track {
    min-height: 100vh;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
}

.slider__btn {
    background: none;
    border: none;
    position: absolute;
    top: 50%;
    cursor: pointer;
    z-index: 10;
}

.slider__btn:disabled {
    opacity: 0.5;
}

.slider__btn-left {
    left: 10%;
}

.slider__btn-right {
    right: 10%;
}

.slider__btn-close {
    top: 30px;
    right: 30px;
}
</style>
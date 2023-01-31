<script>
import { courses } from '../data';
import CourseCard from './slider/CourseCard.vue';
import JumboSlider from './slider/JumboSlider.vue';
export default {
    name: 'App Main',
    components: { CourseCard, JumboSlider },
    data() {
        return {
            courses
        }
    },


}
</script>

<template>
    <!-- to jumbo slider -->
    <jumbo-slider></jumbo-slider>
    <section id="jumbo-udemy">
        <h1>titolo</h1>
        <figure>
            <!-- <img src="../assets/images/slide-1.jpg" alt=""> -->
            <p>img</p>
        </figure>
    </section>
    <course-card v-for="course in courses" :key="course.id" :course="course"></course-card>

</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/verAlignm' as *;

#jumbo-udemy {
    background-color: #ff4450;
    height: 300px;
    @include vertical-flex;
    justify-content: space-between;

    figure {
        // width: 100%;
        height: 100%;

        img {
            height: $h100;
            object-fit: cover;
        }
    }
}
</style>
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
    <jumbo-slider></jumbo-slider>
    <course-card v-for="course in courses" :key="course.id" :course="course"></course-card>

</template>

<style>

</style>
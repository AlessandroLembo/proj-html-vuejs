<script>
import { courses } from '../data';
import CourseCard from './slider/CourseCard.vue';
export default {
    name: 'App Main',
    components: { CourseCard },
    data() {
        return {
            courses
        }
    },


}
</script>

<template>
    <course-card v-for="course in courses" :key="course.id" :course="course"></course-card>
</template>

<style>

</style>
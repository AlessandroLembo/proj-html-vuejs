<script>
import { courses } from '../../data/';
export default {
    data() {
        return {
            courses
        }
    },
    props: {
        course: Object
    },
    computed: {
        courseSrc() {
            const url = new URL(`../../assets/images/${this.course.image}`, import.meta.url)
            return url.href;
        },
    }
}
</script>

<template>
    <ul>
        <li><img :src="courseSrc" :alt="course.name"></li>
        <li>{{ course.category }}</li>
        <li>{{ course.name }}</li>
        <li>{{ course.vote_average }}</li>
        <li>{{ course.original_cost }}</li>
        <li>{{ course.price }}</li>

    </ul>
</template>

<style>

</style>
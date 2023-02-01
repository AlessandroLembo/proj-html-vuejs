<script>
import { courses } from '../../data';
export default {
    data() {
        return {
            courses,

        }

    },

    // computed: {
    //     // get an array with six itmes
    //     filterCourseById() {
    //         this.courses.forEach(course => {
    //             if (course.id <= 5) {
    //                 this.firstGroup.push(course);
    //             } else if (course.id > 5 & course.id < 12) {
    //                 this.secondGroup.push(course);
    //             } else {
    //                 this.thirdGroup.push(course);
    //             }
    //             return this.firstGroup, this.secondGroup, this.thirdGroup;
    //         })
    //     }
    // }

}
</script>

<template>

</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables' as *;
@use '../../assets/scss/partials/verAlignm' as *;
</style>
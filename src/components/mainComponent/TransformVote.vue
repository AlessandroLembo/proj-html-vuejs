<script>
export default {
    name: 'Transform Vote',
    props: {
        vote: Number
    },

    data() {
        return {
            stars: [
                {
                    star: 1
                },
                {
                    star: 2
                },
                {
                    star: 3
                },
                {
                    star: 4
                },
                {
                    star: 5
                }
            ]

        }
    }



}
</script>

<template>
    <ul class="star-list">
        <li v-for="star in stars">
            <font-awesome-icon v-if="vote < star.star" icon="fa-regular fa-star" />
            <font-awesome-icon v-else icon="fa-solid fa-star" />
        </li>
    </ul>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables' as *;
@use '../../assets/scss/partials/verAlignm' as *;

.star-list {
    @include vertical-flex;

    li {
        color: rgb(158, 158, 42);
    }
}
</style>
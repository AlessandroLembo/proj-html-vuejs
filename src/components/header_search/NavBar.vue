<script>
export default {
    data() {
        return {
            links: [
                {
                    id: 1,
                    link: 'Home',
                },
                {
                    id: 2,
                    link: 'Pages',
                },
                {
                    id: 3,
                    link: 'Course Formats',
                },
                {
                    id: 4,
                    link: 'Demos',
                },
                {
                    id: 5,
                    link: 'Demos',
                }
            ]
        }

    }
}
</script>

<template>
    <nav>
        <ul class="nav-bar">
            <li v-for="link in links" :key="link.id"><a href="#"> {{ link.link }} </a></li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables' as *;
@use '../../assets/scss/partials/verAlignm' as *;

.nav-bar {
    @include vertical-flex;
}

li {
    padding: 0 10px;
}

a {
    color: rgba(0, 0, 0, 0.4);
}
</style>
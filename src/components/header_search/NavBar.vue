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
        <ul>
            <li v-for="link in links" :key="link.id"><a href="#"> {{ link }} </a></li>
        </ul>
    </nav>
</template>

<style>

</style>
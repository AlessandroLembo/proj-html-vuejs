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
            ],
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
    <div class="icon">
        <font-awesome-icon class="social-icon" icon="fa-brands fa-facebook" />
        <font-awesome-icon class="social-icon" icon="fa-brands fa-twitter" />
        <font-awesome-icon class="social-icon" icon="fa-brands fa-instagram" />
        <font-awesome-icon class="social-icon" icon="fa-brands fa-linkedin" />
        <font-awesome-icon class="social-icon" icon="fa-brands fa-google-plus" />
        <font-awesome-icon icon="fa-brands fa-youtube" />
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables' as *;
@use '../../assets/scss/partials/verAlignm' as *;

.nav-bar {
    @include vertical-flex;

    li {
        padding: 0 10px;
    }

    a {
        color: rgba(0, 0, 0, 0.7);
    }
}

.icon {
    @include vertical-flex;
    margin-left: 1.5rem;

    .social-icon {
        padding: 0 5px;
        color: rgba(0, 0, 0, 0.7);
    }
}
</style>
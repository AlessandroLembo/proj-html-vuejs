<script>
import { jobs } from '../../data';
export default {
    name: 'Job card',
    data() {
        return {
            jobs
        }
    },
    props: {
        job: Object
    },

    // build sting image
    computed: {
        jobSrc() {
            const url = new URL(`../../assets/images/${this.job.image}`, import.meta.url)
            return url.href;
        }
    }

}
</script>

<template>
    <div class="big-col">
        <div class="card section-business">
            <figure>
                <img :src="jobSrc" :alt="job.description">
            </figure>
            <div class="start-business">
                <h1>{{ job.job }}</h1>
                <p>{{ job.description }}</p>
                <button>{{ job.action }}</button>
            </div>
        </div>
    </div>
    <div class="big-col">
        <div class="card">

        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables' as *;
@use '../../assets/scss/partials/verAlignm' as *;

.big-col {
    flex-basis: 50%;
    padding: 1rem;
    height: 280px;

}

.section-business {
    @include vertical-flex;

    figure {
        width: 130px;
        height: 130px;
    }
}
</style>
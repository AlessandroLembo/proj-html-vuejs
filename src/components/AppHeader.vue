<script>
import SearchContent from './header_search/SearchContent.vue';
export default {
    name: 'App Header',
    components: { SearchContent }

}
</script>

<template>
    <header>
        <div class="top-header">
            <div class="container top-header-container">
                <select name="language" id="language">
                    <option value="English">English</option>
                    <option value="Italian">Itlian</option>
                </select>

                <!-- to do component for header navbar -->
                <div class="header-navbar">
                    <p>right header</p>
                </div>
            </div>
        </div>
        <div class="centre-header">
            <div class="container">

            </div>
        </div>
        <div class="bottom-header">
            <div class="container">

            </div>
        </div>
    </header>

    <search-content></search-content>

</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;

header {
    height: 190px;
    border: 1px solid black;
}

.top-header {
    height: 45px;
    border: 1px solid black;

    .top-header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: $h100;
    }
}

.centre-header {
    height: 85px;
}

.bottom-header {
    background-color: #273044;
    height: 60px;
}
</style>
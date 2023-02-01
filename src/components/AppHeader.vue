<script>
import SearchContent from './header_search/SearchContent.vue';
import NavBar from './header_search/NavBar.vue';
export default {
    name: 'App Header',
    components: { SearchContent, NavBar }

}
</script>

<template>
    <header>
        <!-- to header, select language and menu navbar -->
        <div class="top-header">
            <div class="container top-header-container">
                <select name="language" id="language">
                    <option value="English">English</option>
                    <option value="Italian">Itlian</option>
                </select>

                <!-- to do component for header navbar -->
                <div class="header-navbar">
                    <nav-bar></nav-bar>
                </div>
            </div>
        </div>

        <!-- search bar section in header -->
        <div class="centre-header">
            <div class="container header-container">
                <div class="logo">
                </div>
                <!-- to do component for search bar -->
                <p>search bar</p>
                <div class="link-centre-header">

                </div>
                <div class="log-in">
                </div>
            </div>
        </div>

        <!-- to do component for header menù -->
        <div class="bottom-header">
            <div class="container">
                <nav class="header-menu">
                    <ul class="header-container">
                        <li><a href="">LINK</a></li>
                        <li><a href="">LINK</a></li>
                        <li><a href="">LINK</a></li>
                        <li><a href="">LINK</a></li>
                        <li><a href="">LINK</a></li>

                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <search-content></search-content>

</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/verAlignm' as *;

header {
    height: 190px;
    border: 1px solid black;

    .top-header-container {
        @include vertical-flex;
        justify-content: space-between;
        height: $h100;
    }

    .header-container {
        @include vertical-flex;
        justify-content: center;
        height: $h100;
    }
}

.top-header {
    height: 45px;
    border: 1px solid black;
}

.centre-header {
    height: 85px;
}

.bottom-header {
    background-color: #273044;
    height: 60px;

    .header-menu {
        height: 60px;
    }
}
</style>
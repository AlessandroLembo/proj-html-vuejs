<script>
import SearchContent from './header_search/SearchContent.vue';
import NavBar from './header_search/NavBar.vue';
import { options } from '../data'
export default {
    name: 'App Header',
    components: { SearchContent, NavBar },
    data() {
        return {
            options,
        }
    }


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

                <!-- component for header navbar -->
                <div class="header-navbar">
                    <nav-bar></nav-bar>
                </div>
            </div>
        </div>

        <!-- search bar section in header -->
        <div class="centre-header">
            <div class="container header-container">
                <div>
                    <figure class="logo">
                        <img src="../assets/images/masterstudy-logo.svg" alt="logo">
                    </figure>
                </div>

                <!-- component for search bar -->
                <search-content></search-content>

                <div class="link-centre-header">
                    <nav>
                        <ul class="nav-link">
                            <li>
                                <font-awesome-icon class="icon-link" icon="fa-solid fa-bullhorn" />
                                <a href="#">Become an Instructor</a>
                            </li>
                            <li>
                                <font-awesome-icon class="icon-link" icon="fa-solid fa-briefcase" />
                                <a href="#">For Enterprise</a>
                            </li>
                        </ul>
                    </nav>



                </div>
                <div class="log-in">
                    <div>
                        <font-awesome-icon icon="fa-solid fa-user" />
                        <a href="#">Login in</a>
                    </div>

                    <button>SIGN UP</button>

                    <font-awesome-icon icon="fa-solid fa-bookmark" />
                </div>
            </div>
        </div>

        <!--  loop for to generate link navbar -->
        <div class="bottom-header">
            <div class="container">
                <nav class="header-menu">
                    <ul class="header-container">
                        <li v-for="option in options"><a href="#">{{ option.category }}</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/verAlignm' as *;

header {
    height: 190px;

    .top-header-container {
        @include vertical-flex;
        justify-content: space-between;
        height: $h100;
    }

}

.header-container {
    @include vertical-flex;
    justify-content: center;
    height: $h100;


}

// top header, language navbar and icons
.top-header {
    height: 45px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    .header-navbar {
        @include vertical-flex;
    }
}

#language {
    border: none;
    cursor: pointer;
}

// centre header, logo searchbar and log in
.logo {
    width: 180px;
    height: 35px;
    margin-right: 1rem;

    img {
        height: $h100;
    }
}

.centre-header {
    height: 85px;

    .nav-link {
        @include vertical-flex;

        li {
            padding: 0 0.5rem;
        }
    }
}

.icon-link,
a {
    color: rgba(0, 0, 0, 0.8);
}

.icon-link {
    margin: 0 5px;
}

.log-in {
    @include vertical-flex;
    margin-left: 2rem;

    button {
        margin: 0 0.5rem;
        padding: 10px 15px;
        border-radius: 15px;
        background-color: #ff4450;
        border: none;
        color: white;
    }

    a {
        margin-left: 5px;
    }
}

// bottom header, menu
.bottom-header {
    background-color: #273044;
    height: 60px;

    .header-menu {
        height: 60px;

        li {
            padding: 0 2rem;
        }

        a {
            color: white;
        }
    }
}
</style>
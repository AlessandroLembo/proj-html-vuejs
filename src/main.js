import { createApp } from 'vue'

import '@fontsource/montserrat';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faSlack } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSkype } from '@fortawesome/free-brands-svg-icons';



library.add(solidStar, regularStar, faFacebook, faPinterest, faInstagram, faLinkedin, faGooglePlus, faSlack, faTwitter, faSkype );

import App from './App.vue'

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')

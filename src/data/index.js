const courses = [
    {
       id: 1, 
       category: 'Development >',
       name: 'The Complete iOS 10 & Swift 3 Developer Course',
       vote_average: 4,
       price: '$100',
       original_cost: '$199.99', 
       image: '895786_7b4b_2-272x161.jpg'
    },
    {
        id: 2, 
        category: 'Development >',
        name: 'Web Design for Beginners: Real World Coding in HTML & CSS',
        vote_average: 5,
        price: '$65',
        original_cost: '$129.99',
        image: '246154_d8b0_3-272x161.jpg'
     },
     {
        id: 3, 
        category: 'Development >',
        name: 'GitHub Ultimate: Master Git and GitHub - Beginner to Expert',
        vote_average: 4,
        price: '$50',
        original_cost: '$99.99',
        image: '752950_773-272x161.jpg'
     },
     {
        id: 4, 
        category: 'Development >',
        name: 'The Complete iOS 11 & Swift Developer Course - Build 20 Apps',
        vote_average: 4,
        price: '$100',
        original_cost: '$199.99',
        image: '1253188_58f7_2-272x161.jpg'

     },
     {
        id: 5, 
        category: 'Development >',
        name: 'Android Java Masterclass - Become App Developer',
        vote_average: 4,
        price: '$50',
        original_cost: '$99.99',
        image: '919872_ed54_6-272x161.jpg'
     },
     {
        id: 6, 
        category: 'Development >',
        name: 'Xamarin Forms: Build Native Cross-plataform Apps with C#',
        vote_average: 4,
        price: '$95',
        original_cost: '$189.99',
        image: '951684_9c1a_2-272x161.jpg'
     },
     {
        id: 7, 
        category: 'Design >',
        name: 'CSS - The complete Guide 2020 (incl. Flexbox, Grid & Sass)',
        vote_average: 5,
        price: '$100',
        original_cost: '$199.99',
        image: '1561458_7f3b-272x161.jpg'
     },
     {
        id: 8, 
        category: 'Design >',
        name: 'Digitally Painting Light and Color: Amateur to Master',
        vote_average: 4,
        price: '$70',
        original_cost: '$139.99',
        image: '1208228_d61c_4-272x161.jpg'
     },
     {
        id: 9, 
        category: 'Arts & Crafts >',
        name: 'Become an Arabic Calligraphy Artist from Scratch',
        vote_average: 5,
        price: '$199.99',
        original_cost: '',
        image: '186792_41e4_4-272x161.jpg'
     },
     {
        id: 10, 
        category: 'Google >',
        name: 'Google Searching Ninja!',
        vote_average: 4,
        price: '$45',
        original_cost: '$89.99',
        image: '1776542_30b1-272x161.jpg'
     },
     {
        id: 11, 
        category: 'Arts & Crafts >',
        name: 'Foundation for Mastering Watercolor Painting',
        vote_average: 5,
        price: '$10',
        original_cost: '$19.99',
        image: '949316_2a64_11-272x161.jpg'
     },
     {
        id: 12, 
        category: 'Food & Beverage >',
        name: 'Get Wine-Smart',
        vote_average: 4,
        price: '$25',
        original_cost: '$49.99',
        image: '366802_6fcc-272x161.jpg'
     },
     {
        id: 13, 
        category: 'Arts & Crafts >',
        name: 'The Colored Pencil Drawing Course',
        vote_average: 4,
        price: '$18',
        original_cost: '$34.99',
        image: '381588_2e6d_4-272x161.jpg'
     },
     {
        id: 14, 
        category: 'Arts & Crafts >',
        name: 'Paint Realistic Watercolor and Botanicals - STUDIO BASICS',
        vote_average: 4,
        price: '$35',
        original_cost: '$69.99',
        image: '838056_611a_3-272x161.jpg'
     },
     {
        id: 15, 
        category: 'Arts & Crafts >',
        name: 'Mastering Brushstrokes - Part 1',
        vote_average: 5,
        price: '$10',
        original_cost: '$19.99',
        image: '1414956_d944_15-272x161.jpg'
     },
     {
        id: 16, 
        category: 'Arts & Crafts >',
        name: 'Paint Realistic Watercolour and Botanicals - MAGNOLIAS',
        vote_average: 5,
        price: '$35',
        original_cost: '$69.99',
        image: '1109398_4c13-272x161.jpg'
     },

]



const api = {
    language: 'it-IT',
    key: 'dd9b1073e48ec92b6d25fb7c351682de',
    baseUri: 'https://api.themoviedb.org/3/'
    
    }

const pics = {
    baseUrl: 'https://image.tmdb.org/t/p/w342',
    placeholder: 'https://www.altavod.com/assets/images/poster-placeholder.png'
}
    
    export { courses };
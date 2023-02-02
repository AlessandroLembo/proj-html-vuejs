const courses = [
    {
       id: 0, 
       category: 'Development >',
       name: 'The Complete iOS 10 & Swift 3 Developer Course',
       vote_average: 4,
       price: '$100',
       original_cost: '$199.99', 
       image: '895786_7b4b_2-272x161.jpg',
       recentCourse: true, 

    },
    {
        id: 1, 
        category: 'Development >',
        name: 'Web Design for Beginners: Real World Coding in HTML & CSS',
        vote_average: 5,
        price: '$65',
        original_cost: '$129.99',
        image: '246154_d8b0_3-272x161.jpg',
        recentCourse: true
     },
     {
        id: 2, 
        category: 'Development >',
        name: 'GitHub Ultimate: Master Git and GitHub - Beginner to Expert',
        vote_average: 4,
        price: '$50',
        original_cost: '$99.99',
        image: '752950_b773-272x161.jpg',
        recentCourse: false
     },
     {
        id: 3, 
        category: 'Development >',
        name: 'The Complete iOS 11 & Swift Developer Course - Build 20 Apps',
        vote_average: 4,
        price: '$100',
        original_cost: '$199.99',
        image: '1253188_58f7_2-272x161.jpg',
        recentCourse: false

     },
     {
        id: 4, 
        category: 'Development >',
        name: 'Android Java Masterclass - Become App Developer',
        vote_average: 4,
        price: '$50',
        original_cost: '$99.99',
        image: '919872_ed54_6-272x161.jpg',
        recentCourse: false
     },
     {
        id: 5, 
        category: 'Development >',
        name: 'Xamarin Forms: Build Native Cross-plataform Apps with C#',
        vote_average: 4,
        price: '$95',
        original_cost: '$189.99',
        image: '951684_9c1a_2-272x161.jpg',
        recentCourse: false
     },
     {
        id: 6, 
        category: 'Design >',
        name: 'CSS - The complete Guide 2020 (incl. Flexbox, Grid & Sass)',
        vote_average: 5,
        price: '$100',
        original_cost: '$199.99',
        image: '1561458_7f3b-272x161.jpg', 
        recentCourse: true
     },
     {
        id: 7, 
        category: 'Design >',
        name: 'Digitally Painting Light and Color: Amateur to Master',
        vote_average: 4,
        price: '$70',
        original_cost: '$139.99',
        image: '1208228_d61c_4-272x161.jpg',
        recentCourse: true
     },
     {
        id: 8, 
        category: 'Arts & Crafts >',
        name: 'Become an Arabic Calligraphy Artist from Scratch',
        vote_average: 5,
        price: '$199.99',
        original_cost: '',
        image: '186792_41e4_4-272x161.jpg',
        recentCourse: true
     },
     {
        id: 9, 
        category: 'Google >',
        name: 'Google Searching Ninja!',
        vote_average: 4,
        price: '$45',
        original_cost: '$89.99',
        image: '1776542_30b1-272x161.jpg',
        recentCourse: true
     },
     {
        id: 10, 
        category: 'Arts & Crafts >',
        name: 'Foundation for Mastering Watercolor Painting',
        vote_average: 5,
        price: '$10',
        original_cost: '$19.99',
        image: '949316_2a64_11-272x161.jpg', 
        recentCourse: true
     },
     {
        id: 11, 
        category: 'Food & Beverage >',
        name: 'Get Wine-Smart',
        vote_average: 4,
        price: '$25',
        original_cost: '$49.99',
        image: '366802_6fcc-272x161.jpg', 
        recentCourse: true
     },
     {
        id: 12, 
        category: 'Arts & Crafts >',
        name: 'The Colored Pencil Drawing Course',
        vote_average: 4,
        price: '$18',
        original_cost: '$34.99',
        image: '381588_2e6d_4-272x161.jpg',
        recentCourse: true
     },
     {
        id: 13, 
        category: 'Arts & Crafts >',
        name: 'Paint Realistic Watercolor and Botanicals - STUDIO BASICS',
        vote_average: 4,
        price: '$35',
        original_cost: '$69.99',
        image: '838056_611a_3-272x161.jpg',
        recentCourse: true
     },
     {
        id: 14, 
        category: 'Arts & Crafts >',
        name: 'Mastering Brushstrokes - Part 1',
        vote_average: 5,
        price: '$10',
        original_cost: '$19.99',
        image: '1414956_d944_15-272x161.jpg',
        recentCourse: true
     },
     {
        id: 15, 
        category: 'Arts & Crafts >',
        name: 'Paint Realistic Watercolour and Botanicals - MAGNOLIAS',
        vote_average: 5,
        price: '$35',
        original_cost: '$69.99',
        image: '1109398_4c13-272x161.jpg',
        recentCourse: true
     },

]

const courses_groups = [
   {
      id: 0, 
      category_1: 'Development >',
      name_1: 'The Complete iOS 10 & Swift 3 Developer Course',
      vote_average_1: 4,
      price_1: '$100',
      original_cost_1: '$199.99', 
      image_1: '895786_7b4b_2-272x161.jpg',
      category_2: 'Development >',
      name_2: 'Web Design for Beginners: Real World Coding in HTML & CSS',
      vote_average_2: 5,
      price_2: '$65',
      original_cost_2: '$129.99',
      image_2: '246154_d8b0_3-272x161.jpg',
      category_3: 'Development >',
      name_3: 'GitHub Ultimate: Master Git and GitHub - Beginner to Expert',
      vote_average_3: 4,
      price_3: '$50',
      original_cost_3: '$99.99',
      image_3: '752950_b773-272x161.jpg',
      category_4: 'Development >',
      name_4: 'The Complete iOS 11 & Swift Developer Course - Build 20 Apps',
      vote_average_4: 4,
      price_4: '$100',
      original_cost_4: '$199.99',
      image_4: '1253188_58f7_2-272x161.jpg',

    },
    {
       id: 1, 
       category_1: 'Development >',
       name_1: 'Android Java Masterclass - Become App Developer',
       vote_average_1: 4,
       price_1: '$50',
       original_cost_1: '$99.99',
       image_1: '919872_ed54_6-272x161.jpg',
       category_2: 'Development >',
       name_2: 'Xamarin Forms: Build Native Cross-plataform Apps with C#',
       vote_average_2: 4,
       price_2: '$95',
       original_cost_2: '$189.99',
       image_2: '951684_9c1a_2-272x161.jpg',
       category_3: 'Design >',
       name_3: 'CSS - The complete Guide 2020 (incl. Flexbox, Grid & Sass)',
       vote_average_3: 5,
       price_3: '$100',
       original_cost_3: '$199.99',
       image_3: '1561458_7f3b-272x161.jpg', 
       category_4: 'Design >',
       name_4: 'Digitally Painting Light and Color: Amateur to Master',
       vote_average_4: 4,
       price_4: '$70',
       original_cost_4: '$139.99',
       image_4: '1208228_d61c_4-272x161.jpg'
    },
    {
       id: 2, 
       category_1: 'Arts & Crafts >',
       name_1: 'Become an Arabic Calligraphy Artist from Scratch',
       vote_average_1: 5,
       price_1: '$199.99',
       original_cost_1: '',
       image_1: '186792_41e4_4-272x161.jpg',
       category_2: 'Google >',
       name_2: 'Google Searching Ninja!',
       vote_average_2: 4,
       price_2: '$45',
       original_cost_2: '$89.99',
       image_2: '1776542_30b1-272x161.jpg',
       category_3: 'Arts & Crafts >',
       name_3: 'Foundation for Mastering Watercolor Painting',
       vote_average_3: 5,
       price_3: '$10',
       original_cost_3: '$19.99',
       image_3: '949316_2a64_11-272x161.jpg',
       category_4: 'Food & Beverage >',
       name_4: 'Get Wine-Smart',
       vote_average_4: 4,
       price_4: '$25',
       original_cost_4: '$49.99',
       image_4: '366802_6fcc-272x161.jpg'
    },
    {
       id: 3,
       category_1: 'Arts & Crafts >',
       name_1: 'The Colored Pencil Drawing Course',
       vote_average_1: 4,
       price_1: '$18',
       original_cost_1: '$34.99',
       image_1: '381588_2e6d_4-272x161.jpg',
       category_2: 'Arts & Crafts >',
       name_2: 'Paint Realistic Watercolor and Botanicals - STUDIO BASICS',
       vote_average_2: 4,
       price_2: '$35',
       original_cost_2: '$69.99',
       image_2: '838056_611a_3-272x161.jpg', 
       category_3: 'Arts & Crafts >',
       name_3: 'Mastering Brushstrokes - Part 1',
       vote_average_3: 5,
       price_3: '$10',
       original_cost_3: '$19.99',
       image_3: '1414956_d944_15-272x161.jpg',
       category_4: 'Arts & Crafts >',
       name_4: 'Paint Realistic Watercolour and Botanicals - MAGNOLIAS',
       vote_average_4: 5,
       price_4: '$35',
       original_cost_4: '$69.99',
       image_4: '1109398_4c13-272x161.jpg',
    },

]

const jobs = [
   {
     job: 'Become an Instructor',
     description: 'Teach what you love. Masterstudy gives you the tools to create a course.',
     action: 'START TEACHING',
     image: 'image_box_1-221x231.png'
   },
   {
      job: 'Access For Business',
      description: 'Get unlimited access to 2,500 of top courses for your team.',
      action: 'DOING BUSINESS',
      image: 'image_box_2-234x231.png'
    }
]


const options = [
   {
       id: 1,
       category: 'Business',
   },
   {
       id: 2,
       category: 'Design',
   },
   {
       id: 3,
       category: 'Development',
   },
   {
       id: 4,
       category: 'Lifestyle',
   },
   {
       id: 5,
       category: 'Office Productivity',
   }
]

const categories = [
   {
      id: 1,
      category: 'All Categories'
   },
   {
      id: 2,
      category: 'Business'
   },
   {
      id: 3,
      category: 'Design'
   },
   {
      id: 4,
      category: 'Development'
   },
   {
      id: 5,
      category: 'IT & Software'
   },
   {
      id: 6,
      category: 'Lifestyle'
   },
   {
      id: 7,
      category: 'Marketing'
   },
   {
      id: 8,
      category: 'Office Productivity'
   }
]

export { courses, jobs, options, courses_groups, categories };
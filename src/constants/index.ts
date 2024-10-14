import {
    Almonds,
    Banana,
    Broccoli, Cabbage, Client1, Client2, Client3, Client4, Client5,
    Corn,
    Eggs,
    Hazelnut,
    MungBean,
    MungBroccoli, Onion,
    RedTomato,
    Toast,
    WhiteNuts,
    Zucchini
} from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "shop",
        title: "Shop",
    },
    {
        id: "pages",
        title: "Pages",
    },
    {
        id: "news",
        title: "News",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const HomeProductItems = [
    {
        id: 1,
        tag: 'Vegetable',
        image: `${Broccoli}`,
        type: 'Callables Broccoli',
        newPrice: 13.00,
        oldPrice: 20.00,
        rating: 4
    },
    {
        id: 2,
        tag: 'Fresh',
        image: `${Banana}`,
        type: 'Fresh Banana Fruites',
        newPrice: 14.00,
        oldPrice: 20.00,
        rating: 5
    },
    {
        id: 3,
        tag: 'Millets',
        image: `${WhiteNuts}`,
        type: 'White Nuts',
        newPrice: 15.00,
        oldPrice: 20.00,
        rating: 4
    },
    {
        id: 4,
        tag: 'Vegetable',
        image: `${RedTomato}`,
        type: 'Vegan Red Tomato',
        newPrice: 17.00,
        oldPrice: 20.00,
        rating: 4
    },

    {
        id: 5,
        tag: 'Health',
        image: `${MungBean}`,
        type: 'Mung Bean',
        newPrice: 10.00,
        oldPrice: 20.00,
        rating: 3
    },
    {
        id: 6,
        tag: 'Nuts',
        image: `${Hazelnut}`,
        type: 'Brown Hazelnut',
        newPrice: 10.00,
        oldPrice: 20.00,
        rating: 3
    },
    {
        id: 7,
        tag: 'Fresh',
        image: `${Eggs}`,
        type: 'Eggs',
        newPrice: 10.00,
        oldPrice: 20.00,
        rating: 4
    },
    {
        id: 8,
        tag: 'Vegetable',
        image: `${Toast}`,
        type: 'Toast',
        newPrice: 10.00,
        oldPrice: 20.00,
        rating: 4
    },
    
    {
        id: 9,
        tag: 'Vegetable',
        image: `${MungBroccoli}`,
        type: 'Mung Broccoli',
        newPrice: 10.00,
        oldPrice: 20.00,
        rating: 3
    },
    {
        id: 10,
        tag: 'Vegetable',
        image: `${Zucchini}`,
        type: 'Fresh Zucchini',
        newPrice: 10.00,
        oldPrice: 20.00,
        rating: 3
    },
    {
        id: 11,
        tag: 'Vegetable',
        image: `${Onion}`,
        type: 'Onion',
        newPrice: 10.00,
        oldPrice: 20.00,
        rating: 4
    },
    {
        id: 12,
        tag: 'Vegetable',
        image: `${Cabbage}`,
        type: 'Cabbage',
        newPrice: 10.00,
        oldPrice: 20.00,
        rating: 4
    },

    {
        id: 13,
        tag: 'Fruits',
        image: `${Almonds}`,
        type: 'Almonds',
        newPrice: 10.00,
        oldPrice: 20.00,
        rating: 4
    },
    {
        id: 14,
        tag: 'Vegetable',
        image: `${Corn}`,
        type: 'Corn',
        newPrice: 10.00,
        oldPrice: 20.00,
        rating: 4
    },
];

export const HomeTestimonialClients = [
    {
      id: 1,
      image: `${Client1}`,
      rate: 5,
      name: 'Sara Taylor',
      job: 'Consumer',
      content: 'The quality of organic produce is extremely high, the service is second to none and the taste of the food takes me back to my childhood when we were growing our own.'
    },
    {
        id: 2,
        image: `${Client2}`,
        rate: 4,
        name: 'Chris Jordan',
        job: 'Store Owner',
        content: 'I have been using the Organick Grocer for over a year now and I find the staff friendly and helpful with a good knowledge of the products they sell.'
    },
    {
        id: 3,
        image: `${Client3}`,
        rate: 5,
        name: 'Steve Miller',
        job: 'Barber',
        content: 'Organic is a life saver! I just started a company, so there\'s no time for cooking. I couldn\'t live without my daily meals now!'
    },
    {
        id: 4,
        image: `${Client4}`,
        rate: 4,
        name: 'Hannah Smith',
        job: 'Hairdresser',
        content: 'I got Organic for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.'
    },
    {
        id: 5,
        image: `${Client5}`,
        rate: 4,
        name: 'Hadley',
        job: 'Engineer',
        content: 'I got Organic for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.'
    },
];
export const HomeTestimonialStatus = [
    {
        id: 1,
        title: '100%',
        content: 'Organic'
    },
    {
        id: 2,
        title: '285',
        content: 'Active Product'
    },
    {
        id: 3,
        title: '350+',
        content: 'Organic Orchads'
    },
    {
        id: 4,
        title: '25+',
        content: 'Years of Farming'
    },
];

export  const HomeNewsBlogs = [
    {
        id: 1,
        date: '25 Nov',
        author: 'Kristina Castle',
        title: 'The Benefits of Vitamin D',
        content: 'Organic farming is the only way that you still can experience the real world.'
    },
    {
        id: 2,
        date: '7 Sep',
        author: 'Alex Louis',
        title: 'Our Favourite Summertime Tommeto',
        content: 'The world of nature has grown on the principles of health, ecology, and care.'
    }
];
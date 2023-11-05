import banner01 from '../img/banner-5.jpg';
import banner02 from '../img/pexels-fauxels-3183165.jpg';
import banner03 from '../img/pexels-pixabay-270404.jpg';
import banner04 from '../img/pexels-jorge-jesus-614117 (1).jpg';
import banner05 from '../img/—Pngtree—spider web web cobweb design_534712.jpg';
// Settings for the slider

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Change slides every 4 seconds
  
    // Rest of your settings...
  };
  
const slider = [
    {
        src: banner01,
        h1: 'Welcome to HiStore',
        p: "We're your digital partners, transforming your business ideas into stunning website designs. Let's embark on this digital journey together.",
        button: 'More',
        link: '/products',
        color: 'bg-orange-700 bg-opacity-20'

    },
    {
        src: banner02,
        h1: 'Simplified eCommerce Solutions',
        p: 'Experience the blend of simplicity and functionality with our eCommerce solutions. Tailored to your needs, designed for your success.',
        button: 'More',
        link: '/products',
        color: 'bg-indigo-700 bg-opacity-30'
    },
    {
        src: banner03,
        h1: 'TailwindCSS & React',
        p: 'Harness the power of modern technologies. We use TailwindCSS and React to build fast, responsive, and beautiful webpages.',
        button: 'More',
        link: '/products',
        color: 'bg-blue-500 bg-opacity-30'
    },
    {
        src: banner04,
        h1: 'Your Online Storefront',
        p: 'Make your online presence count. Our eCommerce webpages are not just about selling, they are about creating memorable customer experiences.',
        button: 'More',
        link: '/products',
        color: 'bg-red-500 bg-opacity-30'

    },
    {
        src: banner05,
        h1: '24/7 Support',
        p: 'We are with you every step of the way. Our dedicated support team is always ready to assist you, any day, any time.',
        button: 'More',
        link: '/products',
        color: 'bg-teal-700 bg-opacity-30'


    }
]

export  {slider, settings};

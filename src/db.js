import homeIcon from './assets/svg/ph_house-fill-888B97.svg';
import activehomeIcon from './assets/svg/ph_house-fill.svg';
import villaIcon from './assets/svg/ic_round-villa.svg';
import activevillaIcon from './assets/svg/ic_round-villa-10B981.svg';
import apartmentIcon from './assets/svg/ic_round-apartment.svg';
import activeapartmentIcon from './assets/svg/ic_round-apartment-filled-10B981.svg';
// ==========================================================

import image1 from './assets/images/image1.jpg';
import image2 from './assets/images/image2.jpg';
import image3 from './assets/images/image3.jpg';
import image4 from './assets/images/image4.jpg';
import image5 from './assets/images/bgimage.png';
import image6 from './assets/images/fourthimage.png';
// =========================================================

import popluarIcon from './assets/svg/popular.svg';
import newhouseIcon from './assets/svg/newhouse.svg';
import bestdealsIcon from './assets/svg/bestdeals.svg';

// ==========================================================
import imagepost1 from './assets/images/firstimage.jpg';
import imagepost2 from './assets/images/robert.jpg';
import imagepost3 from './assets/images/jenny.jpg';
import imagepost4 from './assets/images/secondimage.jpg';
import imagepost5 from './assets/images/thirdimage.jpg';
import imagepost6 from './assets/images/fifthimage.jpg';
// ==========================================================
import bedroomIcon from './assets/svg/bedroomIcon.svg';
import bathroomIcon from './assets/svg/bathroomIcon.svg';
// ===========================================================
import imageview1 from './assets/images/imagereview1.jpg';
import imageview2 from './assets/images/imagereview2.jpg';
import imageview3 from './assets/images/imagereview3.jpg';
// ===========================================================
import starIcon from './assets/svg/star.svg';
// ===========================================================
import infoimg1 from './assets/images/infoimg1.jpg';
import infoimg2 from './assets/images/infoimg2.jpg';
import infoimg3 from './assets/images/infoimg3.jpg';
// =========================================================
import time from './assets/svg/time.svg';
import imagepost7 from './assets/images/imagepost7.jpg';
import imagepost8 from './assets/images/imagepost8.jpg';

export const houseLink = [
    {
        id: 1,
        icon: homeIcon,
        activeIcon: activehomeIcon,
        path: '/housing',
        title: 'House',
    },
    {
        id: 2,
        icon: villaIcon,
        activeIcon: activevillaIcon,
        path: '/housing/villa',
        title: 'Villa',
    },
    {
        id: 3,
        icon: apartmentIcon,
        activeIcon: activeapartmentIcon,
        path: '/housing/apartment',
        title: 'Apartment'
    }
]




export const house = [
    {
        id: 1,
        estateImage: image1,
        fame: popluarIcon,
        famename: 'Popular',
        fameClassNAME: 'bg-[#FEE2E2]',
        fameTextClassNAME: 'text-[#EF4444]',
        houseName: 'Roselands House',
        amount: '$30,000.00',
        ownerimage: imagepost1,
        name: 'Dianne Russel',
        location: 'Manchester, Kentucky',
    },
    {
        id: 2,
        estateImage: image2,
        fame: newhouseIcon,
        famename: 'New House',
        fameClassNAME: 'bg-[#DBEAFE]',
        fameTextClassNAME: 'text-[#1D4ED8]',
        houseName: 'Woodlandside',
        amount: '$12,789.23',
        ownerimage: imagepost2,
        name: 'Robert Fox',
        location: 'Dr. San Jose, South Dakota',
    },
    {
        id: 3,
        estateImage: image3,
        fame: bestdealsIcon,
        famename: 'Best Deals',
        fameClassNAME: 'bg-[#D1FAE5]',
        fameTextClassNAME: 'text-[#047857]',
        houseName: 'The Old Lighthouse',
        amount: '$44,252.89',
        ownerimage: imagepost3,
        name: 'Ronald Richards',
        location: 'Santa Ana, Illinois',
    },
    {
        id: 4,
        estateImage: image4,
        fame: popluarIcon,
        famename: 'Popular',
        fameClassNAME: 'bg-[#FEE2E2]',
        fameTextClassNAME: 'text-[#EF4444]',
        houseName: "Cosmo's House",
        amount: '$80,777.12',
        ownerimage: imagepost4,
        name: 'Jenny Williams',
        location: 'Preston Rd, Texas',
    },
    {
        id: 5,
        estateImage: image5,
        fame: newhouseIcon,
        famename: 'New House',
        fameClassNAME: 'bg-[#DBEAFE]',
        fameTextClassNAME: 'text-[#1D4ED8]',
        houseName: "Willow Haven",
        amount: '$50,000.06',
        ownerimage: imagepost5,
        name: 'Kyle McGregor',
        location: 'Houston, North Carolina',
    },
    {
        id: 6,
        estateImage: image6,
        fame: bestdealsIcon,
        famename: 'Best Deals',
        fameClassNAME: 'bg-[#D1FAE5]',
        fameTextClassNAME: 'text-[#047857]',
        houseName: "Rosewood Cottage",
        amount: '$110,100.53',
        ownerimage: imagepost6,
        name: 'Chris Wood',
        location: 'Vils Rd, New Jersey',
    },
    {
        id: 7,
        estateImage: image2,
        fame: popluarIcon,
        famename: 'Popular',
        fameClassNAME: 'bg-[#FEE2E2]',
        fameTextClassNAME: 'text-[#EF4444]',
        houseName: 'Old Trafford House',
        amount: '$78,100.20',
        ownerimage: imagepost2,
        name: 'Tobi Russel',
        location: 'Cleveland, Ohio',
    },
    {
        id: 8,
        estateImage: image3,
        fame: newhouseIcon,
        famename: 'New House',
        fameClassNAME: 'bg-[#DBEAFE]',
        fameTextClassNAME: 'text-[#1D4ED8]',
        houseName: 'Lakeside House',
        amount: '$40,243.23',
        ownerimage: imagepost1,
        name: 'Sarah Fox',
        location: 'Richmond, Virginia',
    },
    {
        id: 9,
        estateImage: image1,
        fame: popluarIcon,
        famename: 'Popular',
        fameClassNAME: 'bg-[#FEE2E2]',
        fameTextClassNAME: 'text-[#EF4444]',
        houseName: 'The Pine Cottage',
        amount: '$60,500.00',
        ownerimage: imagepost4,
        name: 'David Richards',
        location: 'Albany, New York',
    },
    {
        id: 10,
        estateImage: image4,
        fame: bestdealsIcon,
        famename: 'Best Deals',
        fameClassNAME: 'bg-[#D1FAE5]',
        fameTextClassNAME: 'text-[#047857]',
        houseName: 'Countryside House',
        amount: '$224,999.89',
        ownerimage: imagepost3,
        name: 'Jessica Williams',
        location: 'Madison, Wisconsin',
    },
]




export const Villa = [
    {
        id: 1,
        estateImage: "https://res.cloudinary.com/dyz6uugbr/image/upload/v1761241104/villa2_fctycm.jpg",
        fame: newhouseIcon,
        famename: 'New House',
        fameClassNAME: 'bg-[#DBEAFE]',
        fameTextClassNAME: 'text-[#1D4ED8]',
        houseName: 'Modern Villa',
        amount: '$131,010.00',
        ownerimage: imagepost5,
        name: 'Henry McGregor',
        location: 'Los Angeles, California',
    },
    {
        id: 2,
        estateImage: "https://res.cloudinary.com/dyz6uugbr/image/upload/v1761238580/villa1_smqvsg.jpg",
        fame: popluarIcon,
        famename: 'Popular',
        fameClassNAME: 'bg-[#FEE2E2]',
        fameTextClassNAME: 'text-[#EF4444]',
        houseName: 'Beachside Villa',
        amount: '$220,450.00',
        ownerimage: "https://res.cloudinary.com/dyz6uugbr/image/upload/v1728985685/cld-sample.jpg",
        name: 'Laura Smith',
        location: 'Washington, D.C.',
    },
    {
        id: 3,
        estateImage: "https://res.cloudinary.com/dyz6uugbr/image/upload/v1761241483/villa10_hz2eh6.jpg",
        fame: bestdealsIcon,
        famename: 'Best Deals',
        fameClassNAME: 'bg-[#D1FAE5]',
        fameTextClassNAME: 'text-[#047857]',
        houseName: 'Mountain Villa',
        amount: '$19,349.90',
        ownerimage: imagepost4,
        name: 'Ursula Wood',
        location: 'Oakland, California',
    },
    {
        id: 4,
        estateImage: "https://res.cloudinary.com/dyz6uugbr/image/upload/v1761241747/villa9_rex8dl.jpg",
        fame: newhouseIcon,
        famename: 'New House',
        fameClassNAME: 'bg-[#DBEAFE]',
        fameTextClassNAME: 'text-[#1D4ED8]',
        houseName: 'Midnight Ridge Villa',
        amount: '$145,000.00',
        ownerimage: imagepost1,
        name: 'Amanda Lee',
        location: 'San Francisco, California',
    },
    {
        id: 5,
        estateImage: image5,
        fame: popluarIcon,
        famename: 'Popular',
        fameClassNAME: 'bg-[#FEE2E2]',
        fameTextClassNAME: 'text-[#EF4444]',
        houseName: 'Napoli Villa',
        amount: '$98,500.00',
        ownerimage: imagepost3,
        name: 'Steven Brown',
        location: 'Miami, Florida',
    },
    {
        id: 6,
        estateImage: "https://res.cloudinary.com/dyz6uugbr/image/upload/v1761269664/villa7_xtk8il.jpg",
        fame: bestdealsIcon,
        famename: 'Best Deals',
        fameClassNAME: 'bg-[#D1FAE5]',
        fameTextClassNAME: 'text-[#047857]',
        houseName: 'Wolfgang Villa',
        amount: '$250,000.00',
        ownerimage: imagepost6,
        name: 'Olivia Davis',
        location: 'Seattle, Washington',
    },
    {
        id: 7,
        estateImage: "https://res.cloudinary.com/dyz6uugbr/image/upload/v1761270066/villa6_sgyzns.jpg",
        fame: newhouseIcon,
        famename: 'New House',
        fameClassNAME: 'bg-[#DBEAFE]',
        fameTextClassNAME: 'text-[#1D4ED8]',
        houseName:'Portofino Villa',
        amount: '$175,209.00',
        ownerimage: imagepost2,
        name: 'Emma Wilson',
        location: 'Boston, Massachusetts',
    },
    {
        id: 8,
        estateImage: "https://res.cloudinary.com/dyz6uugbr/image/upload/v1761270207/villa3_vftcqq.jpg",
        fame: popluarIcon,
        famename: 'Popular',
        fameClassNAME: 'bg-[#FEE2E2]',
        fameTextClassNAME: 'text-[#EF4444]',
        houseName:'Capri Sun Ji Villa',
        amount: '$89,450.00',
        ownerimage: imagepost5,
        name: 'Liam Martinez',
        location: 'Denver, Colorado',
    },
    {
        id: 9,
        estateImage: "https://res.cloudinary.com/dyz6uugbr/image/upload/v1761270304/villa5_udsmxi.jpg",
        fame: bestdealsIcon,
        famename: 'Best Deals',
        fameClassNAME: 'bg-[#D1FAE5]',
        fameTextClassNAME: 'text-[#047857]',
        houseName:'Santorini Villa',
        amount: '$120,300.00',
        ownerimage: imagepost4,
        name: 'Sophia Garcia',
        location: 'Austin, Texas',
    },
    {
        id: 10,
        estateImage: "https://res.cloudinary.com/dyz6uugbr/image/upload/v1761270431/villa4_xi2xcj.jpg",
        fame: newhouseIcon,
        famename: 'New House',
        fameClassNAME: 'bg-[#DBEAFE]',
        fameTextClassNAME: 'text-[#1D4ED8]',
        houseName:'Amalfi Coast Villa',
        amount: '$75,600.00',
        ownerimage: imagepost3,
        name: 'Mason Rodriguez',
        location: 'Portland, Oregon',
    },
    
]





export const Apartment = [
    {
        id: 1,
        estateImage: "https://res.cloudinary.com/dyz6uugbr/image/upload/v1761277765/apartment1_pykgcp.jpg",
        fame: bestdealsIcon,
        famename: 'Best Deals',
        fameClassNAME: 'bg-[#D1FAE5]',
        fameTextClassNAME: 'text-[#047857]',
        houseName:'Skyline Apartment',
        amount: '$430.34',
        days: '/month',
        bedroom: '3',
        bathroom: '2',
        bathroomicon: bathroomIcon,
        bedroomicon: bedroomIcon,
        ownerimage: imagepost3,
        name: 'Rachel Green',
        location: 'Toronto, Canada',
    },
    {
        id: 2,
        estateImage: "https://res.cloudinary.com/dyz6uugbr/image/upload/v1761650643/apartment2_fgowi8.jpg",
        fame: popluarIcon,
        famename: 'Popular',
        fameClassNAME: 'bg-[#FEE2E2]',
        fameTextClassNAME: 'text-[#EF4444]',
        houseName:'Cityview Apartment',
        amount: '$550.00',
        days: '/month',
        bedroom: '4',
        bathroom: '3',
        bathroomicon: bathroomIcon,
        bedroomicon: bedroomIcon,
        ownerimage: imagepost5,
        name: 'Monica Geller',
        location: 'Vancouver, Canada',
    },
    {
        id: 3,
        estateImage: "https://res.cloudinary.com/dyz6uugbr/image/upload/v1761651017/apartment3_hof1ia.jpg",
        fame: newhouseIcon,
        famename: 'New House',
        fameClassNAME: 'bg-[#DBEAFE]',
        fameTextClassNAME: 'text-[#1D4ED8]',
        houseName:'Primeview Apartment',
        amount: '$921.67',
        days: '/month',
        bedroom: '5',
        bathroom: '4',
        bathroomicon: bathroomIcon,
        bedroomicon: bedroomIcon,
        ownerimage: imagepost6,
        name: 'Chandler Bing',
        location: 'Toronto, Canada',
    },
    {
        id: 4,
        estateImage: "https://res.cloudinary.com/dyz6uugbr/image/upload/v1761651342/apartment4_kysqyj.jpg",
        fame: newhouseIcon,
        famename: 'New House',
        fameClassNAME: 'bg-[#DBEAFE]',
        fameTextClassNAME: 'text-[#1D4ED8]',
        houseName:'Primeview Apartment',
        amount: '$790.00',
        days: '/month',
        bedroom: '4',
        bathroom: '2',
        bathroomicon: bathroomIcon,
        bedroomicon: bedroomIcon,
        ownerimage: imagepost4,
        name: 'Joey Tribbiani',
        location: 'Montreal, Canada',
    },
    {
        id: 5,
        estateImage: "https://res.cloudinary.com/dyz6uugbr/image/upload/v1761651478/apartment5_nhvgup.jpg",
        fame: bestdealsIcon,
        famename: 'Best Deals',
        fameClassNAME: 'bg-[#D1FAE5]',
        fameTextClassNAME: 'text-[#047857]',
        houseName:'Quayside Apartment',
        amount: '$510.00',
        days: '/month',
        bedroom: '3',
        bathroom: '2',
        bathroomicon: bathroomIcon,
        bedroomicon: bedroomIcon,
        ownerimage: imagepost2,
        name: 'Phoebe Buffay',
        location: 'Calgary, Canada',
    },
    {
        id: 6,
        estateImage: "https://res.cloudinary.com/dyz6uugbr/image/upload/v1761651696/apartment6_ngk5p3.jpg",
        fame: popluarIcon,
        famename: 'Popular',
        fameClassNAME: 'bg-[#FEE2E2]',
        fameTextClassNAME: 'text-[#EF4444]',
        houseName:'Gardenview Apartment',
        amount: '$237.20',
        days: '/month',
        bedroom: '4',
        bathroom: '3',
        bathroomicon: bathroomIcon,
        bedroomicon: bedroomIcon,
        ownerimage: imagepost1,
        name: 'Ross Geller',
        location: 'Edmonton, Canada',
    },
    {
        id: 7,
        estateImage: "https://res.cloudinary.com/dyz6uugbr/image/upload/v1761651896/apartment7_ugnkqx.jpg",
        fame: newhouseIcon,
        famename: 'New House',
        fameClassNAME: 'bg-[#DBEAFE]',
        fameTextClassNAME: 'text-[#1D4ED8]',
        houseName:'Ruffview Apartment',
        amount: '$1137.20',
        days: '/month',
        bedroom: '6',
        bathroom: '4',
        bathroomicon: bathroomIcon,
        bedroomicon: bedroomIcon,
        ownerimage: imagepost3,
        name: 'Rachel Green',
        location: 'Winnipeg, Canada',
    },
    {
        id: 8,
        estateImage: "https://res.cloudinary.com/dyz6uugbr/image/upload/v1761652113/apartment8_ts9rfh.jpg",
        fame: popluarIcon,
        famename: 'Popular',
        fameClassNAME: 'bg-[#FEE2E2]',
        fameTextClassNAME: 'text-[#EF4444]',
        houseName:'Fairview Apartment',
        amount: '$843.97',
        days: '/month',
        bedroom: '5',
        bathroom: '3',
        bathroomicon: bathroomIcon,
        bedroomicon: bedroomIcon,
        ownerimage: imagepost6,
        name: 'Monica Geller',
        location: 'Halifax, Canada',
    },
    {
        id: 9,
        estateImage: "https://res.cloudinary.com/dyz6uugbr/image/upload/v1761652346/apartment9_yiuqqd.jpg",
        fame: bestdealsIcon,
        famename: 'Best Deals',
        fameClassNAME: 'bg-[#D1FAE5]',
        fameTextClassNAME: 'text-[#047857]',
        houseName:'Voltage Apartment',
        amount: '$799.70',
        days: '/month',
        bedroom: '4',
        bathroom: '3',
        bathroomicon: bathroomIcon,
        bedroomicon: bedroomIcon,
        ownerimage: imagepost5,
        name: 'Chandler Bing',
        location: 'Ottawa, Canada',
    },
    {
        id: 10,
        estateImage: "https://res.cloudinary.com/dyz6uugbr/image/upload/v1761652798/apartment10_cm0l0f.jpg",
        fame: newhouseIcon,
        famename: 'New House',
        fameClassNAME: 'bg-[#DBEAFE]',
        fameTextClassNAME: 'text-[#1D4ED8]',
        houseName:'Kensington Apartment',
        amount: '$199.70',
        days: '/month',
        bedroom: '3',
        bathroom: '2',
        bathroomicon: bathroomIcon,
        bedroomicon: bedroomIcon,
        ownerimage: imagepost4,
        name: 'Play Monica',
        location: 'Shoms, Lagos',
    },
]




export const ReviewData = [
    {
        id: 1,
        imagebg: imageview1,
        title: 'Best! I got the house I wanted through Hounter',
        description: 'Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.',
        name: 'Dianne Russel',
        image: imagepost1,
        position: 'Manager Director',
        star: starIcon,
        rating: '4.3',
    },
    {
        id: 2,
        imagebg: imageview2,
        title: 'Hounter is the best real estate website ever',
        description: 'I never thought finding a house would be this easy, thanks to Hounter now I can easily find the house of my dreams without any hassle.',
        name: 'Robert Fox',
        image: imagepost3,
        position: 'CEO & Founder',
        star: starIcon,
        rating: '4.8',
    },
    {
        id: 3,
        imagebg: imageview3,
        title: 'Thank you Hounter, I found my dream house',
        description: 'Providing various types of houses with complete information makes it easy for me to choose the house that suits my needs. Thank you Hounter.',
        name: 'Jenny Williams',
        image: imagepost4,
        position: 'Product Designer',
        star: starIcon,
        rating: '4.6',
    },
    {
        id: 4,
        imagebg: image2,
        title: 'Easy to find a house that suits my needs',
        description: 'Using Hounter makes it easy for me to find a house that suits my needs and budget. The information provided is also very complete and detailed.',
        name: 'Kyle McGregor',
        image: imagepost6,
        position: 'UI/UX Designer',
        star: starIcon,
        rating: '4.2',
    },
    {
        id: 5,
        imagebg: image5,
        title: 'Lots of choices and easy to book a viewing',
        description: 'I really like the variety of houses available on Hounter, making it easy for me to find the right one. The booking process is also very simple and fast.',
        name: 'Chris Wood',
        image: imagepost5,
        position: 'Marketing Manager',
        star: starIcon,
        rating: '4.0',
    },
    {
        id: 6,
        imagebg: image3,
        title: 'Wide selection and easy booking process',
        description: 'Providing various types of houses with complete information makes it easy for me to choose the house that suits my needs. Thank you Hounter.',
        name: 'Jessica Brown',
        image: imagepost1,
        position: 'Sales Manager',
        star: starIcon,
        rating: '4.5',
    },
]





export const information = [
    {
        id: 1,
        infoimage: infoimg1,
        personImg: imagepost5,
        name: 'Sarah Johnson',
        words: 'The things we need to check when we want to buy a house',
        timeicon: time,
        time: `${Math.floor(Math.random() * 10) + 1} min read`,
        date: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    }),
    },
    {
        id: 2,
        infoimage: infoimg2,
        personImg: imagepost8,
        name: 'Courtney Henry',
        words: '7 Ways to distinguish the quality of the house we want to buy',
        timeicon: time,
        time: `${Math.floor(Math.random() * 10) + 1} min read`,
        date: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    }),
    },
    {
        id: 3,
        infoimage: infoimg3,
        personImg: imagepost7,
        name: 'Darlene Robertson',
        words: 'The best way to know the quality of the house we want to buy',
        timeicon: time,
        time: `${Math.floor(Math.random() * 10) + 1} min read`,
        date: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    }),
    },
]




export const footerLink = [
    {
        id:1,
        title: "Property",
        link : [
            {link1: "House"},
            {link1: "Apartment"},
            {link1: "Villa"},
        ]
    },
    {
        id:2,
        title: "Article",
        link : [
            {link1: "New Article"},
            {link1: "Popular Article"},
            {link1: "Most Read"},
            {link1: "Tips & Tricks"},
        ]
    },
    {
        id:3,
        title: "Contact",
        link : [
            {link1: "246 Ikorodu Road, Onipan 42593"},
            {link1: "(234) 810-491-14501"},
            {link1: "info@hounter.com"},
        ]
    },
]
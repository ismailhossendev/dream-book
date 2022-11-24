//icons on stats
import clock from '../assets/Icons/clock.svg'
import location from '../assets/Icons/location.svg';
import phone from '../assets/Icons/phone.svg';

//icons on services
import truck from '../assets/Icons/truck.svg';
import privetCar from '../assets/Icons/privetCar.svg';
import motorcycle from '../assets/Icons/motorcycle.svg';

export const homeStats = [
    {
        _id: 1,
        title: "Opening Hours",
        description: "We are open 5 days a week Monday to Friday from 9am to 5pm",
        icon: clock,
        bgClass: 'bg-gradient-to-r from-fuchsia-600 to-pink-600',
        textClass: 'text-white'

    },
    {
        _id: 2,
        title: "Our Location",
        description: "39/5, 2nd Floor, 1st Main Road,Chwmatha,Barishal,Bangladesh",
        icon: location,
        bgClass: 'bg-gray-800',
        textClass: 'text-white'

    },
    {
        _id: 3,
        title: "Contact Us",
        description: "We are open 5 days a week Monday to Friday from 9am to 5pm",
        icon: phone,
        bgClass: 'bg-gradient-to-r from-pink-500 to-rose-500',
        textClass: 'text-white'

    }
]

export const ourService = [
    {
        _id: 1,
        icon: truck,
        title: 'Heavy Load Driving License',
        description: "Heavy Load Driving License is a license that allows you to drive a vehicle that weighs more than 3.5 tonnes. This includes lorries, buses, and coaches. You can also drive a vehicle that weighs less than 3.5 tonnes if it is towing a trailer that weighs more than 750kg.",
    },
    {
        _id: 2,
        icon: privetCar,
        title: 'Light Load Driving License',
        description: "Light Load Driving License is a license that allows you to drive a vehicle that weighs less than 3.5 tonnes. This includes cars, vans, and minibuses. You can also drive a vehicle that weighs more than 3.5 tonnes if it is towing a trailer that weighs less than 750kg.",
    },
    {
        _id: 3,
        icon: motorcycle,
        title: 'Motorcycle Driving License',
        description: "Motorcycle Driving License is a license that allows you to drive a motorcycle. You can also drive a moped or a motor tricycle if it is not more than 50cc.",
    }
]


// three testimonials data

export const testimonials = [
    {
        _id: 1,
        name: 'John Doe',
        location: 'Dhaka, Bangladesh',
        rating: 5,
        reviewText: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal to using Content here, content',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg&_gl=1*ugnyac*_ga*MTY4NjM0MzcxOC4xNjY3ODMxODYz*_ga_8JE65Q40S6*MTY2ODI1MzUzMC4zLjEuMTY2ODI1MzUzNi4wLjAuMA..'
    },
    {
        _id: 2,
        name: 'John Doe Pro',
        rating: 4,
        location: 'Dhaka, Bangladesh',
        reviewText: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal to using Content here, content',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg&_gl=1*ugnyac*_ga*MTY4NjM0MzcxOC4xNjY3ODMxODYz*_ga_8JE65Q40S6*MTY2ODI1MzUzMC4zLjEuMTY2ODI1MzUzNi4wLjAuMA..'
    },
    {
        _id: 3,
        name: 'John Doe Pro Max',
        rating: 5,
        location: 'Dhaka, Bangladesh',
        reviewText: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal to using Content here, content',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg&_gl=1*ugnyac*_ga*MTY4NjM0MzcxOC4xNjY3ODMxODYz*_ga_8JE65Q40S6*MTY2ODI1MzUzMC4zLjEuMTY2ODI1MzUzNi4wLjAuMA..'
    },
]
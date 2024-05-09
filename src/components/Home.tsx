import React, { useState } from 'react'
import { CarouselComponent } from './carousel';
import accolades from '../assets/accolades.jpg';
import lockerRoom from '../assets/lockerRoom.png';
import lockerRoomMobile from '../assets/lockerRoomMobile.png';
import WMF_Mobile from '../assets/WMF_Mobile.png'
import WMF from '../assets/WMF.png';
import offerStu from '../assets/offerStu.png';
import offerStuMobile from '../assets/offerStuMobile.png';
import offerWomen from '../assets/offerWomen.png';
import offerWomenMobile from '../assets/offerWomenMobile.png';
import { Motto } from './motto';
import useDeviceType from '../hooks/detectDevice';
import { Button, Card } from 'flowbite-react';
import CardWithHover from './CardWithHover';
import DFL from '../assets/DFL.png';
import DU from '../assets/DU.png';
import dynoFit from '../assets/dynoFit.png';
import DKO from '../assets/DKO.png';
import DSO from '../assets/DSO.png';
import DSO_Mobile from '../assets/DSO_Mobile.png';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

import { useMainComponent } from '../context/mainComponent.context';
import { MainComponentContextType } from '../constants/page-constants';
import { Testimonial } from './Testimonial';


export function Home() {
    const mainComponent = useMainComponent();
    const deviceType = useDeviceType();
    const [boxVisible, setBoxVisible] = useState(0);

    const images = [
        { src: WMF, alt: '...', link: 'https://lockerroom.in/blog/view/thiru-balachandiran-wmf-world-title' },
        { src: offerStu, alt: '...', link: 'https://lockerroom.in/blog/view/thiru-balachandiran-wmf-world-title' },
        { src: offerWomen, alt: '...', link: 'https://lockerroom.in/blog/view/thiru-balachandiran-wmf-world-title' },
        { src: lockerRoom, alt: '...', link: 'https://lockerroom.in/blog/view/thiru-balachandiran-wmf-world-title' },
        // { src: DSO, alt: '...', link: 'https://lockerroom.in/blog/view/thiru-balachandiran-wmf-world-title' },
    ];

    const mobileImages = [
        { src: WMF_Mobile, alt: '...', link: 'https://lockerroom.in/blog/view/thiru-balachandiran-wmf-world-title' },
        { src: offerStuMobile, alt: '...', link: 'https://lockerroom.in/blog/view/thiru-balachandiran-wmf-world-title' },
        { src: offerWomenMobile, alt: '...', link: 'https://lockerroom.in/blog/view/thiru-balachandiran-wmf-world-title' },
        { src: lockerRoomMobile, alt: '...', link: 'https://lockerroom.in/blog/view/thiru-balachandiran-wmf-world-title' },
        // { src: DSO_Mobile, alt: '...', link: 'https://lockerroom.in/blog/view/thiru-balachandiran-wmf-world-title' },

    ];
    const cardsData = [
        {
            imageUrl: 'aboutFive',
            title: 'DYNAMITE 101',
            description: 'This Package gives you the fitness that anyone in combat sports needs. Endurance & Agility are the most vital pillars for a fighter and we provide the best program to attain them.',
            pricing: [
                { duration: '3 months', price: 'RS.6000' },
                { duration: '6 months', price: 'RS.9000' },
                { duration: '12 months', price: 'RS.12000' }
            ]
        },
        {
            imageUrl: accolades,
            title: 'DYNAMITE KO',
            description: 'Boxing is one of the most elite forms of combat sports. We teach you every intricate aspect of it for you to excel. We conduct DYNAMITE KO boxing events to Punch and move your way to your boxing career.',
            pricing: [
                { duration: '3 months', price: 'RS.7000' },
                { duration: '6 months', price: 'RS.12000' },
                { duration: '12 months', price: 'RS.15000' }
            ]
        }, {
            imageUrl: accolades,
            title: 'SUPER DYNAMICS',
            description: 'We teach Kickboxing and Muay Thai which form the perfect structure for striking combat and self-defence. The className starts with fitness sessions followed by supplementary exercises. With sparring sessions held every week, you can track your progress.',
            pricing: [
                { duration: '3 months', price: 'RS.9000' },
                { duration: '6 months', price: 'RS.13000' },
                { duration: '12 months', price: 'RS.16000' }
            ]
        }, {
            imageUrl: accolades,
            title: 'HYPER DYNAMICS',
            description: 'The whole deal. In this className, you will learn the nook and corners of MMA. It starts with workout sessions followed by supplement workouts followed by training sessions.',
            pricing: [
                { duration: '3 months', price: 'RS.12000' },
                { duration: '6 months', price: 'RS.17000' },
                { duration: '12 months', price: 'RS.22000' }
            ]
        }, {
            imageUrl: accolades,
            title: 'PERSONAL TRAINING',
            description: 'This is a one-on-one package specially made for you. We give you the training that gives you the fitness that you ask for. Our package includes a diet plan along with a tailor-made workout schedule.',
            pricing: [
                { duration: '3 months', price: 'RS.2500' },
                { duration: '6 months', price: 'RS.35000' },
                { duration: '12 months', price: 'RS.45000' }
            ]
        },
    ];

    return (
        <div id='#home' className='w-full h-full relative bg-black flex flex-col items-center justify-center pb-4'>
            <div className=' relative flex flex-col items-center justify-center gap-4 pt-4'>
                <div className='w-[100vw] flex items-center justify-center'>
                    <Motto />
                </div>
                
                <div className='w-[100vw] h-[80vh] bg-transparent rounded-md'>
                    <CarouselComponent images={deviceType === 'Mobile' ? mobileImages : images} slideInterval={4000} className='h-[79vh] object-cover' />
                </div>
                <br></br>
                
                <div className=' font-black_ops_one text-[#f9d112] text-center text-4xl'>
                      PACKAGES
                    </div>
                    <br></br>
                <div className=" relative w-full">
                    <div className=" relative w-full grid md:grid-cols-5 md:grid-rows-1 grid-cols-1 grid-rows-5 md:gap-4 gap-1 px-2 md:h-64">
                        {cardsData.map((card, index) => (
                            <div key={index} className='relative w-full'>
                                <CardWithHover {...card} />
                            </div>
                        ))}
                    </div>
                </div>
                <div >
                    <br></br>
                    <Button className='text-center flex items-center text-white bg-red-700' size='xl' color={'black'} onClick={() => { mainComponent?.setMainComponent(MainComponentContextType.SCHEDULES) }}>
                        View Our Schedules
                    </Button>
                </div>
                {/* events */}
                <div className='mt-6'>

                    <div className=' font-black_ops_one text-[#f9d112] text-center text-4xl'>
                        EVENTS
                    </div>
                    <div className="grid md:grid-cols-4 md:grid-rows-1 grid-cols-1 grid-rows-4 gap-4 align-middle pl-3">
                        <div className='flex justify-center items-center'> <img className='ml-0 md:ml-0 max-h-52' src={dynoFit} alt='...' /></div>
                        <div className='flex justify-center items-center'> <img className='ml-0 md:ml-0 max-h-52' src={DU} alt='...' /></div>
                        <div className='flex justify-center items-center'> <img className='ml-0 md:ml-0 max-h-52' src={DKO} alt='...' /></div>
                        <div className='flex justify-center items-center'> <img className='ml-0 md:ml-0 max-h-52' src={DFL} alt='...' /></div>
                    </div>
                </div>
                <div className='mt-6 px-2'>
                    <div className=' font-black_ops_one text-[#f9d112] text-center text-4xl mb-4'>
                        BLOGS
                    </div>
                    <div className="flex gap-2 ">
                        <a href='https://lockerroom.in/blog/view/thiru-balachandiran-wmf-world-title' target='_blank' >
                            <Card className="max-w-sm bg-black" imgSrc={WMF} imgAlt='BLOGS'  >
                                <div className='flex flex-col gap-3 justify-center items-center'>
                                    <h5 className="text-md text-pretty line-clamp-3 text-center font-bold tracking-tight text-[#f9d112]  ">
                                        Indian Fighter<br />Thiru Balachandiran, Clinches WMF World Title Belt
                                    </h5>
                                    <button className='bg-[#f9d112] text-center w-1/2 rounded-md text-md p-2 font-semibold'>READ MORE...</button>
                                </div>
                            </Card>
                        </a>
                    </div>
                </div>
                <div className='mt-6 px-2'>
                    <div className="flex gap-2 ">
                        <Testimonial />
                        
                    </div>
                    
                </div>
                <div className='max-w-screen md:flex text-center justify-center items-center'>
    <h1 className='font-black_ops_one text-[#f9d112] text-3xl'> 
        <PhoneIcon sx={{ fontSize: 30, color: '#f9d112' }} />
        <a href="tel:9940064226" className='text-white text-2xl'>&nbsp;&nbsp;9940064226 </a>
    </h1>
    <p className='text-gray-500 text-3xl'>&nbsp;&nbsp; |</p> &nbsp;&nbsp;
    <h1 className='font-black_ops_one text-[#f9d112] text-3xl'>
        <EmailIcon sx={{ fontSize: 30, color: '#f9d112' }} />
        <a href='mailto:dynamics101mma@gmail.com' className='text-red-700 text-2xl'>&nbsp;&nbsp;dynamics101mma@gmail.com </a>
    </h1>
</div>
                <div>
                    <div className="flex flex-col justify-center sm:py-1">
                        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                            <div className="relative px-4 py-10 mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                                <div className="max-w-md mx-auto">
                                    <div className="flex items-center space-x-5">
                                        <div className="block pl-2 text-xl self-start text-gray-700">
                                            <h2 className="leading-relaxed text-[#f9d112] text-2xl font-black_ops_one">GET IN TOUCH</h2>
                                            <p className="text-sm text-red-700 font-normal leading-relaxed">Feel free to send us a message, will call you back.</p>
                                        </div>
                                    </div>
                                    <div className="divide-y divide-gray-200 ">
                                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 w-[30vw]">
                                            <div className="flex flex-col">
                                                {/* <label className="leading-loose">Name</label> */}
                                                <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Name" />
                                            </div>
                                            <div className="flex flex-col">
                                                {/* <label className="leading-loose">Event Subtitle</label> */}
                                                <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Email - ID" />
                                            </div>
                                            <div className="flex flex-col">
                                                {/* <label className="leading-loose">Event Subtitle</label> */}
                                                <input type="tel" maxLength={10}  className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Mobile Number" />
                                            </div>
                                            <div className="flex flex-col">
                                                {/* <label className="leading-loose">Event Description</label> */}
                                                <input type="text" size={20} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-md border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Query" />
                                            </div>
                                        </div>
                                        <div className="pt-4 flex items-center space-x-4">
                                            <button className="bg-red-700 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

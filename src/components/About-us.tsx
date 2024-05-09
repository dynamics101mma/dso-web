import React, { useState, useEffect } from 'react';
import aboutOne from '../assets/aboutOne.jpg';
import aboutTwo from '../assets/aboutTwo.jpg';
import aboutThreee from '../assets/aboutThreee.jpg';
import aboutFour from '../assets/aboutFour.jpg';
import aboutFive from '../assets/aboutFive.jpg';
import Gallery from './Gallery';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import Groups3Icon from '@mui/icons-material/Groups3';
import { Motto } from './motto';
import { useMainComponent } from '../context/mainComponent.context';
import { MainComponentContextType } from '../constants/page-constants';
import { Button } from 'flowbite-react';



const AboutUs = () => {
  const mainComponent = useMainComponent();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [aboutOne, aboutTwo, aboutThreee , aboutFour, aboutFive];
  const titles = ["BOXING", "MMA", "KICKBOXING", "MUAY THAI", "CALISTHENICS"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const [Members, setMembers] = useState(0);
  const [Medals, setMedals] = useState(0);
  const [Clubs, setClubs] = useState(0);
  
  useEffect(() => {
    const animateCounter = (targetValue: number, setStateFunction: React.Dispatch<React.SetStateAction<number>>) => {
      let currentValue = 0;
      const interval = setInterval(() => {
        currentValue += 1;
        setStateFunction(currentValue);
    
        if (currentValue === targetValue) {
          clearInterval(interval);
        }
      }, 10);
    };
    animateCounter(1000, setMembers);
    animateCounter(500, setMedals);
    animateCounter(3, setClubs);
   
  }, []);

  return (
   <div className="bg-black" style={{ padding: '10px' }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="mt-8">
      <div className="mb-4"> 
        <Motto />
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', letterSpacing: '1px', textAlign: 'center' }} className="p-4"> 
        <span className="font-black_ops_one self-center md:text-5xl text-xl whitespace-nowrap text-yellow-300">DYNAMICS 101 MMA:</span >          <span style={{ fontFamily: 'Black Ops One', color: '#B40101', fontSize: '2.5rem' }}>  Forging Champions in Chennai's Combat Sports Scene</span>
        </h1>

            <div className="md:w-1/2 mt-3 md:mt-0">
              <div className="relative w-full h-auto overflow-hidden flex justify-center items-center">
                <div className="relative">
                  <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} className="w-full max-h-96 object-cover transition-opacity duration-1000 ease-in-out" />
                  <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center text-3xl font-bold bg-opacity-50 backdrop-blur-md py-2 px-4 rounded-lg whitespace-nowrap" style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>{titles[currentImageIndex]}</h3>
                </div>
              </div>
            </div>
          </div>
    

     
          <div className="text-white text-center mt-4">
            <p>
              Established in 2019 by the formidable coach Nishanth, a former national MMA champion and revered gym trainer, <span className="font-black_ops_one self-center md:text-1xl text-xl whitespace-nowrap text-yellow-300">DYNAMICS 101 MMA</span > stands as one of the most dominating striking-based MMA clubs in India,
              renowned throughout the fight world of Chennai and beyond. Rooted in Nishanth's unwavering passion for martial arts and fitness,
              our club represents more than just a training facility—it's a crucible where warriors are forged and champions are born.
              With a diverse array of programs including Brazilian Jiu-Jitsu, Muay Thai, Boxing, Kickboxing, Wrestling, and Strength and Conditioning,
                DYNAMICS 101 MMA offers a comprehensive training experience for enthusiasts of all levels. Under the expert guidance of elite coaches handpicked by Nishanth himself,
              our members embark on a journey of self-discovery and mastery, pushing the boundaries of their physical and mental prowess.
              But DYNAMICS 101 MMA is more than just a training ground—it's a community united by a shared passion for combat sports.
              Here, camaraderie thrives, and bonds forged through sweat and determination transcend the confines of the gym. Our ethos of inclusivity welcomes warriors of all ages and backgrounds, fostering an environment where everyone can thrive and excel.        
               DYNAMICS 101 MMA has emerged as a powerhouse in the combat sports landscape, attracting a legion of dedicated individuals hungry for success.
              From local tournaments to national stages, our warriors fearlessly represent our club, fueled by the relentless pursuit of greatness that defines the club's legacy.
            </p>
          </div>
   

<div className="text-white text-center mt-8">
  <div className="pt-2 pb-2 " style={{display:'flex',justifyContent:'space-around'}} >
    <div>
      <PersonOutlineIcon style={{ fontSize: '80px', color: '#B40101' }} />
      <h3 className="text-center" style={{ fontWeight:'bold', color: '#FFD700' }}>{Members}+ <p style={{ fontSize:'15px', fontWeight:'none', color:'#fff' }}>Members</p></h3>
    </div>
    <div>
      <MilitaryTechIcon style={{ fontSize: '80px', color: '#B40101' }} />
      <h3 className="text-center" style={{ fontWeight:'bold', color: '#FFD700' }}>{Medals}+ <p style={{ fontSize:'15px', fontWeight:'none', color:'#fff' }}>Medals</p></h3> 
    </div>
    <div>
      <Groups3Icon style={{ fontSize: '80px', color: '#B40101' }} />
      <h3 className='text-center' style={{ fontWeight:'bold', color: '#FFD700' }}>{Clubs} <p style={{ fontSize:'15px', fontWeight:'none', color:'#fff' }}>Clubs</p></h3> 
    </div>
  </div>
  <h2 className="text-2xl font-bold" style={{ color: '#FFFF', marginTop: '20px', padding: '2px 4px' }}>
  Join us at <span className="font-black_ops_one self-center md:text-2xl text-xl whitespace-nowrap"><span className="text-yellow-300">DYNAMICS 101 MMA</span></span> , where the spirit of champions reigns supreme, and every punch thrown is a step closer to greatness. Check out our workout schedule and book a free trial class
</h2>

  <div className="flex flex-wrap justify-center mt-4 mb-4 gap-4">
  <Button className='text-center flex items-center text-white bg-[#f9d112]' size='xl' color={'black'} onClick={() => { mainComponent?.setMainComponent(MainComponentContextType.SCHEDULES) }} style={{ color: 'black' }}>
    View Our Schedule
</Button>
<Button className='text-center flex items-center text-white bg-[#f9d112]' size='xl' color={'black'} onClick={() => { mainComponent?.setMainComponent(MainComponentContextType.TEAMS) }} style={{ color: 'black' }}>
    Meet The Team
</Button>

</div>
<br></br>

          <Gallery />
          
   


          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

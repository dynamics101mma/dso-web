import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Facebook, Instagram } from '@mui/icons-material';
import Msaravanan_President from '../assets/Msaravanan_President.png';
import coach1 from '../assets/coach1.jpg'
import avdhanda_vp from '../assets/avDhanda_vp.png'
import saravananP_Dynamo from '../assets/saravananP_Dynamo.jpg'
import pnaveenKanth_JointSecr from '../assets/PnaveenKanth_JointSecr.png'
import rajesh_teamManager from '../assets/rajesh_teamManager.jpg'
import apSrini_legalAd from '../assets/apSrini_legalAd.jpg'
import vijayaSarathy_legal from '../assets/vijayaSarathy_legal.jpg'
import techHead from '../assets/techHead_Karthi.jpeg'
import assttech from '../assets/asst_techLead_avi.jpeg'
import aravind_secrertary from '../assets/aravind_secretary.jpg'
import ThiruFight from '../assets/ThiruFight.png'
import kanishka from '../assets/Kanishka.jpg'
import vicky from '../assets/vickyfight2.png'
import coach2 from '../assets/coach2.jpg'
import raghul from '../assets/raghulKutty.png'
import arun from '../assets/arund.png'
const Teams = () => {
  // Array of data for team members
  const teamMembers = [
    { name: 'Thiru Bala', role: '', imgSrc:ThiruFight},
    { name: 'Vignesh Thiruvasagam', role: '', imgSrc:vicky},
    { name: 'Kanishka', role: '', imgSrc:kanishka},  
      { name: 'Raghul', role: '', imgSrc:raghul },
    // { name: 'V.Iniyan', role: '' },
    // { name: 'V.JagaPriyan', role: '' },
  ];

  // Array of  data for coaches
  const coaches = [
    { name: 'Nishanth', role: 'Founder & CEO', imgSrc:coach1},
    { name: 'Aravindh', role: 'Secrertary', imgSrc:coach2},

  ];

  // Array of data for association members
  const associationMembers = [
    { name: 'M.Saravanan', role: 'President', imgSrc:Msaravanan_President},
    { name: 'A.V.Dhandapani', role: 'Vice President', imgSrc:avdhanda_vp  },
   { name: ' P Naveen Kanth', role: 'Joint Secretary', imgSrc:pnaveenKanth_JointSecr },
    { name: ' A P Srinivasan', role: 'Legal Advisor', imgSrc: apSrini_legalAd },
    { name: 'Vijaya Sarathi', role: 'Legal Advisor', imgSrc:vijayaSarathy_legal  },
    { name: 'Rajesh', role: 'Team Manager', imgSrc: rajesh_teamManager  },
    { name: 'P.Saravanan', role: 'Dynamite Manager', imgSrc:saravananP_Dynamo  }, 
    { name: 'Dr.Arun Dilip', role: 'Medical Advisor ', imgSrc:arun },   
   { name: 'Karthick Pugalenthi', role: 'Technical Head ', imgSrc:techHead },
    { name: 'Avinash Balajee ', role: ' Asst Technical Head ', imgSrc:assttech },

    
  ];

  return (
    <div className="min-h-screen bg-black p-4 flex flex-col justify-center items-center">
      <div className="text-yellow-300 text-3xl font-black mb-8">VISIONAIRES</div>
      <div className="flex flex-wrap justify-center">
<p className="text-white mt-4 mb-10"style={{ textAlign: "center" }}><b>Unlike other combat clubs</b> scattered across <b>Chennai</b> , each with branches aplenty manned by inexperienced coaches, <span className="font-black_ops_one self-center md:text-1xl text-xl whitespace-nowrap text-yellow-300">DYNAMICS 101 MMA</span > stands apart under the discerning leadership of Nishanth, our esteemed Head Coach. With meticulous care, Nishanth handpicks coaches, recognizing that their expertise not only upholds the club's prestigious reputation but also honors the brave endeavors of our fighters. Coaches are chosen very keenly as you cannot play the fight game unlike other sports. Here, coaching is not merely a task but a solemn duty entrusted with sculpting the raw potential of our athletes. It's a responsibility not taken lightly, for within these rings, the stakes are high, and the journey from novice to champion is no mere child's play.</p>


{coaches.map((coach, index) => (
  <div key={index} className="group relative w-52 h-52 bg-yellow-300 rounded-full overflow-hidden shadow-md m-2">
    <CardContent className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
      <Typography variant="h5" className="text-yellow-300 text-xl font-black">{coach.name}</Typography>
      <Typography variant="subtitle1" className="text-white">{coach.role}</Typography>
      <div className="flex justify-center mt-2">
        <Instagram className="text-white mr-2" />
      </div>
      
    </CardContent>

    <img src={coach.imgSrc} alt={coach.name} className="w-full h-full object-cover" />
  
          </div>
        ))}
      </div>
      <br></br>
      <div className="text-yellow-300 text-3xl font-black my-8">THEIR PRODIGIES</div>
      <div className="flex flex-wrap justify-center">
      <p className="text-white mt-4 mb-10"style={{ textAlign: "center" }}>At <span className="font-black_ops_one self-center md:text-1xl text-xl whitespace-nowrap text-yellow-300">DYNAMICS 101 MMA</span >, our combatants epitomize dedication, resilience, and the relentless pursuit of excellence. Each fighter embodies the spirit of a warrior, driven by a passion to conquer both their opponents and their own limitations in the intense realm of combat sports. Trained rigorously under the watchful guidance of our expert coaches, our combatants endure grueling sessions, honing their skills and fortifying their bodies and minds for the relentless challenges of combat. They understand that in the unforgiving arena of mixed martial arts, victory is not merely about physical prowess, but also about mental agility, strategic finesse, and unwavering determination. With every strike, every takedown, and every submission, our combatants demonstrate the epitome of discipline and courage, inspiring awe and admiration both inside and outside the combat arena. <b>They are not just athletes but warriors, destined to leave an indelible mark on the chronicles of combat sports.</b></p>

        {teamMembers.map((member, index) => (
          <div key={index} className="group relative w-52 h-52 bg-yellow-300 rounded-full overflow-hidden shadow-md m-2">
            <CardContent className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <Typography variant="h5" className="text-yellow-300 text-xl font-black">{member.name}</Typography>
              <Typography variant="subtitle1" className="text-white">{member.role}</Typography>
              <div className="flex justify-center mt-2">
                <Instagram className="text-white mr-2" />
              </div>
            </CardContent>

            <img src={member.imgSrc} alt={member.name} className="w-full h-full object-cover" />

          </div>
        ))}
      </div>
      <div className="text-yellow-300 text-3xl font-black my-8">ASSOCIATION</div>
      <div className="flex flex-wrap justify-center">
      <p className="text-white mt-4 mb-10"style={{ textAlign: "center" }}>Over time, comrades who initially entered Dynamics 101 as clients found themselves captivated by the sport, deeply respecting the relentless efforts invested by both coaches and fighters alike. Driven by a genuine passion to promote the sport and the exceptional talents emerging from within Dynamics 101, these individuals have become the backbone of our community. With their unwavering support, <span className="font-black_ops_one self-center md:text-1xl text-xl whitespace-nowrap text-yellow-300">DYNAMICS 101 MMA</span > has risen to become the foremost and most successful fighter-producing club in <b>North-West Chennai.</b> Dominating every other team in striking-based combat, our association members stand as pillars of strength, their dedication and advocacy ensuring that our fighters not only thrive but excel in the competitive arena. Together, we continue to elevate the standards of combat sports, forging a legacy that resonates far beyond the confines of our training grounds</p>

        {associationMembers.map((member, index) => (
          <div key={index} className="group relative w-52 h-52 bg-black rounded-full overflow-hidden shadow-md m-2">
            <img src={member.imgSrc} alt={member.name} className="w-full h-full object-cover" />
            <CardContent className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <Typography variant="h6" className="text-yellow-300 text-xl font-black">{member.name}</Typography>
              <Typography variant="h6" className="text-white" style={{marginLeft:'15px'}}>{member.role}</Typography>
            
            </CardContent>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;

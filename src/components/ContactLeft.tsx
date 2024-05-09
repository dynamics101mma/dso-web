import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import aboutThree from '../assets/aboutThree.jpg';
import aboutFour from '../assets/aboutFour.jpg';
import aboutFive from '../assets/aboutFive.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '85%',
    [theme.breakpoints.up('md')]: {
      width: '60%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '45%',
    },
    maxHeight: '80%',
    backgroundColor: '#333',
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
    justifyContent: 'center',
    margin: theme.spacing(4),
  },
  slideshowContainer: {
    maxWidth: '100%',
    overflow: 'hidden',
  },
  slideshow: {
    width: '100%', // Adjusted width
    height: '250px', // Adjusted height (half of the original)
    marginBottom: theme.spacing(2),
  },
  
  name: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#f59e0b',
  },
  role: {
    fontSize: '1rem',
    color: '#FFFFFF',
  },
  contactInfo: {
    fontSize: '0.875rem',
    color: '#9e9e9e',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  iconContainer: {
    display: 'flex',
    gap: theme.spacing(3),
  },
  icon: {
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.8,
    },
  },
}));

const ContactLeft = () => {
  const classes = useStyles();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [aboutThree, aboutFour, aboutFive]; // Use imported images directly

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={classes.root}>
      {/* Slideshow */}
      <div className={classes.slideshowContainer}>
        <img
          className={classes.slideshow}
          src={images[currentImageIndex]}
          alt="Slideshow"
        />
      </div>

      <div>
        <h3 className="font-blackOpsOne text-3xl text-yellow-300">DYNAMICS101 MMA</h3>
        <p className="font-blackOpsOne text-white">FITNESS AND FIGHT CLUB</p>

        <div className={classes.contactInfo} style={{ marginTop: '10px' }}>
          <PhoneIcon style={{ marginRight: '4px', fontWeight: 'bold', color: '#D80000' }} />
          <span style={{ color: 'white' }}>+91 9940064226</span>
        </div>
        <div className={classes.contactInfo}>
          <EmailIcon style={{ marginRight: '4px', fontWeight: 'bold', color: '#D80000' }} />
          <span style={{ color: 'white' }}>dynamics101mma@gmail.com</span>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16233.751595169739!2d80.18174400280769!3d13.075502469172285!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261498c3000a5%3A0x126f48365c413dc0!2sDynamics%20101%20MMA!5e0!3m2!1sen!2sin!4v1712744068900!5m2!1sen!2sin"
          style={{ marginTop: '20px', width: '100%', height: '200px' }}
        ></iframe>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4" style={{ color: '#FFFFFF' }}>Follow Us</h2>
        <div className={classes.iconContainer}>
          <InstagramIcon className={classes.icon + ' text-red-600'} onClick={() => window.open('https://www.instagram.com/dynamics101mma/', '_blank')} />
          <YouTubeIcon className={classes.icon + ' text-red-600'} onClick={() => window.open('https://www.youtube.com/results?search_query=dynamics+101', '_blank')} />
          <WhatsAppIcon className={classes.icon + ' text-red-600'} onClick={() => window.open('https://wa.me/919940064226', '_blank')} />
          <LinkedInIcon className={classes.icon + ' text-red-600'} onClick={() => window.open('https://www.linkedin.com/company/dynamics101mma/', '_blank')} />
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;

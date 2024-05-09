import React from 'react'
import TopNavbar from '../components/top-navbar';
import  {Home}  from '../components/Home';
import { MainComponentContextType } from '../constants/page-constants';
import { useMainComponent } from '../context/mainComponent.context';
import { Clubs } from '../components/Clubs';
import AboutUs from '../components/About-us';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Schedules } from '../components/Schedules';
import  Teams  from '../components/Teams';



export default function Dashboard() {
  const component = useMainComponent()
  const renderComponent = () => {
    switch (component?.mainComponent) {
      case MainComponentContextType.ABOUTUS:
        return <div><AboutUs /></div>
      case MainComponentContextType.CONTACT:
        return <div><Contact /></div>
      case MainComponentContextType.CLUBS:
        return <div><Clubs /></div>
      case MainComponentContextType.SCHEDULES:
        return <div><Schedules /></div>
      case MainComponentContextType.TEAMS:
        return <div><Teams /></div>
      default:
        return <div><Home /></div>
    }
  }

  return (
    <>
      <div className="bg-[#21201e] flex flex-col justify-between">
        <div className='z-40 top-0 sticky'>
          <TopNavbar />
        </div>
        {renderComponent()}
        <Footer />

      </div>
    </>
  )
}

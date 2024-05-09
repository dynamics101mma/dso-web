import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNavbar from './components/top-navbar';
import Dashboard from './module/Dashboard';
import { MainComponentContextProvider } from './context/mainComponent.context';
import Footer from './components/Footer';

export default function App() {

  return (
    <MainComponentContextProvider>
      <div className=''>
        <Dashboard />
        <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10 ">
                            <div>
                                    {/* <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" /> */}
                            
                            </div>
                        </div>

      </div>
    </MainComponentContextProvider>
  )
}

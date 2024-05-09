import { useEffect, useState } from 'react';

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<string>('');

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if (
      userAgent.match(/Android/i) ||
      userAgent.match(/webOS/i) ||
      userAgent.match(/iPhone/i) ||
      userAgent.match(/iPad/i) ||
      userAgent.match(/iPod/i) ||
      userAgent.match(/BlackBerry/i) ||
      userAgent.match(/Windows Phone/i)
    ) {
      setDeviceType('Mobile');
    } else if (
      userAgent.match(/iPad/i) ||
      userAgent.match(/Tablet/i) ||
      userAgent.match(/Nexus 10/i) ||
      userAgent.match(/KFAPWI/i)
    ) {
      setDeviceType('Tablet');
    } else {
      setDeviceType('Desktop/Laptop');
    }
  }, []);

  return deviceType;
};

export default useDeviceType;

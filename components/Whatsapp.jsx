'use client'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React from 'react';


const WhatsAppButton = () => {
  const router=useRouter()
  
    const openWhatsApp = () => {
      Cookies.remove('clientCode')
    router.replace('/login')
      const phoneNumber = '+919700038568'; // Replace with the desired phone number
      const whatsappUrl = `https://wa.me/${phoneNumber}`;
  
      window.open(whatsappUrl, '_blank');
    };
  
    return (
      <button className='text-white border-2 px-6 py-3 mt-8 border-white rounded-full ' onClick={openWhatsApp}>Click here.</button>
    );
  };
  
  export default WhatsAppButton;
  
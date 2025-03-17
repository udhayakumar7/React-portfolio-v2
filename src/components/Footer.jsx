import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='section-gap  bg-black '>
        <div className="container container-padding mx-auto footer-section">
            <div className='grid grid-cols-12'>
                <div className="col-start-2 col-end-12">
                <h1>Let’s work together</h1>
                </div>
                
            </div>
            <div className='grid grid-cols-12'>
                <div className="col-start-2 col-end-12">
                <div className='connections md:flex  flex-col md:flex-row items-center justify-center mt-12 gap-12'>
                    <p><Link to={'/'}>kumardev@gmail.com</Link></p>
                    <p className='mt-5 md:mt-0'><Link to={'/'}>+91 63796 22144</Link></p>
                </div>
                </div>
                
            </div>

            <div className='grid grid-cols-12 mt-20 add-styles-tab '>
                <div className='md:col-span-2 col-span-6 col-expand-6'>
                    <h6 className='text-[#dbdbdb] mb-3 font-medium'>VERSION</h6>
                    <p className=' text-white font-medium'>&copy;2024 Editon</p>
                </div>
                <div className='md:col-span-2 col-span-6 text-right md:text-left col-expand-6 tex-tab-right'>
                    <h6 className='text-[#dbdbdb] mb-3 font-medium'>LOCAL TIME</h6>
                    <p className=' text-white font-medium'>2:57 AM</p>
                </div>
                <div className='md:col-start-10 col-span-12 mt-5 col-expand-12'>
                    <h6 className='text-[#dbdbdb] mb-3 font-medium'>SOCIALS</h6>
                    <Link className='text-white md:mr-15 mr-3  font-medium'  to={'/'}>LinkedIn</Link>
                    <Link className='text-white md:mr-15 mr-3   font-medium' to={'/'}>Instagram</Link>
                    <Link className='text-white md:mr-15 mr-3  font-medium' to={'/'}>Whatsapp</Link>
                </div>

            </div>

           
            
        </div>
      
    </div>
  )
}

export default Footer

import { printById } from '@/utils/PrintById';
import Head from 'next/head';
import { useState } from 'react';

const PrintScreen = () => {
    const [show, setShow] = useState(true)
    const handlePrint = () => {
      printById()
    };
    
const toggleShow = () =>{
    setShow(!show)
}

  return (
    <div className=' w-screen'>
      <Head>
        <title>About Us</title>
      </Head>
      <div className=' flex flex-col items-center justify-center mx-auto w-[80%] mt-5 gap-5 rounded-md bg-gray-100 p-4'>
        <div>
          <button className=' p-2 bg-blue-600 text-white  rounded-md hover:bg-blue-400' onClick={handlePrint}>
            Print Selected Section
          </button>
        </div>
        <div className='w-full'  style={{
          backgroundImage: "url('/images/img6.jpg')", backgroundSize: 'cover',
          backgroundPosition: 'center', height: "25vh"
        }}>
          <div className='w-100 h-100 d-flex align-items-center container ' style={{ maxWidth: '1400px' }}   >
            <h1 className=" text-white ">About Us
            </h1>
          </div>
        </div>
        <div className='bg-light p-sm-5 p-2  font-semibold text-color' id='1'>
          <div className='container ' >
            <div className='row py-md-5'>
              <div className='col-md-7 col-12 px-md-5'>
              <button className=' bg-yellow-500 text-white rounded-md p-2 ' onClick={toggleShow}>button</button>
              {
                show && <p>Button testing</p>
              }
                <h2 className='text-slate-700 '>Property Trade Fair</h2>
                <p className='my-4'>
                  Property Trade Fair is all about making it super easy for people to buy, sell, or rent properties without any stress. We started in 2023 with the goal of creating a place where you can do property deals smoothly and securely, without worrying about your privacy.
                </p>
                <p>
                  We want to make property deals less scary and more simple for everyone. We&apos;re using cool technology and designing everything with you in mind to become the best place for anything to do with properties. We want to make sure every deal is trustworthy and quick.
                </p>
                <div className='row  rounded p-2'  >
                  <div className='col-12 '>
                    <h2 className='text-slate-700 '>Our Vision</h2>
                    <p className='my-4'>
                      We imagine a future where property transactions are smooth and accessible to anyone, anywhere. Through smart technology and user-friendly design, we aim to be the top choice for all property needs, building trust and efficiency into every deal.
                    </p>
                  </div>
                  <div className='col-12 '>
                    <h2 className='text-slate-700 '>Our Mission</h2>
                    <p className='my-4'>
                      Our mission at Property Trade Fare is to make buying, selling, or renting properties easy, safe, and stress-free for everyone. We&apos;re dedicated to providing a platform where users can do property deals with confidence while keeping their data private and secure.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-5 px-md-3 col-12'>
                <div style={{ width: "100%", height: "200px" }}>
                  <img src="/images/ads image.png" alt="..." style={{ width: "100%", height: "100%", objectFit: "cover" }} className="card-img-top object-cover rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-teal-300  font-semibold text-gray-500' >
          <div className='container mt-3'>
            <h2 className='text-center pt-4 text-slate-700 '> What We Offer: </h2>
            <p className='text-center m-0 mb-5' >
              We give you lots of helpful services for property owners, buyers, and renters:
            </p>
            <div className='row px-md-5 mx-auto '>
              <div className='col-12 col-md-6 p-md-3   hover:shadow-2xl hover:cursor-pointer'>
                <div className="card mb-3 border-0" >
                  <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center  justify-center">
                      <i className="bi bi-megaphone fs-1 text-danger"></i>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Presenting your property</h5>
                        <p className="card-text">
                          You can Present your property with great pictures, detailed descriptions, and virtual tours to attract buyers or renters.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-6 p-md-3   hover:shadow-2xl hover:cursor-pointer'>
                <div className="card mb-3 border-0" >
                  <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center  justify-center">
                      <i className="bi bi-houses fs-1 text-danger"></i>
                    </div>
                    
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Renting or Selling </h5>
                        <p className="card-text">
                          Whether you&apos;re renting out or selling your place, our platform helps you list your property, connect with interested folks, and make deals easily.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-6 p-md-3  hover:shadow-2xl hover:cursor-pointer'>
                <div className="card mb-3 border-0" >
                  <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center  justify-center">
                      <i className="bi bi-card-list fs-1 text-danger"></i>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Property Listing</h5>
                        <p className="card-text"> You can browse through all sorts of properties on our platform, filtering by location, price, size, and more to find what fits your needs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-6 p-md-3  hover:shadow-2xl hover:cursor-pointer '>
                <div className="card mb-3 border-0" >
                  <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center  justify-center ">
                      <i className="bi  bi-cart-check fs-1 text-danger "></i>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Buying a Property </h5>
                        <p className="card-text"> Explore different kinds of properties available for purchase, like homes, offices, or land, and know that the process will be safe and clear.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintScreen;

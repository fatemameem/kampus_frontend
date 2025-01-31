import Newsletter from '@/components/common/newsletter';
import Image from 'next/image';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <>
      <section className="banner bg-customKhaki border-b-4 border-customGreen">
        <div className="container mx-auto w-full">
          <h1 className="text-7xl font-semibold text-left w-full py-24">About Us</h1>
        </div>
      </section>
      <section className="history">
        <div className="established container mx-auto w-full py-8">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-customGreen text-4xl font-semibold">Established</p>
              <p className='py-8 text-xl font-light text-customGray'>The Bangladeshi Graduate Student Association at Concordia University (BDGSA) was established in 2016 to represent and support Bangladeshi graduate students within the university community.</p>
            </div>
            <p className="text-customGreen text-4xl font-semibold w-1/3 text-right">2016</p>
          </div>
        </div>
        <div className="timeline">
          <div className="established container mx-auto w-full py-8">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-customGreen text-4xl font-semibold">History of BDGSA</p>
                <div className="grid grid-cols-2 gap-16 justify-items-start items-center mt-8">
                  <Image src="/images/logo.png" alt="" width={648} height={662} />
                  <p className='bg-customKhaki flex justify-center items-center h-full px-12 py-8 text-xl font-light text-customGray'>The Bangladeshi Graduate Student Association at Concordia University (BDGSA) was established in 2016 to represent and support Bangladeshi graduate students within the university community.</p>
                </div>
              </div>
              <p className="text-customGreen text-4xl font-semibold w-full text-right">2016 - 2018</p>
            </div>
          </div>
        </div>
      </section>
      <section className="growth-and-development">
        <div className="established container mx-auto w-full py-8">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-customGreen text-4xl font-semibold">Growth and Development</p>
              <p className='py-8 text-xl font-light text-customGray'>The Bangladeshi Graduate Student Association at Concordia University (BDGSA) was established in 2016 to represent and support Bangladeshi graduate students within the university community.</p>
              <Image className='py-12' src="/images/about-us-img1.jpeg" alt="" width={1341} height={580} />
            </div>
            <p className="text-customGreen text-4xl font-semibold w-1/3 text-right">2019 - Now</p>
          </div>
        </div>
      </section>
      <section className="our-mission">
        <div className="established container mx-auto py-8">
          <p className="text-customGreen text-4xl font-semibold pb-16">Our Mission</p>
          <div className="flex justify-between items-start w-3/4 gap-16">
            <p className=' text-sm font-light text-customGray'>
              BDGSA is dedicated to fostering a vibrant community for Bangladeshi graduate students at Concordia University by:
              <ul className='list-disc pl-8'>
                <li className='py-2'>Promoting Academic Excellence: Supporting members&apos; academic pursuits and providing resources for success.</li>
                <li className='py-2'>Fostering Cultural Exchange: Celebrating Bangladeshi heritage and culture while encouraging intercultural understanding.</li>
                <li className='py-2'>Advocating for Student Rights: Representing the interests of Bangladeshi graduate students and advocating for their rights within the university community.</li>
                <li className='py-2'>Building Community: Creating opportunities for social interaction, networking, and personal development.</li>
              </ul>
            </p>
            <Image className='justify-self-end w-1/2 rounded-lg' src="/images/about-us-img2.jpeg" alt="" width={625} height={495} />
          </div>
        </div>
      </section>
      <section className="our-vision">
        <div className="established container mx-auto py-8">
          <div className="flex justify-between items-start w-3/4 gap-2">
            <Image className='justify-self-end w-2/3 rounded-lg' src="/images/about-us-img3.jpeg" alt="" width={925} height={400} />
            <p className="text-customGreen text-4xl font-semibold">Our Vision</p>
          </div>
        </div>
      </section>
      <section className="what-we-do">
        <div className="container mx-auto my-48">
          <h1 className="text-black text-4xl font-semibold capitalize">what we do?!</h1>
          <div className="px-12 grid grid-cols-2 gap-16 justify-items-stretch items-center mt-8">
            <div className="item flex flex-col items-start justify-start w-2/3 gap-2">
              <Image src="/icons/web.svg" alt="" width={30} height={30} />
              <p className="text-black text-lg font-normal capitalize">Networking</p>
              <p className="text-customGray text-sm font-light">Fun and engaging social gatherings, recreational events, and support sessions to enhance the overall student experience at Concordia.</p>
            </div>
            <div className="item flex flex-col items-start justify-start w-2/3 gap-2">
              <Image src="/icons/lock_icon.svg" alt="" width={30} height={30} />
              <p className="text-black text-lg font-normal capitalize">Student Life Activities</p>
              <p className="text-customGray text-sm font-light">Fostering connections among Bangladeshi and international students, these events encourage collaboration, professional growth, and lasting friendships.</p>
            </div>
            <div className="item flex flex-col items-start justify-start w-2/3 gap-2">
              <Image src="/icons/avatar_icon.svg" alt="" width={30} height={30} />
              <p className="text-black text-lg font-normal capitalize">Educational Activities</p>
              <p className="text-customGray text-sm font-light">Fostering connections among Bangladeshi and international students, these events encourage collaboration, professional growth, and lasting friendships.</p>
            </div>
            <div className="item flex flex-col items-start justify-start w-2/3 gap-2">
              <Image src="/icons/calendar_icon.svg" alt="" width={30} height={30} />
              <p className="text-black text-lg font-normal capitalize">Promote Bangladeshi Culture</p>
              <p className="text-customGray text-sm font-light">Showcasing the rich heritage of Bangladesh through traditional celebrations, music, dance, and cuisine, promoting intercultural understanding.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="newsletter-signup">
        <Newsletter/>
      </section>
    </>
  );
};

export default AboutPage;
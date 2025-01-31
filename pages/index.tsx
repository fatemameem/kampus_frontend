import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Link from 'next/link';
import Image from 'next/image';
import Newsletter from '@/components/common/newsletter';

export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <>
      {!session ? (
        // Landing Page for unauthenticated users
        <>
          <section className="banner bg-customKhaki relative lg:pb-16">
            <div className="ps-8 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between relative">
              {/* Left Content */}
              <div className="flex flex-col items-start justify-center lg:w-1/2 px-4 z-10 relative ">
                <h1 className="text-4xl lg:text-6xl pt-4 font-bold text-customGreen mb-6 leading-tight">
                  Bangladeshi Graduate Students<span className="italic">&apos;</span> Association (BDGSA)
                </h1>
                <Link
                  key="about"
                  href="/about"
                  className="bg-customGreen text-white px-6 py-3 text-lg rounded-full shadow-md hover:bg-customKhakiDark"
                >
                  Learn More
                </Link>
              </div>

              {/* Right Content */}
              <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-end self-end relative">
                <div className="relative">
                  <Image
                    src="/images/banner.png"
                    alt="BDGSA"
                    width={600}
                    height={600}
                    className=""
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="our-story py-6 md:py-12 lg:py-24">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Image Section */}
              <div className="col-span-5 justify-items-center">
                <Image
                  src="/images/homepage-img1.jpeg"
                  alt="BDGSA Image"
                  width={704}
                  height={704}
                  className="rounded-lg shadow-md"
                />
              </div>

              {/* Rotated Text Section */}
              <div className="col-span-2 hidden lg:flex items-center justify-center ">
                <p style={{fontSize:'78px'}} className="-rotate-90 text-gray-400 font-light  tracking-wide whitespace-nowrap">
                  About Us
                </p>
              </div>

              {/* Content Section */}
              <div className="col-span-5">
                <h1 className="font-bold text-xl text-center lg:text-left md:text-2xl lg:text-4xl mb-6">Our Story</h1>
                <p className="text-sm md:text-base lg:text-lg text-center lg:text-left leading-relaxed text-customGray">
                  The Bangladeshi Graduate Student Association (BDGSA) at Concordia
                  University was re-founded in 2016 with a vision to create a supportive
                  and vibrant community for Bangladeshi graduate students. As an
                  association under the Graduate Student Association (GSA) at Concordia,
                  BDGSA aims to represent the interests of Bangladeshi students while
                  fostering cultural exchange and academic excellence.
                <br/><br/>
                  What began as a small group of passionate students has grown into a
                  thriving network dedicated to networking, educational enrichment, and
                  celebrating Bangladeshi heritage. We take pride in organizing events
                  that promote student life, professional growth, and intercultural
                  understanding. From workshops and social gatherings to cultural
                  festivities, BDGSA is a platform for building connections and lifelong
                  memories.
                <br/><br/>
                  Our story is one of resilience, unity, and shared ambition. Together, we
                  continue to support each other, embrace diversity, and contribute to the
                  vibrant tapestry of Concordia&apos;s graduate student community.
                </p>
              </div>
            </div>
          </section>
          <section className="our-work ">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
              <h1 className="text-2xl md:text-4xl lg:text-6xl w-full font-bold text-center mb-4 md:mb-8 lg:mb-16 lg:mr-64">What we do</h1>
              <p className="text-customGray text-center lg:text-left text-sm md:text-base lg:text-2xl mb-4 md:mb-8 lg:mb-16">
                We connect Bangladeshi graduate students through networking, educational workshops, cultural celebrations, and social events, fostering community, promoting academic excellence, and celebrating our rich heritage at Concordia University.
              </p>
            </div>
          </section>
          <section className="join-community">
            <div className="flex flex-col lg:flex-row justify-between items-start relative">
              <div className="bg-customKhakiDark flex flex-col items-center text-center w-full lg:w-1/2 p-5 md:p-10 lg:p-20 lg:relative">
                <p className="text-2xl md:text-4xl lg:text-6xl font-semibold text-white p-7 capitalize">join our <br/>community now</p>
                <div className="flex justify-center items-center w-1/2 p-2 md:p-4 lg:p-8 bg-customKhaki">
                  <Link href="https://chat.whatsapp.com/JGEOkOlVK85CbMLP74BAM9">
                  <Image src="/icons/qr_code.png" alt="QR Code" width={400} height={400} />
                  </Link>
                </div>
              </div>
              <div className="centered grid grid-cols-2 gap-4 items-center w-full lg:w-1/2 text-center">
                {/* Activity 1 */}
                <div className="flex flex-col items-center p-5 md:p-10">
                  <div className="text-lg md:text-4xl text-customGreen mb-2">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 1.90909C11.3224 1.90909 5.90909 7.32239 5.90909 14C5.90909 20.6776 11.3224 26.0909 18 26.0909C24.6777 26.0909 30.091 20.6776 30.091 14C30.091 7.32239 24.6777 1.90909 18 1.90909ZM4 14C4 6.26802 10.268 0 18 0C25.7319 0 32.0001 6.26802 32.0001 14C32.0001 21.732 25.7319 28 18 28C10.268 28 4 21.732 4 14Z" fill="#454545"/><path fill-rule="evenodd" clip-rule="evenodd" d="M30.727 14.8483H5.27246V13.1514H30.727V14.8483Z" fill="#454545"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.1514 26.7269V1.27231H18.8484V26.7269H17.1514ZM24.0986 13.9996C24.0986 9.39071 22.4412 4.83124 19.1919 1.81653L20.2018 0.728027C23.8114 4.07694 25.5835 9.06296 25.5835 13.9996C25.5835 18.9362 23.8114 23.9222 20.2018 27.2712L19.1919 26.1826C22.4412 23.1679 24.0986 18.6084 24.0986 13.9996ZM10.5752 13.9996C10.5752 9.07013 12.2895 4.0867 15.7891 0.736046L16.816 1.80857C13.669 4.82159 12.06 9.38361 12.06 13.9996C12.0601 18.6156 13.6691 23.1777 16.816 26.1907L15.7891 27.2631C12.2895 23.9125 10.5752 18.9291 10.5752 13.9996Z" fill="#454545"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18 6.48608C22.6016 6.48608 27.2811 7.33699 30.4529 9.1089C30.811 9.30887 30.9391 9.76116 30.7391 10.1191C30.5392 10.4771 30.0868 10.6052 29.7289 10.4052C26.8655 8.80572 22.4716 7.97094 18 7.97094C13.5284 7.97094 9.13452 8.80572 6.27113 10.4052C5.91315 10.6052 5.46087 10.4771 5.2609 10.1191C5.06095 9.76116 5.18903 9.30887 5.54701 9.1089C8.71905 7.33699 13.3984 6.48608 18 6.48608ZM18 21.1055C22.6016 21.1055 27.2811 20.2544 30.4529 18.4826C30.811 18.2827 30.9391 17.8303 30.7391 17.4724C30.5392 17.1144 30.0868 16.9863 29.7289 17.1863C26.8655 18.7858 22.4716 19.6206 18 19.6206C13.5284 19.6206 9.13452 18.7858 6.27113 17.1863C5.91315 16.9863 5.46087 17.1144 5.2609 17.4724C5.06095 17.8303 5.18903 18.2827 5.54701 18.4826C8.71905 20.2544 13.3984 21.1055 18 21.1055Z" fill="#454545"/>
                    </svg>
                  </div>
                  <p className="font-medium text-xs md:text-base text-customGray">Networking</p>
                </div>
                {/* Activity 2 */}
                <div className="flex flex-col items-center p-2 md:p-10">
                  <div className="text-lg md:text-4xl text-customGreen mb-2">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.7659C0 7.05865 7.16346 0 16 0C24.8366 0 32 7.05865 32 15.7659C32 24.4732 24.8366 31.5318 16 31.5318C7.16346 31.5318 0 24.4732 0 15.7659ZM16 2.35023C8.48073 2.35023 2.38513 8.35665 2.38513 15.7659C2.38513 19.1936 3.6897 22.3211 5.83632 24.6924C8.10082 21.5741 11.809 19.5389 16.0009 19.5389C20.1924 19.5389 23.9001 21.5736 26.1647 24.6914C28.3108 22.3201 29.6149 19.1931 29.6149 15.7659C29.6149 8.35665 23.5192 2.35023 16 2.35023ZM24.4075 26.3188C22.5938 23.6459 19.5048 21.8892 16.0009 21.8892C12.4966 21.8892 9.40744 23.6464 7.59369 26.3197C9.90845 28.1123 12.8275 29.1816 16 29.1816C19.1731 29.1816 22.0926 28.1121 24.4075 26.3188ZM10.1003 13.3044C10.1003 10.0935 12.7418 7.49065 16.0003 7.49065C19.2588 7.49065 21.9004 10.0935 21.9004 13.3044C21.9004 16.5152 19.2588 19.1181 16.0003 19.1181C12.7418 19.1181 10.1003 16.5152 10.1003 13.3044ZM16.0003 9.84088C14.0591 9.84088 12.4854 11.3915 12.4854 13.3044C12.4854 15.2172 14.0591 16.7679 16.0003 16.7679C17.9416 16.7679 19.5153 15.2172 19.5153 13.3044C19.5153 11.3915 17.9416 9.84088 16.0003 9.84088Z" fill="#454545"/></svg>
                  </div>
                  <p className="font-medium text-xs md:text-base text-customGray">Educational Activities</p>
                </div>
                {/* Activity 3 */}
                <div className="flex flex-col items-center p-5 md:p-10">
                  <div className="text-lg md:text-4xl text-customGreen mb-2">
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.72727 9.83803C8.72727 7.71754 9.43183 6.13169 10.5985 5.08602C11.7508 4.05321 13.5151 3.40243 16.0041 3.40243C18.4944 3.40243 20.2562 4.05192 21.4058 5.08241C22.5698 6.12585 23.2727 7.70972 23.2727 9.83135V13.1409H8.72727V9.83803ZM5.81818 13.1409V9.83803C5.81818 7.28451 6.67168 5.0472 8.46688 3.4382C10.2764 1.81634 12.8778 0.980957 16.0041 0.980957C19.1297 0.980957 21.7295 1.81401 23.5375 3.43469C25.3312 5.04243 26.1818 7.2784 26.1818 9.83135V13.1409H29.0909C30.6976 13.1409 32 14.225 32 15.5624V30.0913C32 31.4287 30.6976 32.5128 29.0909 32.5128H2.90909C1.30246 32.5128 0 31.4287 0 30.0913V15.5624C0 14.225 1.30246 13.1409 2.90909 13.1409H5.81818ZM2.90909 15.5624H29.0909V30.0913H2.90909V15.5624Z" fill="#454545"/></svg>
                  </div>
                  <p className="font-medium text-xs md:text-base text-customGray">Student Life Activities</p>
                </div>
                {/* Activity 4 */}
                <div className="flex flex-col items-center p-5 md:p-10">
                  <div className="text-lg md:text-4xl text-customGreen mb-2">
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.61539 0.980957C9.29511 0.980957 9.84615 1.52393 9.84615 2.19372V3.40648H22.1538V2.19372C22.1538 1.52393 22.705 0.980957 23.3846 0.980957C24.0642 0.980957 24.6154 1.52393 24.6154 2.19372V3.40648H28.3077C30.3468 3.40648 32 5.03539 32 7.04477V28.8745C32 30.8838 30.3468 32.5128 28.3077 32.5128H3.69231C1.6531 32.5128 0 30.8838 0 28.8745V7.04477C0 5.03539 1.6531 3.40648 3.69231 3.40648H7.38462V2.19372C7.38462 1.52393 7.93566 0.980957 8.61539 0.980957ZM22.1538 5.832V7.04477C22.1538 7.71455 22.705 8.25753 23.3846 8.25753C24.0642 8.25753 24.6154 7.71455 24.6154 7.04477V5.832H28.3077C28.9873 5.832 29.5385 6.37498 29.5385 7.04477V10.6831H2.46154V7.04477C2.46154 6.37498 3.01258 5.832 3.69231 5.832H7.38462V7.04477C7.38462 7.71455 7.93566 8.25753 8.61539 8.25753C9.29511 8.25753 9.84615 7.71455 9.84615 7.04477V5.832H22.1538ZM2.46154 13.1086V28.8745C2.46154 29.5442 3.01258 30.0872 3.69231 30.0872H28.3077C28.9873 30.0872 29.5385 29.5442 29.5385 28.8745V13.1086H2.46154ZM14.7692 16.7469C14.7692 16.0771 15.3203 15.5341 16 15.5341C16.6797 15.5341 17.2308 16.0771 17.2308 16.7469C17.2308 17.4166 16.6797 17.9596 16 17.9596C15.3203 17.9596 14.7692 17.4166 14.7692 16.7469ZM20.9231 15.5341C20.2433 15.5341 19.6923 16.0771 19.6923 16.7469C19.6923 17.4166 20.2433 17.9596 20.9231 17.9596C21.6028 17.9596 22.1538 17.4166 22.1538 16.7469C22.1538 16.0771 21.6028 15.5341 20.9231 15.5341ZM24.6154 16.7469C24.6154 16.0771 25.1665 15.5341 25.8462 15.5341C26.5258 15.5341 27.0769 16.0771 27.0769 16.7469C27.0769 17.4166 26.5258 17.9596 25.8462 17.9596C25.1665 17.9596 24.6154 17.4166 24.6154 16.7469ZM25.8462 20.3851C25.1665 20.3851 24.6154 20.9281 24.6154 21.5979C24.6154 22.2677 25.1665 22.8107 25.8462 22.8107C26.5258 22.8107 27.0769 22.2677 27.0769 21.5979C27.0769 20.9281 26.5258 20.3851 25.8462 20.3851ZM19.6923 21.5979C19.6923 20.9281 20.2433 20.3851 20.9231 20.3851C21.6028 20.3851 22.1538 20.9281 22.1538 21.5979C22.1538 22.2677 21.6028 22.8107 20.9231 22.8107C20.2433 22.8107 19.6923 22.2677 19.6923 21.5979ZM16 20.3851C15.3203 20.3851 14.7692 20.9281 14.7692 21.5979C14.7692 22.2677 15.3203 22.8107 16 22.8107C16.6797 22.8107 17.2308 22.2677 17.2308 21.5979C17.2308 20.9281 16.6797 20.3851 16 20.3851ZM9.84615 21.5979C9.84615 20.9281 10.3972 20.3851 11.0769 20.3851C11.7567 20.3851 12.3077 20.9281 12.3077 21.5979C12.3077 22.2677 11.7567 22.8107 11.0769 22.8107C10.3972 22.8107 9.84615 22.2677 9.84615 21.5979ZM6.15385 20.3851C5.47412 20.3851 4.92308 20.9281 4.92308 21.5979C4.92308 22.2677 5.47412 22.8107 6.15385 22.8107C6.83358 22.8107 7.38462 22.2677 7.38462 21.5979C7.38462 20.9281 6.83358 20.3851 6.15385 20.3851ZM4.92308 26.449C4.92308 25.7793 5.47412 25.2362 6.15385 25.2362C6.83358 25.2362 7.38462 25.7793 7.38462 26.449C7.38462 27.1186 6.83358 27.6617 6.15385 27.6617C5.47412 27.6617 4.92308 27.1186 4.92308 26.449ZM11.0769 25.2362C10.3972 25.2362 9.84615 25.7793 9.84615 26.449C9.84615 27.1186 10.3972 27.6617 11.0769 27.6617C11.7567 27.6617 12.3077 27.1186 12.3077 26.449C12.3077 25.7793 11.7567 25.2362 11.0769 25.2362ZM14.7692 26.449C14.7692 25.7793 15.3203 25.2362 16 25.2362C16.6797 25.2362 17.2308 25.7793 17.2308 26.449C17.2308 27.1186 16.6797 27.6617 16 27.6617C15.3203 27.6617 14.7692 27.1186 14.7692 26.449ZM20.9231 25.2362C20.2433 25.2362 19.6923 25.7793 19.6923 26.449C19.6923 27.1186 20.2433 27.6617 20.9231 27.6617C21.6028 27.6617 22.1538 27.1186 22.1538 26.449C22.1538 25.7793 21.6028 25.2362 20.9231 25.2362Z" fill="#454545"/></svg>
                  </div>
                  <p className="font-medium text-xs md:text-base text-customGray">Promote Bangladeshi Culture</p>
                </div>
              </div>
              <div className="stats bg-customKhaki lg:mt-8 py-8 px-4 grid grid-cols-3 gap-8 text-center lg:absolute lg:right-0 shadow-xl ">
                {/* Stat 1 */}
                <div className="flex flex-col items-center justify-end">
                  <div className="text-4xl text-customGreen mb-2">
                    <Image className='w-6 md:w-12' src="/icons/occupation.svg" alt="Occupation Icon" width={50} height={50} />
                  </div>
                  <p className="text-base md:text-2xl font-bold text-customGreen">7</p>
                  <p className="uppercase text-xs md:text-lg font-medium text-customGray">Executives</p>
                </div>
                {/* Stat 2 */}
                <div className="flex flex-col items-center justify-end">
                  <div className="text-4xl text-customGreen mb-2">
                    <Image className='w-6 md:w-12' src="/icons/teamwork.svg" alt="Teamwork Icon" width={50} height={50} />
                  </div>
                  <p className="text-base md:text-2xl font-bold text-customGreen">600+</p>
                  <p className="uppercase text-xs md:text-lg font-medium text-customGray">Members</p>
                </div>
                {/* Stat 3 */}
                <div className="flex flex-col items-center justify-end">
                  <div className="text-4xl text-customGreen mb-2">
                    <Image className='w-6 md:w-12' src='/icons/community.svg' alt='Community Icon' width={50} height={50} />
                  </div>
                  <p className="text-base md:text-2xl font-bold text-customGreen">1</p>
                  <p className="uppercase text-xs md:text-lg font-medium text-customGray">Community</p>
                </div>
              </div>
            </div>
          </section>
          <section className="upcoming-events">
            <div className="container my-12 md:my-16 lg:my-32 mx-auto flex flex-col items-center justify-center text-center">
              <p className="font-bold text-4xl pb-5 md:pb-10">Upcoming and Recent Events</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center align-middle gap-12 md:gap-24 lg:gap-48 py-12">
                <div className="flex flex-col items-center ">
                  <Image className="rounded-lg shadow-md" src="/images/hompage-card1.jpeg" alt="event" width={300} height={300} />
                  <p className="font-semibold text-xl py-6">Heading</p>
                  <p className="text-gray-400 text-ellipsis text-base">Body text for whatever you&apos;d like to add more to the subheading.</p>
                </div>
                <div className="flex flex-col items-center ">
                  <Image className="rounded-lg shadow-md" src="/images/homepage-card2.jpeg" alt="event" width={300} height={300} />
                  <p className="font-semibold text-xl py-6">Heading</p>
                  <p className="text-gray-400 text-ellipsis text-base">Body text for whatever you&apos;d like to add more to the subheading.</p>
                </div>
                <div className="flex flex-col items-center">
                  <Image className="rounded-lg shadow-md" src="/images/homepage-card3.jpeg" alt="event" width={300} height={300} />
                  <p className="font-semibold text-xl py-6">Heading</p>
                  <p className="text-gray-400 text-ellipsis text-base">Body text for whatever you&apos;d like to add more to the subheading.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="newsletter-signup">
            <Newsletter/>
          </section>
        </>
      ) : (
        // Dashboard for authenticated users
        <section className='container mx-auto px-4 py-8'>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {/* Add your dashboard components here */}
            <div className='rounded-lg border p-6 dark:border-gray-700'>
              <h2 className='text-xl font-bold mb-4'>
                Welcome back, {session.user?.email}
              </h2>
              {/* Add dashboard content */}
            </div>
            <div className='rounded-lg border p-6 dark:border-gray-700'>
              <h2 className='text-xl font-bold mb-4'>Your Progress</h2>
              {/* Add progress content */}
            </div>
            <div className='rounded-lg border p-6 dark:border-gray-700'>
              <h2 className='text-xl font-bold mb-4'>Recent Activity</h2>
              {/* Add activity content */}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

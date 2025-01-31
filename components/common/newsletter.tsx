export default function Newsletter(){
  return (
    <>
      <div className="bg-customKhakiDark flex items-center justify-center py-5 md:py-10 lg:py-20">
        <div style={{paddingRight:'0'}} className="container bg-white mx-auto flex justify-center items-center w-full shadow-xl border-0 lg:rounded-xl">
          <input type="email" name="newsletter-signup" id="newsletterSignup" placeholder='Sign you with your email for newsletter and events updates' className='px-2 py-2 lg:px-4 lg:py-5  text-customGreen placeholder:text-customGreen  focus:outline-none focus:ring-0 text-xs md:text-base lg:text-xl w-full '/>
          <button className="bg-customGreen text-left text-white px-2 lg:px-6 py-2 lg:py-5 text-xs md:text-base lg:text-xl lg:rounded-r-xl w-5/12">Sign Up for Newsletters</button>
        </div>
      </div>
    </>
  )              
}
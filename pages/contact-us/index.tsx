import ContactForm from "@/components/ui/contact-form";
import InteractiveMap from "@/components/ui/map";
import Image from "next/image";
import Link from "next/link";

export default function ContactUs(){
  return(
    <>
      <div className="mx-auto container my-5 md:my-20">
        <div className="flex flex-col md:flex-row justify-between items-center py-5 gap-6">
          <div className="md:w-1/2">
            <div className="md:p-12 pb-4">
              <h2 className="text-2xl font-semibold mb-2 text-center">Contact Us</h2>
              <p className="text-center md:px-16 pb-8 text-customGray font-light">We&apos;re here to help. Feel free to reach out to us and share any suggestions or clarify your queries.</p>
              <ContactForm />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <div className="contact-details">
                <h1 className="text-2xl font-semibold mb-2">Email</h1>
                <a href="mailto:bdgsa@gsaconcordia.ca"><p className="text-base mb-4">bdgsa@gsaconcordia.ca</p></a>
                <h1 className="text-2xl font-semibold mb-2">LinkedIn</h1>
                <a href="https://www.linkedin.com/company/bdgsa-concordia/"><p className="text-base mb-4">Bangladesh Graduate Students&apos; Association(BDGSA)</p></a>
                <h1 className="text-2xl font-semibold mb-2">Socials</h1>
                <a href="https://www.instagram.com/bdgsa_concordia/"><p className="text-base uppercase mb-4">@bdgsa_concordia</p></a>
              </div>
              <div className="whatsapp-code">
                <h1 className="text-2xl font-semibold mb-2 md:text-center">WhatsApp</h1>
                <Link href="https://chat.whatsapp.com/JGEOkOlVK85CbMLP74BAM9">
                  <Image src="/images/contact-us-qr-code.png" alt="QR Code" width={200} height={200} />
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <InteractiveMap />
          </div>
        </div>
      </div>
    </>
  )
}
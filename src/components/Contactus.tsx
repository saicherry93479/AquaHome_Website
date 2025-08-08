import Footer from "./Footer"
import Nav from "./Nav"


const ContactUs = () => {
  return (
   <>
   <Nav></Nav>
   <section className="bg-[#FFE9CD] h-full py-[140px]">
  <div className="max-w-[1200px]  mx-auto px-4">
    <h2 className="text-[#212121] opacity-90 text-5xl font-semibold mb-[48px]">
      Let's connect!
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
      <div className="bg-white border border-black rounded-[24px] p-[32px] relative">
        <h3 className="text-[#0A0A0A] text-2xl font-medium mb-[13.5px]">
          Reach out
        </h3>
        <a
          href="mailto:aquahomepurifiers@gmail.com"
          className="text-[#141414] text-lg hover:underline"
        >
          aquahomepurifiers@gmail.com
        </a>
        <div className="absolute top-[21px] right-[21px] w-[62px] h-[62px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={62}
            height={62}
            fill="none"
          >
            <path
              fill="#000"
              d="M39.83 54.39c-2.99 2.72-7.18 2.98-10.99 1.76-6.12-1.97-15.5-9.64-21.08-20.53-1.45-2.84-3.1-6.16-3.6-9.47-.98-3.12-.69-5.99 2.24-8.9 1.5-1.53 3.88-4.1 5.9-3.41 2.76.95 4.22 3.17 5.84 5.58.67 1 1.16 1.94 1.5 2.88 1.22 3.47-.25 4.73-2.16 5.92-1.12.7-2.38 1.02-3.45 1.24a.4.4 0 0 0-.3.51 25 25 0 0 0 14.77 15.8.4.4 0 0 0 .54-.28c.42-1.77 1.03-3.6 2.64-4.94 1.78-1.49 4.64-1.45 6.96.98 1.61 1.69 4.3 4.5 4.57 6.8.28 2.22-1.37 4.62-3.38 6.06Zm-21.4-31.66c-.3-.85-.74-1.7-1.35-2.6-1.46-2.17-2.79-4.26-5.2-5.09-.87-.3-2.24.8-3.29 1.8A74.84 74.84 0 0 1 17 27.04c1.54-.99 2.35-1.75 1.45-4.3Zm11 24.14c-.42.23-.92.26-1.38.09A26.3 26.3 0 0 1 12.5 30.34a1.7 1.7 0 0 1 .17-1.35c.59-.99 1.37-.65 3.17-1.37a73.2 73.2 0 0 0-8.15-9.87l-.02.01c-.4.48-2.43 2.19-2.72 4.79-.22 1.98.64 3.98 1.4 5.75a76.47 76.47 0 0 0 4.66 9.65 38.35 38.35 0 0 0 21.53 16.68 6.4 6.4 0 0 0 3.13.22 8.8 8.8 0 0 0 4.07-2.03c-3.01-4.23-5.81-7.38-8.55-9.64-1.07 2.01-.6 3.08-1.75 3.7Zm12.52 1.61c-.23-1.9-2.89-4.66-4.23-6.07-.8-.84-1.6-1.3-2.58-1.52-1.3-.28-2.35.2-3.23 1.23 2.81 2.3 5.68 5.51 8.74 9.78.8-.98 1.44-2.29 1.3-3.42Z"
            />
            <path
              fill="#000"
              d="M52 32.86c-2.66 1.7-5.84 2.13-8.97 1.9-1.56-.12-2.67-.54-4.44-.86-.54-.1-1.01-.32-1.53-.4-1.18 1.47-1.88 2.23-3.8 2.45a1.4 1.4 0 0 1-2.05-.87c-.4-1.6-.7-3.3-.86-5.04a12.27 12.27 0 0 1-5.56-13.32c.24-.57.6-5.7 5.82-8.89a12.14 12.14 0 0 1 9.24-1.45l8.57 2.06c2.75.67 5.06 2.23 6.7 4.3 5.76 6.62 3.26 16-3.13 20.12ZM39.55 7.62a10.87 10.87 0 0 0-8.28 1.3c-4.66 2.85-5.02 7.56-5.25 8.1a11 11 0 0 0 5.23 12.1c.63.35.06 1.27 1.19 5.65.02.1.16.13.22.05 3.12-4.03 3.12-4.17 3.63-4.05l6.36 1.53a10.96 10.96 0 0 0 13.21-8.08l.32-1.32a10.97 10.97 0 0 0-8.07-13.22l-8.56-2.06Z"
            />
            <path
              fill="#000"
              d="M51.38 17.67a.64.64 0 0 1-.77.47 80.9 80.9 0 0 1-15-5.22.64.64 0 0 1 .54-1.15A79.6 79.6 0 0 0 50.9 16.9c.34.08.55.43.47.77Zm-1.4 6.42a.64.64 0 1 1-.41 1.2c-6.86-2.3-11.38-3.18-16.79-6.96a.64.64 0 0 1 .73-1.04c5.24 3.66 9.45 4.45 16.46 6.8Zm-11.85 1.54 3.57 1.45c.77.3.31 1.5-.48 1.18l-3.57-1.45a.64.64 0 0 1 .48-1.18ZM24.07 8.43c.34.09.54.43.45.77l-1.28 4.82a.64.64 0 1 1-1.23-.33l1.28-4.81a.63.63 0 0 1 .78-.45ZM18.9 5.72c.26 2.21.78 4.4 1.52 6.51a.64.64 0 1 1-1.2.43 31.7 31.7 0 0 1-1.59-6.8.64.64 0 0 1 1.27-.14ZM12.7 8.6l4.54 3.96a.64.64 0 0 1-.84.96l-4.54-3.96a.64.64 0 0 1 .84-.96Z"
            />
          </svg>
        </div>
       
      </div>
      <div className="bg-white border border-black rounded-[24px] p-[32px] relative">
        <div className="mb-[46.79px]">
          <h3 className="text-[#0A0A0A] text-2xl font-medium mb-[12px]">
            Main Office
          </h3>
          <p className="text-[#0A0A0A] text-base">
          JYOTHI TRADERS, 10-89/4,Girls High school Road, Beside Ranga thetare, Azadnagar, Kodad,508206
          </p>
        </div>
        <div className="mb-[47.6px]">
          <h3 className="text-[#0A0A0A] text-2xl font-medium mb-[12.5px]">
            Contact Us
          </h3>
          <div className="space-y-2">
            <p className="text-[#0A0A0A] text-base">Call: +91 94947 39090</p>
            <p className="text-[#0A0A0A] text-base">
              WhatsApp: +91 94947 39090
            </p>
            <p className="text-[#0A0A0A] text-base">
              Email: aquahomepurifiers@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer></Footer>
   </>

  )
}

export default ContactUs
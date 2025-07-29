import  { useState } from 'react';
import { useData } from '../context/DataContext';

const ContactForm = () => {
    const { addEnquiry } = useData();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        city: ''
    });

    const handleChange = (e:any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        
        // Add enquiry to the system
        addEnquiry({
            name: formData.name,
            phone: formData.phone,
            city: formData.city
        });
        
        // Reset form
        setFormData({
            name: '',
            phone: '',
            city: ''
        });
        
        alert('Thank you for getting in touch! We\'ll contact you soon.');
    };

    return (
        <div id='betouch' className="grow mx-auto lg:pl-6 py-8">
            <div className="px-4 md:p-0">
                <div className="-lg:w-full max-w-[480px] flex flex-col justify-center items-center rounded-2xl my-4 md:mt-10 lg:mr-8 px-4 py-6 md:p-5 bg-[#EEF1FF] ">
                    <h2 className="text-[#4548b9] capitalize !text-xl lg:!text-2xl font-bold mb-2">
                        Be in Touch
                    </h2>
                    <h3 className="text-black/60 !text-sm md:!text-base leading-[20px] text-center mb-4">
                        Connect with us for{" "}
                        <span className="font-semibold">Perfectly Purified Water</span>{" "}
                        <span className="whitespace-nowrap">solutions</span>
                    </h3>
                    
                    <div className="flex gap-1.5 justify-center items-center mb-6 hidden">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[18px] h-[18px]"
                        >
                            <path
                                d="M9 1.08887L2.25 3.54376V9.00012C2.25 15.1656 8.80005 16.8427 8.86597 16.8592L9 16.8916L9.13403 16.8592C9.19995 16.8427 15.75 15.1656 15.75 9.00012V3.54376L9 1.08887ZM7.875 12.0455L5.22729 9.39783L6.02271 8.60242L7.875 10.4547L11.9773 6.35242L12.7727 7.14783L7.875 12.0455Z"
                                fill="#00770C"
                            />
                        </svg>
                        {/* <h3 className="text-black/60 text-sm [@media(max-width:360px)]:tracking-tighter [@media(max-width:370px)]:text-[14px]">
                            Trusted by{" "}
                            <span className="text-green-600 font-semibold">1 Lakh+</span> happy
                            customers
                        </h3> */}
                    </div>

                    <div className="flex flex-col gap-4 w-full">
                        <div>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="placeholder:text-sm border border-gray-300 h-[52px] placeholder:text-black/40 text-gray-800 rounded-full w-full py-4 px-5 bg-white focus:outline-none focus:ring-2 focus:ring-[#4548b9] focus:border-transparent"
                            />
                        </div>
                        
                        <div>
                            <input
                                type="tel"
                                placeholder="Enter phone number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="placeholder:text-sm border border-gray-300 h-[52px] placeholder:text-black/40 text-gray-800 rounded-full w-full py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#4548b9] bg-white focus:border-transparent"
                            />
                        </div>
                        
                        <div>
                            <div className="relative">
                                <select
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="appearance-none text-sm relative bg-white w-full py-4 px-5 rounded-full text-gray-800 border border-gray-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4548b9] focus:border-transparent"
                                >
                                    <option value="" disabled>
                                        Choose your city
                                    </option>
                                    <option value="Bangalore">
                                        Bengaluru/Bangalore
                                    </option>
                                    <option value="Hyderabad">
                                        Hyderabad
                                    </option>
                                    <option value="Gurugram">
                                        Gurgaon/Gurugram
                                    </option>
                                    <option value="Noida">
                                        Noida/Greater Noida
                                    </option>
                                    <option value="Delhi">
                                        Delhi/New Delhi
                                    </option>
                                    <option value="Ghaziabad">
                                        Ghaziabad
                                    </option>
                                    <option value="Faridabad">
                                        Faridabad
                                    </option>
                                    <option value="Mumbai">
                                        Mumbai
                                    </option>
                                    <option value="Pune">
                                        Pune
                                    </option>
                                    <option value="Others">
                                        Others
                                    </option>
                                </select>
                                <span className="pointer-events-none absolute right-5 top-[50%] -translate-y-1/2">
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-600"
                                    >
                                        <path
                                            d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <button 
                            onClick={handleSubmit}
                            className="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 bg-primary disabled:pointer-events-none shadow  px-4 w-full h-auto rounded-full font-semibold py-[14px] md:py-[18px] bg-blue-600 text-[14px] lg:text-[18px] text-white mt-4 disabled:opacity-50"
                        >
                            Get in Touch
                        </button>
                    </div>

                    <ul className="flex flex-wrap gap-2 md:gap-4 mt-6">
                        <li className="flex gap-1 w-full md:w-fit items-center">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                            >
                                <circle cx="12" cy="12" r="10" fill="#22c55e"/>
                                <path
                                    d="M10.525 14.275L8.075 11.825C7.925 11.675 7.74167 11.6 7.525 11.6C7.30833 11.6 7.125 11.675 6.975 11.825C6.80833 11.9917 6.725 12.1875 6.725 12.4125C6.725 12.6375 6.8 12.825 6.95 12.975L10 16.025C10.1333 16.1583 10.3083 16.225 10.525 16.225C10.7417 16.225 10.9167 16.1583 11.05 16.025L17.05 10.025C17.2 9.875 17.275 9.69167 17.275 9.475C17.275 9.25833 17.1917 9.06667 17.025 8.9C16.875 8.75 16.6875 8.675 16.4625 8.675C16.2375 8.675 16.0417 8.75833 15.875 8.925L10.525 14.275ZM12 22C10.5833 22 9.26667 21.7458 8.05 21.2375C6.83333 20.7292 5.775 20.025 4.875 19.125C3.975 18.225 3.27083 17.1667 2.7625 15.95C2.25417 14.7333 2 13.4167 2 12C2 10.6 2.25417 9.29167 2.7625 8.075C3.27083 6.85833 3.975 5.8 4.875 4.9C5.775 4 6.83333 3.29167 8.05 2.775C9.26667 2.25833 10.5833 2 12 2C13.4 2 14.7083 2.25833 15.925 2.775C17.1417 3.29167 18.2 4 19.1 4.9C20 5.8 20.7083 6.85833 21.225 8.075C21.7417 9.29167 22 10.6 22 12C22 13.4167 21.7417 14.7333 21.225 15.95C20.7083 17.1667 20 18.225 19.1 19.125C18.2 20.025 17.1417 20.7292 15.925 21.2375C14.7083 21.7458 13.4 22 12 22Z"
                                    fill="white"
                                />
                            </svg>
                            <h3 className="text-xs md:text-sm text-gray-700">Quick response</h3>
                        </li>
                        <li className="flex gap-1 w-full md:w-fit items-center">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                            >
                                <circle cx="12" cy="12" r="10" fill="#22c55e"/>
                                <path
                                    d="M10.525 14.275L8.075 11.825C7.925 11.675 7.74167 11.6 7.525 11.6C7.30833 11.6 7.125 11.675 6.975 11.825C6.80833 11.9917 6.725 12.1875 6.725 12.4125C6.725 12.6375 6.8 12.825 6.95 12.975L10 16.025C10.1333 16.1583 10.3083 16.225 10.525 16.225C10.7417 16.225 10.9167 16.1583 11.05 16.025L17.05 10.025C17.2 9.875 17.275 9.69167 17.275 9.475C17.275 9.25833 17.1917 9.06667 17.025 8.9C16.875 8.75 16.6875 8.675 16.4625 8.675C16.2375 8.675 16.0417 8.75833 15.875 8.925L10.525 14.275ZM12 22C10.5833 22 9.26667 21.7458 8.05 21.2375C6.83333 20.7292 5.775 20.025 4.875 19.125C3.975 18.225 3.27083 17.1667 2.7625 15.95C2.25417 14.7333 2 13.4167 2 12C2 10.6 2.25417 9.29167 2.7625 8.075C3.27083 6.85833 3.975 5.8 4.875 4.9C5.775 4 6.83333 3.29167 8.05 2.775C9.26667 2.25833 10.5833 2 12 2C13.4 2 14.7083 2.25833 15.925 2.775C17.1417 3.29167 18.2 4 19.1 4.9C20 5.8 20.7083 6.85833 21.225 8.075C21.7417 9.29167 22 10.6 22 12C22 13.4167 21.7417 14.7333 21.225 15.95C20.7083 17.1667 20 18.225 19.1 19.125C18.2 20.025 17.1417 20.7292 15.925 21.2375C14.7083 21.7458 13.4 22 12 22Z"
                                    fill="white"
                                />
                            </svg>
                            <h3 className="text-xs md:text-sm text-gray-700">
                                Professional service
                            </h3>
                        </li>
                        <li className="flex gap-1 w-full md:w-fit items-center">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                            >
                                <circle cx="12" cy="12" r="10" fill="#22c55e"/>
                                <path
                                    d="M10.525 14.275L8.075 11.825C7.925 11.675 7.74167 11.6 7.525 11.6C7.30833 11.6 7.125 11.675 6.975 11.825C6.80833 11.9917 6.725 12.1875 6.725 12.4125C6.725 12.6375 6.8 12.825 6.95 12.975L10 16.025C10.1333 16.1583 10.3083 16.225 10.525 16.225C10.7417 16.225 10.9167 16.1583 11.05 16.025L17.05 10.025C17.2 9.875 17.275 9.69167 17.275 9.475C17.275 9.25833 17.1917 9.06667 17.025 8.9C16.875 8.75 16.6875 8.675 16.4625 8.675C16.2375 8.675 16.0417 8.75833 15.875 8.925L10.525 14.275ZM12 22C10.5833 22 9.26667 21.7458 8.05 21.2375C6.83333 20.7292 5.775 20.025 4.875 19.125C3.975 18.225 3.27083 17.1667 2.7625 15.95C2.25417 14.7333 2 13.4167 2 12C2 10.6 2.25417 9.29167 2.7625 8.075C3.27083 6.85833 3.975 5.8 4.875 4.9C5.775 4 6.83333 3.29167 8.05 2.775C9.26667 2.25833 10.5833 2 12 2C13.4 2 14.7083 2.25833 15.925 2.775C17.1417 3.29167 18.2 4 19.1 4.9C20 5.8 20.7083 6.85833 21.225 8.075C21.7417 9.29167 22 10.6 22 12C22 13.4167 21.7417 14.7333 21.225 15.95C20.7083 17.1667 20 18.225 19.1 19.125C18.2 20.025 17.1417 20.7292 15.925 21.2375C14.7083 21.7458 13.4 22 12 22Z"
                                    fill="white"
                                />
                            </svg>
                            <h3 className="text-xs md:text-sm text-gray-700">
                                Personalized solutions
                            </h3>
                        </li>
                    </ul>
                </div>
                
                
            </div>
        </div>
    );
};

export default ContactForm;
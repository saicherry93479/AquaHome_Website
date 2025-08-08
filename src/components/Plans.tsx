import { useState } from 'react';

const Plans = () => {
    const [selectedPlan, setSelectedPlan] = useState('copper');

    const planData: any = {
        copper: {
            name: 'AquaHome Copper',
            plans: [
                {
                    type: 'unlimited Plan',
                    duration: '360 days',
                    price: '₹354/mo',
                    litres: 'unlimited',
                    discount: '22',
                    savings: '₹ 1389',
                    bgColor: '#F3FFA7'
                },
                {
                    type: 'unlimited Plan',
                    duration: '360 days',
                    price: '₹415/mo',
                    litres: 'unlimited',
                    discount: '22',
                    savings: '₹ 1737',
                    bgColor: '#F3FFA7'
                }
            ]
        },

        alkaline: {
            name: 'AquaHome Alkaline',
            plans: [
                {
                    type: 'unlimited Plan',
                    duration: '360 days',
                    price: '₹349/mo',
                    litres: 'unlimited',
                    discount: '30',
                    savings: '₹ 1929',
                    bgColor: '#F0FFF4'
                },
                {
                    type: 'unlimited Plan',
                    duration: '360 days',
                    price: '₹349/mo',
                    litres: 'unlimited',
                    discount: '30',
                    savings: '₹ 2999',
                    bgColor: '#F0FFF4'
                }
            ]
        }
    };

    const currentPlans = planData[selectedPlan];

    const handlePlanSelect = (plan: any) => {
        setSelectedPlan(plan);
    };

    return (
        <div id='plans' className='bg-[#FAFAFA]'>
            <section
                className="md:py-[100px] px-3 lg:px-6 [@media(min-width:1400px)]:px-[100px] py-[60px]"
                id="plan_section"
            >
                <div className="text-left md:text-center">
                    <div className="text-2xl font-semibold sm:text-[32px] sm:-xl:leading-[36px] xl:text-[40px] xl:leading-[50px]">
                        <h1 />
                        <h2 className="capitalize">Plans curated for your needs</h2>
                    </div>
                    <p className="text-sm md:text-base mt-3 md:mt-5 text-black/60">
                        Subscribe to AquaHome with easy to choose plans
                    </p>
                </div>

                <div className="mt-10 md:mt-8">
                    <div
                        className="flex gap-2 lg:gap-6 justify-center -lg:sticky -md:top-[55px] -md:z-[100] pt-2 pb-3 "
                        id="model-buttons-observer"
                    >
                        <div className="w-full grid grid-cols-2 md:flex justify-center items-end gap-3 md:gap-4 px-1 sticky top-0">
                            {/* Copper Plan */}
                            <div className="relative w-full md:max-w-[260px]">
                                <button
                                    type="button"
                                    onClick={() => handlePlanSelect('copper')}
                                    className={`py-1.5 md:py-[22px] border-[1.5px] border-[#4E4B66] w-full h-[60px] md:h-auto font-semibold text-xs leading-tight md:text-[20px] rounded-[8px] md:rounded-2xl transition-all duration-300 focus-visible:!scale-100 hover:!scale-100 relative z-[1] flex items-center justify-center ${selectedPlan === 'copper'
                                        ? '!bg-[linear-gradient(180deg,_#A45834_0%,_#C57947_40%,_#984D29_100%)] !text-white !font-bold !border-[#984D29]'
                                        : 'text-[#14142B] bg-[#F7F7FC]'
                                        }`}
                                >
                                    <span className="text-center">AquaHome Copper</span>
                                </button>
                                {selectedPlan === 'copper' && (
                                    <div className="absolute hidden md:block left-1/2 -translate-x-1/2 border-8 w-0 h-0 border-x-transparent border-b-transparent !border-t-[#984D29]" />
                                )}
                            </div>

                           

                            {/* Alkaline Plan */}
                            <div className="relative w-full md:max-w-[260px]">
                                <button
                                    type="button"
                                    onClick={() => handlePlanSelect('alkaline')}
                                    className={`py-1.5 md:py-[22px] border-[1.5px] border-[#4E4B66] w-full h-[60px] md:h-auto font-semibold text-xs leading-tight md:text-[20px] rounded-[8px] md:rounded-2xl transition-all duration-300 focus-visible:!scale-100 hover:!scale-100 relative z-[1] flex items-center justify-center ${selectedPlan === 'alkaline'
                                        ? '!bg-[linear-gradient(180deg,_#058EFA_0%,_#4FA8FF_40%,_#0066CC_100%)] !text-white !font-bold !border-[#0066CC]'
                                        : 'text-[#14142B] bg-[#F7F7FC]'
                                        }`}
                                >
                                    <span className="text-center">AquaHome Alkaline</span>
                                </button>
                                {selectedPlan === 'alkaline' && (
                                    <div className="absolute hidden md:block left-1/2 -translate-x-1/2 border-8 w-0 h-0 border-x-transparent border-b-transparent !border-t-[#0066CC]" />
                                )}
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <ul className="flex flex-wrap items-center justify-center !gap-y-12 gap-12 md:gap-6 px-4 mt-16">
                        {currentPlans.plans.map((plan: any, index: any) => (
                            <ul key={index} className="relative">
                                <div className={`flex !capitalize items-start justify-center gap-1 text-[13px] text-[#4548b9] w-full rounded-t-3xl p-1 z-10 h-[100px] absolute -top-[16%] font-bold ${index === 0 ? 'bg-[#EEF1FF]' : 'bg-gradient-to-r from-[#F8F0FF] via-[#F2F6FF] to-[#E4F7FF]'
                                    }`}>
                                    <img
                                        src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='23'%20height='20'%20viewBox='0%200%2023%2020'%20fill='none'%3e%3cpath%20d='M14.7458%2010C14.7458%2010.345%2014.4449%2010.625%2014.0742%2010.625H13.0452C11.0204%2010.625%209.37267%2012.1583%209.37267%2014.0425V15C9.37267%2015.345%209.07177%2015.625%208.70103%2015.625C8.33028%2015.625%208.02938%2015.345%208.02938%2015V14.0425C8.02938%2012.1583%206.38162%2010.625%204.35685%2010.625H3.32789C2.95715%2010.625%202.65625%2010.345%202.65625%2010C2.65625%209.655%202.95715%209.375%203.32789%209.375H4.35685C6.38162%209.375%208.02938%207.8425%208.02938%205.9575V5C8.02938%204.655%208.33028%204.375%208.70103%204.375C9.07177%204.375%209.37267%204.655%209.37267%205V5.9575C9.37267%207.84167%2011.0204%209.375%2013.0452%209.375H14.0742C14.4449%209.375%2014.7458%209.655%2014.7458%2010Z'%20fill='%23FFC107'/%3e%3cpath%20d='M18.776%205.83366C18.776%206.17866%2018.4751%206.45866%2018.1043%206.45866H17.7613C17.3324%206.45866%2016.9849%206.78283%2016.9849%207.18116V7.50033C16.9849%207.84533%2016.684%208.12533%2016.3133%208.12533C15.9425%208.12533%2015.6416%207.84533%2015.6416%207.50033V7.18116C15.6416%206.78283%2015.2933%206.45866%2014.8652%206.45866H14.5222C14.1515%206.45866%2013.8506%206.17866%2013.8506%205.83366C13.8506%205.48866%2014.1515%205.20866%2014.5222%205.20866H14.8652C15.2942%205.20866%2015.6416%204.88449%2015.6416%204.48616V4.16699C15.6416%203.82199%2015.9425%203.54199%2016.3133%203.54199C16.684%203.54199%2016.9849%203.82199%2016.9849%204.16699V4.48616C16.9849%204.88449%2017.3333%205.20866%2017.7613%205.20866H18.1043C18.4751%205.20866%2018.776%205.48866%2018.776%205.83366Z'%20fill='%23FED800'/%3e%3cpath%20d='M20.1188%2014.167C20.1188%2014.512%2019.8179%2014.792%2019.4471%2014.792H18.9331C18.1056%2014.792%2017.4322%2015.4187%2017.4322%2016.1887V16.667C17.4322%2017.012%2017.1313%2017.292%2016.7606%2017.292C16.3898%2017.292%2016.0889%2017.012%2016.0889%2016.667V16.1887C16.0889%2015.4187%2015.4155%2014.792%2014.588%2014.792H14.074C13.7032%2014.792%2013.4023%2014.512%2013.4023%2014.167C13.4023%2013.822%2013.7032%2013.542%2014.074%2013.542H14.588C15.4155%2013.542%2016.0889%2012.9153%2016.0889%2012.1453V11.667C16.0889%2011.322%2016.3898%2011.042%2016.7606%2011.042C17.1313%2011.042%2017.4322%2011.322%2017.4322%2011.667V12.1453C17.4322%2012.9153%2018.1056%2013.542%2018.9331%2013.542H19.4471C19.8179%2013.542%2020.1188%2013.822%2020.1188%2014.167Z'%20fill='%23FED800'/%3e%3c/svg%3e"
                                        alt="icon"
                                    />
                                    {plan.type}
                                </div>
                                <li className="flex-1 min-w-[320px] max-w-[380px] w-[90%] md:w-auto bg-white border rounded-3xl px-4 pt-4 z-20 relative transition-all duration-500 hover:shadow-lg">
                                    <div className="grid grid-cols-2 mb-3 grid-rows-[repeat(auto,4)] gap-y-3 items-center">
                                        <div className="text-xl font-bold text-[#4548b9]">
                                            {plan.duration.split(' ')[0]}<span className="text-xl"> {plan.duration.split(' ')[1]}</span>
                                        </div>
                                        <div className="text-right flex flex-col items-end">
                                            <h3 className="text-lg text-black font-bold">
                                                {plan.price}
                                            </h3>
                                            <p className="text-[8px] text-gray-600 italic font-bold">
                                                included GST
                                            </p>
                                        </div>
                                        <h3 className="text-sm flex items-center gap-1 capitalize font-semibold">
                                            <img
                                                src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.92164%2016.1993C8.1315%2016.1926%207.3507%2016.0277%206.62528%2015.7145C5.89986%2015.4012%205.24449%2014.9459%204.6978%2014.3754C3.58788%2013.211%202.97538%2011.6599%202.99032%2010.0513C3.00525%208.44274%203.64644%206.9033%204.7778%205.75972L8.48965%202.03987C8.56199%201.962%208.65001%201.90035%208.74791%201.85898C8.84582%201.81761%208.95137%201.79747%209.05763%201.79988C9.16404%201.80136%209.26908%201.82405%209.36661%201.86663C9.46414%201.90922%209.55219%201.97083%209.62561%202.04787L13.2735%205.82372C14.3845%206.98707%2014.9984%208.53757%2014.9849%2010.1461C14.9715%2011.7547%2014.3317%2013.2947%2013.2015%2014.4394C12.6448%2015.0077%2011.9783%2015.4568%2011.2425%2015.7594C10.5067%2016.0619%209.71709%2016.2116%208.92164%2016.1993Z'%20fill='url(%23paint0_linear_701_4419)'/%3e%3cpath%20d='M11.9043%2010.936C11.9043%2011.9039%2010.4523%2013.3559%209.48438%2013.3559'%20stroke='white'%20stroke-width='0.96797'%20stroke-linecap='round'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_701_4419'%20x1='5.49982'%20y1='2.5'%20x2='13.4998'%20y2='16.5'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%239AE7FD'/%3e%3cstop%20offset='1'%20stop-color='%23058EFA'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
                                                alt="waterDropIcon"
                                            />
                                            <span className="text-black">{plan.litres}</span>
                                        </h3>
                                        {/* <h3 className="px-4 text-xs justify-self-end rounded-full py-1.5 flex items-center gap-1 font-semibold text-black"
                                            style={{ backgroundColor: plan.bgColor }}>
                                            <img
                                                src="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.3334%206.99999C12.3334%209.94551%209.94554%2012.3333%207.00002%2012.3333C4.0545%2012.3333%201.66669%209.94551%201.66669%206.99999C1.66669%204.05447%204.0545%201.66666%207.00002%201.66666C9.94554%201.66666%2012.3334%204.05447%2012.3334%206.99999Z'%20fill='%23E0FF22'%20stroke='%23A2BC00'/%3e%3cpath%20d='M8.75%209.33332C8.42333%209.33332%208.16083%209.07082%208.16083%208.74999C8.16083%208.42916%208.42333%208.16666%208.74416%208.16666C9.06499%208.16666%209.32749%208.42916%209.32749%208.74999C9.32749%209.07082%209.07083%209.33332%208.75%209.33332Z'%20fill='%23292D32'/%3e%3cpath%20d='M5.25586%205.83332C4.92919%205.83332%204.66669%205.57082%204.66669%205.24999C4.66669%204.92916%204.92919%204.66666%205.25002%204.66666C5.57085%204.66666%205.83335%204.92916%205.83335%205.24999C5.83335%205.57082%205.57669%205.83332%205.25586%205.83332Z'%20fill='%23292D32'/%3e%3cpath%20d='M5.24996%209.18749C5.13913%209.18749%205.02828%209.14668%204.94078%209.05918C4.77161%208.89001%204.77161%208.60998%204.94078%208.44081L8.44078%204.94081C8.60995%204.77164%208.88998%204.77164%209.05915%204.94081C9.22831%205.10998%209.22831%205.39001%209.05915%205.55918L5.55915%209.05918C5.47165%209.14668%205.3608%209.18749%205.24996%209.18749Z'%20fill='%23292D32'/%3e%3c/svg%3e"
                                                alt="DiscountIcon"
                                            />
                                            <span>{plan.discount}</span>% discount
                                        </h3> */}
                                        <div className="col-span-2 -mx-4 -mb-3 border-0 py-4 rounded-b-3xl text-xs text-center font-medium"
                                            style={{ backgroundColor: plan.bgColor }}>
                                            To know more <span className="font-bold">connect with us</span> 
                                            
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col md:flex-row mt-[30px] md:mt-[60px] items-center md:items-end justify-center gap-4">
                    <a
                        href='#betouch'
                        className="w-full flex items-center justify-center order-2 md:order-1 max-w-[343px] md:max-w-[360px] md:py-[16px] py-[13px] rounded-[48px] border border-[#4548b9] text-[#4548b9] font-semibold text-sm md:text-xl capitalize hover:bg-[#4548b9] hover:text-white transition-all duration-300"
                        type="button"
                    >
                        Get A Call Back
                    </a>
                    
                </div>
            </section>
        </div>
    );
};

export default Plans;
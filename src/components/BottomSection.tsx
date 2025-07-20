

const BottomSection = () => {
    return (
        <div
            // id="scroll-widget"
            className="flex flex-col w-full absolute"
        >
            <div className="flex flex-col items-end gap-3 mr-4 mb-4 !pointer-events-none">
                <button
                    type="button"
                    aria-label="Connect on Whatsapp"
                    title="Connect on Whatsapp"
                    className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] !pointer-events-auto"
                >
                    <img src="/app/assets/whatsapp_logo-production.png" alt="whatsapp logo" />
                </button>
                <button
                    type="button"
                    aria-label="Scroll to top"
                    title="Scroll to top"
                    className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]  text-2xl bg-primary rounded-lg text-white border-[0.1px] !pointer-events-auto"
                    id="gototop"
                >
                    ↑
                </button>
            </div>
            <div className="flex justify-center items-center w-full px-4 py-3 bg-[#f0fbaf] !pointer-events-auto border border-t">
                <div className="md:justify-end flex grow gap-4 md:gap-6 md:mr-8 md:nth-n:w-[200px]">
                    <button
                        type="button"
                        className="p-1.5 md:py-2.5 md:px-6 w-full bg-primary border-2 border-primary text-white text-sm md:text-base font-medium rounded-full"
                    >
                        Check Plans
                    </button>
                    <button className="w-full p-1.5 md:py-2.5 md:px-6 md:w-auto border-2 border-primary text-primary text-sm md:text-base font-medium rounded-full">
                        Book Now
                    </button>
                </div>
            </div>
        </div>

    )
}

export default BottomSection
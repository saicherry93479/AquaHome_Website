

const SecondSection = () => {
    return (
        <div className="py-[60px] md:py-[100px] md:px-[100px] px-[16px]">
            <div className="text-left md:text-center">
                <h2 className="leading-[30px] text-2xl md:text-4xl font-semibold capitalize lg:text-[40px]">
                    Safe means smart
                </h2>
                <p className="text-sm text-black/60 mt-3 md:mt-4 md:text-base !leading-[21px] md:!leading-8 max-w-[58ch] md:text-center md:mx-auto">
                    Smart controls help you monitor your drinking water quality in
                    real-time,thereby, give you and your family peace of mind.
                </p>
            </div>
            <div className="mt-10">
                <img
                    src="https://drinkprime.in/app/assets/lp119_safe_means_smart_img-production.webp"
                    alt=""
                    className="md:hidden"
                />
                <div className="max-w-[960px] mx-auto">
                    <img
                        src="https://drinkprime.in/app/assets/lp119_safe_means_smart_img_desk-production.webp"
                        alt=""
                        className="hidden w-full md:block "
                    />
                </div>


            </div>
        </div>

    )
}

export default SecondSection


const Nav = () => {
    return (
        <nav className="w-full sticky top-0 z-[999] shadow-sm lg:bg-primary-primary h-[60px] md:h-[64px] flex justify-between items-center px-5 xl:px-[100px] gap-3 bg-primary text-white">
            <div>
                <a href="https://drinkprime.in/" className="cursor-pointer">
                    <img
                        src="https://drinkprime.in/app/assets/DPLogoHeader_white-production.svg"
                        className="w-[140px] h-[32px]"
                        alt="logo"
                    />
                </a>
            </div>
            <div className="flex justify-between">
                <ul className=" gap-5 text-offWhite font-medium hidden lg:flex">
                    <li className="flex">
                        <a className="p-1 text-[#FCFCFC] cursor-pointer">Plans</a>
                    </li>
                    <li className="flex">
                        <a className="p-1 text-[#FCFCFC] cursor-pointer">How It Works</a>
                    </li>
                   
                </ul>
            </div>
            <button
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:r0:"
                data-state="closed"
                className="lg:hidden"
            >
                <svg width={24} height={24}>
                    <use
                        fill="#FCFCFC"
                        xlinkHref="/app/assets/svgSprite-production.svg#hamburger-menu"
                        style={{ color: "rgb(252, 252, 252)" }}
                    />
                </svg>
            </button>
        </nav>

    )
}

export default Nav
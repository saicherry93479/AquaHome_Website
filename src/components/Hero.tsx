import HeroLeft from "./HeroLeft"
import HeroImage from '../assets/HeroImage.png'

const Hero = () => {
    return (
        <section className="bg-[#FAFAFA]">
            <div className="flex flex-col lg:flex-row">
                <div className=" lg:hidden">
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1125 750"
                        className="w-full h-full"
                    >
                        <image
                            width={1125}
                            height={750}
                            href={HeroImage}
                        />
                        <rect
                            x={390}
                            y={300}
                            fill="#fff"
                            opacity={0}
                            width={240}
                            height={54}
                            className="cursor-pointer"
                        />
                    </svg>
                </div>
                <div className="lg:w-[60%] hidden lg:block css-hero-background-left-img_black">
                    <div className="max-w-[400px] mt-8 mx-auto ">
                        
                    </div>
                </div>
                <div className="lg:hidden">
                    <div className="text-white text-[10px] md:text-sm py-4 bg-primary lg:w-[60%] lg:rounded-tr-[20px] relative lg:-mt-3">
                        <div className="relative" role="region" aria-roledescription="carousel">
                            <div className="overflow-hidden">
                                <div
                                    className="ml-0 flex justify-around md:justify-evenly"
                                    style={{ transform: "translate3d(0px, 0px, 0px)" }}
                                >
                                    <div
                                        role="group"
                                        aria-roledescription="slide"
                                        className="min-w-0 shrink-0 grow-0 basis-full max-w-fit select-none flex gap-1 items-center text-[9px] md:text-base px-0"
                                    >
                                        <img
                                            src="data:image/webp;base64,UklGRpACAABXRUJQVlA4WAoAAAAQAAAALwAALwAAQUxQSNsAAAABgFBbb97mgyAIghQGFROLQc0gZdAxMARDMARBUP9tfyMQEROAebHrfURmjnY1xW4pLSe76Q4pkStPXVYiV5c12nPj0AWXyK1xTJXcXiZKEpafjqS8/KDBEfptJGn/UpLWP2jyhrydROkANJlDAKNKBzpXgya5GJtVttrY/gbbSPag+4dBN9jGna1VtmpsJmyKxtUB5zJAgkoBONMJABJE+gbncXzuLANfNThCv8E4DvzqDI7ffZ9j9og9YZjXsaMrlvqycKzW25JwwUa1PtNcsFuttpGZMe7VBPMAVlA4II4BAACwCQCdASowADAAPqlQn00mJKKiI4sAwBUJagDIEpXgNUkeQA1gD0AOlmX4K0GWBpAmXkcgC0ZES/X0MeicPqOhAvgjzRw9+Hk6Z5P3CENOj25VhyzJgAD+/npGr0tg5SJt16l6fMDWQZxGdjtqD+mWdjeJXK5MHNTT90JQGsFQ9PFXdvWONzzUfZlaA0Ezrw+8Gn+0dLCDP/x5YxFFNKe22VjrrC6qcBj2legRD/E2JPIO0/yRDB3SRqloxBr8YyFY0rYxaQGeiCX3TOOoioEb0U4669ZZIqFIhrWvR8bSZ6mmt8SvVXn0oCu1vOfzqViQ3l7UumkpaSEXsnrSHpW8ZbI496lADJeNhgdnPDbJ4YB0l957ejpUmDZ2k6jwevJccw5R0MX3+zVoc0Wx7Z3nNXyYTvEskDH22kp3X7xnYrFCcdecvv3nXotMZG8B2zhJYTT2L+zwnaiaxuDntPVhKrnffv/eg8ebHrqe3AUnf/k5fWJF/v8WrVNkn4HCNKXTqCmE4MeLRsxo6cqAAA=="
                                            alt=""
                                            className="w-4 h-4 lg:w-5 lg:h-5 rounded-full"
                                        />
                                        ₹ 0 Installation
                                    </div>
                                    <div
                                        role="group"
                                        aria-roledescription="slide"
                                        className="min-w-0 shrink-0 grow-0 basis-full max-w-fit select-none flex gap-1 items-center text-[9px] md:text-base px-0"
                                    >
                                        <img
                                            src="data:image/webp;base64,UklGRggCAABXRUJQVlA4WAoAAAAQAAAALwAALwAAQUxQSNsAAAABgFBbb97mgyAIghQGFROLQc0gZdAxMARDMARBUP9tfyMQEROAebHrfURmjnY1xW4pLSe76Q4pkStPXVYiV5c12nPj0AWXyK1xTJXcXiZKEpafjqS8/KDBEfptJGn/UpLWP2jyhrydROkANJlDAKNKBzpXgya5GJtVttrY/gbbSPag+4dBN9jGna1VtmpsJmyKxtUB5zJAgkoBONMJABJE+gbncXzuLANfNThCv8E4DvzqDI7ffZ9j9og9YZjXsaMrlvqycKzW25JwwUa1PtNcsFuttpGZMe7VBPMAVlA4IAYBAAAQBwCdASowADAAPqlEnkqmI6KhqrVdUMAVCWIAy+94DqAB56ecz9gRvVvOZ3jaiaTCvtiO+GF8988uW+cwzkpgAAD++l4DV9z+oqb2E5773HmqzHpyY8CYISZ+k1IYI6V3NVXy56vTIgBfs6gUFzX9ObpbxcA8tZrzKZ0Wze2t/WEoRRADDjbDS10rX7+YuO7Tsv4ulr19v3tZa0rESPPmLVkH9WC3S9l+XQQbykB/om+m6I9IDjtb+fhNRuwKhZSg5+ZtPM4VbJVn0q/4R5VdqNxlqJtZtnJApeHYH9QoRUhXj/dgHmOHOz64eH1bRPdsKB1rVyeIWeCmH1zLHjiK1nDBTAgA"
                                            alt=""
                                            className="w-4 h-4 lg:w-5 lg:h-5 rounded-full"
                                        />
                                        ₹ 0 Maintenance
                                    </div>
                                    <div
                                        role="group"
                                        aria-roledescription="slide"
                                        className="min-w-0 shrink-0 grow-0 basis-full max-w-fit select-none flex gap-1 items-center text-[9px] md:text-base px-0"
                                    >
                                        <img
                                            src="data:image/webp;base64,UklGRvYCAABXRUJQVlA4WAoAAAAQAAAALwAALwAAQUxQSNsAAAABgFBbb97mgyAIghQGFROLQc0gZdAxMARDMARBUP9tfyMQEROAebHrfURmjnY1xW4pLSe76Q4pkStPXVYiV5c12nPj0AWXyK1xTJXcXiZKEpafjqS8/KDBEfptJGn/UpLWP2jyhrydROkANJlDAKNKBzpXgya5GJtVttrY/gbbSPag+4dBN9jGna1VtmpsJmyKxtUB5zJAgkoBONMJABJE+gbncXzuLANfNThCv8E4DvzqDI7ffZ9j9og9YZjXsaMrlvqycKzW25JwwUa1PtNcsFuttpGZMe7VBPMAVlA4IPQBAABwCgCdASowADAAPqlEnkmmI6KhLjgLMMAVCWoAx5qkuMBdjW8VN/edAlWgyfxxfTe/uYEiUEG5czXTu8CpdJ8bsQNYnb0wFFGJPLq1dHLzdqONGqgR8sCeU6BroAD+/xILZMreLxq7CxCIW41is0EqmP2lvSe7C6jGX6LL4RB69fsQByNmhbUw420EH2kb9JOif8fZC9dOm4AethBuXlCc889hbnYXoO2QC2ljSIysn71SBx3ht89gEmbcvXYNgKNjkb3F3BfgJAYhqNhftnW9v+QmdmEnyGJKBF/e7b/C/A8Ja7b5RkIHtYNvpZWi5f7UJbUx7ZTi6vmSRFS2AMCRX9lv19ZSrZIaBpNLy1O2G3ULBgjzkdHXwF5qPQcBCRqnOB74wNy2xhJRhoKw22DG1Zk9tV/479lX5JiOkm4eo/WulllaASY3zJijQhM34S6juPhdScH0VRO+zaS9S9IAAz7snzH1mL+SjbYGdwXFK9EoKNTnRzIZ81L18flFaVSwrnZHzEMZiJdAmfJ6pWocnOczCRiE358n5hvLZ0CPtTerCUPhXaaY7mm1W7LF1QP6PwfaED20W11YA+hHxYW/ypLNFknujiqpq6CYSJ0TWCO2gm/kSWjRkZZZA9f1cvArG2TuJNfcGlOSa0ghQdJ0G9IAAA=="
                                            alt=""
                                            className="w-4 h-4 lg:w-5 lg:h-5 rounded-full"
                                        />
                                        48 Hr. Installation
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HeroLeft></HeroLeft>
            </div>
            <div className="hidden lg:block w-full bg-transparent">
                <div className="text-white text-[10px] md:text-sm py-4 bg-primary lg:w-[60%] lg:rounded-tr-[20px] relative lg:-mt-3">
                    <div className="relative" role="region" aria-roledescription="carousel">
                        <div className="overflow-hidden">
                            <div
                                className="ml-0 flex justify-around md:justify-evenly"
                                style={{ transform: "translate3d(0px, 0px, 0px)" }}
                            >
                                <div
                                    role="group"
                                    aria-roledescription="slide"
                                    className="min-w-0 shrink-0 grow-0 basis-full max-w-fit select-none flex gap-1 items-center text-[9px] md:text-base px-0"
                                >
                                    <img
                                        src="data:image/webp;base64,UklGRpACAABXRUJQVlA4WAoAAAAQAAAALwAALwAAQUxQSNsAAAABgFBbb97mgyAIghQGFROLQc0gZdAxMARDMARBUP9tfyMQEROAebHrfURmjnY1xW4pLSe76Q4pkStPXVYiV5c12nPj0AWXyK1xTJXcXiZKEpafjqS8/KDBEfptJGn/UpLWP2jyhrydROkANJlDAKNKBzpXgya5GJtVttrY/gbbSPag+4dBN9jGna1VtmpsJmyKxtUB5zJAgkoBONMJABJE+gbncXzuLANfNThCv8E4DvzqDI7ffZ9j9og9YZjXsaMrlvqycKzW25JwwUa1PtNcsFuttpGZMe7VBPMAVlA4II4BAACwCQCdASowADAAPqlQn00mJKKiI4sAwBUJagDIEpXgNUkeQA1gD0AOlmX4K0GWBpAmXkcgC0ZES/X0MeicPqOhAvgjzRw9+Hk6Z5P3CENOj25VhyzJgAD+/npGr0tg5SJt16l6fMDWQZxGdjtqD+mWdjeJXK5MHNTT90JQGsFQ9PFXdvWONzzUfZlaA0Ezrw+8Gn+0dLCDP/x5YxFFNKe22VjrrC6qcBj2legRD/E2JPIO0/yRDB3SRqloxBr8YyFY0rYxaQGeiCX3TOOoioEb0U4669ZZIqFIhrWvR8bSZ6mmt8SvVXn0oCu1vOfzqViQ3l7UumkpaSEXsnrSHpW8ZbI496lADJeNhgdnPDbJ4YB0l957ejpUmDZ2k6jwevJccw5R0MX3+zVoc0Wx7Z3nNXyYTvEskDH22kp3X7xnYrFCcdecvv3nXotMZG8B2zhJYTT2L+zwnaiaxuDntPVhKrnffv/eg8ebHrqe3AUnf/k5fWJF/v8WrVNkn4HCNKXTqCmE4MeLRsxo6cqAAA=="
                                        alt=""
                                        className="w-4 h-4 lg:w-5 lg:h-5 rounded-full"
                                    />
                                    ₹ 0 Installation
                                </div>
                                <div
                                    role="group"
                                    aria-roledescription="slide"
                                    className="min-w-0 shrink-0 grow-0 basis-full max-w-fit select-none flex gap-1 items-center text-[9px] md:text-base px-0"
                                >
                                    <img
                                        src="data:image/webp;base64,UklGRggCAABXRUJQVlA4WAoAAAAQAAAALwAALwAAQUxQSNsAAAABgFBbb97mgyAIghQGFROLQc0gZdAxMARDMARBUP9tfyMQEROAebHrfURmjnY1xW4pLSe76Q4pkStPXVYiV5c12nPj0AWXyK1xTJXcXiZKEpafjqS8/KDBEfptJGn/UpLWP2jyhrydROkANJlDAKNKBzpXgya5GJtVttrY/gbbSPag+4dBN9jGna1VtmpsJmyKxtUB5zJAgkoBONMJABJE+gbncXzuLANfNThCv8E4DvzqDI7ffZ9j9og9YZjXsaMrlvqycKzW25JwwUa1PtNcsFuttpGZMe7VBPMAVlA4IAYBAAAQBwCdASowADAAPqlEnkqmI6KhqrVdUMAVCWIAy+94DqAB56ecz9gRvVvOZ3jaiaTCvtiO+GF8988uW+cwzkpgAAD++l4DV9z+oqb2E5773HmqzHpyY8CYISZ+k1IYI6V3NVXy56vTIgBfs6gUFzX9ObpbxcA8tZrzKZ0Wze2t/WEoRRADDjbDS10rX7+YuO7Tsv4ulr19v3tZa0rESPPmLVkH9WC3S9l+XQQbykB/om+m6I9IDjtb+fhNRuwKhZSg5+ZtPM4VbJVn0q/4R5VdqNxlqJtZtnJApeHYH9QoRUhXj/dgHmOHOz64eH1bRPdsKB1rVyeIWeCmH1zLHjiK1nDBTAgA"
                                        alt=""
                                        className="w-4 h-4 lg:w-5 lg:h-5 rounded-full"
                                    />
                                    ₹ 0 Maintenance
                                </div>
                                <div
                                    role="group"
                                    aria-roledescription="slide"
                                    className="min-w-0 shrink-0 grow-0 basis-full max-w-fit select-none flex gap-1 items-center text-[9px] md:text-base px-0"
                                >
                                    <img
                                        src="data:image/webp;base64,UklGRvYCAABXRUJQVlA4WAoAAAAQAAAALwAALwAAQUxQSNsAAAABgFBbb97mgyAIghQGFROLQc0gZdAxMARDMARBUP9tfyMQEROAebHrfURmjnY1xW4pLSe76Q4pkStPXVYiV5c12nPj0AWXyK1xTJXcXiZKEpafjqS8/KDBEfptJGn/UpLWP2jyhrydROkANJlDAKNKBzpXgya5GJtVttrY/gbbSPag+4dBN9jGna1VtmpsJmyKxtUB5zJAgkoBONMJABJE+gbncXzuLANfNThCv8E4DvzqDI7ffZ9j9og9YZjXsaMrlvqycKzW25JwwUa1PtNcsFuttpGZMe7VBPMAVlA4IPQBAABwCgCdASowADAAPqlEnkmmI6KhLjgLMMAVCWoAx5qkuMBdjW8VN/edAlWgyfxxfTe/uYEiUEG5czXTu8CpdJ8bsQNYnb0wFFGJPLq1dHLzdqONGqgR8sCeU6BroAD+/xILZMreLxq7CxCIW41is0EqmP2lvSe7C6jGX6LL4RB69fsQByNmhbUw420EH2kb9JOif8fZC9dOm4AethBuXlCc889hbnYXoO2QC2ljSIysn71SBx3ht89gEmbcvXYNgKNjkb3F3BfgJAYhqNhftnW9v+QmdmEnyGJKBF/e7b/C/A8Ja7b5RkIHtYNvpZWi5f7UJbUx7ZTi6vmSRFS2AMCRX9lv19ZSrZIaBpNLy1O2G3ULBgjzkdHXwF5qPQcBCRqnOB74wNy2xhJRhoKw22DG1Zk9tV/479lX5JiOkm4eo/WulllaASY3zJijQhM34S6juPhdScH0VRO+zaS9S9IAAz7snzH1mL+SjbYGdwXFK9EoKNTnRzIZ81L18flFaVSwrnZHzEMZiJdAmfJ6pWocnOczCRiE358n5hvLZ0CPtTerCUPhXaaY7mm1W7LF1QP6PwfaED20W11YA+hHxYW/ypLNFknujiqpq6CYSJ0TWCO2gm/kSWjRkZZZA9f1cvArG2TuJNfcGlOSa0ghQdJ0G9IAAA=="
                                        alt=""
                                        className="w-4 h-4 lg:w-5 lg:h-5 rounded-full"
                                    />
                                    48 Hr. Installation
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Hero
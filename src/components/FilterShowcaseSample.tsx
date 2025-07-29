
import ProductOne from '../assets/ProductOne.png'
import ProductTwo from '../assets/ProductTwo.png'
import ProductThree from '../assets/ProductThree.png'

const FiltersShowcaseSample = () => {
    // Your 4 static images - replace these URLs with your actual image URLs
    const staticImages = [
        ProductOne,
        ProductTwo,
        ProductThree
    ];

    return (
        <section id='products' className="py-[60px] md:py-[100px] px-4 md:px-[100px] bg-white">
            <div className="text-left md:text-center">
                <h2 className="text-2xl md:text-4xl font-semibold capitalize lg:text-[40px] text-black">
                    Our Premium Water Filters
                </h2>
                <p className="text-sm text-black/60 mt-3 md:mt-4 md:text-base">
                    Discover our range of advanced water purification systems designed for every need
                </p>
            </div>

            <div className="mt-[60px] max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {staticImages.map((image, index) => (
                    <div
                        key={index}
                        className="group bg-white  border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={image}
                                alt={`Filter ${index + 1}`}
                                className="w-full h-96 object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FiltersShowcaseSample;
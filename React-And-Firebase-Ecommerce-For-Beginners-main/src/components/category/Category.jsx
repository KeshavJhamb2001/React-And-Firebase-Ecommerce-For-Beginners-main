import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png',
        name: 'Grocery & Staples'   // (Atta, Rice, Dal, Sugar, Oil)
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/2921/2921822.png',
        name: 'Beverages'          // (Tea, Coffee, Soft Drinks, Juices)
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/3076/3076067.png',
        name: 'Personal Care'      // (Soap, Shampoo, Toothpaste, Oil)
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/1046/1046858.png',
        name: 'Snacks & Biscuits'  // (Chips, Namkeen, Biscuits, Chocolates)
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/2921/2921827.png',
        name: 'Household Items'    // (Detergent, Phenyl, Cleaner)
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png',
        name: 'Dairy Products'     // (Milk, Curd, Butter, Paneer)
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/706/706164.png',
        name: 'Edible Oils & Ghee' // (Mustard Oil, Refined Oil, Desi Ghee)
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/1046/1046786.png',
        name: 'Pulses & Rice'      // (Chana Dal, Arhar Dal, Basmati Rice)
    }
]

const Category = () => {
    // naviaget 
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    {/* Image  */}
                                    <div onClick={() => navigate(`/category/${item.name}`)} className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-pink-500 transition-all hover:bg-pink-400 cursor-pointer mb-1 " >
                                        <div className="flex justify-center mb-12">
                                            {/* Image tag  */}
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
        </div>
    );
}

export default Category;
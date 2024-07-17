import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: 'https://cdn-icons-png.flaticon.com/512/317/317564.png',
        name: 'sweets'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/859/859293.png',
        name: 'snacks'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/2160/2160222.png',
        name: 'namkeen'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/448/448003.png',
        name: 'cake'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/2234/2234851.png',
        name: 'choclate'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/6121/6121439.png',
        name: 'colddrink'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/3703/3703377.png',
        name: 'fast-food'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/992/992733.png',
        name: 'icecream'
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
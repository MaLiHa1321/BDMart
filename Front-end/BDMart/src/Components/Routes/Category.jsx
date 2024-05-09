import { useEffect, useState } from "react";



const Category = () => {
  const [category, setCategory] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json()) 
        .then(data => setCategory(data))
    })

    return (
        <div className="mt-5">
            <h2 className="text-2xl md:text-5xl font-bold text-center">Our <span className="text-green-800">category</span> </h2>
            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-10/12 mx-auto mt-5">

            {
                category?.map((cate,idx) => <div key={idx} className="w-[300px] h-[300px] border-2 border-dark border-black rounded-xl">
                   <div>
                    <img src={cate?.image} alt="" className="w-[200px] h-[200px] object-cover mx-auto" />
                    <h2 className="text-center font-bold">{cate?.name}</h2>
                    <h2 className="text-center font-bold">Rating: {cate?.rating}</h2>
                   </div>
                </div>)

            }
            </div>

        

        
            
        </div>
    );
};

export default Category;
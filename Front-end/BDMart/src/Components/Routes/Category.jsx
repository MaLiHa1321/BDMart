import { useEffect, useState } from "react";



const Category = () => {
  const [category, setCategory] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json()) 
        .then(data => setCategory(data))
    })

    return (
        <div className="space-y-8 m-5">
            <h2 className="text-2xl md:text-4xl font-bold rounded-full">Our <span className="text-green-800">category</span> </h2>
            <div  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-10/12 mx-auto mt-5">

            {
                category?.map((cate,idx) => <div key={idx} className="w-[200px] h-[200px] bg-white rounded-lg">
                   <div className="mt-3">
                    <img src={cate?.image} alt="" className="w-[100px] h-[100px] object-cover mx-auto rounded" />
                    <h2 className="text-center font-bold">{cate?.name}</h2>
                    <h2 className="text-center font-bold">Item: {cate?.Item}</h2>
                   </div>
                </div>)

            }
            </div>

        

        
            
        </div>
    );
};

export default Category;
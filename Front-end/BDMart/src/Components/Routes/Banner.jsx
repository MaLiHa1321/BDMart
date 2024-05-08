

const Banner = () => {
    return (
        <div className='mt-0'>
            <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/KqQpdRF/b1.png" className="w-full rounded-lg" />
    <div className="absolute rounded-lg h-full flex items-center justify-start gap-6  left-0 bottom-0 bg-gradient-to-r from-[#151515]
     to-[rgba(21, 21, 21, 0.00)]">
    <div className='text-white space-y-7 p-3 lg:pl-12 w-full lg:w-1/2'>
        <h2 className='text-2xl lg:text-5xl font-bold'>Welcome to BDMart, <br /> Your One-Stop Shop for All Your Needs!</h2>
        <p>Discover an Extensive Range of Products at Unbeatable Prices. From Groceries to Electronics, We've Got You Covered. Shop Now and Experience Convenience Like Never Before!</p>
        <div className='flex flex-col md:flex-row gap-3'>
        <button className="btn btn-outline btn-success text-white">Discover More</button>
        <button className="btn btn-outline btn-error">Shop Now</button>
        </div>
    </div>
    </div>
    <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/P9rfNCD/b4.jpg" className="w-full rounded-lg" />
    <div className="absolute rounded-lg h-full flex items-center justify-start gap-6  left-0 bottom-0 bg-gradient-to-r from-[#151515]
     to-[rgba(21, 21, 21, 0.00)]">
    <div className='text-white space-y-7 p-3 lg:pl-12 w-full lg:w-4/5'>
        <h2 className='text-2xl lg:text-5xl font-bold'>Discover Unbeatable Prices at BDMart!</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='flex flex-col md:flex-row gap-3'>
        <button className="btn btn-success  text-white">Discover More</button>
        <button className="btn btn-outline btn-error">Shop Now</button>
        </div>
    </div>
    </div>
    <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/Vpb7c3X/b3.jpg" className="w-full rounded-lg" />
    <div className="absolute rounded-lg h-full flex items-center justify-start gap-6  left-0 bottom-0 bg-gradient-to-r from-[#151515]
     to-[rgba(21, 21, 21, 0.00)]">
    <div className='text-white space-y-7 p-3 lg:pl-12 w-full lg:w-1/2'>
        <h2 className='text-2xl lg:text-5xl font-bold'>Find everything you need under one roof with affordable price!</h2>
        <p>Experience the Diversity of Choices at SuperShop, Where Quality is Never Compromised.</p>
        <div className='flex flex-col md:flex-row gap-3'>
        <button className="btn btn-success text-white">Discover More</button>
        <button className="btn btn-outline btn-error">Shop Now</button>
        </div>
    </div>
    </div>
    <div className="absolute rounded-lg flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/qrdMYqQ/b2.jpg" className="w-full rounded-lg" />
    <div className="absolute h-full flex items-center justify-start gap-6  left-0 bottom-0 bg-gradient-to-r from-[#151515]
     to-[rgba(21, 21, 21, 0.00)]">
    <div className='text-white space-y-7 p-3 lg:pl-12 w-full lg:w-1/2'>
        <h2 className='text-2xl lg:text-5xl font-bold'>Explore a Myriad of Options at BDMart</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='flex flex-col md:flex-row gap-3'>
        <button className="btn btn-success text-white">Discover More</button>
        <button className="btn btn-outline btn-error">Shop Now</button>
        </div>
    </div>
    </div>
    <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;
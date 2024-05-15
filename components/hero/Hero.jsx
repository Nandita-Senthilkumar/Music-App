import React from 'react'
import {hero1, hero2} from "../asserts/data/data"
import { AiFillPlayCircle, AiOutlineHeart } from "react-icons/ai"
import { BsPlayCircle, BsThreeDots } from "react-icons/bs"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='absolute top-[50%]  left-0 text-white cursor-pointer'>
      <MdKeyboardArrowLeft size={50} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const {  onClick } = props;
  return (
    <div onClick={onClick} className='absolute top-[50%] right-0 z-10 text-white cursor-pointer'>
      <MdKeyboardArrowRight size={50} />
    </div>
  );
}
export const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
      <section className='hero'>
        <div className='w-full h-auto md:h-[92vh] md:flex md:justify-between'>
          <div className='w-full h-full md:w-1/3'>
          <Slider {...settings}>
          {hero1.map((item) => (
              <div className='box relative h-[110vh] sm:mt-30 w-full'>
                <img src={item.cover} alt='cover' className='w-full h-full object-cover' />
                <div className='text absolute top-0 left-0 text-white p-5'>
                  <h3 className='text-xl font-semibold'>{item.name}</h3>
                  <span className='text-gray-500'>{item.tag}</span>
                  </div>
                  <div className='overlay icon absolute top-1/2 left-[50%] text-white '>
                  <BsPlayCircle size={45} className='show' />
                  <AiFillPlayCircle size={45} className='hide absolute -top-0 ' />
                </div>
                <div className='overlay absolute bottom-0 right-0 text-white'>
                  <div className='flex p-3'>
                    <AiOutlineHeart size={22} className='mx-3' />
                    <BsThreeDots size={22} />
                  </div>
                </div>
             </div>
          ))}
           </Slider>
          </div>
          <div className='w-full md:w-full grid grid-cols-4 h-full sm:grid-cols-1'>
          {hero2.map((item) => (
            <div className='box relative'>
              <img src={item.cover} alt='cover' className='w-full h-full object-cover p-1' />
              <div className='text absolute top-0 left-0 text-white p-5'>
                <h3 className='text-xl font-semibold'>{item.name}</h3>
                <span className='text-gray-400'>{item.tag}</span>
              </div>
              <div className='overlay icon absolute top-1/3 left-[40%] text-white '>
                <BsPlayCircle size={45} className='show' />
                <AiFillPlayCircle size={50} className='hide absolute -top-1 -left-1' />
              </div>
              <div className='overlay absolute  right-4 bottom-1 text-white'>
                <div className='flex p-3'>
                  <AiOutlineHeart size={22} className='mx-3' />
                  <BsThreeDots size={22} />
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </>
  )
}



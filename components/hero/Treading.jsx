import React from "react"
import { news } from "../asserts/data/data"
import { treading } from "../asserts/data/data"
import { Card_lg } from "../common/Card_lg"
import { Title } from "../common/Title"
import Slider from "react-slick"
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
export const Treading = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <section className='treading hero px-2 py-28 mt-2 pb-5'>
      <Title title='Treanding Songs' />
      <Slider {...settings}>
        {treading.map((item, i) => (
          <div className='box card hero m-5' key={i}>
            <div className='mr-5'>
              <Card_lg cover={item.cover} name={item.name} tag={item.tag} />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}
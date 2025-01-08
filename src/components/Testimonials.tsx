"use client";
import React from 'react';
import Reviews from '../data/Reveiws.json';
import { Avatar, Rate } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Section } from '@/layout/Section';

interface Review {
  name: string;
  profession: string;
  quote: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  return (
    <Section     title="Testimonials"
>

    <div className='flex flex-col gap-0 lg:gap-10 py-4 lg:py-10'>
    
      <div className='w-full h-[40vh]'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {Reviews && Reviews.map((rev: Review, index: number) => (
            <SwiperSlide key={index}>
              <div className={`flex items-center justify-center shrink-0 w-full border-r border-r-[#D9D9D9] border-dashed`}>
                <div className='w-4/5 flex flex-col items-center gap-4'>
                  <Avatar size={50} icon={<UserOutlined />} />
                  <Rate disabled allowHalf defaultValue={rev?.rating} style={{ fontSize: '15px', width: '150px' }} />
                  <div className='w-full flex flex-col items-center justify-center gap-1'>
                    <h6 className='text-[#424D51] text-lg lg:text-2xl font-semibold'>{rev?.name}</h6>
                    <h6 className='text-[#424D51] text-xs font-semibold'>{rev?.profession}</h6>
                  </div>
                  <p className='text-[#8E8E8E] text-center text-xs lg:text-xs'>
                    {rev?.quote}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </Section>

  );
}

export default Testimonials;

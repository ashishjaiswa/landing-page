"use client";

import React from 'react';
// import Reviews from '../data/Reveiws.json';
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
  const Reviews =    [
    {
        "name": "Sarah Jones",
        "rating": 4,
        "profession": "Marketing Manager",
        "place": "Austin, Texas, USA",
        "photo": "Image of a friendly woman in a business suit smiling",
        "quote": "Signizy has been a game-changer for our marketing team. We used to spend hours chasing down signatures for contracts and proposals. Now, with Signizy, the entire process is smooth and efficient. I highly recommend Signizy to any business looking to streamline their document signing process."
    },
    {
        "name": "Aditya Mehta",
        "rating": 4.5,
        "profession": "CEO of Acme Technologies",
        "place": "Bangalore, Karnataka, India",
        "photo": "Image of a confident man in a suit and tie",
        "quote": "Signizy has revolutionized the way we handle client contracts at Acme Technologies. The platform is easy to use for both us and our clients, and the security features give us peace of mind. We've saved countless hours and improved our client satisfaction since switching to Signizy."
    },
    {
        "name": "David Williams",
        "rating": 5,
        "profession": "Real Estate Agent",
        "place": "San Francisco, California, USA",
        "photo": "Image of a man in a suit shaking hands with a happy couple in front of a house",
        "quote": "As a real estate agent, I'm constantly dealing with time-sensitive documents. Signizy has been a lifesaver by allowing me to quickly and easily collect signatures from clients. The platform is secure and reliable, and it makes the closing process much smoother for everyone involved."
    },
    {
        "name": "Priya Kapoor",
        "rating": 4,
        "profession": "HR Manager",
        "place": "Mumbai, Maharashtra, India",
        "photo": "Image of a woman in a business suit reviewing documents",
        "quote": "Signizy has been a valuable asset for our HR department at [Company Name]. The platform allows us to easily send and collect electronic signatures for onboarding documents, NDAs, and other important paperwork. Signizy has helped us streamline our HR processes and improve our efficiency."
    },
    {
        "name": "Michael Miller",
        "rating": 4.5,
        "profession": "Freelance Graphic Designer",
        "place": "Chicago, Illinois, USA",
        "photo": "Image of a man with a relaxed smile working on a laptop at a desk",
        "quote": "As a freelance graphic designer, I often collaborate with clients on projects that require contracts and agreements. Signizy makes it easy for me to get signatures from clients quickly and securely, regardless of their location. The platform is affordable and easy to use, which is perfect for freelancers like me."
    },
    {
        "name": "Rahul Sharma",
        "rating": 4.5,
        "profession": "Founder of EduTech Startup",
        "place": "Delhi, National Capital Territory of Delhi, India",
        "photo": "Image of a young man in a casual shirt explaining something on a laptop screen to a group of students",
        "quote": "Signizy has been a key tool for our EduTech startup. We use the platform to collect permission slips from parents and student agreements. Signizy is user-friendly, secure, and helps us maintain a paperless workflow. It's a great solution for any business looking to go digital."
    }
]
  return (
    <Section title="Testimonials">
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
                <div className='flex items-center justify-center w-full border-r border-dashed border-gray-300'>
                  <div className='w-4/5 flex flex-col items-center gap-4'>
                    <Avatar size={50} icon={<UserOutlined />} />
                    <Rate disabled allowHalf defaultValue={rev.rating} style={{ fontSize: '15px', width: '150px' }} />
                    <div className='w-full flex flex-col items-center gap-1'>
                      <h6 className='text-gray-700 text-lg lg:text-2xl font-semibold'>{rev.name}</h6>
                      <h6 className='text-gray-700 text-xs font-semibold'>{rev.profession}</h6>
                    </div>
                    <p className='text-gray-600 text-center text-xs lg:text-sm'>
                      {rev.quote}
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

export { Testimonials};

import Reviews from './Reveiws.json'
import React from 'react'
import { Avatar, Typography, Rate } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export default function Testimonials() {
    return (
        <div className='flex flex-col gap-0 lg:gap-10 py-4 lg:py-10 '>
            <div className='w-full flex items-center justify-center py-6'>
                <h1 className='text-[#424D51] font-bold mx-auto  lg:font-bold text-xl   lg:text-4xl'>Testimonials</h1>
            </div>
            <div className='flex gap-5 w-full  overflow-x-auto py-8 lg:py-12 ' >
                {Reviews && Reviews.map((rev, index) =>
                    <div key={index} className={`flex items-center justify-center shrink-0 w-full lg:w-2/6 ${index !== (Reviews?.length - 1) ? 'border-r border-r-[#D9D9D9] border-dashed' : ''}`}>
                        <div className='w-4/5  flex flex-col items-center gap-4'>
                            <Avatar
                                size={40}
                                icon={<UserOutlined />}
                            />
                            <Rate disabled allowHalf defaultValue={rev?.rating} />
                            <div className='w-full flex flex-col items-center justify-center gap-1'>
                                <h6 className='text-[#424D51] text-lg lg:text-xl font-semibold'>{rev?.name}</h6>
                                <h6 className='text-[#424D51] text-xs lg:text-sm font-semibold'>{rev?.profession}</h6>
                            </div>
                            <p className='text-[#8E8E8E] text-center text-xs lg:text-sm'>
                                {rev?.quote}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}


import React from 'react';

const Banner = () => {
    return (
        <div className="border-b border-gray-500 layout">
            <div className='w-96 sm:p-0 md:p-5 lg:p-5'>
                <h3 className='text-3xl md:mb-5 lg:mb-5 sm:mb-0'>Powerful Tagline</h3>
                <p className='text-base text-gray-500'>Supporting statement for your product primary tagline</p>
            </div>
            <div className='rounded-t-3xl border-r-8 border-t-8 border-l-8 border-gray-500'>
                <img className='rounded-t-2xl' alt='img' src="https://picsum.photos/500/300?random=1"/>
            </div>
        </div>
    )
}

export default Banner
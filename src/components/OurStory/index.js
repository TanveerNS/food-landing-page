import React from 'react'
import shoppingCart from '../../assets/png/fi-rr-shopping-cart-check.png'
import gift from '../../assets/png/fi-rr-gift.png'
import fast from '../../assets/png/fi-rr-time-fast.png'
import salad from '../../assets/png/fi-rr-salad.png'

const OurStory = () => {
  return (
    <>
        <div className='flex'>
            <div className='flex-1 flex flex-col'>
                <h2>Our Story & Services</h2>
                <h4>Our Culinary Journey And Services</h4>
                <p>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
                <button>Explore</button>
            </div>
            <div className='flex-1 flex flex-col'>
                <div className="container mx-auto p-4 mt-8">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
                        <div className='shadow-xl rounded-3xl bg-white'><img src={shoppingCart} alt="" /></div>
                        <h2>h</h2>
                        <h2>h</h2>
                        <h2>h</h2>
                    </div>
                </div>
            </div>
        </div>  
    </>
  )
}

export default OurStory
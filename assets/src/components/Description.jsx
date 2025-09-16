import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Description = () => {
    return (
        <motion.div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        >
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Generated Images</h1>
            <p className='text-gray-500 mb-8'>Turn your text into high quality images in seconds</p>

            <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
                <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg' />
                <div>
                    <h2 className='text-3xl font-medium max-w-lg mb-4'>Describe your vision</h2>
                    <p className='text-gray-600 mb-4'>Type a phrase, sentence, or paragraph that describes the image you want to create.</p>
                    <p className='text-gray-600'>
                        Imagine a world where simple words can transform into vivid visuals within seconds.
                        Just by writing a short description, your imagination comes to life as a fully detailed image.
                        Picture a futuristic city with shimmering glass towers, neon lights reflecting on rain-soaked streets,
                        and a night sky glowing with endless stars. Or perhaps envision a peaceful countryside,
                        with vast green fields covered in a soft morning mist, coconut trees swaying gently in the breeze,
                        and warm sunlight breaking through the leaves. Every phrase you write becomes a palette of colors,
                        light, and shapes — turning your ideas into art as if you were painting with words themselves.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default Description
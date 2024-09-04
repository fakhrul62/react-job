import React from 'react';

const Category = ({category}) => {
    const {id, img, category_name, availability} = category;
    return (
        <div className='bg-zinc-900 p-5 rounded border border-zinc-800'>
            <img src={img} className='w-12 h-12 object-contain p-2 rounded bg-[#1a57db24]'/>
            <h2 className='mt-5 mb-2 font-semibold text-xl'>{category_name}</h2>
            <p>{availability}</p>
        </div>
    );
};

export default Category;
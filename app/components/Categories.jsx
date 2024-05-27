import React from 'react'
import Cards_Cat from './Cards_Cat'
import { categories } from '../data/Categories'

export default function Categories() {
    const categoryKeys = Object.keys(categories);

    console.log(categoryKeys);

    const renderCategories = categoryKeys.map((key) => (
        <Cards_Cat key={key} color={categories[key].color} title={categories[key].name} />
        
    ));

    return (
        <div className='max-w-[1440px]  py-[50px] px-[30px] w-full flex flex-wrap gap-8 justify-center items-center'>
            {renderCategories}
        </div>
    );
}

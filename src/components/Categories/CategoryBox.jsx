import React from 'react';

const CategoryBox = ({ label, icon: Icon }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-3 text-neutral-500 hover:text-neutral-800 border-b-2 border-transparent'>
            <Icon size={26}></Icon>
            <div className='text-sm font-medium'>
                {label}
            </div>
        </div>
    );
};

export default CategoryBox;
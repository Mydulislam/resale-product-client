import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({category}) => {
    const {_id, name, image} = category
    return (
        <Link className="card shadow-xl">
            <div className="card-body">
                <div className="card-actions mx-auto">
                    <img className='h-20 w-20' src={image} alt="" />
                </div>
                <p className='text-center'>{name}</p>
            </div>
        </Link>
    );
};

export default CategoryItem;
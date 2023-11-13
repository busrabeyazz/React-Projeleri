import React from 'react';

function Category({ categories, filterCat }) {
    return (
        <div className="mb-4">
            {categories.map((category, index) => (
                <div key={index} className="mt-2">
                    <button 
                        className="btn btn-outline-primary btn-block"
                        onClick={() => filterCat(category)}>
                        {category}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Category;

import React from 'react';

function Category({ categories, filterCat }) {
    return (
        <div className="mb-4">
            <label htmlFor="cat"></label>
            <select className="form-control" onChange={(e) => filterCat(e.target.value)} id="cat">
                <option value="" hidden>
                    Choose Category
                </option>
                {categories.map((c, a) => (
                    <option key={a} value={c}>
                        {c}
                    </option>
                ))}
            </select>
            {categories.map((c, a) => (
                <div key={a} className="mt-2">
                    <span>{c}</span>
                </div>
            ))}
        </div>
    );
}

export default Category;
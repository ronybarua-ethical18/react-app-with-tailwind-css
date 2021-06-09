import React, { useState } from 'react';

const SearchImage = ({ searchTitle }) => {
    const [title, setTitle] = useState('')
    const handleSearch = (e) => {
        e.preventDefault();
        searchTitle(title);
    }
    return (
        <div>

            <div className="flex w-full items-center justify-center my-6">
                <form onSubmit={handleSearch} className="w-full max-w-sm">
                    <input onChange={e => setTitle(e.target.value)} class="bg-gray-200 text-gray-700 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-light" id="grid-first-name" type="text" placeholder="Search Image"></input>
                    <button class="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none">
                        Search
                    </button>
                </form>
            </div>

        </div>
    );
};

export default SearchImage;
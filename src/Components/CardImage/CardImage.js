import React from 'react';

const CardImage = (props) => {
    const{id, webformatURL, views, likes, downloads, user} = props.image
    const tags = props.image.tags.split(',')
    return (
        <div class="max-w-sm rounded-3xl overflow-hidden shadow-2xl border-double border-4 border-light-green-500">
            <img src={webformatURL} alt="" className="w-full"/>
            <div className="px-6 py-4">
                <div className="font-bold text-green-400 text-xl mb-2 text-left">
                    Photo By {user}
                </div>
                <ul className="text-left">
                    <li>
                        <strong>Total Views: </strong>
                        <span>{views}</span>
                    </li>
                    <li>
                        <strong>Total Downloads: </strong>
                        <span>{downloads}</span>
                    </li>
                    <li>
                        <strong>Total Likes: </strong>
                        <span>{likes}</span>
                    </li>
                </ul>
            </div>
            <div className="tag-list px-6 py-4 text-left">
                { tags.map( tag => <span key={id} className="inline-block mb-2 bg-green-400 rounded-full px-3 py-1
                 text-sm font-semibold text-white mr-2 ">{tag}</span>)
                
                 }
            </div>
            
        </div>
    );
};

export default CardImage;
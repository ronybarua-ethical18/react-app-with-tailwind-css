import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CardImage from '../CardImage/CardImage';
import Navigation from '../Navigation/Navigation';
import SearchImage from '../SearchImage/SearchImage';

const Home = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [searchImage, setSearchImage] = useState('');

    const fetchingImages = async (item) => {
        try {
            const { data } = await axios.get(`https://pixabay.com/api/?key=22003698-b9c2c7560b45e467fa34a8050&q=${item}&image_type=photo`)
            setImages(data.hits)
            setLoading(false)
        } catch (error) {
            console.log('Fetching data error')
        }
    }
    useEffect(() => {
        fetchingImages(searchImage)
    }, [searchImage])
    return (
        <div className="container mx-auto px-6 shadow-lg mb-5">
            <Navigation></Navigation>
            <SearchImage searchTitle={(title) => setSearchImage(title)}></SearchImage>
            <div className="grid grid-cols-3 gap-4">
                {
                    images.map(image => <CardImage key={image.id} image={image}></CardImage>)
                }
            </div>
        </div >
    );
};

export default Home;
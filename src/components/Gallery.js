import React from 'react';
import Header from './Header';
import Nav from './Nav';
import GridGallery from 'react-grid-gallery';

class Gallery extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Header />
                <div className="gallery">
                    <h1>Gallery</h1>
                    <GridGallery margin={10} images={
                        [
                            {
                                src: '/images/gallery/stella9-1.jpg',
                                thumbnail: '/images/gallery/stella9-1.jpg',
                            },
                            {
                                src: '/images/gallery/stella9-2.jpg',
                                thumbnail: '/images/gallery/stella9-2.jpg'
                            },
                            {
                                src: '/images/gallery/stella9-3.jpg',
                                thumbnail: '/images/gallery/stella9-3.jpg'
                            },
                            {
                                src: '/images/gallery/stella9-4.jpg',
                                thumbnail: '/images/gallery/stella9-4.jpg'
                            },
                            {
                                src: '/images/gallery/stella9-5.jpg',
                                thumbnail: '/images/gallery/stella9-5.jpg'
                            },
                            {
                                src: '/images/gallery/stella9-6.jpg',
                                thumbnail: '/images/gallery/stella9-6.jpg'
                            },
                            {
                                src: '/images/gallery/stella9-7.jpg',
                                thumbnail: '/images/gallery/stella9-7.jpg'
                            },
                            {
                                src: '/images/gallery/stella9-8.jpg',
                                thumbnail: '/images/gallery/stella9-8.jpg'
                            },
                            {
                                src: '/images/gallery/stella9-9.jpg',
                                thumbnail: '/images/gallery/stella9-9.jpg'
                            },
                            {
                                src: '/images/gallery/stella9-10.jpg',
                                thumbnail: '/images/gallery/stella9-10.jpg'
                            },
                            {
                                src: '/images/gallery/stella9-11.jpg',
                                thumbnail: '/images/gallery/stella9-11.jpg'
                            },
                        ]
                    }/>
                </div>
            </div>
        )
    }

}

export default Gallery;
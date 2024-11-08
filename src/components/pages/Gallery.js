
import React from 'react';
import './Gallery.css';
import Footer from '../Footer';

function Gallery() {
    const videos = [
        "https://www.youtube.com/embed/j3VNqtJUoz0?si=PqviAmT51Qu_bQre",
        'https://www.youtube.com/embed/VIDEO_ID_2',
        'https://www.youtube.com/embed/VIDEO_ID_3',
        'https://www.youtube.com/embed/VIDEO_ID_4',
        'https://www.youtube.com/embed/VIDEO_ID_5',
        'https://www.youtube.com/embed/VIDEO_ID_6'
    ];

    return (
        <div className='main-content'>
            <div className='gallery-container'>
                <h1 className='gallery-title text-center my-4' style={{ fontSize: '3rem' }}>VIDEOS</h1>
                <div className='row justify-content-center'>
                    {videos.map((video, index) => (
                        <div className='col-md-6 mb-4 d-flex justify-content-center' key={index}>
                            <div className='embed-responsive embed-responsive-16by9'>
                                <iframe width='800' height='450'
                                    className='embed-responsive-item'
                                    src={video}
                                    allowFullScreen
                                    title={`video-${index}`}
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Gallery;


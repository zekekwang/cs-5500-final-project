import React from 'react';
import '../../App.css';

function VideoItem(props) {
  return (
    <>
      <li className='videos__item'>
          <figure className='videos__item__video-wrap'>
            <video
              width={props.width}
              height={props.height}
              controls={props.controls}
            >
              <source src={props.src} type="video/mp4" />
            </video>
          </figure>
          <div className='videos__item__info'>
            <h5 className='videos__item__text'>{props.text}</h5>
          </div>
      </li>
    </>
  );
}

export default VideoItem;
import React from 'react'
import Image from 'next/image'
import video from '../video.mp4'
import videoPick from "../video-component/video-pick.jpg"
import like from '@/assets/like.png'
import dislike from '@/assets/dislike.png'
import share from '@/assets/share.png'
import save from '@/assets/save.png'
import jack from '@/assets/jack.png'
import user_profile from '@/assets/user_profile.jpg'
import '../PlayVideo/playVideo.css'

const PlayVideo = () => {
  return (
    <>
    
    <div className='play-video'>
      <Image src={videoPick}  alt='' className="video-pick"/>
      {/* <video src={video} controls autoPlay muted></video> */}
      <h3>Best channel to learn coding that help you to be a web developer</h3>
      <div className="play-video-info">
        <p>1525 Views &bull; 2 days ago</p>
       <div>
        <span><Image className='image' src={like} alt=''/>125</span>
        <span><Image className='image' src={dislike} alt=''/>2</span>
        <span><Image className='image' src={share} alt=''/>Share</span>
        <span><Image className='image' src={save} alt=''/>Save</span>
        </div>
      </div>
    
    <div>
      <hr />
      <div className="publisher">
        <Image className='image'  src={jack} alt=''/>
      <div>
      <p>GreateStack</p>
      <span>1M Subscribers</span>
      </div>
        <button >Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that mekes learning Easy</p>
        <p>Subscribe GreateStack to whatch this channel</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <Image className='image' src={user_profile} alt='' />
          <div>
            <h3>Jack Nikolson <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, velit autem! Ipsum consequuntur soluta deleniti, nobis quisquam rerum vitae quo ea culpa, dolores perspiciatis error voluptatum eos vel. Dolorum, cupiditate!</p>
            <div className="comment-action">
              <Image className='image-small' src={like} alt='' />
              <span>244</span>
              <Image className='image-small' src={dislike} alt='' />
            </div>
          </div>
        </div>
        <div className="comment">
          <Image className='image' src={user_profile} alt='' />
          <div>
            <h3>Jack Nikolson <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, velit autem! Ipsum consequuntur soluta deleniti, nobis quisquam rerum vitae quo ea culpa, dolores perspiciatis error voluptatum eos vel. Dolorum, cupiditate!</p>
            <div className="comment-action">
              <Image className='image-small' src={like} alt='' />
              <span>244</span>
              <Image className='image-small' src={dislike} alt='' />
            </div>
          </div>
        </div>
        <div className="comment">
          <Image className='image' src={user_profile} alt='' />
          <div>
            <h3>Jack Nikolson <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, velit autem! Ipsum consequuntur soluta deleniti, nobis quisquam rerum vitae quo ea culpa, dolores perspiciatis error voluptatum eos vel. Dolorum, cupiditate!</p>
            <div className="comment-action">
              <Image className='image-small' src={like} alt='' />
              <span>244</span>
              <Image className='image-small' src={dislike} alt='' />
            </div>
          </div>
        </div>
        <div className="comment">
          <Image className='image' src={user_profile} alt='' />
          <div>
            <h3>Jack Nikolson <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, velit autem! Ipsum consequuntur soluta deleniti, nobis quisquam rerum vitae quo ea culpa, dolores perspiciatis error voluptatum eos vel. Dolorum, cupiditate!</p>
            <div className="comment-action">
              <Image className='image-small' src={like} alt='' />
              <span>244</span>
              <Image className='image-small' src={dislike} alt='' />
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
    </>
  )
}

export default PlayVideo
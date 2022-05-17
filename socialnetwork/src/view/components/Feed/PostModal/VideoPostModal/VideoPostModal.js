import React from 'react';
import { Row } from 'react-materialize';
import { embed } from '../../../../../shared/utilities';
import style from './VideoPostModal.module.css';

const VideoPostModal =({ writePost, src })=>{
    const posting=(event)=>{
        const post=event.target.value;
        writePost(post)
    }
    return(
        <Row>
            <h4>Video Post</h4>
            <hr></hr>
            <iframe src={embed(src)} className={style.iframe} title="yt-video"/>                
            <div className="input-field col s12">    
                <textarea id="textarea2" className="materialize-textarea" data-length="120" onChange={posting}></textarea>
                <label htmlFor="textarea2">YouTube video URL</label>
            </div>
        </Row>
    )
}

export { VideoPostModal };
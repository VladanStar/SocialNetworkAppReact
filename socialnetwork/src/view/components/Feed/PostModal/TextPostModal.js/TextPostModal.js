import React from 'react';
import { Row } from 'react-materialize';

const TextPostModal =({ writePost })=> {
    const posting=(event)=>{
        const post=event.target.value;
        writePost(post)
    }
    return(
        <Row>
            <h4>Text Post</h4>
            <hr></hr>                
            <div className="input-field col s12">
                <textarea id="textarea2" className="materialize-textarea" data-length="120" onChange={posting}></textarea>
                <label htmlFor="textarea2">Write something...</label>
            </div>
        </Row>
    )
}

export { TextPostModal };
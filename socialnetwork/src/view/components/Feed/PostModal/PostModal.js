import React from 'react';
import { Button, Container, Row } from 'react-materialize';
import Modal from 'react-modal';
import { customStyles }  from '../../../../shared/constants';
import { TextPostModal } from './TextPostModal.js/TextPostModal';
import { ImagePostModal } from './ImagePostModal/ImagePostModal';
import { VideoPostModal } from './VideoPostModal/VideoPostModal';

const PostModal =({ modalIsOpen, openModal, writePost,
                    savePost,changeText, changeImage,
                    changeVideo, isText, isImage, isVideo,
                    uploadImage, src, imagePreview, postImage })=>{
    
    const post = () => {
        if(isImage){
            uploadImage()
        }else{
            savePost()
        }
    }

    return(
        <Modal
            isOpen={modalIsOpen}
            style={customStyles('500px')}
            ariaHideApp={false}
            onRequestClose={() => { openModal() }}
            contentLabel="modal"
        >
            <Container onKeyUp={event => event.keyCode === 13 && post()}>
                <Button onClick={changeText} name='text' style={{marginRight: '5px'}}><i className='fa fa-pencil'></i></Button>
                <Button onClick={changeImage} name='image' style={{marginRight: '5px'}}><i className='fa fa-image'></i></Button>
                <Button onClick={changeVideo} name='video'><i className='fa fa-play'></i></Button>

                {isText && <TextPostModal writePost={writePost} />}

                {isImage && <ImagePostModal writePost={writePost} imagePreview={imagePreview} postImage={postImage}/>}
                
                {isVideo && <VideoPostModal writePost={writePost} src={src}/>}

                <Row>
                    {(isText || isVideo) && <Button onClick={savePost}><i className='fa fa-send'></i></Button>}
                    {isImage && <Button onClick={uploadImage}><i className='fa fa-send'></i></Button>}
                    
                </Row>
            </Container>
        </Modal>
    )
}

export { PostModal };
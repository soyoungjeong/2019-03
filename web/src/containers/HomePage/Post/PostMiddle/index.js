/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef } from 'react';

import LikeIcon from '../../../../components/LikeIcon';
import LikeInfo from '../../../../components/LikeInfo';
import ShareModal from '../../../../components/ShareModal';
import ShareIcon from '../../../../components/ShareIcon';
import { LikeProvider } from '../../../../components/LikeIcon/Context/LikeContext';
import { LikerInfoProvider } from '../../../../components/LikeInfo/Context/LikerInfoContext';
import {
  CommentIcon,
  IconGroup,
  IconWrapper,
  PostImage,
  PostMiddleWrapper,
} from './styles';

const likeInfoStyle = {
  margin: '4px 15px',
};

const PostMiddle = ({ myInfo, post }) => {
  const { id: postId, isLike, imageURL, postURL, likerInfo } = post;

  const [isVisible, setIsVisible] = useState(false);
  const postImage = useRef(null);
  const likeIcon = useRef(null);
  const wrapperProps = { postImage, likeIcon, userId: myInfo.id, postId };

  const onToggleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <LikerInfoProvider likerInfo={likerInfo}>
      <LikeProvider isLike={isLike}>
        <PostMiddleWrapper {...wrapperProps}>
          <PostImage
            userId={myInfo.id}
            postId={postId}
            imageURL={imageURL}
            ref={postImage}
          />
          <IconGroup>
            <IconWrapper>
              <LikeIcon
                userId={myInfo.id}
                postId={postId}
                ratio={5}
                ref={likeIcon}
              />
            </IconWrapper>
            <IconWrapper>
              <CommentIcon postURL={postURL} />
            </IconWrapper>
            <IconWrapper>
              <ShareIcon onClick={onToggleModal} />
            </IconWrapper>
          </IconGroup>
          <LikeInfo myInfo={myInfo} postId={postId} style={likeInfoStyle} />
          <ShareModal
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            postURL={postURL}
          />
        </PostMiddleWrapper>
      </LikeProvider>
    </LikerInfoProvider>
  );
};

export default PostMiddle;

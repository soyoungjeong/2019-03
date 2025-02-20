import React from 'react';

import ProfileIcon from '../ProfileIcon';
import ModalContent from '../PostTop/MoreModal/ModalContent';
import ModalBackground from '../Modal/ModalBackground';
import ModalWrapper from '../Modal/ModalWrapper';
import { ModalHeaderText } from './styles';

const modalWrapperStyle = {
  zIndex: 900,
  width: '400px',
};

const modalHeaderStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '32 16 16 16',
};

const FollowCheckingModal = ({ isVisible, onClick }) => {
  const stopPropagation = e => e.stopPropagation();
  if (!isVisible) return <></>;
  return (
    <ModalBackground onClick={onClick} style={{ zIndex: 800 }}>
      <ModalWrapper onClick={stopPropagation} style={modalWrapperStyle}>
        <ModalContent>
          <div style={modalHeaderStyle}>
            <ProfileIcon ratio={28.125} />
            <ModalHeaderText>
              @learnupkr님의 팔로우를 취소하시겠어요?
            </ModalHeaderText>
          </div>
        </ModalContent>
        <ModalContent followcancel>팔로우 취소</ModalContent>
        <ModalContent cancel onClick={onClick}>
          취소
        </ModalContent>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default FollowCheckingModal;

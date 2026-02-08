import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { WEDDING_INVITATION_URL } from '../utils/config';

const Footer = () => {
     const weddingUrl = 'https://stellaandhenry.github.io/wedding/';
    const imageUrl = 'https://stellaandhenry.github.io/wedding/main.jpg';
    const copy = () => {
        alert('청첩장 주소가 복사됐습니다');
    };
    const shareOnKakao = () => {
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        alert("카카오 SDK가 초기화되지 않았습니다. 카카오 자바스크립트 키를 확인해주세요.");
        return;
      }
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '우리의 결혼식에 초대합니다',
          description: '웨딩시티 신도림',
          imageUrl: imageUrl,
          link: {
            mobileWebUrl: weddingUrl,
            webUrl: weddingUrl,
          },
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: weddingUrl,
              webUrl: weddingUrl,
            },
          },
        ],
      });
    }
  };

    return (
        <div className="content footer">
            <div className="shared">
                <CopyToClipboard text={WEDDING_INVITATION_URL} onCopy={copy}>
                    <button>청첩장 주소 복사하기</button>
                </CopyToClipboard>
                <button onClick={shareOnKakao}>카카오톡 공유하기</button>
            </div>
            <div className="copyright">
                Copyright 2022. <span>sunky0</span>. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;

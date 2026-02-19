import React, { useRef, useEffect } from 'react';
import maker from '../assets/img/marker.png';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';

  const locationName = "웨딩시티 신도림";
  const lat = 37.507559;
  const lng = 126.890223;
const options = {
    center: window.kakao ? new window.kakao.maps.LatLng(37.507559, 126.890223) : null, //지도의 중심좌표.
    level: 4
};

function Place() {
    const animatedItem = [
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0)
    ];
    const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스

    useEffect(() => {
        if (!window.kakao) return () => {};
        const map = new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
        var markerPosition = new window.kakao.maps.LatLng(37.507059, 126.890223);

        const markerImage = new window.kakao.maps.MarkerImage(maker, new window.kakao.maps.Size(44, 47), {
            offset: new window.kakao.maps.Point(22, 47)
        });

        var marker = new window.kakao.maps.Marker({
            position: markerPosition,
            image: markerImage
        });
        marker.setMap(map);
        map.setDraggable(true);
        /*map.setZoomable(false);
        map.addControl(new window.kakao.maps.ZoomControl(), window.kakao.maps.ControlPosition.RIGHT);
        */
        var content =
            '<div class="customoverlay">' +
            '  <a href="https://naver.me/5Rh0OxaM" target="_blank">' +
            '    <span class="tag">웨딩시티</span>' +
            '  </a>' +
            '</div>';

        var position = new window.kakao.maps.LatLng(37.507059, 126.890223);

        new window.kakao.maps.CustomOverlay({
            map: map,
            position: position,
            content: content,
            yAnchor: 1
        });
        return () => {};
    }, []);

    return (
        <div className="content place">
            <h2 {...animatedItem[0]} className="title">
                오시는 길
            </h2>
            <div {...animatedItem[1]} className="address">
                <span>웨딩시티 신도림</span>
                <span>서울 구로구 새말로 97 신도림테크노마트 8층</span>
                <a href={'tel:02-2111-8888'}>02-2111-8888</a>
            </div>
            <div {...animatedItem[2]}>
                <div id='map' className="map" ref={container}></div>
            </div>
            <div className="navigationIcon" {...animatedItem[3]}>
                <a href={`tmap://route?goalname=${encodeURIComponent(locationName)}&goalx=${lng}&goaly=${lat}`}  className="text-center text-decoration-none mx-2">
                    <img src={`${process.env.PUBLIC_URL}/icon/tmap.jpg`} alt="T-map" style={{width: '40px', height: '40px', borderRadius: '5px'}} />
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleKakaoNavi(); }}  className="text-center text-decoration-none mx-2">
                    <img src={`${process.env.PUBLIC_URL}/icon/kakao.png`} alt="Kakao Navi" style={{width: '40px', height: '40px', borderRadius: '5px'}} />
                 </a>
                 <a href={`nmap://navigation?dlat=${lat}&dlng=${lng}&dname=${locationName}`} className="text-center text-decoration-none mx-2">
                    <img src={`${process.env.PUBLIC_URL}/icon/naver.jpg`} alt="Naver Map" style={{width: '40px', height: '40px', borderRadius: '5px'}} />
                </a>
            </div>
            <div {...animatedItem[4]} className="transportation">
                <div className="transBox">
                    <div className="means">지하철</div>
                    <div className="desc">1,2호선 신도림역 3번출구와 테크노마트가 연결되어 있습니다. </div>
                </div>
                <div className="transBox">
                    <div className="means">안내</div>
                    <div className="desc">
                    주차장 중앙 및 건물 내에 엘레베이터가 있으며, <br/>
                    혼잡 시에는 건물 중앙 에스컬레이터도 이용가능합니다.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Place;

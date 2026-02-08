import React from 'react';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';

function Bus() {
    const animatedItem = [useScrollFadeIn('up', 1, 0), useScrollFadeIn('up', 1, 0)];

    return (
        <div className="content place">
            <h2 {...animatedItem[0]} className="title">
                주차 안내
            </h2>
            <div {...animatedItem[1]} className="address">
                <span>테크노마트 지하3층 ~ 지하7층까지 주차 가능합니다.<br />[무료 3시간]</span>
            </div>
        </div>
    );
}

export default Bus;

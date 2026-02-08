import React from 'react';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';

const Family = () => {
    const animatedItem = [
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0)
    ];
    return (
        <div className="content family">
            <div>
                <div>
                    <div {...animatedItem[0]} className="together">
                        함께 해주세요
                    </div>
                    <div>
                        <div {...animatedItem[1]}>
                            <div className="quote"></div>
                            <div className="cursive">
                                <i>
                                    우리 인생은 수많은 작은 순간들로 이루어져 있어요.
                                    <br />
                                    그리고 그 작은 순간들이 우리를 행복하게 만들죠.
                                </i>
                            </div>
                            <div className="movie">- 영화 어바웃타임</div>
                            <div className="quote back"></div>
                        </div>
                        <div {...animatedItem[2]} className="love">
                            서로의 인생에 다가간 두 사람이 이제 하나가 되어<br />
                             새로운 시작을 하려는 순간입니다. <br />
                            귀한 걸음으로 행복의 순간을 함께 축복해주세요.
                        </div>
                    </div>
                </div>
                <div {...animatedItem[3]} className="intro">
                    <div>
                        <span className="parent">
                            이재천
                            <span className="dot">·</span>
                            조명순
                        </span>
                        <span className="relation">의 아들</span>
                        <span className="name">이정현</span>
                    </div>
                    <div>
                        <span className="parent">
                        장창문
                        </span>
                        <span className="relation">의 딸</span>
                        <span className="name">장아라</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Family;

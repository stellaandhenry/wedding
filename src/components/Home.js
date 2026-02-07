import React from 'react';
import photo1 from '../assets/img/pic00.png';
import heart from '../assets/img/heart.png';
import { motion, useAnimationControls } from 'framer-motion';

function Home() {
    const variants = {
        hidden: {
            rotate: 15
        },
        visible: {
            opacity: 1,
            rotate: -15,
            transition: {
                delay: 0.2,
                duration: 0.5,
                repeat: Infinity,
                repeatType: 'reverse'
            }
        }
    };
    return (
        <div className="content home">
            <div className="name">
                <div>THE NEW BEGINNING</div>
                <div className="heart">
                    <span className="tag">
                        이정현
                    </span>
                    <span className="tag dot">
                       그리고
                    </span>
                    <span className="tag">
                        장아라
                    </span>
                </div>
            </div>
            <div className="title1">
                <img src={photo1} />
            </div>
            <div className="location">
                <p>
                    2026년 6월 6일 토요일 오전 11:00 <br />
                    웨딩시티 신도림 8층
                </p>
            </div>
        </div>
    );
}

export default Home;

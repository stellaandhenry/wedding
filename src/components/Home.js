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
                <div className="heart">
                    <div className="tag">
                        <p>이정현</p>
                    </div>
                    <div className="icon">
                        <motion.div initial="hidden" animate="visible" variants={variants} className="small">
                            <img src={heart} />
                        </motion.div>
                    </div>
                    <div className="tag">
                        <p>장아라</p>
                    </div>
                </div>
            </div>
            <div className="title">
                <img src={photo1} />
            </div>
            <div className="location">
                <p>
                    2026. 06. 06. 토요일 오전 11:00 <br />
                    웨딩시티 신도림
                </p>
            </div>
        </div>
    );
}

export default Home;

import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../Assets/next-icon.png';
import back_icon from '../../Assets/back-icon.png';
import user_1 from '../../Assets/user-1.png';
import user_2 from '../../Assets/user-2.png';
import user_3 from '../../Assets/user-3.png';
import user_4 from '../../Assets/user-4.png';

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -75) {  // adjust the threshold based on the number of slides and the step
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    return (
        <div className='Testimonials'>
            <img src={next_icon} alt='Next' className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt='Back' className='back-btn' onClick={slideBackward} />
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="User 1" />
                                <div>
                                    <h3>William Jackson 1</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I have ever made. The supportive community and commitment to academic excellence have truly exceeded my expectations</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="User 2" />
                                <div>
                                    <h3>William Jackson 2</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I have ever made. The supportive community and commitment to academic excellence have truly exceeded my expectations</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="User 3" />
                                <div>
                                    <h3>William Jackson 3</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I have ever made. The supportive community and commitment to academic excellence have truly exceeded my expectations</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="User 4" />
                                <div>
                                    <h3>William Jackson 4</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I have ever made. The supportive community and commitment to academic excellence have truly exceeded my expectations</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;

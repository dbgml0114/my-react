import React from 'react';
import "../components/Practice.scss";
import Radio from "../components/Radio";
import Counter from "../components/Counter";
import CheckBox from '../components/Check';

function Practice(){
    return (
        <div className='container'>
            <div className="top_container">
                <div className="swiper">스와이퍼</div>
                {/* <div className="details">정보 영역</div> */}
                <div className="radio_cont">
                    <div className="align">
                        <Radio group={"menuOption"} value={"Ice"} text={"Ice"} check={true} />
                        <Radio group={"menuOption"} value={"Hot"} text={"Hot"} />
                    </div>
                </div>
            </div>
            <div className="mid_container">
                <div className="radio_cont">
                    <div className="size">
                        <p className="tlt">size</p>
                        <div className="align">
                            <Radio group={"sizeOption"} value={"Regular"} text={"레귤러"} check={true} />
                            <Radio group={"sizeOption"} value={"Large"} text={"라지"} />
                            <Radio group={"sizeOption"} value={"Jumbo"} text={"코끼리"} />
                        </div>
                    </div>
                    <div className="cup">
                        <p className="tlt">cup</p>
                        <div className="align">
                            <Radio group={"cupOption"} value={"inMarket"} text={"매장용"} check={true} />
                            <Radio group={"cupOption"} value={"once"} text={"일회용"} />
                            <Radio group={"cupOption"} value={"personal"} text={"개인용"} />
                        </div>
                    </div>
                </div>
                <div className="option_cont">
                    <ul>
                        <li>
                            <Counter optionName={"샷추가"}/>                        
                        </li>
                        <li>
                            <Counter optionName={"바닐라 시럽 추가"}/>
                        </li>
                        <li className="align">
                            <div className="lft">
                                <p className="tlt">휘핑 크림</p>
                            </div>
                            <div className="rgt">
                                <CheckBox group={"checkSet01"} value={"inMarket"} text={""} check={true} />
                            </div>
                        </li>
                        <li className="align">
                            <div className="lft">
                                <p className="tlt">꿀 양</p>
                            </div>
                            <div className="rgt">
                                <CheckBox group={"checkset02"} value={"id01"} text={"제거"} />
                                <CheckBox group={"checkset02"} value={"id02"} text={"조금"} />
                                <CheckBox group={"checkset02"} value={"id03"} text={"많이"}  />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="accordion_cont">
                    {/* 아코디언 */}
                </div>
            </div>
        
        </div>
    );
};

export default Practice;
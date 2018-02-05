import React, { Component } from 'react';
import './style.css';
// import Swiper from '../../component/Swiper';
import Atrical from './Artical';
import NoteCodeIcon from '../../asset/img/note-code-icon.jpg';
class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        {/* <Swiper></Swiper> */}
        <div className="second-section" flex="dir:left box:last">
          <div>
            <Atrical></Atrical>
          </div>
          <div className="right">
            <div flex="cross:center">
              <span>
                欢迎扫码关注<a>王团长区块链日记</a>听我来吹牛（可用表情形式展现）
              </span>
              <img className="note-code-icon" src={NoteCodeIcon} />>
            </div>
            <div className="file-download-wrapper">
              <div flex="main:center;cross:center">
                <img src=""/> 
                <div>
                  <a>学院币白皮书下载</a>
                  <p className="tip-text">（图片形式表现，点击下载PDF）</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

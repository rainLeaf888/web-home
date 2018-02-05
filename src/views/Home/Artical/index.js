import React, { Component } from 'react';
import './style.css';
class Artical extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultContent: {
        id: 10,
        title: '去中心化',
        author: '王团长',
        createTime: '2019-01-28',
        url: 'http://59.152.16.139/697306A0A8139822ABD97C3560/03000A04005A69FBE6D94B2F8F14330872B92A-96FF-9D3F-5FFF-53E134A87646.mp4?ccode=0502&duration=392&expire=18000&psid=1ac142967c40cde7f97c5311cbe7da1d&ups_client_netip=7322c5ce&ups_ts=1517662591&ups_userid=&utid=s1EEEsYi0FQCAXMiz8Ayf0SX&vid=XMzM1MjkyOTA0OA%3D%3D&vkey=A10473ca301578f0021fe0da14c1ab090&s=efbfbdefbfbd723fefbf',
        viewCount: 6000
      },
      contentItems: this.getInitData()
    }
  }
  getInitData () {
    return [
      {
        id: 1,
        title: '王团长学院讲师',
        author: 'xxx',
        createTime: '2018-01-29',
        url: 'http://59.152.18.15/6574065C50335820322B0E3588/03000A06005A436112BA961848CD63C7DF848A-1DD3-3782-FE04-84F0B06CE804.mp4?ccode=0502&duration=394&expire=18000&psid=2f32ef4c36fcad6e568a7517d6ae8f4d&ups_client_netip=7322c5ce&ups_ts=1517662723&ups_userid=&utid=s1EEEsYi0FQCAXMiz8Ayf0SX&vid=XMzI2ODEzNzk3Ng%3D%3D&vkey=A91dd8de6f384bff5d42865e2c4cd0bd3&s=15b012b0bdb711e6bdbb',
        viewCount: 1000
      },
      {
        id: 2,
        title: '王团长学院讲师2222',
        author: 'xxx',
        createTime: '2018-01-30',
        url: 'http://59.152.16.135/656B53897D4782B56CEC86E4A/03000A06005A4B1CEFBD6F1848CD6323C1C98A-B966-B793-2A47-E194FA3B568B.mp4?ccode=0502&duration=395&expire=18000&psid=2b6fcbed6915163655cd3018c598fee8&ups_client_netip=7322c5ce&ups_ts=1517662813&ups_userid=&utid=s1EEEsYi0FQCAXMiz8Ayf0SX&vid=XMzI4NDM1MDAxNg%3D%3D&vkey=Af61b9fc5b7e40800456b4f74c400da54&s=15b012b0bdb711e6bdbb',
        viewCount: 2000
      },
      {
        id: 3,
        title: '王团长学院讲师3333',
        author: 'xxx',
        createTime: '2018-01-31',
        url: 'http://59.152.16.135/656B53897D4782B56CEC86E4A/03000A06005A4B1CEFBD6F1848CD6323C1C98A-B966-B793-2A47-E194FA3B568B.mp4?ccode=0502&duration=395&expire=18000&psid=2b6fcbed6915163655cd3018c598fee8&ups_client_netip=7322c5ce&ups_ts=1517662813&ups_userid=&utid=s1EEEsYi0FQCAXMiz8Ayf0SX&vid=XMzI4NDM1MDAxNg%3D%3D&vkey=Af61b9fc5b7e40800456b4f74c400da54&s=15b012b0bdb711e6bdbb',
        viewCount: 5000
      },
      {
        id: 11,
        title: '王团长学院讲师999',
        author: 'xxxx',
        createTime: '2018-01-29',
        url: 'http://59.152.18.15/6574065C50335820322B0E3588/03000A06005A436112BA961848CD63C7DF848A-1DD3-3782-FE04-84F0B06CE804.mp4?ccode=0502&duration=394&expire=18000&psid=2f32ef4c36fcad6e568a7517d6ae8f4d&ups_client_netip=7322c5ce&ups_ts=1517662723&ups_userid=&utid=s1EEEsYi0FQCAXMiz8Ayf0SX&vid=XMzI2ODEzNzk3Ng%3D%3D&vkey=A91dd8de6f384bff5d42865e2c4cd0bd3&s=15b012b0bdb711e6bdbb',
        viewCount: 1000
      }
    ]
  }
  render() {
    const state = this.state;
    return (
      <div className="article-wrapper">
        <div className="first-title" flex="dir:left box:last">
          <span>王团长区块链大学</span>
          <a href="">查看全部</a>
        </div>
        <div>
          <video src={state.defaultContent.url} controls="controls"></video>
        </div>
        <div flex="dir: left; main:justify;box:mean;">
          {
            state.contentItems.map((n, index) => {
              return <p className="child-content" key={index}>
                <video src={n.url}></video>
                <p className="article-author">{n.author}</p>
                <p className="article-title">{n.title}</p>
                <p className="article-text">
                  <span>{n.createTime}</span>
                  <span>{n.viewCount}</span>
                </p>
              </p>
            })
          }
        </div>
      </div>
    );
  }
  
}
export default Artical;
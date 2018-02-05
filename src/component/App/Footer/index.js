import React, { Component } from 'react';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <footer>
          <div flex="dir:right box:first">
            <div>
              王团长区块链学院是区块链全行业知识沉淀与信息资讯平台，学院提供独家小白网课、访谈直播、实时资讯、项目测评等业内信息。平台内容仅供参考，所涉及的任何信息均不构成王团长区块链学院的投资建议或咨询建议，请您根据自身情况评估做出理性决策。
            </div>
            <div>
              <ul className="faico clear">
                <li><a className="faicon-facebook" href=""><i className="fa fa-facebook"></i></a></li>
                <li><a className="faicon-pinterest" href=""><i className="fa fa-pinterest"></i></a></li>
                <li><a className="faicon-twitter" href=""><i className="fa fa-twitter"></i></a></li>
                <li><a className="faicon-dribble" href=""><i className="fa fa-dribbble"></i></a></li>
                <li><a className="faicon-linkedin" href=""><i className="fa fa-linkedin"></i></a></li>
                <li><a className="faicon-google-plus" href=""><i className="fa fa-google-plus"></i></a></li>
                <li><a className="faicon-rss" href=""><i className="fa fa-rss"></i></a></li>
              </ul>
            </div>
          </div>
        </footer>
        <p className="version-text">
          <span>© Copyright 2018 南京小团科技网络有限公司版权所有</span>
          <span>京ICP证xxxxxxx号</span>
          <span>京公网安备xxxxxxxxxxxx号</span>
        </p>
      </div>
    );
  }
}

export default App;

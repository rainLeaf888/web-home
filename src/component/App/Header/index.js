import React, { Component } from 'react';
import './style.css';
import logo from '../../../asset/img/logo.svg';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItem: this.initMenu(),
      active: 0
    }
  }
  initMenu() {
    return [
      {
        title: '首页',
        url: ''
      },
      {
        title: '区块链大学',
        url: ''
      },
      {
        title: '访谈直播',
        url: '',
        children: [
          {
            title: '',
            url: ''
          }
        ]
      },
      {
        title: '实时资讯',
        url: ''
      },
      {
        title: '项目评测',
        url: ''
      },
      {
        title: '关于我们',
        url: ''
      }
    ]
  }
  render() {
    let active = this.state.active
    return (
      <div className="header-wrapper">
        <header>
        <div className="logo fl_left">
          <h1><a href="index.html">
            <img src={logo} />
          </a></h1>
        </div>
        <nav className="main-nav fl_right">
          <ul className="clear">
            {
              this.state.menuItem.map((n, index) => {
                return (<li key={index} className={active === index ? 'active' : ''}>
                  <a href={n.url} className="drop">{n.title}</a>
                  {
                    n.children && n.children.length ? <ul>
                      {
                        n.children.map((m, j) => {
                          return <li key="{index}{j}"><a href={m.url}>{m.title}</a></li>
                        })
                      }
                    </ul> : null
                  }
                </li>)
              })
            }
          </ul>
        </nav>
        </header>
      </div>
    );
  }
}

export default Header;

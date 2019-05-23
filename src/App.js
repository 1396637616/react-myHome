import React, { Component } from 'react';
import huabu from './components/canvas'
// import bg from './components/bg'
import { Link } from "react-router"
import "./css/bg.css"
import "./css/reset-pc.css"
import 'antd/dist/antd.css';
import './App.css';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import style from "./index.css";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    constructor(props, context) {
        super(props, context);
    }
    componentWillMount() {
        document.body.style.margin = "0px";
        // 这是防止页面被拖拽
        document.body.addEventListener('touchmove', (ev) => {
            ev.preventDefault();
        });
    }
    render() {
        return (
            <div className="App">

                <div className="canvas">
                    <canvas id="buffer"></canvas>
                    <canvas id="h-canvas"></canvas>
                </div>
                {/* <div className="landscape"></div>
                <div className="filter"></div>
                <canvas id="canvas"></canvas>
                <div className="test"></div> */}
                <div className="but">
                    <Layout style={{ height: '100%', background: 'rgba(0,0,0,.1)' }}>

                        <Layout style={{ background: 'rgba(0,0,0,0)' }}>
                            <Sider width={150} style={{ background: 'rgba(0,0,0,0)' }}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%', borderRight: 0, background: 'rgba(255,255,255,1)' }}
                                >
                                    {/* <SubMenu key="sub4" title={<Link to="/welcome"><span>欢迎</span></Link>}>
                                    </SubMenu> */}
                                    <Menu.Item key="1"><Link to="/welcome"><Icon type="star" />欢迎</Link></Menu.Item>
                                    <SubMenu key="sub1"  title={<span><Icon type="user" />js</span>}>
                                        <Menu.Item key="2"><Link to="/myself">工作经历</Link></Menu.Item>
                                        <Menu.Item key="3"><Link to="/callMe">联系我</Link></Menu.Item>
                                        <Menu.Item key="4"><Link to="/zone">个人主页</Link></Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub2" title={<span><Icon type="laptop" />我的足迹</span>}>
                                        <Menu.Item key="5"><Link to="/zuji">足迹</Link></Menu.Item>
                                        <Menu.Item key="6"><Link to="/work">工作</Link></Menu.Item>

                                    </SubMenu>
                                    <SubMenu key="sub3" title={<span><Icon type="notification" />学习心得</span>}>
                                        <Menu.Item key="9"><Link to="/jishu">技术栈</Link></Menu.Item>
                                        <Menu.Item key="10"><Link to="/collect">技术收藏</Link></Menu.Item>

                                    </SubMenu>
                                </Menu>
                            </Sider>
                            <Layout style={{ padding: '0 24px 24px', background: 'rgba(0,0,0,0)' }}>

                                <Content style={{ background: 'rgba(0,0,0,0)', padding: 24, margin: 0, minHeight: 280 }}>
                                    <ReactCSSTransitionGroup
                                        transitionName="transitionWrapper"
                                        component="div"
                                        className={style.transitionWrapper}
                                        transitionEnterTimeout={300}
                                        transitionLeaveTimeout={300}>
                                        <div key={this.props.location.pathname}
                                            style={{ position: "absolute", width: "100%" }}>
                                            {
                                                this.props.children
                                            }
                                        </div>
                                    </ReactCSSTransitionGroup>
                                </Content>
                            </Layout>
                        </Layout>
                    </Layout>
                </div>

            </div>
        )
    }
    componentDidMount() {
        huabu();
        // bg()
    }
}

export default App;
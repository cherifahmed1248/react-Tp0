import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Item from "./Component/item/Item.js";
import Recherche from "./Component/recherche/Recherche.js";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons";

import { Row, Col } from "antd";
const { Header, Sider, Content } = Layout;

function App() {
  var list = {
    imageUrl: "bruyne.jpg",
    imageAlt: "Kevin De Bruyne",
    title: "Kevin De Bruyne",
    description:
      "Kevin De Bruyne, né le 28 juin 1991 à Tronchiennes, est un footballeur international belge qui évolue au poste de milieu de terrain central ou de milieu offensif central à Manchester City."
  };
  var list1 = {
    imageUrl: "paul.jpg",
    imageAlt: "Paul Pogba",
    title: "Paul Pogba",
    description:
      "Paul Pogba, de son nom complet Paul Labile Pogba, né le 15 mars 1993 à Lagny-sur-Marne, en Seine-et-Marne, est un joueur de football international français évoluant en Premier League au poste de milieu de terrain au Manchester United"
  };
  var list2 = {
    imageUrl: "Virgil.jpg",
    imageAlt: "Virgil van Dijk",
    title: "Virgil van Dijk",
    description:
      "Virgil van Dijk, né le 8 juillet 1991 à Bréda, est un footballeur international néerlandais qui évolue au poste de défenseur central au Liverpool FC. Formé principalement au Willem II Tilburg, Van Dijk débute en professionnel avec le FC Groningue"
  };
  return (
    <div>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0, height: 200 }}
        >
          <img
            src={require("./premier-league.jpg")}
            className="premier-league"
            alt="premier-league"
          ></img>
        </Header>
        <Layout>
          <Sider>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
              <Menu.Item key="1">
                <UserOutlined />
                <span className="nav-text">Home</span>
              </Menu.Item>
              <Menu.Item key="2">
                <VideoCameraOutlined />
                <span className="nav-text">Results</span>
              </Menu.Item>
              <Menu.Item key="3">
                <UploadOutlined />
                <span className="nav-text">Clubs</span>
              </Menu.Item>
              <Menu.Item key="4">
                <UserOutlined />
                <span className="nav-text">Players</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <div>
                <Recherche />
                <br />
              </div>
              <div>
                <Row gutter={16}>
                  <Col span={8}>
                    <Item item={list} />
                  </Col>
                  <Col span={8}>
                    <Item item={list1} />
                  </Col>
                  <Col span={8}>
                    <Item item={list2} />
                  </Col>
                </Row>
                <br />
                <Row gutter={16}>
                  <Col span={8}>
                    <Item item={list2} />
                  </Col>
                  <Col span={8}>
                    <Item item={list} />
                  </Col>
                  <Col span={8}>
                    <Item item={list1} />
                  </Col>
                </Row>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;

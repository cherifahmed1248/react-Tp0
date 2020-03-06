import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./Recherche.css";
import "antd/dist/antd.css";
import { Input } from "antd";
const { Search } = Input;
function recherche() {
  return (
    <div className="recherche">
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        id="rechercheValue"
        onSearch={value => console.log(value)}
      />
    </div>
  );
}
export default recherche;

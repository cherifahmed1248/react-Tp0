import React from "react";
import "./Item.css";
import "antd/dist/antd.css";
import { Card } from "antd";
const { Meta } = Card;

function Item(props) {
  console.log(props.item);

  return (
    <div className="item">
      <Card
        hoverable
        style={{ width: 400 }}
        cover={
          <img
            alt={props.item.imageAlt}
            src={require("./" + props.item.imageUrl)}
            className="itemImage"
          />
        }
      >
        <Meta
          title={props.item.title}
          description={props.item.description}
          className="itemMeta"
        />
      </Card>
    </div>
  );
}
export default Item;

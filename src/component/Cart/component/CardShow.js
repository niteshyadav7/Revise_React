import { data } from "../data/mockData";
import Card from "./Card";

import "./card.css";

const CardShow = () => {
  return (
    <>
      <div className="top">
        <div className="flex">
          {data.map((data, id) => {
            return (
              <div className="inner" key={id}>
                <Card data={data} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default CardShow;

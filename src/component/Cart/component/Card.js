import { useDispatch } from "react-redux";
import "./card.css";
import { addItems } from "../redux/cartSlice";

const IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const Card = ({ data }) => {
  const dispatch = useDispatch();

  // const handleClick = () => {
  //   dispatch(addItems());
  // };

  return (
    <div className="box">
      <div>
        <img
          width={300}
          alt="img"
          src={IMG_URL + data.info.cloudinaryImageId}
        />
      </div>
      <div className="btn">
        <button onClick={() => dispatch(addItems(data))}>
          <span>Add</span>
        </button>
      </div>
    </div>
  );
};
export default Card;

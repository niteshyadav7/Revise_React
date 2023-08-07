import { useSelector } from "react-redux";

const Cart = () => {
  const sel = useSelector((state) => state.cart.items);
  // console.log(sel);

  return (
    <>
      <div className="cart">
        <h1>CART PAGE</h1>
        <div>
          {sel.map((data,id)=>(<>
          <div key={id}>{data?.info?.name}</div>
          </>))}
        </div>
      </div>
    </>
  );
};
export default Cart;

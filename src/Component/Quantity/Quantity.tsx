import "./Quantity.scss";
type Props = {
  count: number;
  onDecrementClick: () => void;
  onIncrementClick: () => void;
  minCount: number;
};

const Quantity = ({
  count,
  onDecrementClick,
  onIncrementClick,
  minCount,
}: Props) => {
  return (
    <div className="product-quantity">
      <input
        type="button"
        className="qauntity-btn"
        value="-"
        onClick={() => onDecrementClick()}
        disabled={count <= minCount}
      />
      <input type="text" value={count} className=" quantity-num" />
      <input
        type="button"
        className="qauntity-btn"
        value="+"
        onClick={() => onIncrementClick()}
        disabled={count >= 6}
      />
    </div>
  );
};

export default Quantity;

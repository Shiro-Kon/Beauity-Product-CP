import './ButtonBuy.scss'

type Props = {}

const handleBuyClick = () => {
    // Perform buy button click logic here
  };

const ButtonBuy = (props: Props) => {
    const handleClick = () => {
        handleBuyClick();
      };

  return (
    <button className="buy" onClick={handleClick}>
      Buy
    </button>
  )
}

export default ButtonBuy
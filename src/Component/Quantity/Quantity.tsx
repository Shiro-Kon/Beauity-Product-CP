import { Button, TextField } from "@mui/material"

type Props = {
    count: number
    onDecrementClick: () => void
    onIncrementClick: () => void
    minCount: number
}

const Quantity = ({
    count,
    onDecrementClick,
    onIncrementClick,
    minCount,
}: Props) => {
    return (
        <div className="product-quantity">
            <Button
                style={{border: "1px solid rgba(90, 175, 145, 0.352)"}}
                variant="outlined"
                onClick={() => onDecrementClick()}
                disabled={count <= minCount}
            >
                -
            </Button>
            <TextField
                style={{border: "none"}}
                disabled
                value={count}
                size="small"
                className="text-filed"
            />
            <Button
                style={{border: "1px solid rgba(90, 175, 145, 0.352)"}}
                variant="outlined"
                onClick={() => onIncrementClick()}
                disabled={count >= 10}
            >
                +
            </Button>
        </div>
    )
}

export default Quantity

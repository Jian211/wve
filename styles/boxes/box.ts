

type boxType = "big"| "middle" | "small";



const boxSizeType = {
    big : {
        minWidth: 625,
        maxWidth: 625,
        minHeight: 700,
        maxHeight: 700,
    },
    middle: {
        minWidth: 296,
        maxWidth: 296,
        minHeight: 420,
        maxHeight: 420,
    },
    small: {
        minWidth: 296,
        maxWidth: 296,
        minHeight: 192,
        maxHeight: 192,
    }
}

const getBoxStyle = (boxType:boxType) => {
    return boxSizeType[boxType];
}

export {getBoxStyle}
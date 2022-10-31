const dummyData = [
    {
        x: 1,
        y: 2
    },
    { 
        x: 2,
        y: 6,
    },
    {
        x: 3,
        y: 3
    }
]

    // x: [1, 2, 3],
    // y: [2, 6, 3],

const convertToXYGraphFormat = (data) => {
    const xArr = data.map(item => item['x']);
    const yArr = data.map(item => item['y']);
    
    return {
        xArr: xArr,
        yArr: yArr
    };
}

export {
    convertToXYGraphFormat,
    dummyData,
}
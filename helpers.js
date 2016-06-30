const parseURLQuery = () => {
    const result = {},
        query = window.location.search;
        
    let queryStr = query.slice(1),
        queryArray = queryStr.split(/&/g);


    queryArray.forEach((v) => {
        let obj = getKeyAndValue(v);
        result[obj.key] = obj.value;
    });

    return result;
};

const getKeyAndValue = (str) => {
    let arr = str.split(/=/);
    return { key: arr[0], value: arr[1] };
};
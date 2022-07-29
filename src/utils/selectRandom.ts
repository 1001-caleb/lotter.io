type ResulType = {
    result: Array<string>;
}

interface ParamsSelect {
    items: Array<string>;
    lenghtWinner: number;
}

export const selectRandom = ({items, lenghtWinner}:ParamsSelect): ResulType =>{
    let result: Array<string> = [];
    let itemsCopy = [...items];
    for (let i = 0; i < lenghtWinner; i++) {
        const random = Math.floor(Math.random() * itemsCopy.length);
        result.push(itemsCopy[random]);
        itemsCopy.splice(random, 1);
    }
    return {result};
}
// 액션생성함수: 실수를 줄이고, 코드의 양을 줄이기 위해 사용

export const addNumber=()=>{
    return {type:'ADD'}
}

export const substractNumbe=()=>{
    return {type:'SUBSTRACT'}
}

//초기값
const initialState ={
    stock:10, // 재고
    goods:0,   // user의 파우치 구매 갯수
}

const goodsReducer =(state=initialState, action)=>{
    console.log(action);
    console.log(action.type);
    console.log(state);
    
    switch(action.type){
        case 'ADD':
            if(state.stock <=0){
                return state;
            }else{
                return{
                    ...state,
                    stock: state.stock - 1,
                    goods: state.goods + 1,
                }
            }

        case 'SUBSTRACT':
            if(state.goods <=0){
                return state;
            }else{
                return{
                    ...state,
                    stock: state.stock + 1,
                    goods: state.goods - 1,
                }
            }
    
        default:
            return state
    }
}

//코파일럿
export default goodsReducer
export const initialState = {
    basket: [],
    user: null,
};
export const getBasketTotal = (basket)  =>
basket?.reduce((amount, item ) => item.price + amount, 0);



const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //Logic for  adding to basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'REMOVE_FROM_BASKET':
            //Logic for removing item from basket
            // Cloned the basket
            let newBasket= [...state.basket];
            
            // We checked to see if the image exists
            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id);
            if (index >= 0) {
                // Item exists in basket,remove it
                newBasket.splice(index, 1);
            } else {
                
                console.warn('Cant remove item (id: ${action.id}) as it is not existing ')
            }
            return {
                ...state,basket:newBasket,
            }
            case "SET_USER":
                return{
                    ...state,
                    user:action.user
                }

        default:
            return state;

    };
}
export default reducer;

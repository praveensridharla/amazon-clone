function Cart(){
    const cart = {
   
    cartIntems : undefined,


    loadFromStorage: function(){
        this.cartItems = JSON.parse(localStorage.getItem('cart-oop'));
        if(!this.cartItems){
            this.cartItems = [
                {
                    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                    quantity:2,
                    deliveryOptionId:'1'
                },
                {
                    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                    quantity:1,
                    deliveryOptionId:'2'
                }
            ];
        }
    },
    saveToStorage(){
            localStorage.setItem('cart-oop',JSON.stringify(this.cartItems));
    },
    addToCart(productId){
            let matchingItem;
                this.cartItems.forEach((cartItem)=>{
                if(productId===cartItem.productId){
                    matchingItem=cartItem;
                }
                });
                if(matchingItem){
                matchingItem.quantity+=1;
                }else{
                this.cartItems.push({
                    productId:productId,
                    quantity:1,
                    deliveryOptionId:'1'
                });
                }
                this.saveToStorage();
            },

        removeFromCart(productId){
                const newCart = [];
                this.cartItems.forEach((cartItem)=>{
                    if(cartItem.productId !==productId){
                    newCart.push(cartItem);
                    }
                })
                this.cartItems = newCart;
                this.saveToStorage();
                },
        updateDeliveryOption(productId,deliveryOptionId){
                let matchingItem;
                this.cartItems.forEach((cartItem)=>{
                if(productId===cartItem.productId){
                    matchingItem=cartItem;
                }
                });

                matchingItem.deliveryOptionId = deliveryOptionId;

                this.saveToStorage();
            },
            getCartQuantity() {
                let total = 0;
                this.cartItems.forEach(item => {
                    total += item.quantity;
                });
                return total;
                }
        };
        return cart;
}

const cart = Cart('cart-oop');
const businesscart = Cart('cart-business');
cart.loadFromStorage();
businesscart.loadFromStorage();
console.log(cart);
console.log(businesscart);


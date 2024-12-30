import { configureStore, createSlice } from '@reduxjs/toolkit';
//import { getProducts } from './Service/ItemService';


// const itemsSlice = createSlice({
//   name: 'items',
//   initialState: {
//     veg: [],
//     nonVeg: [],
//     status: 'idle', 
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchItems.pending, (state) => {
//         state.status = 'loading';
//         state.error = null;
//       })
//       .addCase(fetchItems.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.veg = action.payload.veg;
//         state.nonVeg = action.payload.nonVeg;
//       })
//       .addCase(fetchItems.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    veg: [
      {
        id: 1,
        name: 'Paneertika',
        category: 'Veg',
        price: 200,
        quantity: 10,
        image: 'paneertika.png',
        brand: 'snacks',
      },
      {
        id: 2,
        name: 'Lalipop',
        category: 'Veg',
        price: 150,
        quantity: 5,
        image: 'lalipop.png',
        brand: 'snacks',
      },
      {
        id: 3,
        name: 'Fingers',
        category: 'Veg',
        price: 150,
        quantity: 5,
        image: 'finger.png',
        brand: 'snacks',
      },
      {
        id: 4,
        name: 'Palak Panner',
        category: 'Veg',
        price: 300,
        quantity: 5,
        image: 'panne.jpeg',
        brand: 'Panner',
      },
      {
        id: 5,
        name: 'Panner Biryani',
        category: 'Veg',
        price: 300,
        quantity: 5,
        image: 'paneerbir.png',
        brand: 'Panner',
      },

      {
        id: 6,
        name: 'Veg Biryani',
        category: 'Veg',
        price: 300,
        quantity: 5,
        image: 'vegbiryani.png',
        brand: 'Rice',
      },
    ],
    nonVeg: [
      {
        id: 1,
        name: 'Chicken Fry',
        category: 'Non-Veg',
        price: 120,
        quantity: 8,
        image: 'chekenfry.jpg',
        brand: ' Chicken',
      },
      {
        id: 2,
        name: ' Chicken Curry',
        category: 'Non-Veg',
        price: 200,
        quantity: 3,
        image: 'chi.jpeg',
        brand: 'Chicken',
      },{
        id: 2,
        name: ' Chicken Biryani',
        category: 'Non-Veg',
        price: 300,
        quantity: 3,
        image: 'chibiryani.jpeg',
        brand: 'Chicken',
      },
    ],
    status: 'idle',
    error: null,
  },
  reducers: {
    // You can add reducers for updating items or other actions as needed
  },
});


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], 
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity += action.payload.quantity || 1; 
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 }); 
      }
    },
    increment: (state, action) => {
      const item = state.items.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity += 1; 
      }
    },
    decrement: (state, action) => {
      const item = state.items.find(item => item.name === action.payload.name);
      if (item && item.quantity > 1) {
        item.quantity -= 1; 
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id); // Remove item from cart
    },
    clearCart: (state) => {
      state.items = []; // Clear all items in the cart
    },
  },
});

// Create a slice for managing purchase history
const purchaseHistorySlice = createSlice({
  name: "purchaseHistory",
  initialState: {
    history: [], // Will store an array of purchase records
  },
  reducers: {
    // Add a new purchase to the history
    addPurchase: (state, action) => {
      state.history.push(action.payload); // Add the new purchase record to the history
    },
  }
});

// Define an async thunk for fetching items
// export const fetchItems = createAsyncThunk(
//   'items/fetchItems',
//   async () => {
//     try {
//       const response = await getProducts();
//       const items = response; // Directly use the returned data (assuming it's not nested under data)

//       console.log('Fetched items:', items); // Check what is returned

//       // Separate items based on category
//       const vegItems = items.filter((item) => item.category === 'Veg');
//       const nonVegItems = items.filter((item) => item.category === 'Non-Veg');

//       return { veg: vegItems, nonVeg: nonVegItems };
//     } catch (error) {
//       console.error('Error fetching items:', error);
//       throw error;
//     }
//   }
// );
// Export actions from slices
export const { addToCart, increment, decrement, removeFromCart, clearCart } = cartSlice.actions;
export const { addPurchase } = purchaseHistorySlice.actions;

// Configure the Redux store
const store = configureStore({
  reducer: {
    items: itemsSlice.reducer, 
    cart: cartSlice.reducer, 
    purchaseHistory: purchaseHistorySlice.reducer,
  },
  devTools: import.meta.env.MODE !== 'production', 
});

export default store;


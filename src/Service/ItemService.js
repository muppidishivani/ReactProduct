import axios from 'axios';
export const getProducts = async () => {
    
  const response = await axios.get(`http://localhost:8001/products`);
  console.log(response.data);
  return response.data;  
};
    // get the product list

    export const fetchProducts =  async() => {
        const response = await  axios.get('http://localhost:8001/products');
        return response.data;
    };

    //delete the product based on id
    export const deleteProduct = async (productId) => {
        await axios.delete(`http://localhost:8001/deletepro/${productId}`);
    };

    //fetch the product based on id
   









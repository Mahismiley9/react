import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { buyChocolateAction, buyChocolateActionS, returnChocolateAction } from './Redux/action';
import { useEffect } from 'react';
import axios from 'axios';
import { addNewProduct, addNewProductAction, deletePeoductAction, productAction } from './Redux/products/action';

function App() {
const {availableChocolates,totalChocolates,count}=useSelector(state=>state)
const {products,counter} = useSelector(state=>state)
const dispatch=useDispatch()
// console.log(reduxStore,"reduxStore")
useEffect(()=>{
  fetchData()
},[])
async function fetchData(){
 const result=await axios.get("https://dummyjson.com/products")
 if(result.status===200){
  dispatch(productAction(result.data.products))
 }
 console.log(result)
}

const buyChocolate=()=>{
dispatch(buyChocolateAction(3))
}
const returnChocolate=()=>{
  dispatch(returnChocolateAction(3))
  }
  const addNewProduct=()=>{
    const newProduct={
      "id": 30,
      "title": "iPhone 16",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      "images": [
          "https://cdn.dummyjson.com/product-images/1/1.jpg",
          "https://cdn.dummyjson.com/product-images/1/2.jpg",
          "https://cdn.dummyjson.com/product-images/1/3.jpg",
          "https://cdn.dummyjson.com/product-images/1/4.jpg",
          "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
      ]
  }
    dispatch(addNewProductAction(newProduct))
  }
  const handleDelete=(item)=>{
    dispatch(deletePeoductAction(item.id))
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={addNewProduct}>Add new iphon 16</button>

        {/* <h5>{counter.totalChocolates}</h5> */}
        
        {
          products?.products?.length>0
          ?
          products.products.map(item=>
          <> <h3>{item.title}</h3>
          <button onClick={()=>handleDelete(item)}>delete product</button>
          </>)
          :<h2>Data loading</h2>
        }
        <h2>toatalchocoloates {counter.totalChocolates}</h2>
       <h6>availableChocolates {counter.availableChocolates}</h6>
       <button onClick={buyChocolate}>buy chocolates</button>
       <button onClick={returnChocolate}>return chocolates</button>

      </header>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

function App() {
 const [amount,setAmount]= useState("");
 const handelSubmit=(e)=>{
  e.preventDefault();
  if(amount=== ''){
    alert("Please enter amount");
  }
  else{
    var options={
      key:"rzp_test_bzUF7dHHu10bz3",
      key_secret:"2WlfmFEKOd9qUOROlr3hT1",
      amount:amount*100,
      currency:"INR",
      name:"DEMO",
      desription:"Trail_purpose",
      handler:function(response){
        alert(response.razorpay_payment_id)
      },
      prefill:{
        name:"lenora",
        email:"lenoraannsamuel@gmail.com",
        contact:"9087656543",

      },
      notes:{
        address:"Razorpay corporate office"
      },
      theme:{
        color:"#3399cc"
      }
    };
    var pay=new window.Razorpay(options);
    pay.open()

  }
 }
  return (
    <div className="App">
      <h2>Payment</h2>
      <br/>
      <br/>
      <input type="text" placeholder='Enter amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
      <br/>
      <br/>
      <button onClick={handelSubmit}>submit</button>
    </div>
  );
}

export default App;

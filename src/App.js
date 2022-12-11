import './App.css';
import React,{useState} from 'react';

function App() {
  const [amount, setamount] = useState('');  

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_j7zso0Em8uAUYB",
        key_secret:"zggLaj6TVkCxBIJblymwdRDt",
        amount: amount *100,
        currency:"INR",
        name:"Razorpay",
        handler: function(response){
          console.log(response.razorpay_payment_id)
          alert(response.razorpay_payment_id);
          
        },
        prefill: {
          name:"Akshay Makwana",
          email:"akshaymakwana350@gmail.com",
          contact:"7566454431"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <div className="App">
     <h2>Razorpay Payment Integration</h2>
     <br/>
     <input type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
     <br/><br/>
     <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default App;

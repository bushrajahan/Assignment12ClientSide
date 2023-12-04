import { loadStripe } from "@stripe/stripe-js";
import Title from "../../Components/Title";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";

 
const Payment = () => {
  const stripePromise =loadStripe('pk_test_51OJUuZDBAb7i6bGUN7B2vXsj9RUzB6uhf0zmmDv6ZwgWLvhVZcsnbE0ixnkT3xiFe0hCQcktKFdX0l8FDHZ9RpEy00avNxbRzR')

  return (
    <div>
       <Title text="Pay " win="money"></Title>
       <div className="lg:mx-36">
        <Elements  stripe={stripePromise}>
          <CheckOut></CheckOut>
        </Elements>
       </div>
      
    </div>
  );
};

export default Payment;
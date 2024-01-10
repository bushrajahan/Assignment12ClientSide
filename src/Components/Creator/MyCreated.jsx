
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { FaAd, FaAdn } from "react-icons/fa";
import useAxiosPublic from "../useAxiosPublic";
import DatePicker from "react-datepicker";
import UseAuth from "../Auth/UseAuth";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MyCreated = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit } = useForm();
  const {user} = UseAuth()

  const image_hoisting_key = 'b275e6870f52a5447358b1f6193ee956';
  console.log(image_hoisting_key)
  const image_hoisting_api =`https://api.imgbb.com/1/upload?key=${image_hoisting_key}`

  //image upload to the imgbb and then get the url and send it to the database
  const axiosPublic = useAxiosPublic()
  const onSubmit = async(data) =>{ console.log(data)
  const imageFile = {image: data.img[0]}

    const res = await axiosPublic.post(image_hoisting_api,imageFile,{
      headers:{        
        'Content-Type':'multipart/form-data'
       }
    })
    console.log(res.data)
    if(res.data.success){
      //now the send message to the server use the url 
      const Data = {
       contestName:data.name,
       image:res.data.data.display_url,
       shortDescription:data.details,
       attemptedCount:0,
       price:data.price,
       prize:data.prize,
       contestType:data.category,
       winnning:data.prizeMoney,
       email:user?.email,
       name:user?.displayName,
       hours:data.date,
       status:'pending'
      
      }
      console.log(Data)
      fetch(`http://localhost:300/add`,{
        method:'POST',
        headers:{
          "Content-Type":'application/json',
        },
        body:JSON.stringify(Data)
      })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
  
        if (data.insertedId) {
          toast.success('Data Added successfully!', {
            position: 'top-right',
            autoClose: 3000, // Adjust the duration
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          toast.error('Failed to submit data. Please try again.', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      });
  }

      

    }



  return (
    <div>
         <ToastContainer />
      <form className="mx-6 text-bold text-pink-600 font-jost " onSubmit={handleSubmit(onSubmit)}>
        <label>Contest Name</label>

        <label className="form-control w-full  ">
         
          <input
            type="text"
            placeholder="Contest Name"
            {...register('name', {required:true})}
            className="input input-bordered w-full"
          />
      
        </label>
        <div className="flex gap-2 ">
        <label className="form-control w-full ">
  <label htmlFor="">Category</label>
  <select {...register('category',{required:true})} className="select select-bordered">
    <option disabled selected>Category</option>
    <option>Gaming</option>
    <option>Article</option>
    <option>Medical</option>
    
  </select>
 
</label>
{/* price */}


        <label className="form-control w-full ">
        <label>price</label>
          <input
            type="number"
            placeholder="price"
            {...register('price',{required:true})}
            className="input input-bordered w-full"
          />
      
        </label>
        <label className="form-control w-full ">
        <label>Contest Prize</label>
          <input
            type="text"
            placeholder="prize"
            {...register('prize',{required:true})}
            className="input input-bordered w-full"
          />
      
        </label>
        <label className="form-control w-full ">
        <label>prize Money</label>
          <input
            type="number"
            placeholder="PrizeMoney"
            {...register('prizeMoney',{required:true})}
            className="input input-bordered w-full"
          />
      
        </label>
        </div>
        <label className="form-control">
  <div className="label">
    <span className="label-text">Details</span>
   
  </div>
  <textarea {...register('details',{required:true})} className="textarea textarea-bordered h-24" placeholder="Details"></textarea>

</label>
  <div>
    <label className="">Image</label>
    <p></p>
<input {...register('img',{required:true})} type="file" className="my-4 file-input w-full bg-yellow-400 max-w-xs" />
<br />
<label htmlFor="" className="block ">Date</label>
 

<input type="date" {...register('date',{required:true}) } />

  </div>
 

       <button className="btn bg-yellow-300 my-4">
        AddItem
        <FaAd></FaAd>
       </button>
      </form>
    </div>
  );
};

export default MyCreated;

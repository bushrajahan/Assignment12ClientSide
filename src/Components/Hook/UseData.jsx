import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useData= () => {
  const [datas, setData] = useState([]);
  const[loading,setLoading] = useState(false)
  useEffect(()=>{
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => {setData(data)
         setLoading(true)
    })
  },[])

  return [datas,loading];
};

export default useData;
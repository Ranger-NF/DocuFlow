"use client";

import Aadhar from "./aadhar";
import axios from 'axios';
import useSWR from 'swr';
const fetcher = url => axios.get(url).then(res=>res.data)

export default function DocumentSWR(){
  const {data,error} = useSWR('http://192.168.177.88:3000/document',fetcher)

  if(error) return console.log(error)
  if(!data) return console.log("Loading") 
  return (
    <div>
      <Aadhar/>
    </div>
    );
  } 


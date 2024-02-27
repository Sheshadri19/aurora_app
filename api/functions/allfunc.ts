import { BannerHomeRoot } from "@/interface/homeBanner";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";
import { RootDemo } from "@/interface/demointerface";
import { keyfactorInt } from "@/interface/keyfactorinter";
import { keytabinter } from "@/interface/keyfactortabinter";

import { Rootclient } from "@/interface/clientinter";
import { priceinterroot } from "@/interface/priceinter";
import { Rootblogall } from "@/interface/blogallinter";
import { useRouter } from "next/router";
import { blogdetinter } from "@/interface/blogdetailsinter";


export const homebannerfunc=async()=>{
    const res=await axiosInstance.get<BannerHomeRoot>(
     endpoints.pageEnd.homepage
    )
    // console.log("resp home page",res.data);
    return res as unknown as BannerHomeRoot
    
 }


// const payload={
//     "date"	:"2023-07-31T00:00:00.000Z",
//     "time":	"Time (4:00 pm)",
//     "first_name":"Luca",
//     "last_name":"Modric",
//     "email" :"luca08@yopmail.com",	
//     "phone":"956897589"
// }
 export const demofunc=async()=>{
    const res=await axiosInstance.post<RootDemo>(
        endpoints.pageEnd.demoend,{
            
                date	:"2023-07-31T00:00:00.000Z",
                time:	"Time (4:00 pm)",
                first_name:"Luca",
                last_name:"Modric",
                email :"luca08@yopmail.com",	
                phone:"956897589"   
                
        }
    )

    console.log("demo data",res.data);
    return res.data
    
 }



 export const keyfactorfunc=async()=>{
    const res=await axiosInstance.get<keyfactorInt>(
        endpoints.pageEnd.keyfactorend
    )

    console.log("keyfactors data",res.data);
    return res.data
    
 }
 

 export const keywordIDfunc=async(id:string)=>{
    const res=await axiosInstance.get<keytabinter>(
        endpoints.pageEnd.keyfactorIdend(id)
    )

    console.log("key tab ",res.data);
    return res.data
    
 }


 export const clientfunc=async()=>{
    const res=await axiosInstance.get<Rootclient>(
        endpoints.pageEnd.clientfeedbackend
    )
    console.log("client feedback ",res.data);
    return res.data
 }


 export const pricingfunc=async()=>{
    const res : priceinterroot=await axiosInstance.get(
        endpoints.pageEnd.pricingend
    )

    console.log("pricing ",res.data);
    return res.data
    
 }


 export const allblogfunc=async()=>{
    const res=await axiosInstance.post<Rootblogall>(
        endpoints.pageEnd.allblogend
    )

    console.log("all bl",res.data);
    return res.data
    
 }



 export const blogdetailsfunc=async(_id:number | string| undefined)=>{

    const res=await axiosInstance.get<blogdetinter>(
        endpoints.pageEnd.blogdetend(_id)
    )
    console.log("details of blog",res.data);
    return res.data
    

 }
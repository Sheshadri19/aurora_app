import { BannerHomeRoot } from "@/interface/homeBanner";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";
import { RootDemo } from "@/interface/demointerface";
import { keyfactorInt } from "@/interface/keyfactorinter";
import { keytabinter } from "@/interface/keyfactortabinter";


export const homebannerfunc=async()=>{
    const res=await axiosInstance.get<BannerHomeRoot>(
     endpoints.pageEnd.homepage
    )
    console.log("resp home page",res.data.data);
    return res?.data?.data
    
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

    console.log("demo data",res.data.data);
    return res.data.data
    
 }



 export const keyfactorfunc=async()=>{
    const res=await axiosInstance.get<keyfactorInt>(
        endpoints.pageEnd.keyfactorend
    )

    console.log("keyfactors data",res.data.data);
    return res.data.data
    
 }
 

//  export const keywordIDfunc=async(id:string)=>{
//     const res=await axiosInstance.get<keytabinter>(
//         endpoints.pageEnd.keyfactorIdend
//     )

//     console.log("key tab ",res.data.data);
//     return res.data.data
    
//  }
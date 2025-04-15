import { useState } from "react";
 export default function CodeInput({onParse}){
       const [code,setCode]=useState('<div><h1>Hello</h1><p>World</p></div>');
       const handleParse=()=>{
              onParse(code);
       }
       return (
              <div className="p-4">
                     <textarea
                     className="w-full h-40 p-2 border rounded"
                     value={code}
                     onChange={(e)=>setCode(e.target.value)}/>

                     <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
                     onClick={()=>handleParse()}>
                            Visualize DOM
                     </button>
              </div>
       )
 }
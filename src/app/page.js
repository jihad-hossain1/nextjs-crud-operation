'use client'

import Form from "@/components/form/Form"
import Table from "@/components/table/Table"
import React, { useState } from "react"
import { BiUserPlus } from 'react-icons/bi'

export default function Home() {

  const [visible, setVisible] = useState(false)
  
  const handler = () => {
    setVisible(!visible)
  }
  return (
    <main className="">
      <div className="mt-10">
        <h4 className="text-center  text-xl md:text-5xl font-bold">
      Employ Management
      </h4>
      </div>
      <div className="container mx-auto flex justify-between py-5 border-b">
        {/* add Employ  */}
        <div className="left flex gap-3">
          <button onClick={handler} className="rounded-md  hover:bg-indigo-400 flex bg-indigo-500 text-white px-4 py-2 items-center space-x-2">
           <span> Add Employ</span> <BiUserPlus size={20} />
          </button>
        </div>     
      </div>
      {/* collapsable form  */}
       {visible ?  <Form /> : <></>}

      <div>
         {/* table  */}
        <Table />
      </div>
    </main>
  )
}

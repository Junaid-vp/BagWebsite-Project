import React from 'react'
import { Link } from 'react-router-dom'
import Tote from '../Bag-Components/Tote-Bags/Tote'
import Shoulder from '../Bag-Components/Shulder-Bag/Shoulder'
import TopHandle from '../Bag-Components/TopHandle-Bag/TopHandle'
import CrossBody from '../Bag-Components/CrossyBody-Bag/CrossyBody'
import Mini from '../Bag-Components/Mini-Bag/MIni'
import AllBags from '../Bag-Components/All-Bags/Allbags'

function MiniNav({page,setPage}) {

  return (
    <div className="w-full py-10">

      
      <div>
        <h1 className="text-center text-2xl font-semibold tracking-wide text-gray-900">
          MOST-LOVED STYLES
        </h1>
      </div>

      
      <div className="mt-6">
        <nav className="flex justify-center gap-8 flex-wrap text-sm font-medium text-gray-700">

          <Link onClick={()=>setPage(<Tote/>)} className="pb-1 hover:text-black hover:border-b-2 hover:border-black cursor-pointer">
            TOTE
          </Link>

          <Link onClick={()=>{setPage(<Shoulder/>)
        }} className="pb-1 hover:text-black hover:border-b-2 hover:border-black cursor-pointer">
            SHOULDER
          </Link>

          <Link  onClick={()=>setPage(<TopHandle/>)} className="pb-1 hover:text-black hover:border-b-2 hover:border-black cursor-pointer">
            TOP HANDLE
          </Link>

          <Link onClick={()=>setPage(<CrossBody/>)} className="pb-1 hover:text-black hover:border-b-2 hover:border-black cursor-pointer">
            CROSSBODY
          </Link>

          <Link onClick={()=>setPage(<Mini/>)} className="pb-1 hover:text-black hover:border-b-2 hover:border-black cursor-pointer">
            MINI & MICRO
          </Link>

          <Link onClick={()=>setPage(<AllBags/>)} className="pb-1 hover:text-black hover:border-b-2 hover:border-black cursor-pointer">
            ALL BESTSELLERS
          </Link>
        </nav>
      </div>

    </div>
  )
}

export default MiniNav


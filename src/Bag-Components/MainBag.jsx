import React, { useState } from 'react'
import MiniNav from '../Navbar-Section/MiniNav'
import Tote from './Tote-Bags/Tote'


function MainBag() {

const [page,setPage]=useState(<Tote/>) 
    return (
    <div >
      <div>
        <MiniNav page={page} setPage={setPage}/>
      </div>
      <div>
        
      {page}
      </div>
    </div>
  )
}

export default MainBag

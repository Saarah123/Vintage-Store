import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div>LandingPage
      <Link to = {"/Home"} > <Button >cLICK ME</Button></Link>  
    </div>
    
  )
}

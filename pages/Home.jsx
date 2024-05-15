import React from 'react'
import { Hero } from '../components/hero/Hero'
import { New, Recommand, Treading } from '../router'

import { LayoutSidebar } from '../components/layout/LayoutSideBar'

export const Home = () => {
  return (
    <div>
      <Hero/>
      {/* <LayoutSidebar> */}
      <Treading/>
      <New />
        <Recommand />
      {/* </LayoutSidebar> */}
    </div>
  )
}



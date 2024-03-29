import React from 'react'

import type { HeroType } from '@/types'
type HeroProps = Pick<HeroType, 'name' | 'cost'> & {
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(({ name, cost, onClick }, ref) => {
  return (
    <div
      ref={ref}
      className="flex h-full w-64 cursor-pointer flex-col rounded-md border-4 border-double border-[#552359] bg-black shadow-lg shadow-[#411348]/50"
      onClick={onClick}>
      <img
        className="border-1 h-4/5 w-full border-[#552359]"
        src={`https://imgtft.daviddong.me/tft-champion/TFT10_${name}.TFT_Set10.png`}
        alt={name}></img>
      <div className="flex h-1/5 w-full items-end justify-between bg-gradient-to-r from-[#411348] via-[#411348] to-[#821B6F] text-xl text-white">
        <span className="mb-1 ml-1">{name}</span>
        <span className="mb-1 mr-1">{cost}</span>
      </div>
    </div>
  )
})

export default Hero

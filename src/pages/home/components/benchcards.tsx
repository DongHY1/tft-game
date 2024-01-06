import { useKeyboardEvent } from '@react-hookz/web'
import { useAtom, useSetAtom } from 'jotai'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { benchCardsAtom, deckCardsAtom } from '@/store'
import type { HeroType } from '@/types'

export default function BenchCards() {
  const [hoverHero, setHoverHero] = useState<HeroType | null>(null)
  const setDeckCards = useSetAtom(deckCardsAtom)
  const [benchCards, setBenchCards] = useAtom(benchCardsAtom)
  useEffect(() => {
    console.log(benchCards)
    // todo
    // 如果benchCards 里面有三个一样的英雄，则展示一个两星的
  }, [benchCards])
  useKeyboardEvent(
    true,
    (ev) => {
      if (ev.key.toLowerCase() === 'e') {
        if (hoverHero) {
          setBenchCards((prevBenchCards) => prevBenchCards.filter((card) => card !== hoverHero))
          setDeckCards((prevDeckCards) => [...prevDeckCards, hoverHero])
        }
      }
    },
    [],
    { eventOptions: { passive: true } }
  )
  return (
    <div className="flex h-48 w-full space-x-4 bg-sky-100">
      这是备战区
      {benchCards.map((benchCard, index) => (
        /**
         * TODO:
         * 如果benchCards 里面有三个一样的英雄，则展示一个两星的
         * 如果benchCards里面有6个一样的英雄，则展示两个两星的
         * 如果有9 则是1个三星
         */
        <Button
          onMouseEnter={() => {
            setHoverHero(benchCard)
          }}
          onMouseLeave={() => {
            setHoverHero(null)
          }}
          key={index}>
          {benchCard.name}
        </Button>
      ))}
    </div>
  )
}

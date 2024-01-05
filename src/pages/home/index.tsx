import { useAtom } from 'jotai'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { counterAtom } from '@/store'
export default function Home() {
  const [count, setCount] = useAtom(counterAtom)
  return (
    <div className="h-40 w-40">
      <h1 className="text-bold text-3xl">Jotai</h1>
      <Button onClick={() => setCount(count + 1)}>Click me {count}</Button>
      <Link to="/about">About</Link>
    </div>
  )
}

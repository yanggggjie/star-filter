import _ from 'lodash'
import { clsx } from 'clsx'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Boundary from '@/components/Boundary.tsx'
import Test from '@/components/test.tsx'
interface Props {}

export default function App({}: Props) {
  return (
    <div>
      <button
        className={clsx('bg-red-500')}
        onClick={() => {
          console.log('aaa')
        }}
      >
        test
      </button>
      <Boundary>
        <Test></Test>
      </Boundary>
    </div>
  )
}

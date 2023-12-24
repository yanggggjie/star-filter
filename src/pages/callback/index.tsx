import _ from 'lodash'
import { clsx } from 'clsx'
import { useSearch } from '@tanstack/react-router'
import { useEffect } from 'react'
import axios from 'axios'
import * as process from 'process'
interface Props {}

export default function Index({}: Props) {
  const { code } = useSearch({
    strict: false,
  })
  useEffect(() => {
    async function exchangeCode() {
      const res = await axios.get(`/api/exchange-token?code=${code}`)
      console.log('res in exchangecode', res)
    }

    exchangeCode()
  }, [code])

  return <div>in callback</div>
}

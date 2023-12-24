import _ from 'lodash'
import { clsx } from 'clsx'
import { useEffect } from 'react'
import { useToken } from '@/store/useToken'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ofetch } from 'ofetch'

interface Props {}

export default function Index({}: Props) {
  const { setToken, token } = useToken()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const code = searchParams.get('code')
  // @ts-ignore
  useEffect(() => {
    async function exchangeCode() {
      // 没有code或者已有token就不用再请求了
      if (!code && token) {
        navigate('/')
        return
      }
      const res = await ofetch(`/api/exchange-token?code=${code}`, {
        method: 'GET',
      })

      if ('access_token' in res) {
        setToken(res.access_token)
        navigate('/')
      } else {
        console.log('error exchange token', res)
      }
    }
    exchangeCode()
  }, [code])

  return <div>in callback</div>
}

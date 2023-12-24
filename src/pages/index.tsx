import _, { divide } from 'lodash'
import { clsx } from 'clsx'
import { globalOfetch } from '@/globalOfetch'
import { useUserQuery } from '@/useApi/useUserQuery'
import { useIsRestoring } from '@tanstack/react-query'
import StarList from '@/components/StarList/StarList'
import User from '@/components/User/User'
import SearchBar from '@/components/SearchBar'
import { useState } from 'react'
interface Props {}

export default function Index({}: Props) {
  const [searchText, setSearchText] = useState('')
  return (
    <div className={'p-10'}>
      <div className={clsx('flex')}>
        <User></User>
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
        ></SearchBar>
      </div>
      <StarList searchText={searchText}></StarList>
    </div>
  )
}

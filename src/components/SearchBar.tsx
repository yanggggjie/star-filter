import _ from 'lodash'
import { clsx } from 'clsx'
import { Input } from '@/components/ui/input'
import { Search, XCircle } from 'lucide-react'
interface Props {
  searchText: string
  setSearchText: (searchText: string) => void
}

export default function SearchBar({ searchText, setSearchText }: Props) {
  return (
    <div className={'relative'}>
      <Input
        className={'px-10'}
        placeholder={'type to search'}
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value)
        }}
      />
      <Search className={'absolute top-1/2 -translate-y-1/2'}></Search>
      <XCircle
        className={'absolute top-1/2 -translate-y-1/2 right-2'}
      ></XCircle>
    </div>
  )
}

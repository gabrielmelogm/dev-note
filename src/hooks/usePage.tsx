import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"

type PagesProvideProps = {
  children: ReactNode
}

type PagesContextData = {
  page: string
  setPage: Dispatch<SetStateAction<string>>
}

const Pages = createContext<PagesContextData>({} as PagesContextData)

export function PagesProvider({ children }: PagesProvideProps) {
  const [ page, setPage ] = useState('list')

  return (
    <Pages.Provider value={{ page, setPage }}>
      {children}
    </Pages.Provider>
  )
}

export function usePage() {
  const context = useContext(Pages)
  return context
}
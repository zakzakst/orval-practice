'use client'

// import useSWR from "swr"

import { useGetUsers } from "@/orval/users"

export const GetComponent = () => {
  const { data } = useGetUsers()
  // const { data } = useSWR('https://jsonplaceholder.typicode.com/todos/1', url => fetch(url).then(r => r.json()))
  // const { data } = useSWR('/api/todos', url => fetch(url).then(r => r.json()))

  return <div>
    <h1>Get</h1>
    <div>{JSON.stringify(data)}</div>
  </div>
}
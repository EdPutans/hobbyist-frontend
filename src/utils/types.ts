import { NavigateFunction } from "react-router-dom"

export type RouteItem = {
  path: string
  element: (props: { navigate: NavigateFunction }) => JSX.Element
  navText?: string
}

export type ListEndpoint = "users" | 'hobbies'

export type User = {
  id: number
  fullName: string
  photoUrl: string
  email: string
  hobbies: Hobby[]
}

export type Hobby = {
  id: number
  name: string
  photoUrl: string
  isActive: boolean
  users: User[]
}

import { ImageListItem } from "../components/ImageList";
import { Hobby, User } from "../utils/types";

export const normaliseUser = (user: User): ImageListItem => ({
  id: user.id,
  name: user.fullName,
  imageUrl: user.photoUrl,
  subItems: normaliseHobbies(user.hobbies)
})

export const normaliseHobby = (hobby: Hobby): ImageListItem => ({
  id: hobby.id,
  name: hobby.name,
  imageUrl: hobby.photoUrl,
  subItems: normaliseUsers(hobby.users)
})

export const normaliseUsers = (users: User[] | null): ImageListItem[] => {
  if (!users) return [];

  return users.map(normaliseUser)
}

export const normaliseHobbies = (hobbies: Hobby[] | null): ImageListItem[] => {
  if (!hobbies) return [];

  return hobbies.map(normaliseHobby)
}
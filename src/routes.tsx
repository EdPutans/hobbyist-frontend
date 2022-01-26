import { Navigate } from "react-router-dom";
import { Hobby, User } from "./utils/types";
import Items from "./pages/Items";
import { normaliseHobbies, normaliseHobby, normaliseUser, normaliseUsers } from "./utils/normalisers";
import { RouteItem } from "./utils/types";
import SingleItemPage from "./pages/SingleItemPage";

const routes: RouteItem[] = [
  {
    path: '/',
    element: () => <Navigate to={'/users'} />
  },
  {
    navText: "Users",
    path: '/users/',
    element: ({ navigate }) => <Items<User[] | null> endpoint="users" title="People" normaliseItems={normaliseUsers} navigate={navigate} />
  },
  {
    path: '/users/:id',
    element: ({ navigate }) => <SingleItemPage endpoint="users" subItemsTitle="Hobbies they like" normaliseItem={normaliseUser} handleSubItemNav={(id) => navigate(`/hobbies/${id}`)} />
  },
  {
    navText: "Hobbies",
    path: '/hobbies/',
    element: ({ navigate }) => <Items<Hobby[] | null> endpoint="hobbies" title="Hobbies" normaliseItems={normaliseHobbies} navigate={navigate} />
  },
  {
    path: '/hobbies/:id',
    element: ({ navigate }) => <SingleItemPage endpoint="hobbies" subItemsTitle="People who enjoy it" normaliseItem={normaliseHobby} handleSubItemNav={(id) => navigate(`/users/${id}`)} />
  },
  {
    path: '*',
    element: () => <p>404</p>
  },
]

export default routes;
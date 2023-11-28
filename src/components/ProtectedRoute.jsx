import { useNavigate } from "react-router-dom"


export default function ProtectedRoute({children, user}) {
   const navigate = useNavigate();
    if(!user) return navigate('/')
  return children;
}

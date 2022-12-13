// import { useLocation } from "react-router-dom"
import { useEffect } from "react"
const GoToTop = () => {
  const routePath = useLocation()
  const toTop = () => {
    window.scrollTo(0, 0)
  }
  useEffect(()=>{
    toTop()
  }, [routePath])
  return null
}

export default GoToTop
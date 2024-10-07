import { Link } from "react-router-dom"
import CoolButton from "../components/atoms/CoolButton"

function ErrorPage() {
  return (
    <div className="my-40">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center">
          <span className="text-sky-200/80 text-8xl">404</span>
          <span className="text-sky-200/80 text-xl">Nothing's here...</span>
        </div>
        <Link to="/">
          <CoolButton>
              Go Back
          </CoolButton>
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
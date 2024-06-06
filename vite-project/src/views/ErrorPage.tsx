import { useRouteError } from "react-router-dom"

interface RouteError {
    data: string
    error: {
      message: string
      stack: string
    }
    internal: boolean
    status: number
    statusText: string
  }

export default function ErrorPage() {
  const errorResponse = useRouteError() as RouteError
  console.error(errorResponse)
const {status, statusText, error} = errorResponse
  return (
    <div id="error-page">
      <h1>{status} {statusText}</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.message}</i>
      </p>
    </div>
  )
}
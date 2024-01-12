import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>OOPS</h1>
      <h2>Something Went Wrong!</h2>
      <h1>{err.status} : {err.statusText}</h1>
    </div>
  )
}

export default Error;
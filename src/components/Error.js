import { useRouteError } from "react-router-dom";

const Error = ()=>{

    const err = useRouteError();
    console.log(err);

    return(
        <div className="error-wrapper">
            <h2>404 found</h2>
            <p>Looks like something went wrong..!</p>
        </div>
    )
}

export default Error;
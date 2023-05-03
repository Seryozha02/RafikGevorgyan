import { Link } from "react-router-dom";

function NotFoundPage() {
    return(
        <div>
            This page is not found please go to <Link to="/RafikGevorgyan">Home</Link>
        </div>
    )
}

export default NotFoundPage;
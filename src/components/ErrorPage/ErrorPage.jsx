import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <p className="text-6xl">Oppsss!!</p>
            <Link style={{textDecoration: 'underline'}} to='/'>Home</Link>
        </div>
    );
};

export default ErrorPage;
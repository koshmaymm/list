import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import './index.css';

const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <h1>Page not found</h1>
            <Link to="/" className="link">
                <Button variant="text">Go to main page !</Button>
            </Link>
        </div>
    )
}

export default NotFoundPage;
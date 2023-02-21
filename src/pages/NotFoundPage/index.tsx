import { Link as ReactLink } from "react-router-dom";
import Button from '@mui/material/Button';
import './index.css';

const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <h1>Page not found</h1>
            <ReactLink to="/" className="link">
                <Button variant="text">Go to main page !</Button>
            </ReactLink>
        </div>
    )
}

export default NotFoundPage;
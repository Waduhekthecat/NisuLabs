import { useState } from 'react';
import { Link } from "react-router-dom";
import './HomeBtns.css';

const HomeBtns = () => {
    const [hovered, setHovered] = useState(null);
    const getLeftButtonClass = () => {
        if (hovered === 'right') return 'btn-outline';
        return 'btn-solid';
    };

    const getRightButtonClass = () => {
        if (hovered === 'left' || hovered === null) return 'btn-outline';
        return 'btn-solid';
    };
    return (
        <div className="home-buttons">
            <Link to="/DLC"
                className={`btn ${getLeftButtonClass()} left-btn`}
                onMouseEnter={() => setHovered('left')}
                onMouseLeave={() => setHovered(null)}
            >
                Our Process
            </Link>
            <Link to="/Contact"
                className={`btn ${getRightButtonClass()} right-btn`}
                onMouseEnter={() => setHovered('right')}
                onMouseLeave={() => setHovered(null)}
            >
                Request Quote
            </Link>
        </div>
    );
};

export default HomeBtns;

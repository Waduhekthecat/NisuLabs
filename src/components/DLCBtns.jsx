import { useState } from 'react';
import { Link } from "react-router-dom";
import './DLCBtns.css';

const DLCBtns = () => {
    const [hovered, setHovered] = useState(null);
    const getLeftButtonClass = () => {
        if (hovered === 'right') return 'dlc-btn-outline';
        return 'dlc-btn-solid';
    };

    const getRightButtonClass = () => {
        if (hovered === 'left' || hovered === null) return 'dlc-btn-outline';
        return 'dlc-btn-solid';
    };
    return (
        <div className="DLC-buttons">
            <Link to="/Services"
                className={`dlc-btn ${getLeftButtonClass()} left-btn`}
                onMouseEnter={() => setHovered('left')}
                onMouseLeave={() => setHovered(null)}
            >
                Services Offered
            </Link>
            <Link to="/Technologies"
                className={`dlc-btn ${getRightButtonClass()} right-btn`}
                onMouseEnter={() => setHovered('right')}
                onMouseLeave={() => setHovered(null)}
            >
                How DLC Works
            </Link>
        </div>
    );
};

export default DLCBtns;

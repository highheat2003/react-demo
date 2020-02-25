import React from 'react';
import { Link } from "react-router-dom";

const Header = () => (
    <div>
        <ul className="hmenu">
            <li>
                <Link to="/counter">Counter</Link>
            </li>
            <li>
                <Link to="/counter2">Counter2</Link>
            </li>
            <li>
                <Link to="/todo">Todo</Link>
            </li>
            <li>
                <Link to="/crud">Crud</Link>
            </li>
        </ul>
    </div>
)

export default Header;

import "./Navigation.css";
import { NavLink,useNavigate } from "react-router-dom";
import {FaCheckCircle, FaClock, FaListAlt, FaHome } from "react-icons/fa";
import RoutesItems from "./Routes";

export const Navigation = () => {
  const navigate = useNavigate();
  return (
      <div className="layout">

        {/* Sidebar */}
        <nav className="sidebar">
          <div className="logo-section" onClick={() => navigate("/")}>
            <div className="logo-icon">🚀</div>
            <h2 className="logo-text">Task Manager</h2>
          </div>

          <ul className="nav-links">
            <li>
              <NavLink to="/" end>
                <FaHome className="nav-icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/todotasks">
                <FaListAlt className="nav-icon" />
                <span>Todo Tasks</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/pendingtasks">
                <FaClock className="nav-icon" />
                <span>Pending Tasks</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/completedtasks">
                <FaCheckCircle className="nav-icon" />
                <span>Completed Tasks</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="main-content">
          <RoutesItems />
        </div>

      </div>
  );
};

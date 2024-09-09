import {FaSignInAlt, FaUserPlus, FaSignOutAlt} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset} from '../features/auth/authSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth);

    const logoutFn = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>Task Manager</Link>
            </div>
            <ul>
                {
                    user ? (
                        <li>
                            <button className='btn' onClick={logoutFn}>
                                <FaSignOutAlt /> Logout
                            </button>
                        </li>
                    ) : (
                        <>
                            <li>
                                <Link to='/login'><FaSignInAlt /> Login</Link>
                            </li>
                            <li>
                                <Link to='/register'><FaUserPlus /> Register</Link>
                            </li>
                        </>
                    )
                }
            </ul>
        </header>
    )
}

export default Header
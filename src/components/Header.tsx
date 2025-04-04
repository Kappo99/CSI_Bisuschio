import React, { useEffect, useState } from 'react';
import KMsolution from '../images/KMsolution_black.svg';
import { MdLogout, MdPerson } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../redux/slices/authSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addNotification } from '../redux/slices/notificationSlice';
import { MessageType } from '../types';

function Header() {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const { loading, error } = useAppSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
    };

    useEffect(() => {
        if (error) {
            dispatch(addNotification({ message: error, type: MessageType.ERROR }));
        }
    }, [error]);

    return (
        <>
            <nav className='w-full bg-white shadow-lg text-sm mb-6'>

                <div className='container w-full py-3 lg:py-5'>

                    <div className='flex flex-col md:flex-row items-center justify-between gap-x-10 gap-y-6'>

                        <Link to='/'>
                            <img src={KMsolution} className='w-auto h-8' alt='Agenda Elettronica' />
                        </Link>

                        <span className='flex-1 h2 text-center'>Agenda Elettronica</span>

                        <div className='flex justify-end'>
                            {location.pathname === '/profilo' ? (
                                <button className='btn btn-danger' onClick={handleLogout}>Logout <MdLogout size={18} /></button>
                            ) : (
                                <Link to='/profilo' className='btn btn-primary'>Profilo <MdPerson size={18} /></Link>
                            )}
                        </div>

                    </div>

                </div>

            </nav>
        </>
    );
}

export default Header;

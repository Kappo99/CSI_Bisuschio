import { MdLogout, MdPerson } from 'react-icons/md';
import logo_account from '../../images/logo_account.jpg';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logout } from '../../redux/slices/authSlice';

interface IProps {
  isOpen: boolean;
}

function ProfileCard({ isOpen }: IProps) {
  const dispatch = useAppDispatch();

  const { role: userRole, fullName } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={`bg-white text-black rounded-lg ${isOpen ? 'p-3' : 'mx-2 p-1'}`}>
      <div className='flex items-center justify-between gap-3'>
        {isOpen && (
          <div className='flex items-center gap-3'>
            {/* <figure className='w-10 h-10 rounded-full border border-black'>
            <img className='w-full h-full rounded-full' src={logo_account} alt={name ?? 'Play Training'} />
          </figure> */}
            <MdPerson size={32} />
            <div className=''>
              <p className='font-bold'>{fullName}</p>
              <p className='text-sm'>{userRole}</p>
            </div>
          </div>
        )}
        <button className='text-red-500 hover:text-red-700' onClick={handleLogout} title='Logout'>
          <MdLogout size={24} />
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
import React, { useEffect } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {BsChatLeft} from 'react-icons/bs'
import {RiNotification3Line} from 'react-icons/ri'
import {MdKeyboardArrowDown} from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../asset/avatar.jpg'

import {Cart, Chat, Notification, UserProfile} from '.'
import {useSelector, useDispatch} from 'react-redux'
import { toggleSidebar, handleOpenState, handleScreenSize } from '../features/features-slice'

// button component
const NavButton = ({title, customFunc, icon, color, dotColor}) => {
 return <TooltipComponent content={title} position='BottomCenter'>
  <button type='button' onClick={customFunc} style={{color: `${color}`}} className='relative flex justify-center text-xl rounded-full p-3 hover:bg-light-gray'>
    <span style={{background: `${dotColor}`}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'>
    </span>   
    {icon}
  </button>
</TooltipComponent>
}

const Navbar = () => {
  const dispatch = useDispatch()

  const { isSidebarOpen, isOpen, screenSize } = useSelector((state) => state.features);

  const {isCartOpen, isChatOpen, isNotificationOpen, isProfileOpen} = isOpen

  const handleResize = () => dispatch(handleScreenSize(window.innerWidth))

  
  useEffect(() => {    
    window.addEventListener('resize', handleResize)
  
    if(screenSize <= 900) {
      dispatch(toggleSidebar(false))
    } else {
      dispatch(toggleSidebar(true))
    }
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [screenSize])
  
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title='Menu' customFunc={() => dispatch(toggleSidebar(!isSidebarOpen))} color='blue' icon={<AiOutlineMenu />} />

      <div className='flex'>
        <NavButton 
        title='Cart' 
        customFunc={() => dispatch(handleOpenState({cart: true}))}
        color='blue'
        icon={<FiShoppingCart/>}
        />
        <NavButton 
        title='Chat' 
         customFunc={() => dispatch(handleOpenState({chat: true}))} color='blue'
        dotColor='#03c9d7' 
        icon={<BsChatLeft />} 
        />
        <NavButton 
        title='Notifications' 
        customFunc={() => dispatch(handleOpenState({notification: true}))} color='blue' 
        dotColor='#03c9d7'
        icon={<RiNotification3Line />} 
        />
      <TooltipComponent content='Profile' position='BottomCenter'>
        <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => {}}>
          <img src={avatar} alt='user' className='rounded-full w-8 h-8' />
          <p>
            <span className='text-gray-400 text-14'>Hi,</span> {' '}
            <span className='text-gray-400 font-bold ml-1 text-14'>Michael</span>
          </p>
          <MdKeyboardArrowDown className='text-gray-400 text-14' />
        </div>
      </TooltipComponent>

      {isCartOpen && <Cart />}
      {isChatOpen && <Chat />}
      {isNotificationOpen && <Notification />}
      {isProfileOpen && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar
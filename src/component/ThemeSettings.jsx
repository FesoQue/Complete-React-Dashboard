import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useSelector, useDispatch } from 'react-redux';
import {
  handleThemeMode,
  handleColorMode,
  handleThemeSettings,
} from '../features/theme-slice';
import { themeColors } from '../asset/dummy';
import { itemsToOrder } from '@syncfusion/ej2/treemap';

const ThemeSettings = () => {
  const dispatch = useDispatch();

  const { currentMode, currentColor, themeSettings } = useSelector(
    (state) => state.themes
  );

  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      <div className='float-right h-screen dark:text-gray-200 bg-white dark:[#484b52] w-400 '>
        <div className='flex justify-between items-center p-4 ml-4'>
          <p className='font-semibold text-xl'>Settings</p>
          <button
            type='button'
            onClick={() => {
              dispatch(handleThemeSettings(false));
            }}
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
            className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className='flex-col border-color border-t-1 p-4 ml-4'>
          <p className='font-semibold text-lg'>Theme Options</p>

          <div className='mt-4'>
            <input
              type='radio'
              id='light'
              value='light'
              name='theme'
              className='cursor-pointer'
              onChange={(e) => {
                dispatch(handleThemeMode(e.target.value));
              }}
              checked={currentMode === 'light'}
            />
            <label htmlFor='light' className='ml-2 text-md cursor-pointer'>
              Light
            </label>
          </div>
          <div className='mt-4'>
            <input
              type='radio'
              id='dark'
              value='dark'
              name='theme'
              className='cursor-pointer'
              onChange={(e) => {
                dispatch(handleThemeMode(e.target.value));
              }}
              checked={currentMode === 'dark'}
            />
            <label htmlFor='dark' className='ml-2 text-md cursor-pointer'>
              Dark
            </label>
          </div>
        </div>
        <div className='flex-col border-color border-t-1 p-4 ml-4'>
          <p className='font-semibold text-lg'>Theme Colors</p>
          <div className='flex gap-3'>
            {themeColors.map((color, index) => {
              return (
                <TooltipComponent
                  key={index}
                  content={color.name}
                  position='TopCenter'
                >
                  <div className='relative mt-2 cursor-pointer flex gap-5 items-center'>
                    <button
                      type='button'
                      className='h-8 w-8 flex justify-center items-center rounded-full cursor-pointer'
                      style={{ backgroundColor: color.color }}
                      onClick={() => {
                        dispatch(handleColorMode(color.color));
                        dispatch(handleThemeSettings(false));
                      }}
                    >
                      <BsCheck
                        className={`text-2xl text-white ${
                          color.color === currentColor ? 'block' : 'hidden'
                        }`}
                      />
                    </button>
                  </div>
                </TooltipComponent>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;

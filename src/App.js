import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { Navbar, Footer, Sidebar, ThemeSettings } from './component';

const App = () => {
  const dispatch = useDispatch();

  const { isSidebarOpen } = useSelector((state) => state.modal);

  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content='settings' position='top'>
              <button
                type='button'
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                style={{ background: 'blue', borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {isSidebarOpen ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <h1>sidebar</h1>
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg '>sidebar</div>
          )}
          <div
            className={`'dark:bg-main-bg bg-main-bg min-h-screen w-full' ${
              isSidebarOpen ? 'md:ml-72 w-full' : 'flex-2'
            }`}
          >
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              Navbar
            </div>
          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              <Route exact path='/' element={'ecommerce'} />
              <Route path='Ecommerce' element={'ecommerce'} />

              {/* Pages */}
              <Route path='/orders' element={'orders'} />
              <Route path='/employees' element={'employees'} />
              <Route path='/customers' element={'customers'} />

              {/* Apps */}
              <Route path='/kanban' element={'kanban'} />
              <Route path='/editor' element={'editor'} />
              <Route path='/calendar' element={'calendar'} />
              <Route path='/color-picker' element={'color-picker'} />

              {/* Charts */}
              <Route path='/line' element={'line'} />
              <Route path='/area' element={'area'} />
              <Route path='/bar' element={'bar'} />
              <Route path='/pie' element={'pie'} />
              <Route path='/financial' element={'financial'} />
              <Route path='/color' element={'color-mapping'} />
              <Route path='/pyramid' element={'pyramid'} />
              <Route path='/stacked' element={'stacked'} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

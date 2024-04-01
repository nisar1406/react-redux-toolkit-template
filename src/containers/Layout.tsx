import { useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Header from './Header';
import LeftSidebar from './LeftSidebar';
import ModalLayout from './ModalLayout';
import RightSidebar from './RightSidebar';
import { RootState } from '../app/store/store';
import { IChildren } from '../protected-routes';

const Layout = ({ children }: IChildren) => {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const { pageTitle } = useSelector((state: RootState) => state.header);

  // Scroll back to top on new page load
  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scroll({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [pageTitle]);

  return (
    <>
      {/* Left drawer - containing page content and side bar (always open) */}
      <div className="drawer lg:drawer-open">
        <input
          id="left-sidebar-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col ">
          <Header />
          <main
            className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6 bg-base-200"
            ref={mainContentRef}
          >
            {children}
            <div className="h-16"></div>
          </main>
        </div>
        <LeftSidebar />
      </div>
      {/* Right drawer - containing secondary content like notifications list etc.. */}
      <RightSidebar />

      {/** Notification layout container */}
      <ToastContainer />
      {/* Modal layout container */}
      <ModalLayout />
    </>
  );
};

export default Layout;

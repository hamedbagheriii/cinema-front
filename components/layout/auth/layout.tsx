import Logo from '@/utils/logo';
import React, { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title : string;
  icon : string;
}
const Layout: FC<LayoutProps> = ({ children , title , icon }) => {
  return (
    <div className='authLayout min-h-dvh py-10 w-full flex-col gap-10 flex items-center justify-center'>
      <Logo/>

      <div dir='rtl' className='w-11/12 md:w-6/12  py-5 max-w-96 rounded-lg
       bg-white shadow-black/50 shadow-2xl'>
        <div className='flex flex-col items-center justify-center '>
          <i className={`${icon} text-[70px] text-red-700`}></i>
          <span className='text-[20px] -mt-4 font-bold text-red-700'>{title}</span>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Layout;

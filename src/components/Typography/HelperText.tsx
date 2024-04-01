import React, { ReactNode } from 'react';

interface HelperTextProps {
  className?: string;
  children: ReactNode;
}

const HelperText: React.FC<HelperTextProps> = ({ className, children }) => {
  return <div className={`text-slate-400 ${className}`}>{children}</div>;
};

export default HelperText;

import { ReactNode } from "react";

const TextError = ({ children }: { children?: ReactNode }) => {
  return <div className="text-red-500 text-[11px] font-normal">{children}</div>;
};

export default TextError;

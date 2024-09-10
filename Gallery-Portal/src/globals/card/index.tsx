import React, { HTMLAttributes, ImgHTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  image?: string;
  text?: string;
  className?: string;
  imgProps?: ImgHTMLAttributes<HTMLImageElement>; // Additional props for img element
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ image, text, className, imgProps, ...props }) => {
  return (


    <div className={`bg-white  rounded-lg shadow-lg ${className}`}>
      {image && (
        <img
          src={image}
          className="w-full h-[400px] object-cover "
          {...imgProps}
        />
      )}

      {text && <p className="text-gray-700 text-lg">{text}</p>}


      <div>{props.children}</div>
    </div>


  );
};

export default Card;
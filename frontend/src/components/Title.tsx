import React from "react";


export const TitleComp = ({title}): JSX.Element => {
  return (
   
        <div className="title-container">
          <div className='div-title-line'>
            <h3 className='serif fw-700'>{title}</h3>
          </div>
        </div>
  );
};



export const Title = ({title, headingStyle, spanStyle, className}): JSX.Element => {
  return (
   
        <div className="container">
          <div className={className}>
            <p className={headingStyle}>{title}</p>
            <hr className={spanStyle}/>
          </div>
          {/* <div className='div-line'></div> */}
        </div>
  );
};


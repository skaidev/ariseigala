import React from "react";


const TitleComp = ({title}): JSX.Element => {
  return (
   
        <div className="title-container">
          <div className='div-title-line'>
            <h3 className='serif fw-700'>{title}</h3>
          </div>
          {/* <div className='div-line'></div> */}
        </div>
  );
};

export default TitleComp;
import React from "react";


const NewsLetterComp = (): JSX.Element => {
  return (
    <section className='bg-dark hh-50 my-5'>
        <div className="container text-light p-5 text-center">
           <div className="inner w-75 mx-auto">
              <h3 className='serif fw-700'>Subscribe to our daily newsletter</h3>
              <p> Lorem ipsum dolor sit amet consectetur, 
                  adipisicing elit. Ratione tempora nemo 
                  incidunt nulla perspiciatis beatae, alias, 
                  aut minima ab sed facilis recusandae aperiam 
                  blanditiis, amet natus reiciendis. Nobis, 
                  nesciunt temporibus!.Incidunt nulla perspiciatis beatae, alias, 
                  aut minima ab sed facilis recusandae aperiam 
                  blanditiis, amet natus reiciendis. Nobis, 
                  nesciunt temporibus! </p>
              <div className='mt-5 w-50 mx-auto d-flex'>
                  <input type='Email' placeholder='Email' className='py-2 me-3 bg-dark form-control w-75' />
                  <button className='px-5 py-2'> Subscribe </button>
              </div>
           </div>
        </div>
    </section>
  )
}

export default NewsLetterComp;
// import Image from 'next/image';

export default function AdvertisementComp ({text}): JSX.Element {
  return (
        <section className="advert w-63 mx-auto bg-dark d-flex justify-content-center align-items-center hh-30">
            <p className='text-light fs-4 fw-bold'>{text}</p>
        </section>
    )
};
// import Image from 'next/image';

export default function AdvertisementComp ({text}): JSX.Element {
  return (
        <section className="advert w-75 mx-auto my-5 bg-dark d-flex justify-content-center align-items-center hh-30">
            <p className='text-light fs-4'>{text}</p>
        </section>
    )
};
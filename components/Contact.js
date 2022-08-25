/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */


function Contact({ src, name }) {
  return (
    <div>
        <img
            className="rounded-full"
            objectfit="cover"
            src={src} 
            width={50}
            height={50}
            layout="fixed"
            />
            <p>{name}</p>
    </div>
  );
}

export default Contact;
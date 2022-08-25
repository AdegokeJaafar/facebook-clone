/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid"; 
import { db, storage, firebase } from "../firebase";
import { useSession } from "next-auth";
import { useRef, useState } from "react";

function InputBox() {
    const session = useSession;
    const inputRef = useRef(null);
    const filepickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);


    const sendPost = (e) => {
        e.preventDefault();

         if (!inputRef.current.value) return;

         db?.collection('posts').add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
         })
         .then(doc => {
             if (imageToPost) {
                const uploadTask = storage
                .ref(`posta/${doc.id}`)
                .putString(imageToPost, 
                'data_url');

                removeImage();

                uploadTask.on(
                    'state_change', 
                    null, 
                    (error) => console.error(error), 
                    () => {
                    // When the upload completes
                    storage.ref('posts').child(doc.id).getDownloadURL().then(url => {
                        db.collection('posts').doc(doc.id).set({
                            postImage: url,
                        },
                        { merge: true })
                    })
                })
             }
         })

        inputRef.current.value = "";         
    };

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        } 
        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result);
        }
    }; 

    const removeImage = () => {
        setImageToPost(null);
    }


  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
        <div className="flex space-x-4 p-4 items-center">
        <img
            className="rounded-full"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQH72fss_Ig7NA/profile-displayphoto-shrink_400_400/0/1639135128983?e=1666828800&v=beta&t=x5GiQ6QWpscmw0CwRxfEEi4L5lhg0CbjmjtsE5tSjgo"
            width="30"
            height="30"
            layout="fixed" 
        />

            <form className="flex flex-1">
                <input 
                    className="rounded-full h-12 bg-gray-100
                    flex-grow px-5  focus:outline-none"
                    type="text" 
                    ref={inputRef}
                    placeholder={`What's on your mind, Jaafar Adegoke `} 
                    />
                <button hidden type="submit" onClick={sendPost} className="text-primary">Submit</button>
            </form>
            
            {imageToPost && (
                <div 
                    onClick={removeImage} 
                    className="flex flex-col filter hover:brightness-110 transition 
                    duration-150 transform hover:scale-105 cursor:pointer">
                    <img className="h-10 object-contain" src={imageToPost} alt="" />
                    <p className="text-xs text-red-500 text-center">Remove</p>
                </div>
            )}
            
        </div>

        <div className="flex justify-evenly p-3 borde-t">
            <div className="inputIcon">
                <VideoCameraIcon className="h-7 text-red-500" />
                <p className="text-xs sm:text-sm 
                xl:text-base">Live Video</p>
            </div>

            <div 
                onClick={() => filepickerRef.current.click()}
                className="inputIcon"
                >
                <CameraIcon className="h-7 text-green-400" />
                <p className="text-xs sm:text-sm 
                xl:text-base">Photo/Video</p>
                <input type="file" ref={filepickerRef} onChange={addImageToPost} hidden/>
            </div>

            <div className="inputIcon">
                <EmojiHappyIcon className="h-7 text-yellow-300" />
                <p className="text-xs sm:text-sm 
                xl:text-base">Feeling Activity</p>
            </div>
        </div>
    </div>
  )
}

export default InputBox;
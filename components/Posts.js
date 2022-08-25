/* eslint-disable react/jsx-key */
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Post from "./Post";

function Posts({ post }) {
    const [realtimePosts] = useCollection(
        db?.collection('posts').orderBy('timestamp', 'desc')
    );


    return (
        <div>
            <Post />
                {/* // key={post.id}
                //  name={post.name}
                //  message={post.message}
                //  email={post.email}
                //  timestamp={post.timestamp}
                //  image={post.image}
                //  postImage={post.postImage} */}
            
            
        </div>
    );
}

export default Posts;    
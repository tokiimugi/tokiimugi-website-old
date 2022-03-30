import React, {useState} from "react";
import { ref, update, get, child } from "firebase/database";


export function Blog(props){
    const [post, setPost] = useState("");
    const [allPosts, setAllPosts] = useState([]);

    get(child(ref(props.data), 'tokiimugi')).then((snapshot) => {
        if (snapshot.exists()) {
            setAllPosts(snapshot.val().content)
        }
      }).catch((error) => {
        console.error(error);
      });


    const submit = ()=>{
        setAllPosts((prev)=>{  
            update(ref(props.data, 'tokiimugi'),{
                content: [ post, ...prev]
            })
            return [ post, ...prev]
        })

        setPost("");
    }

    return(
        <div className="main">

            <textarea className="post" value={post} onChange={({ target }) => setPost(target.value)} />
            
            <button onClick={submit}> submit
            </button>

            {allPosts.map((val, id) => {
                return <pre className="post" key={id}>{val}</pre>
            })}

        </div>
        )
}
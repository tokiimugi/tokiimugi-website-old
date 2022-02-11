import React, {useState} from "react";


export function Blog(){
    const [post, setPost] = useState("");
    const [allPosts, setPosts] = useState([]);

    const submit = ()=>{
        setPosts((prev)=>{
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
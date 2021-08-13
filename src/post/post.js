import {useEffect} from "react";

export function Post({item}){
    // let [comments,setComments] = useState([])
    // useEffect(()=>{
    //     getComment(item.id).then(({data})=>setComments([...data]))
    // },[])
    return(
        <div >
            <h3>Назва посту - {item.title}</h3>
            <h4>{item.body}</h4>
            {/*<div className='comment'>*/}
            {/*    <h3>Коментарі</h3>*/}
            {/*    {*/}
            {/*        comments.map(value =><Comments item={value} key = {value.id}/> )*/}
            {/*    }*/}

            {/*</div>*/}
        </div>

    )
}
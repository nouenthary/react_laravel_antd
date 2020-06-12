import React, {useEffect} from 'react';

const Article = () => {

    useEffect(() => {
        fetch("http://localhost:8000/api/articles").then((reponse)=> {
            console.log("HHH",reponse)
        })
    })

    return (
        <div>
            Article
        </div>
    );
}

export default Article;

import styled from "styled-components";



// hover image rules
@mixin hover_img {
    opacity: 40%;
    transition: 0.3s;
    transform: scale(1.1);
}


// Blog
div.blog-post {
    border: 2px dotted $primary1;
    padding: 1vw;
    margin: 0.5vw;
    a:link {
        text-decoration: none;
    }
    h2{
        text-shadow: none;
        text-decoration: none;
            }
            h5 {
                font-size: 0.7em;
                color: #5b666c;
                margin: 1vw;
            }
    .picture-post { 
    display: flex;
        img {
        width: 200px;
        border-radius: 25%;
        p {
            padding: 0.5vw;
            color: black;
        }

        @media screen and (max-width: 600px) {
            width: 40%;    
            object-fit: contain;
        }
    
        @media screen and (max-width: 800px) {
            width: 30%;    
            object-fit: contain;
        }
        }
        p {
            padding: 0.5vw;
            color: black;
        }
        img:hover {
        @include hover_img;
        }
    }
}

div.blog-post1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: 2em;
    }
    h5 {
        font-size: 0.7em;
        color: #5b666c;
        margin: 1vw;
    }

.picture-post1 {

    }
    img {
 
        margin: 0vw 20vw 5vw 20vw;
    }
    p {
        padding: 0.5vw;
        margin: 0vw 20vw 5vw 20vw;

    }
}

.comment-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 2vw;
        h1 {
        text-align: center;
    }
        .contact-form {
            width: 30%;
            margin: 1rem 5rem 5rem 5rem;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            @media screen and (max-width: 600px) {
                width: 60%;
            }
        
            @media screen and (max-width: 800px) {
                width: 60%;
            }
            #input-message {
            height: 100px;
                    }
            }
            form {
                button {
                    
                    background-color: $primary1;
                    margin: 1em 0em;
                
                    @media screen and (max-width: 600px) {
                        height: 50px;
                    }
                
                    @media screen and (max-width: 800px) {
                        height: 50px;
                    }

                }
                button:hover {
                    color: #AEB9F2;
                }    
            }
}
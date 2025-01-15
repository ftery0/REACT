import styled,{css} from "styled-components";

export const NewsContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
`
export const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

export const CategoriesBlock = styled.div`
    display: flex; 
    padding: 1rem; 
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
    width: 100%;
    }
`

export const Category = styled.div`
    font-size: 1.125rem; 
    cursor: pointer; 
    white-space: pre;
    text-decoration: none;
    color: inherit; 
    padding-bottom: 0.25rem;
    
    &:hover {
        color: #495057;
    }

    ${props => 
        props.active && 
        css`
            font-weight: 600;
            border-bottom: 2px solid #22b8cf;
            
            &:hover {
                color: #3bc9db;
            }
        `
    }

    & + & {
        margin-left: 1rem;
    }
`;


export const NewsItemBlock = styled.div`
    display: flex;

    .newsImage {
        margin-right: 1rem;

        img {
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }

    .contents {
        h2 {
            margin: 0;

            a {
                color: black;
                text-decoration: none;

                &:hover {
                    color: #495057;
                }
            }
        }

        p {
            margin: 0;
            line-height: 1.5;
            margin-left: 0.5rem;
            white-space: normal;
        }
    }

    & + & {
        margin-top: 3rem;
    }
`;

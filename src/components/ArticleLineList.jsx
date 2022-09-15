import React from 'react';
import ArticleLine from './ArticleLine';
import styled from 'styled-components';
import { Puff } from 'react-loading-icons';


function ArticleLineList({data,title,flag}) {
    return (
        <>
            <Head>
                <h1 className='title'>{title}</h1>
                <hr/>
            </Head>

            <ArticlesLine>                   
              {data.length ===0 ? <LoadingIcon><Puff stroke='#669495' /></LoadingIcon> : data.map((articulo) => (<ArticleLine key={articulo.id} data={articulo} flag={flag}/>))}
            </ArticlesLine>

        </>
    );
}

export default ArticleLineList;


const LoadingIcon = styled.div`
  display:flex;
  justify-content:center;
`


const Head = styled.div`
  margin: 10px 20px;
  h1{
    font-size: 25px;

  }

`
const ArticlesLine = styled.div`

  margin: 2em 4em  ;

  @media screen and (max-width: 1250px) {
    margin: 2em 2em  ;
  }

`

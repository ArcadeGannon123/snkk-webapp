import React from 'react';
import ArticleLine from './ArticleLine';
import styled from 'styled-components';

function ArticleLineList({data}) {
    return (
        <>

            <Head>
                <h1 className='title'>Noticias Recientes</h1>
                <hr/>
            </Head>

            <ArticlesLine>            
              {data.length ===0 ? <p>Cargando</p> : data.map((articulo) => (<ArticleLine key={articulo.id} data={articulo}/>))}
            </ArticlesLine>

        </>
    );
}

export default ArticleLineList;


const Head = styled.div`
  margin: 2em;
  h1{
    font-size: 2em;

  }

`
const ArticlesLine = styled.div`

  margin: 2em 4em  ;



`

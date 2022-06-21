import React from 'react';
import ArticleCard from './ArticleCard';
import styled from 'styled-components';

function ArticleCardList({data}) {
    return (
        <div>
            <Head>
                <h1 className='title'>Noticias Recientes</h1>
            </Head>
            <hr/>
            <ArticlesCard>
                {data.articles.map((articulo) => (
                    <ArticleCard data={articulo}/>
                ))}
            </ArticlesCard>

        </div>
    );
}

export default ArticleCardList;

const Head = styled.div`
  margin: 2em;
  h1{
    font-size: 3em;
    font-family: "Times New Roman";

  }

`

const ArticlesCard = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1em;
  margin: 4em;



`
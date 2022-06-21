import React from 'react'
import styled from 'styled-components'

function TopArt({data}) {
  return (
    <TopArticulo>
        <div className='ta-main'>
            <h1>{data[0].title}</h1>
            <img src={data[0].urlToImage} alt=''/>
            <p>{data[0].content}</p>
        </div>
        <div className='ta-list'>
            <div>
                <div>
                    <img src={data[1].urlToImage} alt=''/>
                </div>
                <div>
                    <h1>{data[1].title}</h1>
                    <p style={'text-overflow: ellipsis'}>{data[1].content}</p>
                </div>
            </div>
            <div>
                <div>
                    <img src={data[2].urlToImage} alt=''/>
                </div>
                <div>
                    <h1>{data[2].title}</h1>
                    <p style={'text-overflow: ellipsis'}>{data[2].content}</p>
                </div>
            </div>
            <div>
                <div>
                    <img src={data[3].urlToImage} alt=''/>
                </div>
                <div>
                    <h1>{data[3].title}</h1>
                    <p style={'text-overflow: ellipsis'}>{data[3].content}</p>
                </div>
            </div>
            <div>
                <div>
                    <img src={data[4].urlToImage} alt=''/>
                </div>
                <div>
                    <h1>{data[4].title}</h1>
                    <p style={'text-overflow: ellipsis'}>{data[4].content}</p>
                </div>
            </div>
        </div>
    
    </TopArticulo>
  )
}

export default TopArt


const TopArticulo = styled.div`

    display: grid;
    grid-template-columns: 70% 30%;
    gap: 1em;
    .ta-list{
        width: 100%;
        div{
            grid-template-columns: 30% 70%;
            
        }
    }
`
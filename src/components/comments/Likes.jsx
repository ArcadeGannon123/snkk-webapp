import React from 'react';
import styled from 'styled-components';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

function Likes({tipo,cantidad}) {
    return (
        <LikeWrapper>
            {tipo ?
                <span><ThumbUpOffAltIcon /> {cantidad}</span>
            :
                <span><ThumbDownOffAltIcon /> {cantidad}</span>
            }
        </LikeWrapper>
    );
}

export default Likes;

const LikeWrapper = styled.div`

`
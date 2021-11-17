import styled from '@emotion/styled'
import {css} from '@styled-system/css'
import SamplerStore from 'components/sampler/Sampler'


export default function App(){
    return(
        <Styled.Container>
            <h1>This is ZUSTART!</h1>
            <SamplerStore/>
        </Styled.Container>
    )
}

const Styled = {
    Container: styled('div')(css({
        color:['pink', 'green'],
        p:'12px'
    }))
}
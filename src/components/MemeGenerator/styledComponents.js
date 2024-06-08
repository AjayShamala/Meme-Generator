import styled from 'styled-components/macro'
export const AppContainer = styled.div`
    display:flex;
    justify-content:center;
    
`
export const MemeGeneratorss = styled.div`
    display:flex;
    flex-direction:column;
`
export const FormContainer = styled.form`
    background-color:white;
`
export const LabelContainer = styled.label`
    font-family:'Open Sans';
    font-size:20px;
    color: #7e858e;
`
export const InputContainer = styled.input`
    background-color:transparent;
    border-style:solid;
    border-color: #d7dfe9;
    border-width:1px;
`
export const SelectContainer = styled.select`
    padding:2px ;
`
export const OptionContainer = styled.option`
    background-color:transparent;
    border-style:solid;
    border-width:2px;
    border-color: #7e858e;
    `
export const CustomButton = styled.button`
    background-color:#0b69ff;
    border-width:0px;
    color:#ffffff;
    padding-left:20px;
    padding-right:20px;
`
export const DivContainer = styled.div`
    display:flex;
    flex-direction:column;
`
export const HeadingContainer = styled.h1`
    color:#1e293b;
    font-family:'Open Sans';
    font-size:28px;
    
`
export const MemeContents = styled.div`
    background-image:url(${props => props.backgroundImage});
    background-size:cover;
    height:100vh;
`
export const TextContent = styled.p`
    font-family:'Open Sans'
    font-size:${props => props.activeFontSize}px;
    color:#ffffff;

`

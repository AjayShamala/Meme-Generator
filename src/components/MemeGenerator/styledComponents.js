import styled from 'styled-components/macro'
export const AppContainer = styled.div`
    display:flex;
    padding-left:50px;
    
`
export const MemeGeneratorss = styled.div`
    display:flex;
    flex-direction:column;

`
export const FormContainer = styled.form`
    background-color:white;
    display:flex;
    flex-direction:column;
`
export const LabelContainer = styled.label`
    font-family:'Open Sans';
    font-size:16px;
    padding-bottom:8px;
    color: #7e858e;
    padding-top:8px;
`
export const InputContainer = styled.input`
    background-color:transparent;
    border-style:solid;
    border-color: #d7dfe9;
    height:4vh;
    padding-left:10px;
    width:15vw;
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
    padding-top:5px;
    margin-top:20px;
    cursor:pointer;
    outline:none;
    border-radius:6px;
    padding-bottom:5px;
`
export const DivContainer = styled.div`
    display:flex;
    justify-content:space-between;

`
export const HeadingContainer = styled.h1`
    color:#1e293b;
    font-family:'Open Sans';
    font-size:28px;
    
`
export const MemeContents = styled.div`
    background-image:url(${props => props.backgroundImage});
    background-size:cover;
    height:50vh;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding-left:100px;
    margin-left:100px;
    width:50vw;
`
export const TextContent = styled.p`
    font-family:'Open Sans'
    font-size:${props => props.activeFontSize}px;
    color:#ffffff;
    font-weight:bold;

`

import {Component} from 'react'
import {
  AppContainer,
  LabelContainer,
  MemeContents,
  MemeGeneratorss,
  InputContainer,
  FormContainer,
  OptionContainer,
  SelectContainer,
  TextContent,
  CustomButton,
  HeadingContainer,
  DivContainer,
} from './styledComponents'
const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
class MemeGenerator extends Component {
  state = {
    backImageInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeInput: fontSizesOptionsList[0].optionId,
    backImages: '',
    topText: '',
    bottomText: '',
    activeFontSize: '',
  }
  onChangeImageInput = event => {
    this.setState({backImageInput: event.target.value})
  }
  onChangeTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }
  onChangeBottomInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }
  onChangeFontsize = event => {
    this.setState({fontSizeInput: event.target.value})
  }
  onGenerateButton = event => {
    event.preventDefault()
    const {backImageInput, topTextInput, bottomTextInput, activeFontSize} =
      this.state
    this.setState({
      backImages: backImageInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSize: fontSizeInput,
    })
  }
  onRenderMemeGenerator = () => {
    const {backImageInput, topTextInput, bottomTextInput, fontSizeInput} =
      this.state
    return (
      <FormContainer onSubmit={this.onGenerateButton}>
        <LabelContainer htmlFor="images">Image URL</LabelContainer>
        <InputContainer
          type="text"
          id="images"
          value={backImageInput}
          onChange={this.onChangeImageInput}
          placeholder="Enter the Image URL"
        />
        <LabelContainer htmlFor="texts">Top Text</LabelContainer>
        <InputContainer
          id="texts"
          type="text"
          value={topTextInput}
          onChange={this.onChangeTopTextInput}
          placeholder="Enter the Top Text"
        />
        <LabelContainer htmlFor="textss">Top Text</LabelContainer>
        <InputContainer
          type="text"
          id="textss"
          value={bottomTextInput}
          onChange={this.onChangeBottomInput}
          placeholder="Enter the Bottom Text"
        />
        <LabelContainer htmlFor="textsss">Font Size</LabelContainer>
        <SelectContainer
          value={fontSizeInput}
          id="textsss"
          onChange={this.onChangeFontsize}
        >
          {fontSizesOptionsList.map(each => (
            <OptionContainer key={each.optionId} value={each.optionId}>
              {each.displayText}
            </OptionContainer>
          ))}
        </SelectContainer>
        <CustomButton type="submit">Generate</CustomButton>
      </FormContainer>
    )
  }
  renderMemes = () => {
    const {backImages, topText, bottomText, activeFontSize} = this.state
    return (
      <MemeContents backgroundImage={backImages}>
        <TextContent activeFontSize={activeFontSize}>{topText}</TextContent>
        <TextContent activeFontSize={activeFontSize}>{bottomText}</TextContent>
      </MemeContents>
    )
  }
  render() {
    return (
      <AppContainer>
        <MemeGeneratorss>
          <HeadingContainer>Meme Generator</HeadingContainer>
          <DivContainer>
            {this.renderMemes()}
            {this.onRenderMemeGenerator()}
          </DivContainer>
        </MemeGeneratorss>
      </AppContainer>
    )
  }
}
export default MemeGenerator

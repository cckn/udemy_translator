import fs from 'fs'
import { text as rowText } from './text'
import trans from './translate'

let resultContainer: string[] = ['']
let containerIdx = 0

const addText = (text: string) => {
  const lineLength = text.length
  const end = text[lineLength - 1]

  const result = end !== '.' ? ` ${text}` : ` ${text}\n\n`

  resultContainer[containerIdx] += result

  if (resultContainer[containerIdx].length > 4500 && end === '.') {
    containerIdx++
    resultContainer[containerIdx] = ''
  }
}

const writeTextToFiles = () => {
  resultContainer.forEach((value, index) => {
    fs.writeFileSync(`./result/${index}.txt`, value)
    console.log(value.length)
  })
}

const init = () => {
  rowText
    .split('\n')
    .filter(line => line.length)
    .forEach(line => {
      line = line.trim()
      addText(line)
    })
  writeTextToFiles()
  // trans()
  // translate('Ik spreek Engels', { to: 'en' })
  //   .then(res => {
  //     console.log(res.text)
  //     //=> I speak English
  //     console.log(res.from.language.iso)
  //     //=> nl
  //   })
  //   .catch(err => {
  //     console.error(err)
  //   })
}

init()

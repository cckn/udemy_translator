import fs from 'fs'
import { text as rowText } from './text'
import trans from './translate'

const writeTextToFiles = (rowArr: string[], transArr: string[]) => {
  console.log(rowArr)
  console.log(transArr)

  let result: string = ''
  rowArr.forEach((value, index) => {
    result = result.concat([value, transArr[index], '\n'].join('\n'))
  })
  fs.writeFileSync('./result.txt', result)
}

const init = () => {
  const rowArr = rowText
    .split('\n\n')
    .join(' ')
    .split(/\./)
    .filter(value => value.length > 1)
    .map(value => value.trim() + '.')

  console.log(rowArr)

  const translatedArr = rowArr.map(value => trans(value, 'ko'))
  Promise.all(translatedArr).then(transArr => {
    writeTextToFiles(rowArr, transArr)
  })
}

init()

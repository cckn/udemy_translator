import dotenv from 'dotenv'

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
dotenv.config()

const projectId = process.env.G_PROJECT_ID // const projectId = 'project-id'
const keyFilename = process.env.G_KEYFILENAME

// Imports the Google Cloud client library
const { Translate } = require('@google-cloud/translate').v2

console.log(keyFilename)
console.log(projectId)

// Instantiates a client
const translate = new Translate({ projectId, keyFilename })

export default async function quickStart() {
  // The text to translate
  const text = 'Hello, world!'

  // The target language
  const target = 'ru'

  // Translates some text into Russian
  const [translation] = await translate.translate(text, target)
  console.log(`Text: ${text}`)
  console.log(`Translation: ${translation}`)
}

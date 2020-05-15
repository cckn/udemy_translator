import dotenv from 'dotenv'
const { Translate } = require('@google-cloud/translate').v2

dotenv.config()

const projectId = process.env.G_PROJECT_ID // const projectId = 'project-id'
const keyFilename = process.env.G_KEYFILENAME

// Instantiates a client
const translate = new Translate({ projectId, keyFilename })

export default async function quickStart(rowText: string, to: string) {
  const [translation] = await translate.translate(rowText, to)
  return translation
}

import fs from 'fs'
import path from 'path'

// eslint-disable-next-line no-undef
export default defineEventHandler(async (event) => {
  // eslint-disable-next-line no-undef
  const body = await readBody(event)
  const { fileName, fileData } = body

  const filePath = path.join(process.cwd(), 'static/images', fileName)

  // Convertir le base64 en buffer et écrire le fichier
  const buffer = Buffer.from(fileData, 'base64')

  fs.writeFile(filePath, buffer, (err) => {
    if (err) {
      console.error('Erreur lors de l\'écriture du fichier:', err)
      return { success: false, message: 'Erreur lors de l\'écriture du fichier.' }
    }
    return { success: true, message: 'Fichier enregistré avec succès.' }
  })
})

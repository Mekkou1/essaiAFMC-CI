const path = require('path')
const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const fs = require('fs-extra')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json())

const JWT_SECRET = 'your_jwt_secret' // Changez ce secret pour un token sécurisé
const adminUser = {
  username: 'admin',
  password: '$2a$10$hashed_admin_password' // Remplacez par un mot de passe hashé
}

// Middleware pour vérifier l'authentification par token JWT
function authenticateToken (req, res, next) {
  const token = req.headers.authorization
  if (!token) { return res.sendStatus(401) }

  jwt.verify(token.split(' ')[1], JWT_SECRET, (err, user) => {
    if (err) { return res.sendStatus(403) }
    req.user = user
    next()
  })
}

// Route pour la connexion de l'administrateur
app.post('/api/login', (req, res) => {
  const { username, password } = req.body

  if (username !== adminUser.username || !bcrypt.compareSync(password, adminUser.password)) {
    return res.status(403).send('Nom d\'utilisateur ou mot de passe incorrect')
  }

  // Générer un token JWT valable pour 1 heure
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' })
  res.json({ token })
})

// Helper pour lire et écrire dans les fichiers de données
// eslint-disable-next-line require-await
async function readFileData (fileName) {
  const filePath = path.join(__dirname, `assets/data/${fileName}`)
  return fs.readFile(filePath, 'utf8')
}

// eslint-disable-next-line require-await
async function writeFileData (fileName, data) {
  const filePath = path.join(__dirname, `assets/data/${fileName}`)
  const formattedData = `export default ${JSON.stringify(data, null, 2)};`
  return fs.writeFile(filePath, formattedData, 'utf8')
}

// Routes pour aboutsectionData.js
app.get('/api/about', authenticateToken, async (req, res) => {
  try {
    const data = await readFileData('aboutsectionData.js')
    res.send(data)
  } catch (err) {
    res.status(500).send('Erreur lors de la lecture du fichier')
  }
})

app.put('/api/about', authenticateToken, async (req, res) => {
  try {
    await writeFileData('aboutsectionData.js', req.body)
    res.send('Données mises à jour avec succès')
  } catch (err) {
    res.status(500).send('Erreur lors de la mise à jour du fichier')
  }
})

// Routes pour executiveMembers.js
app.get('/api/executive-members', authenticateToken, async (req, res) => {
  try {
    const data = await readFileData('executiveMembers.js')
    res.send(data)
  } catch (err) {
    res.status(500).send('Erreur lors de la lecture du fichier')
  }
})

app.put('/api/executive-members', authenticateToken, async (req, res) => {
  try {
    await writeFileData('executiveMembers.js', req.body)
    res.send('Données mises à jour avec succès')
  } catch (err) {
    res.status(500).send('Erreur lors de la mise à jour du fichier')
  }
})

// Routes pour missionssectionData.js
app.get('/api/missions', authenticateToken, async (req, res) => {
  try {
    const data = await readFileData('missionssectionData.js')
    res.send(data)
  } catch (err) {
    res.status(500).send('Erreur lors de la lecture du fichier')
  }
})

app.put('/api/missions', authenticateToken, async (req, res) => {
  try {
    await writeFileData('missionssectionData.js', req.body)
    res.send('Données mises à jour avec succès')
  } catch (err) {
    res.status(500).send('Erreur lors de la mise à jour du fichier')
  }
})

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

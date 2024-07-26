import fakeUsers from "../data/users.js"; // Importation de faux utilisateurs depuis un fichier de données.

export default {
  // Création d'un utilisateur
  async createUser(req, res) {
    try {
      const { name, email, password } = req.body; // Extraction des données de la requête
      const user = await User.create({ name, email, password }); // Création d'un nouvel utilisateur dans la base de données
      res.status(201).json(user); // Réponse avec l'utilisateur créé et un statut HTTP 201 (Créé)
    } catch (error) {
      res.status(400).json({ message: error.message }); // En cas d'erreur, réponse avec un message d'erreur et un statut HTTP 400 (Mauvaise requête)
    }
  },

  // Récupération de tous les utilisateurs
  async getAllUsers(_, res) {
    res.json(fakeUsers); // Réponse avec la liste des faux utilisateurs
  },

  // Récupération d'un utilisateur par son ID
  async getUser(req, res) {
    try {
      const user = await User.findByPk(req.params.id); // Recherche de l'utilisateur par sa clé primaire (ID)
      if (!user) {
        return res.status(404).json({ message: "User not found" }); // Si l'utilisateur n'est pas trouvé, réponse avec un statut HTTP 404 (Non trouvé)
      }
      res.json(user); // Réponse avec l'utilisateur trouvé
    } catch (error) {
      res.status(500).json({ message: error.message }); // En cas d'erreur, réponse avec un message d'erreur et un statut HTTP 500 (Erreur interne du serveur)
    }
  },

  // Mise à jour d'un utilisateur par son ID
  async updateUser(req, res) {
    try {
      const user = await User.findByPk(req.params.id); // Recherche de l'utilisateur par son ID
      if (!user) {
        return res.status(404).json({ message: "User not found" }); // Si l'utilisateur n'est pas trouvé, réponse avec un statut HTTP 404
      }
      await user.update(req.body); // Mise à jour des informations de l'utilisateur avec les données de la requête
      res.json(user); // Réponse avec l'utilisateur mis à jour
    } catch (error) {
      res.status(400).json({ message: error.message }); // En cas d'erreur, réponse avec un message d'erreur et un statut HTTP 400
    }
  },

  // Suppression d'un utilisateur par son ID
  async deleteUser(req, res) {
    try {
      const user = await User.findByPk(req.params.id); // Recherche de l'utilisateur par son ID
      if (!user) {
        return res.status(404).json({ message: "User not found" }); // Si l'utilisateur n'est pas trouvé, réponse avec un statut HTTP 404
      }
      await user.destroy(); // Suppression de l'utilisateur
      res.status(204).end(); // Réponse avec un statut HTTP 204 (Aucun contenu)
    } catch (error) {
      res.status(500).json({ message: error.message }); // En cas d'erreur, réponse avec un message d'erreur et un statut HTTP 500
    }
  },
};

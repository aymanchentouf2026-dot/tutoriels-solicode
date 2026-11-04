# MCD – Blog personnel

## 1. Présentation du projet

Le Blog personnel permet de publier, gérer et consulter des articles organisés par catégories. Chaque article est rédigé par un auteur et chaque auteur habite dans une ville.

## 2. Les entités et leurs attributs

### VILLE
- **id_ville** (Identifiant)
- nom_ville

### AUTEUR
- **id_auteur** (Identifiant)
- nom_auteur
- prenom_auteur
- email_auteur

### ARTICLE
- **id_article** (Identifiant)
- titre_article
- contenu_article
- date_publication
- statut_article
- image_article

### CATEGORIE
- **id_categorie** (Identifiant)
- nom_categorie

## 3. Les associations et les cardinalités

### Association 1 : HABITE
- Une ville peut accueillir plusieurs auteurs.
- Un auteur habite dans une seule ville.

**Cardinalités :**
- VILLE : (0,N)
- AUTEUR : (1,1)

### Association 2 : REDIGE
- Un auteur peut rédiger plusieurs articles.
- Un article est rédigé par un seul auteur.

**Cardinalités :**
- AUTEUR : (0,N)
- ARTICLE : (1,1)

### Association 3 : REGROUPE
- Une catégorie peut regrouper plusieurs articles.
- Un article appartient à une seule catégorie.

**Cardinalités :**
- CATEGORIE : (0,N)
- ARTICLE : (1,1)

## 4. Résumé du MCD

| Entité | Association | Entité |
|---|---|---|
| VILLE (0,N) | HABITE | AUTEUR (1,1) |
| AUTEUR (0,N) | REDIGE | ARTICLE (1,1) |
| CATEGORIE (0,N) | REGROUPE | ARTICLE (1,1) |

## 5. Conclusion

Le MCD représente la structure conceptuelle de la base de données du Blog personnel. Il permet d'identifier les entités, leurs attributs et les relations entre elles, avant de passer à la création du modèle logique de données (MLD).
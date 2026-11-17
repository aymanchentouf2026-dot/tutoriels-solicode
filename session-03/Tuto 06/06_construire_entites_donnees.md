# Tutoriel 5 — Construire les entités à partir des données

## Objectif
Regrouper les données par entité et remplacer les informations répétées par des identifiants.

## Entité `ARTICLE`
- `id_article`
- `titre_article`
- `contenu_article`
- `date_publication`
- `statut_article`
- `image_article`
- `id_auteur`
- `id_categorie`

## Entité `AUTEUR`
- `id_auteur`
- `nom_auteur`
- `prenom_auteur`
- `email_auteur`
- `id_ville`

## Entité `VILLE`
- `id_ville`
- `nom_ville`

## Entité `CATEGORIE`
- `id_categorie`
- `nom_categorie`
- `description_categorie`

## Conclusion
Les données sont regroupées dans quatre entités : `ARTICLE`, `AUTEUR`, `VILLE` et `CATEGORIE`. Les informations répétitives sont isolées dans des entités indépendantes et remplacées par des identifiants dans les entités d’origine.

> Attention : à cette étape, on liste les entités et leurs données. Les relations et les cardinalités sont traitées dans les étapes suivantes.

# Tutoriel 4 — Découvrir une entité à partir d’un identifiant ou d’une répétition

## Objectif
Repérer les réalités représentées par les données et proposer un identifiant pour chaque entité.

## Tableau d’analyse

| Donnée observée | Valeur répétée | Réalité représentée | Identifiant proposé | Dépendance fonctionnelle |
|---|---|---|---|---|
| `email_auteur` | Une adresse e-mail identifie un auteur dans les données observées | Auteur | `email_auteur` | `email_auteur → nom_auteur, prenom_auteur` |
| `nom_ville` | Tanger, Rabat | Ville | `id_ville` | `id_ville → nom_ville` |
| `nom_categorie` | Développement, Actualité | Catégorie | `id_categorie` | `id_categorie → nom_categorie` |

## Explication
- **Auteur :** l’adresse e-mail peut servir d’identifiant naturel si elle est unique et obligatoire.
- **Ville :** plusieurs auteurs peuvent habiter dans la même ville. On peut donc proposer un identifiant technique `id_ville`.
- **Catégorie :** plusieurs articles peuvent appartenir à la même catégorie. On peut donc proposer `id_categorie`.

## Conclusion
L’observation des répétitions permet de découvrir les entités `AUTEUR`, `VILLE` et `CATEGORIE`. Chaque entité doit posséder un identifiant permettant de distinguer chaque occurrence. Les dépendances fonctionnelles indiquent quelles données sont déterminées par un identifiant.

# Tutoriel 3 — Observer les occurrences et repérer les répétitions

## Objectif
Observer les données présentes dans un tableau et identifier les valeurs qui se répètent.

## Inventaire des valeurs observées

| Donnée | Valeurs observées |
|---|---|
| `nom_auteur` | Madani, Sara, Youssef, Amine, Nadia |
| `prenom_auteur` | Ali, Amrani, Karim, Idrissi, Alaoui |
| `email_auteur` | madani@mail.com, sara@mail.com, youssef@mail.com, amine@mail.com, nadia@mail.com |
| `nom_ville` | Tanger, Rabat |
| `nom_categorie` | Développement, Actualité |

## Valeurs répétées

- **`nom_auteur` :** aucune valeur répétée dans les données observées.
- **`prenom_auteur` :** aucune valeur répétée dans les données observées.
- **`email_auteur` :** aucune valeur répétée dans les données observées.
- **`nom_ville` :**
  - Tanger apparaît 3 fois.
  - Rabat apparaît 2 fois.
- **`nom_categorie` :**
  - Développement apparaît 3 fois.
  - Actualité apparaît 2 fois.

## Problème lié à une répétition
J’ai choisi la donnée `nom_ville`. La valeur « Tanger » apparaît trois fois dans le tableau. Si le nom de cette ville devait être modifié, il faudrait mettre à jour les trois occurrences. Si une ligne était oubliée, les données pourraient devenir incohérentes.

## Conclusion
L’observation des occurrences permet d’identifier les valeurs répétées pour une même donnée. Cette analyse aide à repérer les informations qui pourraient être isolées dans des entités indépendantes afin de réduire les répétitions.

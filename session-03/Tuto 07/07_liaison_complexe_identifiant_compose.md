# Tutoriel 6 — Modéliser une liaison complexe avec un identifiant composé

## Objectif
Modéliser une relation plusieurs-à-plusieurs entre les commandes et les produits à l’aide d’une entité associative.

## Entité `CLIENT`
- `id_client`
- `nom_client`

## Entité `COMMANDE`
- `id_commande`
- `date_commande`
- `id_client`

## Entité `PRODUIT`
- `id_produit`
- `nom_produit`

## Entité `LIGNE_COMMANDE`
- `id_commande`
- `id_produit`
- `quantite_commandee`

**Identifiant composé :** (`id_commande`, `id_produit`).

## Exemple

| `id_commande` | `id_produit` | `quantite_commandee` |
|---|---|---:|
| C01 | P01 | 2 |
| C01 | P02 | 3 |

La commande `C01` contient deux produits : deux unités de `P01` et trois unités de `P02`.

## Pourquoi un identifiant composé ?
Une commande peut contenir plusieurs produits et un même produit peut apparaître dans plusieurs commandes. L’entité `LIGNE_COMMANDE` permet de représenter chaque produit dans une commande donnée.

La combinaison (`id_commande`, `id_produit`) identifie une ligne de commande dans ce modèle. La quantité dépend de cette combinaison :

`(id_commande, id_produit) → quantite_commandee`

## Conclusion
Le système e-commerce contient les entités `CLIENT`, `COMMANDE`, `PRODUIT` et `LIGNE_COMMANDE`. L’entité associative `LIGNE_COMMANDE` résout la relation plusieurs-à-plusieurs entre `COMMANDE` et `PRODUIT`, et son identifiant est composé de `id_commande` et `id_produit`.

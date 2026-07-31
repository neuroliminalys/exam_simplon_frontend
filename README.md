# exam_simplon_frontend

## Contexte du projet

L'application Museum Explorer a pour objectif de permettre aux utilisateurs de découvrir différents musées et de consulter les expositions qui y sont présentées.

L'application s'adresse à un public général : amateurs d'art, passionnés d'histoire, touristes et personnes curieuses souhaitant découvrir de nouveaux lieux culturels.

Elle comportera deux types d'utilisateurs : les visiteurs non connectés et les utilisateurs connectés.

Une interface d'administration sera également nécessaire pour gérer les musées et leurs expositions.

Fonctionnement attendu de l'application
L'application doit pouvoir être utilisée librement par toute personne souhaitant préparer une sortie culturelle, sans qu'il soit nécessaire de posséder un compte.

Depuis la page d'accueil, le public peut découvrir les musées référencés sur la plateforme. Afin de faciliter l'exploration, les établissements peuvent être recherchés à partir de leur nom, de leur ville ou du domaine auquel ils sont consacrés, comme l'art moderne, l'histoire, les sciences ou l'archéologie.

Chaque musée dispose d'une fiche de présentation regroupant les informations utiles à la préparation d'une visite : sa localisation, ses horaires d'ouverture, ses tarifs, son accessibilité, une présentation générale ainsi que les services proposés sur place.

Certains établissements mettent également à disposition un guide détaillé destiné aux personnes en situation de handicap. Lorsqu'un tel document existe, il peut être consulté directement depuis la fiche du musée afin d'obtenir des précisions sur les accès, les équipements adaptés et les conditions d'accueil.

Les personnes possédant un compte peuvent préparer plus précisément leurs futures sorties. Elles ont la possibilité d'enregistrer certains musées dans une sélection personnelle.

Les informations présentées dans l'application sont maintenues par les responsables des établissements. Ces derniers peuvent enregistrer un nouveau musée ou modifier les renseignements pratiques d'un établissement déjà présent, par exemple à la suite d'un changement d'horaires ou de tarifs.

L'ajout d'une exposition nécessite de préciser son titre, son thème, une courte description ainsi que ses dates de début et de fin. Une exposition doit obligatoirement être rattachée à un musée existant avant de pouvoir apparaître dans sa programmation.

## 1. Diagramme de cas d'utilisation

Réalise un diagramme de cas d'utilisation avec PlantUML à partir de l'énoncé précédent.

Le fichier devra être nommé usecase.puml.

## 2. Product backlog

Crée un fichier Markdown nommé product_backlog.md, dans lequel tu listeras les user stories du projet en te basant sur l'énoncé.

Veille à respecter les conventions d'écriture d'une user story.

Tu n'es pas obligé d'ajouter des critères d'acceptation ni une estimation de la difficulté.

## 3. Création du dépôt

Initialise un projet frontend avec React ou Angular, puis crée un dépôt Git contenant les fichiers du projet.

Lie-le à un dépôt distant public.

Travaille en tenant compte des bonnes pratiques de Git : réalise des commits réguliers, avec des messages clairs et correctement formulés.

La branche main devra contenir la version finale du projet. Cependant, tu es libre de créer d'autres branches pendant le développement.

Vérifie régulièrement que ton travail est bien présent sur ton dépôt distant.

## 4. Réalisation du projet

Tu vas réaliser un prototype du projet précédent. Cependant, tu ne devras développer que certaines fonctionnalités précises :

L'utilisateur peut afficher la liste des musées disponibles sur le site. Chaque musée est présenté avec son nom et sa ville. Si tu souhaites également afficher son image, tu peux utiliser l'archive assets.zip fournie.
L'utilisateur peut afficher les détails d'un musée. Cette fiche comprend son nom, une courte présentation, sa ville, son adresse et la liste des expositions proposées par ce musée.
Mets en place un routeur permettant de naviguer entre les pages suivantes :

/ : page affichant la liste des musées ;
/details/:id : page affichant les détails d'un musée spécifique.
Ajoute un lien pour chaque musée de la liste afin de permettre à l'utilisateur d'accéder à sa page de détail.

Les données utilisées doivent provenir de cette API :

[API link (tous les musées)](https://museumapi.hackeuse.fr/museums)
La récupération des détails d'un musée aura la forme suivante :

[API link (musée par son ID)](https://museumapi.hackeuse.fr/museums/<museumId>)
Attention à :

bien architecturer le projet en suivant les bonnes pratiques
bien respecter les conventions de code TypeScript
ne laisser aucune erreur ni aucun log dans la console du navigateur

## 5. Bonus

Si tu as terminé plus tôt, tu peux ajouter les fonctionnalités suivantes au site :

Bonus 1 : sur la page d'accueil, il est possible de filtrer la liste des musées à l'aide d'un champ de recherche fonctionnant sur le nom du musée ou sa ville.
Bonus 2 : sur la page de détail d'un musée, il est possible d'afficher le plan (leaflet) indiquant la position du musée.
Bonus 3 : sur la page d'accueil et sur la page de détail d'un musée, il est possible d'ajouter un musée à une sélection personnelle. Cette sélection sera consultable sur une page /my-selection et sauvegardée dans le navigateur.

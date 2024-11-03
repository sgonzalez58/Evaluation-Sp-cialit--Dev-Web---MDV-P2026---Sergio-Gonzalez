**Ceci est le rendu de l'évaluation spécialité dev web de Sergio Gonzalez**

J'ai commencé mon projet en installant express et nodemon comme lors de notre premier exercice.
J'ai ensuite commencé par faire un fichier users.json avec un compte qui servira d'admin.
Je suis ensuite partie sur une route '/' avec 3 liens, chacuns correspondant aux différentes versions de countries.

J'ai ensuite fait les différentes routes en get en ajoutant des paramètres de paginations (beaucoup trop de pays pour renvoyer le tout):
    - "/full" : Je renvoie les données telles que dans le fichier json
    - "/normal" : Afin de permettre un traitement simple des propriétés de premier niveau(bonus), j'ai pensé à récupérer la liste des propriétés à supprimer et de les supprimer lors de la création de la nouvelle liste de countries. Une méthode qui pourra ensuite être deplacé en tant que middleware et utilisé pour le bonus et la version short.
    - "/short" : J'ai utilisé la même méthode que la version normal mais avec moins de propriétés à récupérer.

Une fois avoir vérifier que mes routes fonctionnaient correctement, j'ai décidé de mettre en place le middleware dans le fichier "/service/country".

Une fois le middleware mis en place et fonctionnel, je suis parti sur le router country pour la modification.

Pour la vérification des administrateurs, j'ai utilisé le même middleware que pour les exercices qu'on a fait jusqu'à maintenant sauf qu'ici, seul les administrateurs ont un compte donc pas besoin de vérifier le role de l'utilisateur.
J'ai utilisé les sessions de la même manière que les exercices précédents.
Avant de commencer les routes get, post, put, patch et delete, j'ai mis en place les routes get /login, post /login et get /logout de la manière que vu dans les précédents exercices. J'ai juste ajouté bcryptjs pour le hachage.

J'ai ensuite modifier l'engine de l'application pour pouvoir faire des views en liquid.
J'ai fait un tableau avec les pays sur la route get /country.

J'ai décidé de créer un router admin afin de bien envoyer du liquid sur les pages admin mais du JSON sur l'API country.

Comme l'asso souhaite seulement pouvoir modifier certaines informations des pays, j'ai fais une route patch sur l'API.

Sur la partie admin, une route put devrait être faite pour la modification mais je l'ai laissé de coté pour me concentrer sur les parties demandées dans le sujet.

J'ai ensuite décidé d'attaquer la partie gestion d'utilisateur.

J'ai utilisé le même router que dans les exercices précédents. J'ai simplement ajouté le hachage du mot de passe.

Pour finir, j'ai réalisé quelques tests.
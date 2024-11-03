01 - que pouvez-vous dire sur l'évolution de javascript ? Comment a-t'il changé beaucoup de choses ? Qu'en pensez-vous ?
Javascript a beaucoup évoluer au fil des années avec les déclarations let et const, les fonctions fléchées ou encore l'async et l'await. Cela a permis à Javascript de se développer autant du coté back que du coté front, le rendant très flexible. Je pense que Javascript est maintenant un language complet pour le développement.

02 - Selon vous, quelles bonne pratiques de développement sont attendues de la part d'un professionnel ?
De la part d'un professionnel, on attend un code fonctionnel et sécurisé qui répond a des normes utilisées par la majorité des autres développeur.

03 - En quoi la veille technique est importante ?
La veille technique est importante pour pouvoir surveiller les différentes failles qui peuvent être apparaître et pour découvrir de meilleurs façon de développer, que ce soit par d'autre languages ou par les différentes innovations.

04 - Pouvez-vous me citer des sources d'informations relatives à la cyber sécurité ?
CNIL et ANSSI. Ce sont les 2 sources qui me viennent lorsque je pense à la cyber sécurité.

05 - Pouvez-vous me décrire le principe d'une injection SQL ?
L'injection SQL est une injection de code dans un champs texte dans un formulaire pour récupérer des données ou simplement provoquer un évènement, une action qui ne devrait pas être possible via ce formulaire.

06 - Décriver ce que l'on peut mettre en place pour s'en prémunir.
Il faut sécurisé les champs de formulaire pour s'en prémunir. On peut ajouter les bons types dans les inputs en HTML et aussi ajouté des regex ou des conditions.
Pareil en Javascript, on peut vérifier les valeurs des inputs avant la validation du formulaire.
Enfin du coté du traitement du formulaire, on peut traiter les données en retirant les balises html, on échappant les caractères spéciaux ou encore on retirant les espaces inutililes.

07 - Que peut-on mettre en place dans une application afin de limiter l'accès à certaines données / actions ?
Pour limiter l'accès à certaines données ou actions, on peut mettre en place l'authentification avec différents niveau d'accès.

08 - Plus généralement, que pouvez-vous me dire sur les besoin en sécurité d'une application ?
Une application se doit de sécurisé toutes données qui proviennent des utilisateurs, que ce soit un simple mail jusqu'à un mot de passe, un nom ou une adresse. Pour cela, les différents échanges SQL doivent être sécurisés et les données doivent être cryptés au mieux dans la base de données pour prévenir d'une fuite.

09 - Que pouvez-vous me dire sur l'intérêt des tests ?
Les tests permettent de vérifier que les différentes actions de l'application fonctionnent correctement et cela permets principalement de tester ces actions tout au long du développement pour prévenir des régressions.

10 - Pouvez-vous me citer quelques types de tests et leur destination ?
Il y a les tests unitaires qui ciblent des fonctions et méthodes spécifiques.
Les tests end to end qui simule le cheminement d'un client du début à la fin pour vérifier que l'application fonctionnent correcement.
Et bien sur les tests de régressions dont je parlais dans la questions précédentes pour vérifier que les nouveaux développement ne cassent pas les de fonctionnalités déjà terminées.

11 - Que pouvez-vous dire sur le développement Orienté objet et fonctionnel ?
Le développement Orienté objet utilise des classes avec des méthodes et des attributs. On peut utilisé l'hérédité pour que des classes héritent d'autres classes parentes. Les attributs sont souvent privés et on utilise des getters/setters pour y accéder.
Contrairement au développement orienté object, le développement fonctionnel n'utilise pas de classe mais permet de créer des objets directement via des fonctions. Aussi, les données créées par le développement fonctionnel ne sont pas modifiables dont il n'y a pas de getter/setter. Lors d'une modifications, un nouvel objet est créé..
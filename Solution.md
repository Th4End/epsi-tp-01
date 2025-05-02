## TODO 1 
    Problème : Les lien font recharger la page
        Solution : 
            Utilisation du routerLink sur les balises <a></a> pour éviter un refresh de la page  :
                 <a [routerLink]="['/']">Accueil</a> et <a [routerLink]="['/books']">Ma Bibliothèque</a>.
        But : Offrir une navigation dynamique à l'utilisateur et lui éviter de subir un refresh constant de la page.

## TODO 2 : 
    Problème : Le premier Mot doit être en majuscule et les _ doivent être remplacer par des espaces et le reste doit être en minuscule 
        Solution ; 
            Utilisation d'un pipe custom :
                on remplace les _ par des espaces, on met tout en minuscule puis on découpe mot par mot :  const formatted = value.replace(/_/g, ' ').toLowerCase().split(' ');
                Ensuite on prend le premier mot qu'on met en majuscule et ensuite on assemble le tout : 
                formatted[0] = formatted[0].toUpperCase();
                return formatted.join(' ');
        But : Amélioration de l'affichage pour une meilleur expérience utilisateur

## TODO 3 :
    Voir TODO 1 car elles sont pareils

## TODO 4 :

## TODO 5 :
    Problème : L'application permet d'afficher une liste de livres (/books), et d’en ajouter un (/books/add), mais il manque une route dédiée à l’affichage des détails d’un livre individuel.
        Solution : 
            Ajout de la route dynamique suivante dans la configuration Angular :
                { path: 'books/:id', component: BookDetailComponent }
            Le segment :id est un paramètre dynamique. Angular va capturer la valeur de id dans l’URL.
            Par exemple, /books/42 va lier la variable id = 42.
            omponent: BookDetailComponent :
            C’est ce composant qui sera affiché lorsque cette route est appelée.
            Ce composant utilisera le ActivatedRoute pour récupérer l’id du livre et afficher ses détails.
        But : Permettre à l’utilisateur de consulter les informations détaillées d’un livre en cliquant sur un lien comme /books/3, où 3 est l’identifiant du livre.

## TODO 6 :


## TODO 7 :

## TODO 8 :
    Problème :  Le bouton n'existait pas et la fonction goBack() était vide.
        Solution :
            Utiliser le service Location d’Angular (@angular/common) pour naviguer vers la page précédente dans l’historique du navigateur.
            Injection du service Location dans le constructeur.
            Implémentation de goBack() en appelant this.location.back().
            Ajout dans le template HTML d’un bouton <button (click)="goBack()">Retour</button>.
        But : Offrir une navigation fluide et naturelle à l'utilisateur.

## TODO 16 :
    Problème : Aucune indication n'était donnée à l'utilisateur après une mise à jour du statut "favori" d’un livre.
        Solution : 
            Afficher une alerte dans la directive next() de la fonction toggleFavorite, indiquant que l’action a réussi.
            Utiliser le champ title de l’objet updatedBook pour rendre le message plus clair : alert(`Le statut de favori du livre "${updatedBook.title}" a été modifié.`);
        But : Améliorer le retour utilisateur lors d'une action réussie.

## TODO 17 : 
    Problème : En cas d’échec de la modification d'un livre mis en favori, l’utilisateur n’était pas informé.
        Solution : 
            Afficher une alerte dans la directive error() de la fonction toggleFavorite pour prévenir l’utilisateur.
            alert(`La modification du livre favori "${book.title}" a échoué.`);
            Ajout un log dans la console pour aider au debug :
            console.error('Erreur lors de la modification du favori:', err);
        But : Informer l’utilisateur d’un échec et aider au debug.
## TODO 19 :
    Problème : En cas d'échec de la suppression d'un livre, l'utilisateur n'était pas informé.
        Solution :
            Afficher une alerte dans la directive error() de la fonction deleteBook pour prévenir l'utilisateur.
            alert('Le livre a été supprimé avec succès.');
            Ajout d'un log dans la console pour aider au debug : 
            console.log('Livre supprimé:', id);

            
## TODO 20 :
    Problème : Mauvaise syntaxe dans l'expression {{ title }} (deux espaces), et le     
    titre n’était pas affiché en majuscules.
        Solution : 
            Utiliser le pipe uppercase d’Angular pour transformer dynamiquement le texte : {{ title | uppercase }}



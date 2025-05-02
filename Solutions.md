## TODO 1 
    Problème : Les lien font recharger la page
        Solution : 
            Utilisation du routerLink sur les balises <a></a> pour éviter un refresh de la page  :
                 <a [routerLink]="['/']">Accueil</a> et <a [routerLink]="['/books']">Ma Bibliothèque</a>.
        But : Offrir une navigation dynamique à l'utilisateur et lui éviter de subir un refresh constant de la page.

## TODO 2 : 
    Problème : Le premier Mot doit être en majuscule et les _ doivent être remplacer par des espaces et le reste doit être en minuscule 
        Solution : 
            Utilisation d'un pipe custom :
                on remplace les _ par des espaces, on met tout en minuscule puis on découpe mot par mot :  const formatted = value.replace(/_/g, ' ').toLowerCase().split(' ');
                Ensuite on prend le premier mot qu'on met en majuscule et ensuite on assemble le tout : 
                formatted[0] = formatted[0].toUpperCase();
                return formatted.join(' ');
        But : Amélioration de l'affichage pour une meilleur expérience utilisateur

## TODO 3 :
    Voir TODO 1 car elles sont pareils

## TODO 4 :
    Problème : Les pages ne sont pas affichée 
        Solution :
            Utilisation de <router-outlet></router-outlet> qui permet d'injecter dynamiquement le contenu des pages selon l'url : 
                <main class="main-content">
                    <router-outlet></router-outlet>
                </main>
        But : rendre la navigation plus intuitives

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
    Problème : Création d'un formulaire 
        Solution : 
            Utilisation de : 
                FormGroup est utilisé pour regrouper tous les champs du formulaire.
                FormBuilder simplifie la création du formulaire.
                Validators est utilisé pour définir des règles de validation pour chaque champ.
        But : Création d'un formulaire pour ajouter : 
            title, author, description, category.
## TODO 7 :

## TODO 8 :
    Problème :  Le bouton n'existait pas et la fonction goBack() était vide.
        Solution :
            Utiliser le service Location d’Angular (@angular/common) pour naviguer vers la page précédente dans l’historique du navigateur.
            Injection du service Location dans le constructeur.
            Implémentation de goBack() en appelant this.location.back().
            Ajout dans le template HTML d’un bouton <button (click)="goBack()">Retour</button>.
        But : Offrir une navigation fluide et naturelle à l'utilisateur.
## TODO 9 :
    Problème : bug d'accès à book.title avant sa définition
        Solution : 
            L'objet book est soit undefined ou null au moment de l'affichage de book.title dans le template donc pour corriger ça on utilise une condition qui vérifie si l'objet est défini avant de tenter de l'afficher, pour ça j'utilise un ng-container avec un *ngIf :
                 <ng-container *ngIf="book; else loading">
            *ngIf="book" : Cela vérifie si l'objet book est défini avant d'afficher les informations de ce dernier. Si book est undefined, le template loading est affiché à la place.
            <ng-template #loading> : Ce bloc est affiché pendant le chargement du livre. Cela permet d'éviter d'afficher des données incomplètes ou de déclencher une erreur si book est encore undefined au moment du rendu.
        But : Éviter les erreurs inutiles dans la console.
    
## TODO 10 : 
    Problème : utiliser la directuve Highlight
        Ajout de la propiéter appHighlight sur l'élément <h1 class="book-title"> afin d'appliquer les styles définis dans cette directive : 
            <h1 class="book-title" appHighlight>{{ book.title }}</h1>
        Cela active le comportement défini dans la directive HighlightDirective sur ce titre.
    But : améliorer l'expérience visuel et ajouter une différenciation sur les différentes parties.

## TODO 12 : 
    Problème : bouton retour qui ne fonctionne pas
        Solution : 
            Pour résoudre ce problème, il faut utiliser Angular's Location service pour effectuer une navigation vers la page précédente, ce qui est le comportement attendu d'un bouton "Retour".
                import { Location } from '@angular/common';
                constructor(
                private location: Location
                ) {}
                goBack(): void {
                this.location.back();
                }
            cation est un service qui permet de manipuler l'historique du navigateur.
            this.location.back() permet de revenir à la page précédente dans l'historique du navigateur, ce qui est le comportement attendu pour un bouton "Retour".
        But : améliorer la navigation sur le site 
## TODO 13 :
    Problème : Les données ne s'affichaient pas
        Solutions : modifier la variable data dans le ngIf car la vérification sur la variable data ne sert à rien car ce n'est pas ce que l'on veut affichier : 
                    <div *ngIf="data && data.length > 0; else noBooks"> par <div *ngIf="books && books.length > 0; else noBooks">
                    Cela permet de s'assurer que c'est la liste books qui est utilisée, comme c'est le cas dans le ngOnInit().
                    Si la liste books est vide ou n'existe pas, le template noBooks sera utilisé pour afficher le message "Aucun livre dans votre bibliothèque".
## TODO 14 :
    Problème : Appliquer la directive highlight au <h2>
        Solution : 
            Appliquer cette directive au titre du livre en ajoutant l'attribut appHighlight : 
            <h2 appHighlight>{{ book.title }}</h2>
        But : Styliser chaque titre de livre de manière unique, ce qui peut attirer l'attention de l'utilisateur sur chaque livre de la liste.

## TODO 15 :
    Problème : Limiter la longueur de la description à 20 caractère et si suppérieur alors mettre des ...
        Solution : 
            Créer un pipe personnaliser qui permet de faire ça : 
                on créer une fonction qui possède en paramètre une variable value qui est un string et une variable limit number = 20 : 
                    transform(value: string, limit: number = 20): string 
                    {
                        if (!value) {
                        return '';
                        }
                ensuite on vérifie si la longueur de value est supérieur à limit alors on réduit la longueur et on ajoute ... sinon on renvoie la valeur de value :
                        if (value.length > limit) {
                            return value.substring(0, limit) + '...';
                        } else {
                            return value;
                        }
                    }   
        But : améliorer l'expérience utilisateur et le visuel 
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
## TODO 22 : 
    Problème : Rendre le Header indépendant du app.component.ts
        Créer un composant pour le Header :
            ng c header ou ng generate header
        Ensuite, ajouter le code du header dans le header.component.html : 
            <header class="header">
                <h1>
                <a [routerLink]="['/']">
                    <span>{{title | formatTitre}}</span>
                </a>
                </h1>
                <nav>
                <ul>
                    <li>
                    <a [routerLink]="['/']">Accueil</a>
                    </li>
                    <li>
                    <a [routerLink]="['/books']">Ma Bibliothèque</a>
                    </li>
                </ul>
                </nav>
            </header>
        Ensuite, importer le component dans le app.component.ts : 
            import { HeaderComponent } from "./header/header.component";
             imports: [RouterLink, RouterOutlet, FormatTitrePipe, FooterComponent, HeaderComponent],
        Ensuite l'ajouter au app.component.html : 
            <app-header></app-header>
        But : Rendre l'affichage dynamique
## TODO 23 : 
    Problème : Rendre le Footer indépendant du app.component.html 
        Solution : création d'un composant pour le footer via la commande :
                    ng g c footer ou ng generate composant footer
                   ensuite ajouté le code du footer dans footer.html.component :
                        <footer class="footer">
                            <p>© 2025 BiblioTech - Tous droits réservés</p>
                        </footer>
                   ensuite importer le footer componant dans le code du app.component.ts : 
                        import { FooterComponent } from './footer/footer.component';
                        imports: [RouterLink, RouterOutlet, FormatTitrePipe, FooterComponent],
                   ensuite l'ajouter au app.component.html :
                    <app-footer></app-footer>
        But : Rendre l'affichage dynamique 

## TODO 24 :
    Problème : Créer une directive conditionnel 
        Solution : 
            La directive utilise un champ @Input() pour recevoir une valeur depuis le template. Cette valeur détermine si on applique le style ou non.
            Il ne faut pas appliquer directement le font-weight: bold dans le constructeur car on veut attendre la valeur réelle de appHighlight. Sinon, le style est appliqué peu importe la valeur.
            ngOnChanges() est une méthode appelée automatiquement par Angular quand une propriété @Input() change.
            Donc, quand appHighlight change :
                Si c’est true, on applique font-weight: bold
                Si c’est false, on retire le style
            Donc on l'appel dans le template : 
                <h1 [appHighlight]="true">{{ book.title }}</h1>
            Le résultat attendu est le suivant : 
                Si book.isFavorite est true → le titre est en gras
                Si book.isFavorite est false → le titre est normal
        But : Créer un comportement conditionnel dans une directive (HighlightDirective) pour que le texte ciblé soit en gras uniquement si une valeur passée (appHighlight) est vraie.
              Ensuite, appliquer cette directive au champ title des livres dans les composants book-detail et book-list.
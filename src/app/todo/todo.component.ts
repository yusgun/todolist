import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  taches = []; // Liste contenant toutes les tâches
  /**
   * Champ relié au tri
   * 1: Affichage de toutes les tâches (par défaut)
   * 2: Affichage des tâches à faire
   * 3: Affichage des tâches effectuées
   */
  tri: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Permet d'ajouter une tache dans la liste
   */
  ajoutTache(): void{
    let tache: string = prompt("Nom de la tache: "); // Demande du nom de la tâche
    if(tache === '' || tache === null){ // Cas où l'utilisateur ne rentre rien ou Annule la saisie
      return; 
    }
    // Ajout dans la liste avec les champs dédiées
    this.taches.push({
      nom: tache,
      estFait: false,
      statut: "A faire"
    });
  }

  /**
   * Permet d'activer la modification des champs
   * @param index du champ du tableau
   */
  activerModification(index: number): void{
    this.taches[index].modification = true; // Activation du mode modification
  }

  /**
   * Permet de désactiver la modification des champs
   * @param index du champ du tableau
   */
  desactiverModification(index: number): void{
    this.taches[index].modification = false; // Désactivation du mode modification
  }

  /**
   * Permet de supprimer une tache de la liste
   * @param index de la tache à supprimer
   */
  supprimerTache(index: number): void{
    // Demande de confirmation à l'utilisateur
    if(confirm(`Voulez-vous supprimer la tache "${this.taches[index].nom}" ?`)){
      this.taches.splice(index, 1); // Suppression de la tâche dans la liste
    }
  }

  /**
   * Permet de changer le statut de la tache
   * @param index du statut à modifier
   */
  confirmerTache(index: number): void{
    // Demande de confirmationà l'utilisateur
    this.taches[index].estFait = confirm(`Avez-vous terminé la tache "${this.taches[index].nom}" ?`);
    // Changement du statut
    this.taches[index].statut = (this.taches[index].estFait) ? "Effectué" : "A faire"; 
  }

  /**
   * Permet d'afficher une tache en fonction du choix de tri
   * @param index de la liste
   * @returns vrai si la tâche est affichée
   */
  afficher(index: number): boolean{
    let estAffichable: boolean = true; // par défaut, la valeur est à vraie
    // gestion des cas seulement où la tache ne sera pas affichée
    if((!this.taches[index].estFait && this.tri == 3) || (this.taches[index].estFait && this.tri == 2)){
      estAffichable = false; // la tache n'est plus à afficher
    }
    return estAffichable; // retour du résultat
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  taches = [];
  tri: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  ajoutTache(): void{
    let tache: string = prompt("Nom de la tache: ");
    if(tache === '' || tache === null){
      return;
    }
    this.taches.push({
      nom: tache,
      estFait: false,
      statut: "A faire"
    });
  }

  activerModification(index: number): void{
    this.taches[index].modification = true;
  }

  desactiverModification(index: number): void{
    this.taches[index].modification = false;
  }

  supprimerTache(index: number): void{
    if(confirm(`Voulez-vous supprimer la tache "${this.taches[index].nom}" ?`)){
      this.taches.splice(index, 1);
    }
  }

  confirmerTache(index: number){
    this.taches[index].estFait = confirm(`Avez-vous terminé la tache "${this.taches[index].nom}" ?`);
    this.taches[index].statut = (this.taches[index].estFait) ? "Effectué" : "A faire"; 
  }
}

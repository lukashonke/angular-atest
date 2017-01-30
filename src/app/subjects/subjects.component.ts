import {Component} from "@angular/core";
import {Subject} from "./subject";
/**
 * Created by lukas.honke on 30.1.2017.
 */

@Component({
  moduleId: module.id,
  selector: 'subjects',
  templateUrl: 'subjects.component.html',
  styleUrls: ['subjects.component.css'],
})

export class SubjectsComponent
{
  selected_subject: Subject;

  subjects: Subject[] =
    [
      {id: 1, name: "Test"},
      {id: 1, name: "Cestina"},
    ];

  subj_click(subj: Subject): void
  {
    this.selected_subject = subj;
  }

  subj_add(name: string): void
  {
    var new_subj: Subject = { id: 200, name: name };
    this.subjects.push(new_subj);
  }
}

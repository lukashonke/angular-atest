import {Component, Input} from "@angular/core";
import {Subject} from "./subject";
/**
 * Created by lukas.honke on 30.1.2017.
 */

@Component({
  moduleId: module.id,
  selector: "subject-detail",
  templateUrl: "subject-detail.component.html",
})

export class SubjectDetailComponent
{
  @Input() selected_subject: Subject;
}

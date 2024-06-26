import { Component } from '@angular/core';
import {VersionService} from "../../services/version.service";

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent {
  public version: string;

  constructor(private versionService: VersionService) {
    this.version = this.versionService.version;
  }
}

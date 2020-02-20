import { Component, OnInit } from '@angular/core';
import { Organisation } from '../../organisation';
import { OrganisationService } from '../../organisation.service';

@Component({
  selector: 'app-admin-left-side',
  templateUrl: './admin-left-side.component.html',
  styleUrls: ['./admin-left-side.component.css']
})
export class AdminLeftSideComponent implements OnInit {

  organisations: Organisation[];

  constructor(private organisationService: OrganisationService) { }

  ngOnInit(): void {
    this.getOrganisations();
  }

  getOrganisations() {
    return this.organisationService.getorganisations()
               .subscribe(
                organisations => {
                  console.log(organisations);
                  this.organisations = organisations
                 }
                );
  }

}

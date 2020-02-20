import { Component, OnInit } from '@angular/core';
import { Organisation } from '../../organisation';
import { OrganisationService } from '../../organisation.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-show-organisation',
  templateUrl: './show-organisation.component.html',
  styleUrls: ['./show-organisation.component.css']
})
export class ShowOrganisationComponent implements OnInit {

  organisation = new Organisation();
  submitted = false;
  message: string;

  constructor(
    private organisationService: OrganisationService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.organisationService.getorganisation(id)
      .subscribe(organisation => this.organisation = organisation);
  }

  update(): void {
    this.submitted = true;
    this.organisationService.updateorganisation(this.organisation)
        .subscribe(result => this.message = "Organisation Updated Successfully!");
  }

  
  delete(): void {
    this.submitted = true;
    this.organisationService.deleteorganisation(this.organisation.id)
        .subscribe(result => this.message = "Organisation Deleted Successfully!");
  }
  goBack(): void {
    this.location.back();
  }
    
}






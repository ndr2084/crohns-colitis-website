import { Component } from '@angular/core';
import { ProvinceTerritoryCard } from "./province-territory-card/province-territory-card";

@Component({
  selector: 'app-community-information',
  imports: [ProvinceTerritoryCard],
  templateUrl: './community-information.html',
  styleUrl: './community-information.scss',
})
export class CommunityInformation {

}

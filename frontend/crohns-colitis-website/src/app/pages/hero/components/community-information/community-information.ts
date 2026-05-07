import { Component } from '@angular/core';
import { ProvinceTerritoryCardContainer } from "./province-territory-card-container/province-territory-card-container";

@Component({
  selector: 'app-community-information',
  imports: [ProvinceTerritoryCardContainer],
  templateUrl: './community-information.html',
  styleUrl: './community-information.scss',
})
export class CommunityInformation {

}

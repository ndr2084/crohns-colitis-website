import { Component } from '@angular/core';
import { QuickLinksCard } from "../../components/ui-elements/quick-links-card/quick-links-card";

@Component({
  selector: 'app-hero',
  imports: [QuickLinksCard],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

}

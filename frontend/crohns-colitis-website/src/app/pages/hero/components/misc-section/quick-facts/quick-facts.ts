import { Component } from '@angular/core';
import { QuickFactsContainer } from "./quick-facts-container/quick-facts-container";

@Component({
  selector: 'app-quick-facts',
  imports: [QuickFactsContainer],
  templateUrl: './quick-facts.html',
  styleUrl: './quick-facts.scss',
})
export class QuickFacts {

}

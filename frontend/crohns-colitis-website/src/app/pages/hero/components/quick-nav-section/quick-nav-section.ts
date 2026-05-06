import { Component } from '@angular/core';
import { QuickNavContainer } from "./quick-nav-container/quick-nav-container";

@Component({
  selector: 'app-quick-nav-section',
  imports: [QuickNavContainer],
  templateUrl: './quick-nav-section.html',
  styleUrl: './quick-nav-section.scss',
})
export class QuickNavSection {}

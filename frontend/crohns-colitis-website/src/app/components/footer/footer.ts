import { Component } from '@angular/core';
import { SocialMediaBar } from "../social-media-bar/social-media-bar";

@Component({
  selector: 'app-footer',
  imports: [SocialMediaBar],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

}

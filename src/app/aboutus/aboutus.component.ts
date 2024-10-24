import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

}

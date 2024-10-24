import { Component } from '@angular/core';
import { AppComponent } from "../app.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

}

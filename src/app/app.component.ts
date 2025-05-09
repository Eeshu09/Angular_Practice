import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { VariableComponent } from './component/variable/variable.component';
import { DatabindingComponent } from './component/databinding/databinding.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularadvance';
}

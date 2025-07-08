import { Component } from '@angular/core';
import { LucideAngularModule, Github, Mail } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  standalone: true,
  imports: [LucideAngularModule],
})
export class Navbar {
  protected title = 'Trace';
  readonly icons = { Github, Mail };
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  standalone: true,
  imports: [CommonModule],
})
export class Projects {
  protected title = 'Projects';
  protected description =
    'I have worked on a number of projects, both open source and private. Some of these projects are listed below, and you can find more on my GitHub profile.';
  protected projects = [
    {
      name: 'AnonHost',
      description:
        'A free and open source image host, URL shortener and code snippet manager.',
      url: 'https://github.com/keircn/anonhost',
    },
    {
      name: 'Archium',
      description: 'Fast and easy package management for Arch Linux.',
      url: 'https://github.com/keircn/archium',
    },
  ];
}

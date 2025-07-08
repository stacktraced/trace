import { Component } from '@angular/core';
import { Navbar } from '~/navbar';
import { Footer } from '~/footer';
import { Projects } from '~/projects';

@Component({
  selector: 'app',
  templateUrl: './app.html',
  standalone: true,
  imports: [Navbar, Footer, Projects],
})
export class App {
  protected title = "Hey, I'm Trace";
  protected description =
    'I write websites in my spare time using React, NextJS, Solid, Remix, and, as of late, Angular. I have taken to writing blog posts which you may be interested in reading if you are passionate about the web like I am. I also maintain a plethora of open source projects, namely AnonHost and Archium - These can be found below.';
}

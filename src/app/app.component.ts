import { Component } from '@angular/core';
import { IConfigButtonld } from 'buttonld';

@Component({
  selector: 'btl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loading = false;
  title = 'buttonload';
  configbt: IConfigButtonld | any= {
    padding: '4px',
    fontSize: "14px",
    backgroundColor: "var(--color-primary)",
    borderColor: "transparent",
    color: "#fff"
  };
}

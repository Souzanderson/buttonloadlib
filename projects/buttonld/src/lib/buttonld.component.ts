import { Component, Input, OnInit } from '@angular/core';

export interface IConfigButtonld {
  padding?: string;
  backgroundColor?: string;
  fontSize?: string;
  borderColor?: string;
  color?: string;
  margin?: string;
  width?: string;
  height?: string;
  fontWeight?: string;
  pointerEvents?: string;
}

@Component({
  selector: 'buttonld',
  templateUrl: './buttonld.component.html',
  styleUrls: ['./buttonld.component.scss'],
})
export class ButtonldComponent implements OnInit {
  @Input() text: string = 'teste';
  @Input() loadingtext: string = 'Carregando...';
  @Input() config: IConfigButtonld = {};
  @Input() loading: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.config.padding = this.config.padding || '4px';
    this.config.backgroundColor = this.config.backgroundColor || 'unset';
    this.config.fontSize = this.config.fontSize || '12px';
    this.config.borderColor = this.config.borderColor || 'black';
    this.config.borderColor = this.config.borderColor || 'black';
    this.config.color = this.config.color || 'black';
    this.config.margin = this.config.margin || '0px';
    this.config.width = this.config.width || '150px';
    this.config.height = this.config.height || '20px';
    this.config.pointerEvents = this.config.pointerEvents || 'all';
  }

  get style_data() {
    let config = { ...this.config };
    if (this.loading) {
      config.backgroundColor = '#e9e9ef';
      config.borderColor = '#c7bebe';
      config.color = '#666464';
      config.pointerEvents = 'none';
    }
    return config;
  }
}

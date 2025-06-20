import { Component, ElementRef, Input, OnChanges } from '@angular/core';
import mermaid from 'mermaid';

@Component({
  selector: 'app-mermaid-view',
  templateUrl: './mermaid-view.component.html',
  styleUrls: ['./mermaid-view.component.css']
})
export class MermaidViewComponent implements OnChanges {
  /** Mermaid code to render */
  @Input() code = '';
  /** Mermaid configuration object */
  @Input() config: mermaid.MermaidConfig = {} as mermaid.MermaidConfig;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngOnChanges() {
    this.renderDiagram();
  }

  private async renderDiagram() {
    await mermaid.initialize(this.config);
    const { svg } = await mermaid.render('mermaid-view', this.code);
    const container = this.host.nativeElement.querySelector('.mermaid-container');
    if (container) {
      container.innerHTML = svg;
    }
  }
}

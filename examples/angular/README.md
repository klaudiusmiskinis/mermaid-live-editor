# Angular example

This directory contains an example Angular component that renders Mermaid diagrams. It shows how you can integrate the Mermaid Live Editor renderer inside an Angular project.

The component expects Mermaid code and configuration as inputs and will update whenever those inputs change.

Usage example (simplified `app.component.html`):

```html
<app-mermaid-view [code]="diagram" [config]="mermaidConfig"></app-mermaid-view>
```

See `mermaid-view.component.ts` for implementation details.

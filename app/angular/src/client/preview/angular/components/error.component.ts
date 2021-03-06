import { Component, Inject } from "@angular/core";
import { STORY } from "../app.token";
import { NgError } from "../types";

@Component({
  selector: "app-root",
  template: `
    <div class="main">
      <h1>{{ error.message }}</h1>
      <pre>
        <code>{{ error.stack }}</code>
      </pre>
    </div>
  `,
  styles: [
    `
      .main {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 20px;
        background-color: rgb(187, 49, 49);
        color: #FFF;
        -webkit-font-smoothing: antialiased;
      }

      h1 {
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 0.2;
        margin: 10px 0;
        font-family: -apple-system, ".SFNSText-Regular", "San Francisco", Roboto, "Segoe UI",
          "Helvetica Neue", "Lucida Grande", sans-serif;
      }

      pre {
        font-size: 14px;
        width: 100vw;
        overflow: auto;
      }
    `
  ]
})
export class ErrorComponent {
  constructor(@Inject(STORY) public error: NgError) {}
}
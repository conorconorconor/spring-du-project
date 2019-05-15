import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["../shared/styles/footer.scss"]
})
export class FooterComponent {
  public get currentYear(): number {
    return new Date().getFullYear();
  }
}

import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeStyle, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dom-sanitizer',
  templateUrl: './dom-sanitizer.component.html',
  styleUrls: ['./dom-sanitizer.component.scss']
})
export class DomSanitizerComponent implements OnInit {

  safeHtml: SafeHtml;
  safeVideoUrl: SafeResourceUrl;
  safeStyle: SafeStyle;
  downloadLink: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    const rawHtml = '<div style="color: green;">This is safe</div>';
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(rawHtml);

    const youtubeUrl = 'https://www.youtube.com/embed/dJAgSaOIzf4?si=TTKh86Gs1-fdzzjq';
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(youtubeUrl);

    this.safeStyle = this.sanitizer.bypassSecurityTrustStyle('color: red');

    this.downloadLink = this.sanitizer.bypassSecurityTrustUrl('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf');
  }

}

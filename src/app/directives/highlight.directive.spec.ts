import { HighlightDirective } from "./highlight.directive";
import { ElementRef } from '@angular/core';

describe('HighlightDirective', () => {
    const directive = new HighlightDirective({ nativeElement: document.createElement('div') } as ElementRef);
    expect(directive).toBeTruthy();
  });

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignerService {
  // signal qui représente le preset actif
  private _preset = signal(false);

  preset() {
    return this._preset();
  }

  setPreset(value: boolean) {
    this._preset.set(value);
  }
}
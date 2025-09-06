import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  // signal qui indique si la transition de thème est finie
  private _transitionComplete = signal(false);

  transitionComplete() {
    return this._transitionComplete();
  }

  setTransitionComplete(value: boolean) {
    this._transitionComplete.set(value);
  }
}

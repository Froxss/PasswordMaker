import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Şifre Oluşturucu';

  lettersBox: boolean = false;
  numbersBox: boolean = false;
  symbolsBox: boolean = false;
  length: number = 0;
  password = '';

  passLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    } else {
      alert('Lütfen Geçerli bir sayi giriniz');
    }
  }

  lettersCheck() {
    this.lettersBox = !this.lettersBox;
  }
  numbersCheck() {
    this.numbersBox = !this.numbersBox;
  }
  symbolsCheck() {
    this.symbolsBox = !this.symbolsBox;
  }

  btnClick() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";

    let chars = '';
    if (this.lettersBox) {
      chars += letters;
    }
    if (this.numbersBox) {
      chars += numbers;
    }
    if (this.symbolsBox) {
      chars += symbols;
    }

    let generatedPass = '';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * chars.length);
      generatedPass += chars[index];
      this.password = generatedPass;
    }
  }
}

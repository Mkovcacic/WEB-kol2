import { Component, input, output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Company } from '../companies/companies.component';

@Component({
  selector: 'app-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  form = input<FormGroup | null>(null);

  triggerAdd = output<Company>();
  triggerClose = output<null>();

  submit() {
    this.triggerAdd.emit(this.form()?.value);
    setTimeout(() => {
      this.triggerClose.emit(null);
      this.form()?.reset();
    }, 500);
  }

}

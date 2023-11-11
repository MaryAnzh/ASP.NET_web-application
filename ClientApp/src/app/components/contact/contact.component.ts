import { Component, Input } from '@angular/core';
import { IContact } from 'src/app/interfaces/contact.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
  @Input() contact: IContact | undefined = undefined;
  @Input() number: number | undefined;
}

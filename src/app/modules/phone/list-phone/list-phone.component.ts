import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination/lib/pagination-instance';
import { Phone } from 'src/app/models/phone.model';

@Component({
  selector: 'app-list-phone',
  templateUrl: './list-phone.component.html',
  styleUrls: ['./list-phone.component.scss'],
})
export class ListPhoneComponent implements OnInit {
  public isLoading: boolean = true;
  public selectedPhone: Phone = {
    cardName: '',
    version: '',
    contact: '',
  };
  public phones: Phone[] = [
    {
      cardName: 'qui',
      version: '1.0',
      contact: 'Contact',
    },
    {
      cardName: 'qui',
      version: '1.1',
      contact: 'Contact',
    },
    {
      cardName: 'qui',
      version: '1.2',
      contact: 'Contact',
    },
    {
      cardName: 'qui',
      version: '1.3',
      contact: 'Contact',
    },
    {
      cardName: 'qui',
      version: '1.4',
      contact: 'Contact',
    },
    {
      cardName: 'qui',
      version: '1.5',
      contact: 'Contact',
    },
    {
      cardName: 'qui',
      version: '1.6',
      contact: 'Contact',
    },
    {
      cardName: 'qui',
      version: '1.7',
      contact: 'Contact',
    },
    {
      cardName: 'qui',
      version: '1.8',
      contact: 'Contact',
    },
    {
      cardName: 'qui',
      version: '1.9',
      contact: 'Contact',
    },
  ];
  public tempPhones: any[] = [];
  public itemsPerpage: number = 9;
  public config: PaginationInstance = {
    itemsPerPage: this.itemsPerpage,
    totalItems: 0,
    currentPage: 1,
  };
  public labels = { next: '', previus: '' };

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.getPhones();
      this.isLoading = false;
    }, 1000);
  }

  addNewPhone(event: Phone) {
    this.phones.unshift(event);
  }

  delete(phone: Phone) {
    this.phones = this.phones.filter(
      (item: Phone) => item.version !== phone.version
    );
    this.getPhones(this.config.currentPage);
  }

  edit(phone: Phone) {
    this.phones = this.phones.filter(
      (item) => item.version !== this.selectedPhone.version
    );
    this.phones.unshift(phone);
    this.getPhones(this.config.currentPage);
  }

  cancel() {
    this.selectedPhone = {
      cardName: '',
      version: '',
      contact: '',
    };
  }

  onSelectPhone(phone: Phone) {
    this.selectedPhone = phone;
  }

  getPhones(pagina: number = 1) {
    this.tempPhones = [];
    for (let i = 0; i < this.phones.length; i += this.config.itemsPerPage) {
      const page = this.phones.slice(i, i + this.config.itemsPerPage);
      this.tempPhones.push(page);
    }
    this.config.currentPage = pagina;
    this.config.itemsPerPage = this.itemsPerpage;
    this.config.totalItems = this.phones.length;
  }
}

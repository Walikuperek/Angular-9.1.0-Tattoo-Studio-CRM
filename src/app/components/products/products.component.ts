import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { ProductsService } from 'src/app/services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 
  items: any;

  currentItem       = null;
  currentIndex      = -1;

  name              = '';
  type              = '';
  subtype           = '';
  subsubtype        = '';
  ifTypeSlash       = '';
  ifSubTypeSlash    = '';
  ifSubSubTypeSlash = '';

  clickTypeFromLeftFixedNav: Subscription;
  clickSubTypeFromLeftFixedNav: Subscription;
  clickSubSubTypeFromLeftFixedNav: Subscription;

  constructor(
    private itemService: ItemService,
    private productsService: ProductsService
  ) { 
    this.clickTypeFromLeftFixedNav = 
      this.productsService.getClickEventByType().subscribe((type) => {
        console.log({ type });
        this.selectByType(type);
      });
    this.clickSubTypeFromLeftFixedNav =
      this.productsService.getClickEventBySubType().subscribe((subtype) => {
        console.log({ subtype });
        this.selectBySubType('', subtype);
      });
    this.clickSubSubTypeFromLeftFixedNav =
      this.productsService.getClickEventBySubSubType().subscribe((subsubtype) => {
        console.log({ subsubtype });
        this.selectBySubSubType('', '', subsubtype);
      });
  }

  ngOnInit() {
    this.retrieveItems();
  }

  retrieveItems() {
    this.itemService.getAll()
      .subscribe(
        data => {
          this.items = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  searchByName() {
    this.type = '';
    this.subtype = '';
    this.subsubtype = '';

    this.ifTypeSlash = '';
    this.ifSubTypeSlash = '';
    this.ifSubSubTypeSlash = '';
    
    this.itemService.findByName(this.name)
      .subscribe(
        data => {
          this.items = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  selectByType(type: string = '') {
    this.type = type;
    this.ifTypeSlash = '/';

    this.subtype = '';
    this.subsubtype = '';

    this.ifSubTypeSlash = '';
    this.ifSubSubTypeSlash = '';
    
    this.itemService.findByType(type)
      .subscribe(
        data => {
          this.items = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  selectBySubType(type: string = '', subtype: string = '') {
    this.type = type;
    this.subtype = subtype;

    this.ifTypeSlash = '/';
    this.ifSubTypeSlash = '/';

    this.subsubtype = '';
    this.ifSubSubTypeSlash = '';
    // alert(`products: ${type} ${subtype}`);
    this.itemService.findBySubType(subtype)
      .subscribe(
        data => {
          this.items = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  selectBySubSubType(type: string = '', subtype: string = '', subsubtype: string = '') {
    this.type = type;
    this.subtype = subtype;
    this.subsubtype = subsubtype;

    this.ifTypeSlash = '/';
    this.ifSubTypeSlash = '/';
    this.ifSubSubTypeSlash = '/';

    this.itemService.findBySubSubType(subsubtype)
      .subscribe(
        data => {
          this.items = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }
}

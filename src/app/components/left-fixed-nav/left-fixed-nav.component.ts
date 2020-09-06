import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-left-fixed-nav',
  templateUrl: './left-fixed-nav.component.html',
  styleUrls: ['./left-fixed-nav.component.scss']
})
export class LeftFixedNavComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) document,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.dropDown();   
  }

  /* Show products with SELECT * FROM items WHERE Type = 'type' */
  showProductsByType(type: string = ''): void {
    this.productsService.searchByType(type);
  }

  /* Show products with SELECT * FROM items WHERE SubType = 'subtype' */
  showProductsBySubType(type: string = '', subtype: string = ''): void {
    this.productsService.searchBySubType(subtype);
  }

  /* Show products with SELECT * FROM items WHERE SubType = 'subtype' */
  showProductsBySubSubType(type: string = '', subtype: string = '', subsubtype: string = ''): void {
    this.productsService.searchBySubSubType(subsubtype);
  }

  /**
   * @function dropDown
   * Method that goes over all dropdowns in side nav:
   * class   = .dropdown-btn
   * onClick => hides/shows => dropdown-container
   */
  private dropDown(): void {
    const dropdown = document.getElementsByClassName('dropdown-btn');

    for (let i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener('click', function () {
        // not change to arrow function -> due to context of 'this'
        this.classList.toggle('active');
        const dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
        } else {
          dropdownContent.style.display = 'block';
        }
      });
    }
  }
}

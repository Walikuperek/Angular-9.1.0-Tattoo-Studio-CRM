import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-left-fixed-nav',
  templateUrl: './left-fixed-nav.component.html',
  styleUrls: ['./left-fixed-nav.component.scss']
})
export class LeftFixedNavComponent implements OnInit {

  constructor(
    private productsService: ProductsService) { }

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
  private async dropDown() {
    const dropdown = document.getElementsByClassName('dropdown-btn');

    for (let i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener('click', function () {

        // Dont change to arrow function -> due to context of 'this'!
        this.classList.toggle('active');
        const dropdownContent = this.nextElementSibling;

        if (dropdownContent === null) return

        else if (dropdownContent.style.display === 'block') {
          this.style.borderBottom = 'none';
          this.style.backgroundColor = 'transparent';
          this.querySelector('.caret-down').style.transform = 'rotate(90deg)';
          this.querySelector('.caret-down').style.color = '#98a6ad';
          dropdownContent.style.display = 'none';
        } else {
          this.style.borderBottom = '2px solid #fd375f';
          this.style.backgroundColor = '#fd375f73';
          this.querySelector('.caret-down').style.transform = 'rotate(0deg)';
          this.querySelector('.caret-down').style.color = '#fd375f';
          dropdownContent.style.display = 'block';
        }
      });
    }
  }
}

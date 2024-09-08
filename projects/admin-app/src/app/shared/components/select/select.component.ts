import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AllProductsComponent } from '../../../products/components/all-products/all-products.component';
@Component({
  selector: 'app-select',
  standalone: true,
  imports: [AllProductsComponent,NgIf,NgFor],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent implements OnInit{

  @Input() title:string = ""
  @Input() data:any[] = [];
  @Input() select = ''
  @Input() all:boolean = true;

  @Output() selectedValue = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  detectChanges(event:any) {
    this.selectedValue.emit(event)
  }
}

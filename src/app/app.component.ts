import {Component, ViewChildren, ViewChild, OnInit} from '@angular/core';
import {DataManager, DataOptions, ODataV4Adaptor} from '@syncfusion/ej2-data';
import { TranslateService } from '@ngx-translate/core';
import {GridComponent} from '@syncfusion/ej2-angular-grids';
import {setCulture} from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  @ViewChild(GridComponent)
  grid: GridComponent;

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr']) // tells the service which languages are available for translation 
    translate.use('en');//  tells the service which is current language 
  }
  ngOnInit () {
  }
  public onChange (args) {
    this.translate.use(args.value);
  }
  public dataSource: any = [
    {
      OrderID: 10248, CustomerID: 'VINET', OrderDate: new Date(8364186e5),
    },
    {
      OrderID: 10249, CustomerID: 'TOMSP', OrderDate: new Date(836505e6),
    }];
    public data: string[] = ['fr', 'en'];

}


import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ConsultantTableDataSource } from './consultant-table-datasource';

@Component({
  selector: 'app-consultant-table',
  templateUrl: './consultant-table.component.html',
  styleUrls: ['./consultant-table.component.css']
})
export class ConsultantTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ConsultantTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit() {
    this.dataSource = new ConsultantTableDataSource(this.paginator, this.sort);
  }
}

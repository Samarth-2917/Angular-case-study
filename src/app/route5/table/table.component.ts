import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  students: Array<any> = [];
  headings: Array<any> = [];
  originalTableOrder: Array<any> = [];

  // To preserve the original order of table


  constructor(private service: TableService) { }

  ngOnInit(): void {
    this.service.getStudents().pipe(distinctUntilChanged()).subscribe(resp => {
      console.log('response:', resp);
      this.students = resp;
      this.headings = Object.keys(this.students[0]).map(key => {
        return { headingName: key, count: 0 }
      });

      this.originalTableOrder = resp.slice();

    }, err => {
      console.log('some error occured!!', err.status);

    });

  }

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => 0

  sortTable(headingName: string, index: number) {
    switch (headingName) {
      case 'Name':
        if (this.headings[index].count == 0) {
          this.students = this.students.sort((a, b) => (a.Name) > (b.Name) ? 1 : -1);
          this.headings[index].count += 1;
        } else if (this.headings[index].count == 1) {
          this.students = this.students.sort((a, b) => (a.Name) < (b.Name) ? 1 : -1);
          this.headings[index].count += 1;
        } else {
          this.headings[index].count = 0;
          this.students = this.originalTableOrder.slice();
        }

        break;

      case 'Section':
        if (this.headings[index].count == 0) {
          this.students = this.students.sort((a, b) => (a.Section) > (b.Section) ? 1 : -1)
          this.headings[index].count += 1
        }
        else if (this.headings[index].count == 1) {
          this.students = this.students.sort((a, b) => (a.Section) < (b.Section) ? 1 : -1)
          this.headings[index].count += 1

        }
        else {
          this.headings[index].count = 0;
          this.students = this.originalTableOrder.slice();
        }
        break;

      default:
        let key = this.headings[index].headingName
        if (this.headings[index].count == 0) {
          this.students = this.students.sort((a, b) => (a[key]) - (b[key]))
          this.headings[index].count += 1
        }
        else if (this.headings[index].count == 1) {
          this.students = this.students.sort((a, b) => (b[key]) - (a[key]))
          this.headings[index].count += 1

        }
        else {
          this.headings[index].count = 0
          this.students = this.originalTableOrder.slice();
        }
    }
  }

}

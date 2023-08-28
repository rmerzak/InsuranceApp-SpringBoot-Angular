import { Component } from '@angular/core';
import { Page } from 'src/app/Model/page';
import { PolicyService } from 'src/app/service/policy.service';
import { CustomerInfoDialogComponent } from '../customer-info-dialog/customer-info-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon'
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  head: string[] = ["policyId","bodily Injury Liability","collision","comprehensive","date Of Purchase","fuel","personal Injury Protection","premium","property Damage Liability","vehicle Segment","customer"];
  mobileTab: number[] = [];
  policyNameFilter: string | null = null;
  page: Page | null = null;
  currentPage = 0;
  pageSize = 10;
  dataSource: any;
  filterd: Page | null = null;
  pageCus: Page | null = null;
  constructor(private policyService: PolicyService,private dialog: MatDialog) {}

  i = 0;
  ngOnInit(): void {
    this.fetchPolicies(0,"null");
  }

  fetchPolicies(i:number,sortOrder: string) {
    if (i == 0) {
      this.policyService.getPolicies(this.currentPage, this.pageSize)
      .subscribe((data) => {
        this.page = data;
        this.filterd = data;
      });
    }
    else if (i == 1) {
      const numericFilter = Number(this.policyNameFilter);
      this.policyService.getPoliciesByCustomer(numericFilter,this.currentPage, this.pageSize)
        .subscribe((data) => {
          this.filterd = data;
        });
    }
    else if (i == 2) {
    this.policyService.getPoliciesWithSorting(this.currentPage, this.pageSize, "dateOfPurchase", sortOrder)
      .subscribe((data) => {
        this.filterd = data;
        console.log(data)
      });
    }
    else if (i == 3) {
      this.policyService.getPoliciesWithSortingByPremium(this.currentPage, this.pageSize, "premium", sortOrder)
      .subscribe((data) => {
        this.filterd = data;
        console.log(data)
      });
    }
  }


  filter() {
    this.currentPage = 0;
    if(this.policyNameFilter=="") {
      this.fetchPolicies(0,"null");
      this.i = 0;
    } else {
      this.fetchPolicies(1,"null");
      this.i = 1;
    }
  }

  sortDateOfPurchase(sortOrder: string) {
    this.currentPage = 0;
    this.fetchPolicies(2,sortOrder);
    this.i = 2;
  }
  sortDateOfPurchaseByPremium(sortOrder: string) {
    this.currentPage = 0;
    this.fetchPolicies(3,sortOrder);
    this.i = 3;
  }

  nextPage() {

    if (this.filterd && this.filterd.pageable.pageNumber < this.filterd.totalPages - 1) {
      this.currentPage++;
      this.fetchPolicies(this.i,"null");
    }
  }
  prevPage() {
    if (this.filterd && this.filterd.pageable.pageNumber > 0) {
      this.currentPage--;
      this.fetchPolicies(this.i,"null");
    }
  }
  showCustomer(customer:any){
    this.Openpopup(customer, 'Add Customer',CustomerInfoDialogComponent);
  }

  Openpopup(code: any, title: any,component:any) {
    var _popup = this.dialog.open(component, {
      enterAnimationDuration: '100ms',
      exitAnimationDuration: '100ms',
      data: {
        code: code
      }
    });
    _popup.afterClosed().subscribe(item => {
      console.log(item)
    })
  }

}

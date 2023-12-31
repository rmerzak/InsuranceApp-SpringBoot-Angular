import { Component } from '@angular/core';
import { PolicyService } from 'src/app/service/policy.service';
import { Page } from 'src/app/Model/page';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  page: Page | null = null;
  filterd: Page | null = null;
  policyNameFilter: string | null = null;
  currentPage = 0;
  pageSize = 10;
  constructor(private policyService: PolicyService) {}

  i = 0;
  ngOnInit(): void {
    this.fetchPolicies(0,"null");
    console.log(this.page)
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
}

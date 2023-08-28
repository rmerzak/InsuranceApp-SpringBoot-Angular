export interface Page {
    content: Policy[];
    pageable: {
      pageNumber: number;
      pageSize: number;
    };
    totalPages: number;
    totalElements: number;
  }
  interface Customer {
    customerId: number;
    customerGender: string;
    customerIncomeGroup: string;
    customerRegion: string;
    customerMaritalStatus: number;
  }
  interface Policy {
    policyId: number;
    dateOfPurchase: string;
    customer: Customer;
    fuel: string;
    vehicleSegment: string;
    premium: number;
    bodilyInjuryLiability: number;
    personalInjuryProtection: number;
    propertyDamageLiability: number;
    collision: number;
    comprehensive: number;
  }
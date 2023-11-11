export class Applicant {
    id: number = 0;
    applicantName: string = "";
    gender: string = "";
    district: string = "";
    state: string = "";
    pincode: number = 0; 
    ownership: string = "";
    govtIdType: string = "";
    idNumber: number = 0; 
    category: string = "";
    loadApplied: number = 0;
    applicationDate: Date = new Date();
    approvalDate: Date = new Date();
    modifiedDate: Date = new Date();
    status: string = "";
    reviewerId: number = 0;
    reviewerName: string = "";
    reviewerComments: string = "";
}

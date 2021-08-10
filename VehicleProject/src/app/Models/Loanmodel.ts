export class Loan {
    userId?: number;
    vehicleId?: number;
    loanAmount?: number;
    loanTenure?: number;
    startDate?: Date;
    endDate?: string;
    rateOfInterest?: number;
    monthlyEmi?: number;
    public constructor() {
        this.userId = 1;
        this.vehicleId = 3;
        this.endDate = "2026-08-26";
        this.monthlyEmi = 28061;
    }


}
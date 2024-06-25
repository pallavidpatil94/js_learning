function Bank(bankName, branchCode, ifscCode, location){
    this.bankName = bankName;
    this.branchCode = branchCode;
    this.ifscCode = ifscCode;
    this.location = location;
}
const yesBank = new Bank("Yes Bank", 1001, "IFSC007780", "Pune");
console.log(`Yes Bank Details :--> ${yesBank.bankName}, ${yesBank.branchCode}, ${yesBank.ifscCode}, ${yesBank.location}`);

const icici = new Bank("ICICI Bank", 1002, "IFSC277383", "Kharadi");
console.log(`ICICI Bank Details :--> ${icici.bankName}, ${icici.branchCode}, ${icici.ifscCode}, ${icici.location}`);

const unionBank = new Bank("Union Bank", 1003, "IFSC47847", "Bhusawal");
console.log(`UNION Bank Details :--> ${unionBank.bankName}, ${unionBank.branchCode}, ${unionBank.ifscCode}, ${unionBank.location}`);

const bankOfCommerce = new Bank("Bank Of Commerce", 1004, "IFSC673989", "Mumbai");
console.log(`Bank Of Commerce Details :--> ${bankOfCommerce.bankName}, ${bankOfCommerce.branchCode}, ${bankOfCommerce.ifscCode}, ${bankOfCommerce.location}`);

console.log(`======== Timing Of Bank ==========`);
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";
console.log(`1. Yes bank open around ${yesBank.openTime} & close at ${yesBank.closeTime}`);
console.log(`2. ICICI bank open around ${icici.openTime} & close at ${icici.closeTime}`);

console.log(`Bank name is ${yesBank.bankName}, bank code is ${yesBank.branchCode}. The Yes bank open at ${yesBank.openTime}`);

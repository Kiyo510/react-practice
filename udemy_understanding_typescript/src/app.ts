class Department {
  static currentYear = 23022;

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }
  describe() {
    console.log(`Department: ${this.id}` + this.name);
    console.log(`currentYear ${Department.currentYear}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('レポートが見つかりません。');
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('正しい値を設定して下さい。');
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  prrintReport() {
    console.log(this.reports);
  }
}

// const adminsIT = new ITDepartment(['Max', 'John']);
// console.log(adminsIT);

// adminsIT.outputAdmins();
// adminsIT.describe();

// console.log(accounting.mostRecentReport);
// console.log((accounting.mostRecentReport = 'hogehoge'));
// accounting.prrintReport();
// accounting.describe();

const accounting = AccountingDepartment.getInstance();
console.log(accounting);


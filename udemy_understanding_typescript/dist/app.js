"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // this.name = n;
    }
    describe() {
        console.log(`Department: ${this.id}` + this.name);
        console.log(`currentYear ${Department.currentYear}`);
    }
}
Department.currentYear = 23022;
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
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
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('正しい値を設定して下さい。');
        }
        this.addReport(value);
    }
    addReport(text) {
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
//# sourceMappingURL=app.js.map
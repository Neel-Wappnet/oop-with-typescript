var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var School = /** @class */ (function () {
    function School(schoolName) {
        this.totalFee = 0;
        this.totalSalary = 0;
        this.totalStudent = 0;
        this.totalStaff = 0;
        School.schoolName = schoolName;
    }
    School.prototype.getTotalFee = function () {
        return this.totalFee;
    };
    School.prototype.getTotalSalary = function () {
        return this.totalSalary;
    };
    School.prototype.getTotalStudent = function () {
        return this.totalStudent;
    };
    School.prototype.getTotalStaff = function () {
        return this.totalStaff;
    };
    School.prototype.addMember = function (salary) {
        this.totalStaff++;
        this.totalSalary += salary;
    };
    School.prototype.removeMember = function (salary) {
        this.totalStaff--;
        this.totalSalary -= salary;
    };
    School.prototype.addStudent = function (fee) {
        this.totalStudent++;
        this.totalFee += fee;
    };
    School.prototype.removeStudent = function () {
        this.totalStudent--;
    };
    School.schoolName = "Public School";
    return School;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, std, fee, studentId, adhar) {
        var _this = _super.call(this, Student.schoolName) || this;
        _this.studentName = name;
        _this.std = std;
        _this.fee = fee;
        _this.studentId = studentId;
        _this.adharNumber = adhar;
        _this.studentSchool = "";
        return _this;
    }
    Student.prototype.getStudentDetail = function () {
        console.log("Name :".concat(this.studentName, ", Id :").concat(this.studentId, ", adharNumber :").concat(this.adharNumber, ", schoolName: ").concat(this.studentSchool));
    };
    Student.prototype.newStudent = function () {
        this.studentSchool = Student.schoolName;
        _super.prototype.addStudent.call(this, this.fee);
        console.log("student added at ".concat(Student.schoolName));
    };
    Student.prototype.removeStudent = function () {
        _super.prototype.removeStudent.call(this);
        this.studentSchool = Student.schoolName;
    };
    return Student;
}(School));
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(name, designation, staffId, adhar, salary) {
        var _this = _super.call(this, Staff.schoolName) || this;
        _this.memberName = name;
        _this.memberDesignation = designation;
        _this.staffId = staffId;
        _this.adharNumber = adhar;
        _this.workingAt = "";
        _this.salary = salary;
        return _this;
    }
    Staff.prototype.getStaffMemberDetail = function () {
        console.log("Name :".concat(this.memberName, ", Id :").concat(this.staffId, ",designation:").concat(this.memberDesignation, ", adharNumber :").concat(this.adharNumber, ", workingAt: ").concat(this.workingAt));
    };
    Staff.prototype.addStaffMember = function () {
        this.workingAt = Staff.schoolName;
        _super.prototype.addMember.call(this, this.salary);
    };
    Staff.prototype.removeStaffMember = function () {
        this.workingAt = "";
        _super.prototype.removeMember.call(this, this.salary);
    };
    return Staff;
}(School));
var student1 = new Student("student1", 5, 14000, 1111, 1111222233334444);
console.log("total fee before adding student: ", "".concat(student1.getTotalFee()));
student1.getStudentDetail();
student1.newStudent();
student1.getStudentDetail();
console.log("total fee after adding student : ", "".concat(student1.getTotalFee()));
console.log("total students at school : ", "".concat(student1.getTotalStudent()));
var teacher1 = new Staff("teacher1", "Maths teacher", 111, 9999888877776666, 50000);
console.log("total salary before adding staff member: ", "".concat(student1.getTotalSalary()));
teacher1.getStaffMemberDetail();
teacher1.addStaffMember();
teacher1.getStaffMemberDetail();
console.log("total salary after adding staff member : ", "".concat(teacher1.getTotalSalary()));
console.log("total staff members at school : ", "".concat(teacher1.getTotalStaff()));

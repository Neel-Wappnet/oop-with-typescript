//class of school named PUBLIC SCHOOL
class School {

  static schoolName: string = "Public School"
  private totalFee: number = 0
  private totalSalary: number = 0
  protected students: Array<string> = []
  protected staffmembers: string[] = []

  constructor(schoolName: string) {
    School.schoolName = schoolName
  }

  getTotalFee(): number {
    return this.totalFee
  }

  getTotalSalary(): number {
    return this.totalSalary
  }

  getStudents(): string[] {
    return this.students
  }

  getStaffMembers(): string[] {
    return this.staffmembers
  }

  //add member in staff
  public addMember(name: string, salary: number): number {

    //check if staff member already in school and return staffId of the member
    if (this.staffmembers.includes(name)) {
      console.log(`${name} is already existed`);
    } else {
      this.staffmembers.push(name);
      this.totalSalary += salary
    }
    return this.staffmembers.indexOf(name)
  }

  //remove member from staff
  public removeMember(id: number, salary: number): void {
    let stfName = this.staffmembers.at(id)

    //check that person is in staff or not
    if (!stfName) {
      console.log(`person is not staff member of school`);
    } else {
      delete this.staffmembers[id];
      this.totalSalary -= salary
      console.log(`${stfName} was removed from school`);
    }
  }

  //add student in school
  public addStudent(name: string, fee: number): number {

    //check that student is alredy studing in school or not and return studentId
    if (this.students.includes(name)) {
      console.log(`student already existed`)
    } else {
      this.students.push(name);
      this.totalFee += fee
    }
    return this.students.indexOf(name)
  }

  //remove student from school
  public removeStudent(id: number): void {
    let stuName = this.students.at(id)

    //check that student is studing or not
    if (stuName) {
      delete this.students[id];
      console.log(`${stuName} was removed from school`)
    } else {
      console.log(`${stuName} is not studing in this school`)
    }
  }
}

//class for students whose are studing in school
class Student extends School {
  protected studentId: number;
  studentName: string;
  std: number;
  private fee: number;
  private adharNumber: number;
  studentSchool: string

  constructor(name: string, std: number, fee: number, adhar: number) {
    super(Student.schoolName);
    this.studentName = name;
    this.std = std;
    this.fee = fee;
    this.studentId = 0;
    this.adharNumber = adhar;
    this.studentSchool = ""
  }

  //get all detail of student
  getStudentDetail(): void {
    console.log(`Name :${this.studentName}, Id :${this.studentId}, adharNumber :${this.adharNumber}, schoolName: ${this.studentSchool}`)
  }

  //add new student in school
  newStudent(): void {
    //assigning student id
    this.studentId = super.addStudent(this.studentName, this.fee);
    if (this.studentId) {
      this.studentSchool = Student.schoolName;
      console.log(`student added at ${Student.schoolName}`)
    }
  }

  //remove student from school
  removeStudent(): void {
    super.removeStudent(this.studentId)
    this.studentSchool = "";
  }
}

//class for staff member of the school
class Staff extends School {
  memberName: string;
  memberDesignation: string;
  protected staffId: number;
  private adharNumber: number;
  workingAt: string;
  private salary: number
  constructor(name: string, designation: string, adhar: number, salary: number) {
    super(Staff.schoolName);
    this.memberName = name;
    this.memberDesignation = designation;
    this.staffId = 0;
    this.adharNumber = adhar;
    this.workingAt = "";
    this.salary = salary
  }

  //get all detail of staff member
  getStaffMemberDetail(): void {
    console.log(`Name :${this.memberName}, Id :${this.staffId},designation:${this.memberDesignation}, adharNumber :${this.adharNumber}, workingAt: ${this.workingAt}`)
  }

  //add member into staff
  addStaffMember(): void {
    this.staffId = super.addMember(this.memberName, this.salary)
    this.workingAt = Staff.schoolName
  }

  //removing member from staff
  removeStaffMember(): void {
    super.removeMember(this.staffId, this.salary)
    this.workingAt = "";
  }
}

const student1 = new Student("student1", 5, 14000, 1111222233334444)

console.log(`total fee before adding student: `, `${student1.getTotalFee()}`)

student1.getStudentDetail()
student1.newStudent()
student1.getStudentDetail()

console.log(`total fee after adding student : `, `${student1.getTotalFee()}`)
console.log(`total students at school : `, `${student1.getStudents()}`)

const teacher1 = new Staff("teacher1", "Maths teacher", 9999888877776666, 50000)

console.log(`total salary before adding staff member: `, `${student1.getTotalSalary()}`)

teacher1.getStaffMemberDetail()
teacher1.addStaffMember()
teacher1.getStaffMemberDetail()

console.log(`total salary after adding staff member : `, `${teacher1.getTotalSalary()}`)
console.log(`total staff members at school : `, `${teacher1.getStaffMembers()}`)
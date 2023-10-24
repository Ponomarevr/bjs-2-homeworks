function Student(name, gender, age) {
   this.name = name;
   this.gender = gender;
   this.age = age;
   this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
   this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
   if (!this.marks) {
      return;
   } else this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
   if (!this.marks) {
      return 0;
   } else average = this.marks.reduce((acc, curr) => acc + curr / this.marks.length, 0);
   return average;
}

Student.prototype.exclude = function (reason) {
   delete this.subject;
   delete this.marks;
   this.excluded = reason;
}

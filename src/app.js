'use strict'

function selectSidebar() {
    let sideNav = document.querySelector("#side-nav")
    console.log(sideNav)
}

function getStudentsAverage(students) {
    const studentsScholarship = []
    
    for (let student of students) {
        let gradesTotal = 0
        for (let grade of student.grades) {
            gradesTotal += grade
        }
    
        let average = gradesTotal / student.grades.length
        if (average > 80.0) {
            studentsScholarship.push({ name: student.name, gradeAvg: average })
        }
    }

    return studentsScholarship
}

const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
]

console.log(getStudentsAverage(students))
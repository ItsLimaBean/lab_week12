'use strict'

function selectSidebar() {
    let sideNav = document.querySelector("#side-nav")
    console.log(sideNav)
}

function getGradesAverage(grades) {
    let gradesTotal = 0
    for (let grade of grades) {
        gradesTotal += grade
    }

    return gradesTotal / student.grades.length
}

function getStudentsAverage(students) {
    const studentsScholarship = []
    
    for (let student of students) {
        let average = getGradesAverage(student.grades)
        if (average > 80.0) {
            studentsScholarship.push({ name: student.name, gradeAvg: average })
        }
    }

    return studentsScholarship
}

function applyDarkTheme() {
    let pageContainer = document.querySelector(".container")
    pageContainer.classList.replace("light-theme", "dark-theme")
}

applyDarkTheme()

const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
]

console.log(getStudentsAverage(students))
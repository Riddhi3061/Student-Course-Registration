
// Function to create student object
function student(id, name, courses){
    this.id = id
    this.name = name
    this.courses = courses
}
//Function to create course object
function course(coursename, bool_value=0){
    this.coursename = coursename
    this.bool_value = bool_value
}  

//Function to find the location of particular student
function find_student(old_student){
    for(let i=0; i<students.length; i++){
        if(students[i].id === old_student){
            return i;

        }
     }
}

//Initialization
students = []
courses = []
const course_1 = new course('Science')
const course_2 = new course('Maths') 
courses.push(course_2)
const student_1 = new student(101, 'Aman Kumar', ['Maths', 'Science'])
const student_2 = new student(100, 'Rani Banu', ['Maths'])
students.push(student_2)
const student_3 = new student(102, 'Rita Kapoor', [])
const student_4 = new student(103, 'Gita Sabu', [])
const course_3 = new course('Physics')
const course_4 = new course('Chemistry')
const just_course = ['Science']
const old_student = 100
const old_course = 'Maths'


// -----  Functions Useful for optimization  ------ //
// It was to check Not assigned Courses but now we are not using it
function check_courses(item){
    if(item.bool_value == 0){
        return item.coursename
    }
    
}

//Function to change bool_value for courses that has been assigned
function checking(item, temp){
    let index = temp.indexOf(item.coursename)
    if(index>-1){
        item.bool_value = 1;
    }
}

//Mapping Function to find assigned students to specific Course
function find_list(item, old_course){
    let temp = item.courses
    if(temp.includes(old_course)){
        return item.id;
    }
    return NaN;
}


// ----- Functionality Code  -----  //


//Function to Add New Course
const add_course = (course_1) => {
    courses.push(course_1)
    console.log(`New Course is added. Now total courses are`);
    console.log(courses.map(n=>n.coursename));
}

//Function to Add New Student
const add_student = (student_1) =>{
    students.push(student_1)
    console.log(`New Student Added with id ${student_1.id}`);
    if(student_1.courses){
       courses.map(value=>checking(value,student_1.courses))
    }
    console.log(students);

}

//Function to Assign Courses to particualar Student
const select_courses = (just_course, old_student) =>{
        let i = find_student(old_student)
        if(i>=0){
            students[i].courses = students[i].courses.concat(just_course);
            console.log(`Course has been assigned to the ${old_student}`);
            courses.map(value=>checking(value,just_course))
        }
    
    console.log(students);
}

//Function to print List of Courses assigned to particular Student
const list_courses_student = (old_student) =>{
        let i = find_student(old_student)
        if(i>=0){
            console.log(`The List of courses assigned to student ${old_student} is `);
            console.log(students[i].courses);            
            
        }
   
}

//Function to print List of Students who have taken a particular Course 
const list_students_courses = (old_course) =>{
    // const x = []
    // for(let i = 0; i< students.length;i++ ){
    //     if(students[i].courses.find(c => c===old_course)){
    //         x.push(students[i].id)
    //     }check_courses
    // }
    const y = students.map(value => find_list(value,old_course))
    console.log(`The List of students with course ${old_course} are `);
    console.log(y);
}

//Function to print the List of Courses not taken by anypne
const not_opted_course = () =>{
    console.log("The Courses that are not opted are--")
    console.log(courses.filter(function(item){
        if(item.bool_value == 0){
        return true
    }
    return false;
    }).map(function(item){return item.coursename}))
   
}



// ---- Calling the functions one by one ----- //
add_course(course_1)
add_student(student_1)
select_courses(just_course, old_student)
list_courses_student(old_student)
list_students_courses(old_course)
add_course(course_3)
add_course(course_4)
not_opted_course()

// --- Exiting the process ---- //
function exit(){
    p.blah("!!Program Ended!!")
}
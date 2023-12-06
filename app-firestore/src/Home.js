export default function ListOfPeople() {


    const dataSource = [
        { title: "Algorithms and Data Structures I ", courseCode: "CSC 1051" },
        { title: "The Enrichment Seminar", courseCode: "CSC 1990" },
        { title: "Algorithms and Data Structures II", courseCode: "CSC 1052" },
        { title: "Discrete Structures", courseCode: "CSC 1300" },
        { title: "Computing Systems I ", courseCode: "CSC 2400" },
        { title: "Platform Based Computing", courseCode: "CSC 2053" },
        { title: "Statistics for Computing", courseCode: "CSC 2300" },
        { title: "Computing Systems II", courseCode: "CSC 2405" },
        { title: "Analysis of Algorithms", courseCode: "CSC 1700" },
        { title: "Programming Languages", courseCode: "CSC 1800" },
        { title: "Theory of Computation", courseCode: "CSC 4480" },
        { title: "Database Systems ", courseCode: "CSC 2405" },
        { title: "Software Engineering", courseCode: "CSC 4700" },
        { title: "Senior Project", courseCode: "CSC 4790" }
    
    ];

    var listOfClasses =  dataSource.map(course => 
    <ul>
        <li> {course.title} </li>
        <li> {course.courseCode} </li>
    </ul>);


    return (
        <div>
            <ul>
                {listOfClasses}
            </ul>
        </div>
    );
    
   

}
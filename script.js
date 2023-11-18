let data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach(
        (item)=>{
            if(item.profession ==="developer"){
                console.log(item);
            }
        }
    )
  }
  
  // 2. Add Data
  function addData() {
    let newname = prompt("Enter the name");
    let newage = parseInt(prompt("enter the age"));
    let newprofession = prompt("Enter the profession");
    // console.log(newname,newage,newprofession);
    data.push({
        name:newname,
        age:newage,
        profession:newprofession
    });
    console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    data = data.filter((item)=>item.profession !="admin");
    console.log(data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let dummyArr = [
        {name: "Ayush", age: 21, profession: "developer" },
        {name: "Vimal", age: 22, profession: "Student" }
    ]
    let combinedArr = data.concat(dummyArr);
    console.log(combinedArr);
  }
  
  // 5. Average Age
  function averageAge() {
    let avgval = 0;
    data.forEach(
        (item)=>{
            avgval += item.age;
        } )
        console.log(avgval/data.length);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {}
  
  // 7. Unique Professions
  function uniqueProfessions() {}
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b)=>a.age-b.age);
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.forEach(
        (person)=>{
            if(person.name=="john"){
                person.profession = "Manager"
            }
        }
    )
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {}



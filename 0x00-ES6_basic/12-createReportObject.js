export default function createReportObject(employeesList) {
    let allEmployees= structuredClone(employeesList)
   return{
    allEmployees,

 getNumberOfDepartments(){
        return Object.keys(allEmployees).length;
    }}
}

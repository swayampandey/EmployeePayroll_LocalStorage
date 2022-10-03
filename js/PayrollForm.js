let empDataList = [];
let selectedId;

function getFromLocalStorage() {
    let empPayrollDataList = JSON.parse(localStorage.getItem("employeePayrollList"));
    if (!empPayrollDataList)
        return;
    for (let emp of empPayrollDataList) {
        empDataList.push(emp);
    }
    selectedId = localStorage.getItem("editEmpId");
}

window.addEventListener('DOMContentLoaded', (event) => {
    getFromLocalStorage();
    console.log("selected id " + selectedId);
    if (!selectedId)
        return;
    else {

        let empPayrollData = empDataList.find(empData => empData._id == selectedId);
        console.log("ids : " + empPayrollData._id);
        if (!empPayrollData)
            return;

        const index = empDataList.map(empData => empData._id)
            .indexOf(empPayrollData._id);

        setForm(empPayrollData);
    }

});

const setForm = (employeePayrollObj) => {
    setValue('#name', employeePayrollObj._name);
    setSelectedValues('[name=profile]', employeePayrollObj._profileImage);
    setSelectedValues('[name=gender]', employeePayrollObj._gender);
    setSelectedValues('.checkbox', employeePayrollObj._department);
    setValue('#salary', employeePayrollObj._salary);
    document.getElementById("salaryOutput").value = employeePayrollObj._salary;
    setValue('#notes', employeePayrollObj._notes);
    let empDate = new Date(employeePayrollObj._startDate);
    setValue('#day', empDate.getDate());
    setValue('#month', empDate.getMonth());
    setValue('#year', empDate.getFullYear());
}

const setSelectedValues = (proprtyValue, value) => {
    let allItems = document.querySelectorAll(proprtyValue);
    allItems.forEach(item => {
        if (Array.isArray(value)) {
            if (value.includes(item.value)) {
                item.checked = true;
            }
        }
        else if (item.value === value) {
            item.checked = true;
        }
    });
}
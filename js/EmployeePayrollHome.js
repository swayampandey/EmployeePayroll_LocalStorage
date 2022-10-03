let empDataList = [];

function getFromLocalStorage() {
    let empPayrollDataList = JSON.parse(localStorage.getItem("employeePayrollList"));
    for (let emp of empPayrollDataList) {
        empDataList.push(emp);
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    getFromLocalStorage();
    createInnerHTML();
    document.querySelector(".emp-count").textContent = empDataList.length;
    localStorage.removeItem('editEmp');
});

const createInnerHTML = () => {

    const headerHTML = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>salary</th><th>Start Date</th><th>Actions</th>";

    let tableData = '';
    for (let empData of empDataList) {
        console.log("executed loop");
        tableData =
            `${tableData}
            <tr>
                <td>
                    <img src="${empData._profileImage}" class="profile" alt="" />
                </td>
                <td>${empData._name}</td>
                <td>${empData._gender}</td>
                <td>${getDeptHTML(empData._department)}</td>
                <td>${empData._salary}</td>
                <td>${showStartDate(empData._startDate)}</td>
                <td>
                    <img src="../assets/icons/delete-black-18dp.svg" id="${empData._id}" onclick="remove(this)" alt="">
                    <img src="../assets/icons/create-black-18dp.svg" id="${empData._id}" onclick="update(this)" alt="">
                </td>
            </tr>
            `;
    }

    let innerHTML = `${headerHTML} ${tableData}`;

    document.querySelector('#display').innerHTML = innerHTML;

}


const getDeptHTML = (deptList) => {
    let deptHTML = '';
    for (let dept of deptList) {
        deptHTML = `${deptHTML} <div class="dept-label">${dept}</div>`;
    }
    return deptHTML;
}

const showStartDate = (dateInput) => {
    let date = new Date(dateInput);
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
}

const remove = (node) => {
    let empPayrollData = empDataList.find(empData => empData._id == node.id);

    if (!empPayrollData)
        return;

    const index = empDataList.map(empData => empData._id)
        .indexOf(empPayrollData._id);
    empDataList.splice(index, 1);
    console.log(empDataList);
    localStorage.setItem("employeePayrollList", JSON.stringify(empDataList));
    document.querySelector(".emp-count").textContent = empDataList.length;
    createInnerHTML();
}

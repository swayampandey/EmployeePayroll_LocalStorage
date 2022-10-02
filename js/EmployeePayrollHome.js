const createEmployeePayrollJSON = () => {
    let employeePayrollList = [
        {
            _name: 'Narayan Mahadevan',
            _gender: 'male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '5000000',
            _startDate: '28 Sept 2022',
            _note: 'This is note 1',
            _profilePic: '../assets/profile-images/Ellipse -2.png'
        },
        {
            _name: 'Amarpa',
            _gender: 'female',
            _department: [
                'Sales'
            ],
            _salary: '4000000',
            _startDate: '28 Sept 2022',
            _note: 'This is note 2',
            _profilePic: '../assets/profile-images/Ellipse 1.png'
        }
    ];
    return employeePayrollList;
}

window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHTML();
});

const createInnerHTML = () => {

    const headerHTML = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>salary</th><th>Start Date</th><th>Actions</th>";

    let empDataList = createEmployeePayrollJSON();

    let tableData = '';
    for (let empData of empDataList) {
        console.log("executed loop");
        tableData =
            `${tableData}
            <tr>
                <td>
                    <img src="${empData._profilePic}" class="profile" alt="" />
                </td>
                <td>${empData._name}</td>
                <td>${empData._gender}</td>
                <td>${getDeptHTML(empData._department)}</td>
                <td>${empData._salary}</td>
                <td>${empData._startDate}</td>
                <td>
                    <img src="../assets/icons/delete-black-18dp.svg" id="1" onclick="remove(this)" alt="">
                    <img src="../assets/icons/create-black-18dp.svg" id="1" onclick="update(this)" alt="">
                </td>
            </tr>
            `;
    }

    let innerHTML = `${headerHTML} ${tableData}`;

    document.querySelector('#display').innerHTML = innerHTML;

}

//<div class="dept-label">${empData._department[0]}</div>
const getDeptHTML = (deptList) => {
    let deptHTML = '';
    for (let dept of deptList) {
        deptHTML = `${deptHTML} <div class="dept-label">${dept}</div>`;
    }
    return deptHTML;
}
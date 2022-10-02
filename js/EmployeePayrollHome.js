window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHTML();
});

const createInnerHTML = () => {

    const headerHTML = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>salary</th><th>Start Date</th><th>Actions</th>";

    const innerHTML = `${headerHTML}
        <tr>
            <td>
                <img src="../assets/profile-images/Ellipse -2.png" class="profile" alt="" />
            </td>
            <td>Narayan Mahadevan</td>
            <td>Male</td>
            <td>
                <div class="dept-label">HR</div>
                <div class="dept-label">Finance</div>
            </td>
            <td>300000</td>
            <td>1 Nov 2022</td>
            <td>
                <img src="../assets/icons/delete-black-18dp.svg" id="1" onclick="remove(this)" alt="">
                <img src="../assets/icons/create-black-18dp.svg" id="1" onclick="update(this)" alt="">
            </td>
        </tr>
        `;

    document.querySelector('#display').innerHTML = innerHTML;

}
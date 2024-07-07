const users = ['aaryan', 'elon', 'sam'];
const memberDiv = document.querySelector('.memberDiv');
const addIcon = document.querySelector('.addIcon');

const userIcons = () => {
    users.reverse();
    users.map((currElem) => {
        memberDiv.insertAdjacentHTML('afterbegin', `<button class="btn"><span>${currElem}</span></button>`);
    });
};

addIcon.addEventListener('click', () => {
    let userName = prompt('Please enter your name');
    if (userName !== null && !users.includes(userName)) {
        users.push(userName);
        console.log(users);
        memberDiv.insertAdjacentHTML('afterbegin', `<button class="btn"><span>${userName}</span></button>`);
    } else {
        alert('Username already exists or no name entered');
    }
});

userIcons();

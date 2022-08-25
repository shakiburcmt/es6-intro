document.getElementById('apply-bg').addEventListener('click', function () {
    // document.body.style.backgroundColor = 'purple';
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'tomato';
    }
})

document.getElementById('center').addEventListener('click', function () {
    const center = document.getElementById('center-align');
    center.style.textAlign = 'center';
})

document.getElementById('add').addEventListener('click', function () {
    const friendContainer = document.getElementById('addFriend');
    const newFriend = document.createElement('div');
    newFriend.classList.add('friend');
    newFriend.innerHTML = `
    <h3 class="friend-name">Friend-6</h3>
    <p>Nemo debitis ipsam omnis maiores.</p>
    `
    friendContainer.appendChild(newFriend);
})
let count = 0;
let profiles;
const buttonElement = document.querySelector('button');
const themeSwitch = document.getElementById('themeSwitch');

fetch("data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (profilesData) {
        profiles = profilesData;

        if (count < profiles.length) {
            loadData(profiles);
        }
    });

function loadData(products) {
    const container = document.querySelector('.container');
    let temp = count + 4;

    for (let i = count; i < temp; i++) {
        let item = products[i];
        console.log(item);

        const profileElement = document.createElement('img')
        const postElement = document.createElement('div');
        const imgElement = document.createElement('img');
        const detailsElement = document.createElement('div');
        const detailsSubElement = document.createElement('div');
        const titleElement = document.createElement('h5');
        const likesElement = document.createElement('h5');
        const descriptionElement = document.createElement('p');
        const buttonElement = document.createElement('a');

        profileElement.classList.add('profile-pic')
        postElement.classList.add('post');
        detailsElement.classList.add('details');
        detailsSubElement.classList.add('details-sub');
        likesElement.classList.add('likes');

        profileElement.src = item.profile_image;
        imgElement.src = item.image;
        titleElement.textContent = item.name;
        likesElement.textContent = "❤ " + item.likes;
        descriptionElement.textContent = item.caption;
        buttonElement.textContent = 'Socials';
        buttonElement.href = item.source_link;

        detailsSubElement.appendChild(profileElement);
        detailsSubElement.appendChild(titleElement);
        detailsSubElement.appendChild(likesElement);
        detailsElement.appendChild(detailsSubElement);
        detailsElement.appendChild(descriptionElement);
        detailsElement.appendChild(buttonElement);
        postElement.appendChild(imgElement);
        postElement.appendChild(detailsElement);
        container.appendChild(postElement);
    }

    count += 4;

    if (count >= profiles.length) {
        buttonElement.style.display = 'none';
    }

    const posts = document.querySelectorAll('.post');

    posts.forEach((post) => {
        const image = post.querySelector('img');

        image.addEventListener('click', () => {
            post.classList.toggle('enlarged');
        });
    });

}

buttonElement.addEventListener('click', function () {
    loadData(profiles);
    console.log('Button clicked!');
});

themeSwitch.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
});
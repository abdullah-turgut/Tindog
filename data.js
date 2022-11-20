const dogs = [
  {
    name: 'Rex',
    avatar: 'images/dog-rex.jpg',
    age: 25,
    bio: 'Art. Literature. Natural wine. Yoga.',
    hasBeenSwiped: false,
    hasBeenLiked: false,
  },
  {
    name: 'Bella',
    avatar: 'images/dog-bella.jpg',
    age: 43,
    bio: "Yup, that's my owner. U can meet him if you want",
    hasBeenSwiped: false,
    hasBeenLiked: false,
  },
  {
    name: 'Teddy',
    avatar: 'images/dog-teddy.jpg',
    age: 30,
    bio: 'How you doin?',
    hasBeenSwiped: false,
    hasBeenLiked: false,
  },
];

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }
  createHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;

    return `<img
          src="${avatar}"
          alt="dog image"
          class="profile-image"
      />
      <img src="" alt="swipe badge" class="badge hidden" />
      <div class="profile-info">
          <p class="name-age">${name}, ${age}</p>
          <p class="bio">${bio}</p>
      </div>`;
  }
}

export default dogs;
export { Dog };
// Remember to export the data!

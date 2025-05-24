const loginForm = document.getElementById('loginForm');
const loginStatus = document.getElementById('login-status');
const profileSection = document.getElementById('profile');
const userInfo = document.getElementById('user-info');
const clubList = document.getElementById('clubList');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

const userData = {
  username: 'student',
  password: 'password123'
};

const clubs = [
  'Technology Club - For coders and tech enthusiasts',
  'Photography Club - Capture moments',
  'Drama Club - Express your creativity on stage',
  'Sports Club - Stay active and competitive',
  'Literature Club - For the love of books and writing'
];

clubs.forEach(club => {
  const li = document.createElement('li');
  li.textContent = club;
  clubList.appendChild(li);
});

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === userData.username && password === userData.password) {
    loginStatus.textContent = 'Login successful!';
    userInfo.innerHTML = `<p>Welcome, ${username}!</p><p>Member of Tech and Sports Clubs</p>`;
    profileSection.classList.remove('hidden');
  } else {
    loginStatus.textContent = 'Invalid credentials. Try again.';
    profileSection.classList.add('hidden');
  }
});

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

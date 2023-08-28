const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2944&q=80" alt="" />';
  title.innerHTML = 'Succulent';
  excerpt.innerHTML =
    'Water-storing, low-maintenance plants with diverse shapes and hues, adding elegant charm to indoor spaces.';
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/women/10.jpg" alt=""/>';
  name.innerHTML = 'Isabella Rossi';
  date.innerHTML = 'Aug 15, 2023';

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}

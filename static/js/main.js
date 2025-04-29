document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-btn.carousel-prev');
  const nextBtn = document.querySelector('.carousel-btn.carousel-next');

  let index = 0;
  const visibleItems = 3;

  const updateCarousel = () => {
    const itemWidth = items[0].offsetWidth + 20;
    const offset = index * itemWidth;
    track.style.transform = `translateX(-${offset}px)`;
  };

  nextBtn.addEventListener('click', () => {
    if (index < items.length - visibleItems) {
      index++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });

  window.addEventListener('resize', updateCarousel);
});

document.addEventListener("DOMContentLoaded", function() {
  const calendar = document.getElementById('calendar');
  const monthYear = document.getElementById('month-year');
  const prevMonthBtn = document.getElementById('prev-month');
  const nextMonthBtn = document.getElementById('next-month');
  const timeSlotsDiv = document.getElementById('time-slots');
  const slotsContainer = document.getElementById('slots');
  const signupForm = document.getElementById('signup-form');

  const availableDays = [2, 4, 6]; // Wtorek, Czwartek, Sobota
  const slots = {
    2: ["18:00–20:00"],
    4: ["18:00–20:00"],
    6: ["10:00–12:00", "13:00–15:00"]
  };

  let currentDate = new Date();

  function renderCalendar() {
    calendar.innerHTML = "";
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const today = new Date();

    monthYear.textContent = currentDate.toLocaleString('pl-PL', { month: 'long', year: 'numeric' });

    // Dni tygodnia
    const dayNames = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Ndz"];
    dayNames.forEach(day => {
      const dayNameDiv = document.createElement('div');
      dayNameDiv.classList.add('day-name');
      dayNameDiv.textContent = day;
      calendar.appendChild(dayNameDiv);
    });

    // Puste kratki przed pierwszym dniem miesiąca
    const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
    for (let i = 0; i < firstDay; i++) {
      const emptyDiv = document.createElement('div');
      calendar.appendChild(emptyDiv);
    }

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dayDiv = document.createElement('div');
      dayDiv.textContent = day;
      dayDiv.classList.add('day');

      if (availableDays.includes(date.getDay()) && date > today) {
        dayDiv.addEventListener('click', () => {
          showSlots(date);
        });
      } else {
        dayDiv.classList.add('inactive');
      }
      calendar.appendChild(dayDiv);
    }
  }

  function showSlots(date) {
    timeSlotsDiv.style.display = 'block';
    slotsContainer.innerHTML = "";
    signupForm.style.display = 'none';

    const dayOfWeek = date.getDay();
    if (slots[dayOfWeek]) {
      slots[dayOfWeek].forEach(time => {
        const timeBtn = document.createElement('div');
        timeBtn.classList.add('slot');
        timeBtn.textContent = `${date.toLocaleDateString('pl-PL')} ${time}`;
        timeBtn.addEventListener('click', () => {
          showForm();
        });
        slotsContainer.appendChild(timeBtn);
      });
    }
  }

  function showForm() {
    signupForm.style.display = 'block';
    window.scrollTo({
      top: signupForm.offsetTop,
      behavior: "smooth"
    });
  }

  prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });

  nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });

  renderCalendar();
});

document.addEventListener("DOMContentLoaded", function() {
  const track = document.querySelector('.testimonial-track');
  const testimonials = document.querySelectorAll('.testimonial-item');
  let index = 0;

  function showNextTestimonial() {
    index++;
    if (index >= testimonials.length) {
      index = 0;
    }
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(showNextTestimonial, 4000); // zmiana co 4 sekundy
});

document.addEventListener("DOMContentLoaded", function() {
  const trainings = [
    { title: "Psie Przedszkole", date: "2025-05-05", time: "17:00" },
    { title: "Szkolenie Grupowe - Podstawy", date: "2025-05-07", time: "18:30" },
    { title: "Szkolenie Grupowe - Zaawansowani", date: "2025-05-12", time: "19:00" },
    { title: "Szkolenie Indywidualne", date: "2025-05-14", time: "16:00" },
    { title: "Psie Przedszkole", date: "2025-05-19", time: "17:00" },
    { title: "Dodatkowe szkolenie", date: "2025-04-01", time: "10:00" } // Stare - nie pokaże się
  ];

  const today = new Date();
  const trainingsList = document.getElementById("trainings-list");

  const upcoming = trainings
    .filter(t => new Date(t.date) >= today) // tylko przyszłe
    .sort((a, b) => new Date(a.date) - new Date(b.date)) // posortuj rosnąco
    .slice(0, 4); // tylko 5 najbliższych

  upcoming.forEach(training => {
    const item = document.createElement("div");
    item.classList.add("training-item");
    item.innerHTML = `
      <h3>${training.title}</h3>
      <p>Start: ${new Date(training.date).toLocaleDateString('pl-PL')}</p>
      <p>Godzina: ${training.time}</p>
      <a href="/szkolenia/" class="cta-button">Zapisz się</a>
    `;
    trainingsList.appendChild(item);
  });
});

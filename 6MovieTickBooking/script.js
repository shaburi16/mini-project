import * as THREE from "https://unpkg.com/three@0.165.0/build/three.module.js";

/* ─── DATA ─── */
const MOVIES = [
  {
    id:1, title:"Guardians of the Galaxy",
    category:"Action · Sci‑Fi", duration:"2h 24m", rating:"4.9 ★", price:350,
    poster:"https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=80",
    trailer:"https://www.youtube.com/embed/d96cjJhvlMA?autoplay=1",
    description:"A cosmic team of unlikely heroes races through the galaxy with humor, action, and stunning visuals.",
    cast:["Chris Pratt","Zoe Saldaña","Dave Bautista","Karen Gillan"],
    timings:["10:00 AM","01:30 PM","04:30 PM","07:30 PM","10:00 PM"],
    gallery:[
      "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id:2, title:"Ant-Man and the Wasp",
    category:"Adventure · Fantasy", duration:"2h 05m", rating:"4.7 ★", price:320,
    poster:"https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?auto=format&fit=crop&w=900&q=80",
    trailer:"https://www.youtube.com/embed/ZlNFpri-Y40?autoplay=1",
    description:"A fun, high-speed multiverse ride with shrinking tech, quantum action, and family-driven superhero chaos.",
    cast:["Paul Rudd","Evangeline Lilly","Jonathan Majors","Michelle Pfeiffer"],
    timings:["09:00 AM","12:00 PM","03:00 PM","06:00 PM","09:00 PM"],
    gallery:[
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id:3, title:"John Wick Returns",
    category:"Action · Thriller", duration:"1h 58m", rating:"4.8 ★", price:380,
    poster:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
    trailer:"https://www.youtube.com/embed/qEVUtrk8_B4?autoplay=1",
    description:"A slick revenge thriller full of precision fight scenes, moody lighting, and a dark underworld.",
    cast:["Keanu Reeves","Donnie Yen","Bill Skarsgård","Ian McShane"],
    timings:["11:00 AM","02:00 PM","05:30 PM","08:30 PM"],
    gallery:[
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id:4, title:"Dark Knight Legacy",
    category:"Crime · Drama", duration:"2h 22m", rating:"4.9 ★", price:400,
    poster:"https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=900&q=80",
    trailer:"https://www.youtube.com/embed/EXeTwQWrcwY?autoplay=1",
    description:"A powerful city-scale story with dark tension, iconic masks, and a bold theatrical experience.",
    cast:["Christian Bale","Heath Ledger","Aaron Eckhart","Gary Oldman"],
    timings:["09:30 AM","01:00 PM","04:00 PM","07:00 PM","10:00 PM"],
    gallery:[
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id:5, title:"Space Frontier",
    category:"Adventure · Sci‑Fi", duration:"2h 14m", rating:"4.6 ★", price:370,
    poster:"https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=900&q=80",
    trailer:"https://www.youtube.com/embed/zSWdZVtXT7E?autoplay=1",
    description:"An elite crew races through star systems to stop a collapsing quantum gate before it wipes the Earth.",
    cast:["Ryan Gosling","Ana de Armas","Dave Bautista","Jeff Goldblum"],
    timings:["10:30 AM","02:30 PM","06:00 PM","09:30 PM"],
    gallery:[
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id:6, title:"Monsoon Letters",
    category:"Drama · Romance", duration:"2h 02m", rating:"4.5 ★", price:300,
    poster:"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
    trailer:"https://www.youtube.com/embed/YoHD9XEInc0?autoplay=1",
    description:"Two former classmates reconnect through unsent letters and one impossible rainy train journey.",
    cast:["Ranveer Singh","Alia Bhatt","Deepika Padukone","Shahid Kapoor"],
    timings:["11:30 AM","03:00 PM","06:30 PM","09:00 PM"],
    gallery:[
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id:7, title:"Pixel Pets: Rescue Run",
    category:"Animation · Family", duration:"1h 42m", rating:"4.4 ★", price:280,
    poster:"https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80",
    trailer:"https://www.youtube.com/embed/mxhLaOGdqZE?autoplay=1",
    description:"A runaway crew of digital animals tries to save their neon arcade world before the morning power cut.",
    cast:["John Mulaney","Awkwafina","Bill Hader","Awkwafina"],
    timings:["10:00 AM","12:30 PM","03:00 PM","05:30 PM"],
    gallery:[
      "https://images.unsplash.com/photo-1540028374369-5f25fbc3e4ac?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id:8, title:"The Last Summit",
    category:"Adventure · Drama", duration:"2h 31m", rating:"4.7 ★", price:360,
    poster:"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80",
    trailer:"https://www.youtube.com/embed/FTD4gHu0dM0?autoplay=1",
    description:"An elite climbing team faces whiteout storms, buried secrets, and a vanishing route at 8000 metres.",
    cast:["Tom Hardy","Cate Blanchett","Oscar Isaac","Lupita Nyong'o"],
    timings:["09:00 AM","01:00 PM","05:00 PM","09:00 PM"],
    gallery:[
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?auto=format&fit=crop&w=900&q=80"
    ]
  }
];

const DEMO = { email:"demo@quickshow.com", password:"demo1234", name:"Shaburi Chavan" };
const BOOKED_SEATS = ["A2","B3","C4","D2","E5","F1","A9","B11","C13","D10"];

/* ─── STATE ─── */
let wishlist = [];
let bookings = [];
let shownHome = 4;
let shownAll = 4;
let currentMovie = MOVIES[0];
let selectedSeats = [];
let selectedDate = "";
let selectedTime = "";
let isLoggedIn = false;
let isSignUp = false;
let activeTrailerIdx = 0;

/* ─── DOM REFS ─── */
const $ = id => document.getElementById(id);
const views = document.querySelectorAll(".view");
const navLinks = document.querySelectorAll(".nav-link[data-nav]");

/* ─── NAVIGATION ─── */
function goto(name) {
  views.forEach(v => v.classList.remove("active"));
  $(`view-${name}`).classList.add("active");
  navLinks.forEach(l => l.classList.toggle("active", l.dataset.nav === name));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const target = link.dataset.nav;
    if ((target === "wishlist" || target === "bookings") && !isLoggedIn) {
      goto("login"); return;
    }
    goto(target);
    if (target === "wishlist") renderWishlist();
    if (target === "bookings") renderBookings();
    if (target === "movies") renderMoviesGrid("movies-grid-all", shownAll);
  });
});

$("logo-home").addEventListener("click", () => goto("home"));

/* ─── DATES (next 6 days) ─── */
function getDates() {
  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  return Array.from({ length: 6 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() + i);
    return {
      label: i === 0 ? "Today" : i === 1 ? "Tomw" : days[d.getDay()],
      value: d.toDateString(),
      num: d.getDate(),
      month: d.toLocaleString("default", { month: "short" })
    };
  });
}

function renderDates() {
  const dates = getDates();
  $("date-list").innerHTML = dates.map((d, i) => `
    <button class="date-btn ${i === 0 ? "active" : ""}" data-date="${d.value}">
      <span>${d.num}</span>
      <small>${d.label}</small>
      <small>${d.month}</small>
    </button>
  `).join("");

  selectedDate = dates[0].value;

  $("date-list").querySelectorAll(".date-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      $("date-list").querySelectorAll(".date-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedDate = btn.dataset.date;
    });
  });
}

function renderTimings() {
  $("time-list").innerHTML = currentMovie.timings.map((t, i) => `
    <button class="time-btn ${i === 0 ? "active" : ""}" data-time="${t}">${t}</button>
  `).join("");

  selectedTime = currentMovie.timings[0];

  $("time-list").querySelectorAll(".time-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      $("time-list").querySelectorAll(".time-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedTime = btn.dataset.time;
    });
  });
}

/* ─── SEATS ─── */
const ROWS = ["A","B","C","D","E","F","G"];
function renderSeats() {
  selectedSeats = [];
  updateSeatInfo();

  const area = $("seats-area");
  area.innerHTML = ROWS.map(row => `
    <div class="seat-row">
      <div class="row-name">${row}</div>
      <div class="row-block">
        ${Array.from({length:9}, (_,i) => {
          const code = `${row}${i+1}`;
          const booked = BOOKED_SEATS.includes(code);
          return `<button class="seat ${booked ? "booked" : ""}" data-seat="${code}" ${booked ? "disabled" : ""} title="${code}"></button>`;
        }).join("")}
      </div>
      <div class="aisle"></div>
      <div class="row-block">
        ${Array.from({length:9}, (_,i) => {
          const code = `${row}${i+10}`;
          const booked = BOOKED_SEATS.includes(code);
          return `<button class="seat ${booked ? "booked" : ""}" data-seat="${code}" ${booked ? "disabled" : ""} title="${code}"></button>`;
        }).join("")}
      </div>
    </div>
  `).join("");

  $("seat-numbers").innerHTML = [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16,17,18]
    .map(n => `<span>${n}</span>`).join("");

  area.querySelectorAll(".seat:not(.booked)").forEach(seat => {
    seat.addEventListener("click", () => {
      const code = seat.dataset.seat;
      if (selectedSeats.includes(code)) {
        selectedSeats = selectedSeats.filter(s => s !== code);
        seat.classList.remove("selected");
      } else {
        selectedSeats.push(code);
        seat.classList.add("selected");
      }
      updateSeatInfo();
    });
  });
}

function updateSeatInfo() {
  const box = $("seat-info-box");
  if (!selectedSeats.length) {
    box.textContent = "No seats selected yet. Tap a seat to choose.";
  } else {
    const total = selectedSeats.length * currentMovie.price;
    box.innerHTML = `Selected Seats: <strong>${selectedSeats.join(", ")}</strong> &nbsp;|&nbsp; Tickets: <strong>${selectedSeats.length}</strong> &nbsp;|&nbsp; Total: <strong>₹${total}</strong>`;
  }
}

/* ─── CONFIRM PAGE ─── */
function fillConfirm() {
  $("cf-movie").textContent = currentMovie.title;
  $("cf-date").textContent = selectedDate;
  $("cf-time").textContent = selectedTime;
  $("cf-seats").textContent = selectedSeats.join(", ") || "None";
  $("cf-count").textContent = selectedSeats.length;
  $("cf-total").textContent = "₹" + (selectedSeats.length * currentMovie.price);
  $("success-msg").classList.remove("show");
}

$("go-confirm-btn").addEventListener("click", () => {
  if (!selectedSeats.length) { alert("Please select at least one seat."); return; }
  fillConfirm();
  goto("confirm");
});

$("pay-btn").addEventListener("click", () => {
  if (!isLoggedIn) { goto("login"); return; }
  bookings.unshift({
    id: Date.now(),
    title: currentMovie.title,
    poster: currentMovie.poster,
    seats: [...selectedSeats],
    date: selectedDate,
    time: selectedTime,
    total: selectedSeats.length * currentMovie.price
  });
  updateBadges();
  $("success-msg").classList.add("show");
  $("pay-btn").disabled = true;
  $("pay-btn").textContent = "✓ Booked!";
  renderBookings();
});

$("back-from-confirm").addEventListener("click", () => goto("booking"));
$("back-from-booking").addEventListener("click", () => goto("details"));
$("back-from-details").addEventListener("click", () => goto("home"));

/* ─── MOVIE CARD RENDERER ─── */
function movieCardHTML(movie) {
  const wishlisted = wishlist.some(m => m.id === movie.id);
  return `
    <div class="glass-card movie-card tilt-card" data-movie="${movie.id}">
      <div class="movie-thumb" style="background-image:url('${movie.poster}')">
        <button class="wish-btn ${wishlisted ? "active" : ""}" data-wish="${movie.id}" title="Wishlist">♥</button>
      </div>
      <div class="movie-body">
        <h4>${movie.title}</h4>
        <p>${movie.description.slice(0,72)}…</p>
        <div class="movie-meta"><span>${movie.duration}</span><span>${movie.rating}</span></div>
        <div class="movie-actions">
          <button class="small-btn" data-details="${movie.id}">Info</button>
          <button class="ghost-btn" data-book="${movie.id}">Buy Ticket</button>
        </div>
      </div>
    </div>`;
}

function renderMoviesGrid(gridId, count) {
  const slice = MOVIES.slice(0, count);
  document.getElementById(gridId).innerHTML = slice.map(movieCardHTML).join("");
  bindCardActions(gridId);
  bindTilt();
}

function bindCardActions(gridId) {
  const grid = document.getElementById(gridId);

  grid.querySelectorAll("[data-wish]").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const id = Number(btn.dataset.wish);
      const idx = wishlist.findIndex(m => m.id === id);
      if (idx >= 0) wishlist.splice(idx, 1);
      else wishlist.push(MOVIES.find(m => m.id === id));
      updateBadges();
      renderMoviesGrid("movies-grid-home", shownHome);
      renderMoviesGrid("movies-grid-all", shownAll);
      renderWishlist();
    });
  });

  grid.querySelectorAll("[data-details]").forEach(btn => {
    btn.addEventListener("click", () => openDetails(Number(btn.dataset.details)));
  });

  grid.querySelectorAll("[data-book]").forEach(btn => {
    btn.addEventListener("click", () => {
      openDetails(Number(btn.dataset.book));
      setTimeout(() => goto("booking"), 120);
    });
  });
}

function updateBadges() {
  const wb = $("wish-badge"); const bb = $("book-badge");
  wb.textContent = wishlist.length; wb.classList.toggle("show", wishlist.length > 0);
  bb.textContent = bookings.length; bb.classList.toggle("show", bookings.length > 0);
}

/* ─── SHOW MORE ─── */
$("show-more-home").addEventListener("click", () => {
  shownHome = Math.min(shownHome + 4, MOVIES.length);
  renderMoviesGrid("movies-grid-home", shownHome);
  if (shownHome >= MOVIES.length) $("show-more-home").style.display = "none";
});

$("show-more-all").addEventListener("click", () => {
  shownAll = Math.min(shownAll + 4, MOVIES.length);
  renderMoviesGrid("movies-grid-all", shownAll);
  if (shownAll >= MOVIES.length) $("show-more-all").style.display = "none";
});

/* ─── OPEN DETAILS ─── */
function openDetails(id) {
  const movie = MOVIES.find(m => m.id === id);
  currentMovie = movie;

  $("movie-trailer").src = movie.trailer;
  $("d-title").textContent = movie.title;
  $("d-desc").textContent = movie.description;
  $("d-meta").innerHTML = [movie.category, movie.duration, movie.rating, `₹${movie.price}/ticket`].map(s => `<span>${s}</span>`).join("");
  $("d-cast").innerHTML = movie.cast.map(c => `<div class="cast-chip">${c}</div>`).join("");
  $("detail-thumb-strip").innerHTML = movie.gallery.map(img => `<div class="thumb" style="background-image:url('${img}')"></div>`).join("");

  const isW = wishlist.some(m => m.id === id);
  $("d-wish-btn").textContent = isW ? "Remove from Wishlist" : "Add to Wishlist";

  goto("details");
}

$("d-book-btn").addEventListener("click", () => startBooking());
$("d-wish-btn").addEventListener("click", () => {
  const id = currentMovie.id;
  const idx = wishlist.findIndex(m => m.id === id);
  if (idx >= 0) wishlist.splice(idx, 1);
  else wishlist.push(currentMovie);
  updateBadges();
  $("d-wish-btn").textContent = wishlist.some(m => m.id === id) ? "Remove from Wishlist" : "Add to Wishlist";
  renderWishlist();
});

function startBooking() {
  renderDates();
  renderTimings();
  renderSeats();
  goto("booking");
}

$("hero-book").addEventListener("click", () => { currentMovie = MOVIES[0]; startBooking(); });
$("hero-info").addEventListener("click", () => openDetails(1));
$("featured-open").addEventListener("click", () => openDetails(1));

/* ─── TRAILERS ─── */
function renderTrailerStrip() {
  const strip = $("trailer-strip");
  strip.innerHTML = MOVIES.slice(0,5).map((m,i) => `
    <div class="trailer-thumb ${i===0 ? "active" : ""}" data-tindex="${i}"
      style="background-image:url('${m.poster}')"></div>
  `).join("");

  strip.querySelectorAll(".trailer-thumb").forEach(thumb => {
    thumb.addEventListener("click", () => {
      strip.querySelectorAll(".trailer-thumb").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
      activeTrailerIdx = Number(thumb.dataset.tindex);
    });
  });
}

$("play-main-trailer").addEventListener("click", () => {
  const iframe = $("trailer-iframe");
  iframe.src = MOVIES[activeTrailerIdx].trailer;
  iframe.style.display = "block";
  $("close-trailer").style.display = "grid";
  $("play-main-trailer").style.display = "none";
});

$("close-trailer").addEventListener("click", () => {
  const iframe = $("trailer-iframe");
  iframe.style.display = "none";
  iframe.src = "";
  $("close-trailer").style.display = "none";
  $("play-main-trailer").style.display = "grid";
});

/* ─── WISHLIST / BOOKINGS ─── */
function renderWishlist() {
  const el = $("wishlist-list");
  if (!wishlist.length) {
    el.innerHTML = `<div class="empty-state">No movies in wishlist yet. Tap ♥ on any movie card.</div>`;
    return;
  }
  el.innerHTML = wishlist.map(m => `
    <div class="glass-card list-card tilt-card">
      <div class="list-poster" style="background-image:url('${m.poster}')"></div>
      <div class="list-info"><h4>${m.title}</h4><p>${m.category} · ${m.duration}<br>${m.description}</p></div>
      <div class="list-price"><strong>₹${m.price}</strong><button class="small-btn" data-details="${m.id}">Open</button></div>
    </div>
  `).join("");
  el.querySelectorAll("[data-details]").forEach(btn => btn.addEventListener("click", () => openDetails(Number(btn.dataset.details))));
  bindTilt();
}

function renderBookings() {
  const el = $("bookings-list");
  if (!bookings.length) {
    el.innerHTML = `<div class="empty-state">No bookings yet. Book a movie and it will appear here.</div>`;
    return;
  }
  el.innerHTML = bookings.map(b => `
    <div class="glass-card list-card tilt-card">
      <div class="list-poster" style="background-image:url('${b.poster}')"></div>
      <div class="list-info">
        <h4>${b.title}</h4>
        <p>${b.date}<br>Showtime: ${b.time}<br>Total Tickets: ${b.seats.length}<br>Seat Number: ${b.seats.join(", ")}</p>
      </div>
      <div class="list-price"><strong>₹${b.total}</strong><span style="color:var(--green); font-size:13px;">✓ Confirmed</span></div>
    </div>
  `).join("");
  bindTilt();
}

/* ─── AUTH ─── */
$("open-login-btn").addEventListener("click", () => goto("login"));

$("user-btn").addEventListener("click", () => {
  isLoggedIn = false;
  $("auth-btns").style.display = "block";
  $("user-area").style.display = "none";
  goto("home");
});

$("auth-switch-link").addEventListener("click", () => {
  isSignUp = !isSignUp;
  $("auth-heading").textContent = isSignUp ? "Create Account" : "Welcome Back";
  $("auth-sub").textContent = isSignUp ? "Sign up and start booking movies." : "Sign in to book movies and manage your wishlist.";
  $("auth-submit-btn").textContent = isSignUp ? "Create Account" : "Sign In";
  $("auth-switch-text").textContent = isSignUp ? "Already have an account?" : "Don't have an account?";
  $("auth-switch-link").textContent = isSignUp ? " Log In" : " Sign Up";
  $("signup-name-field").style.display = isSignUp ? "block" : "none";
  $("auth-error").style.display = "none";
});

$("auth-submit-btn").addEventListener("click", () => {
  const email = $("login-email").value.trim();
  const pass = $("login-password").value.trim();
  const err = $("auth-error");

  if (isSignUp) {
    const name = $("signup-name").value.trim() || "User";
    if (!email || !pass) { err.textContent = "Please fill all fields."; err.style.display = "block"; return; }
    loginSuccess(name);
  } else {
    if (email === DEMO.email && pass === DEMO.password) {
      loginSuccess(DEMO.name);
    } else {
      err.textContent = "Invalid credentials. Use demo@quickshow.com / demo1234";
      err.style.display = "block";
    }
  }
});

function loginSuccess(name) {
  isLoggedIn = true;
  $("auth-btns").style.display = "none";
  $("user-area").style.display = "block";
  $("user-name-display").textContent = name.split(" ")[0];
  $("auth-error").style.display = "none";
  goto("home");
}

/* ─── TILT ─── */
function bindTilt() {
  document.querySelectorAll(".tilt-card:not([data-tilt])").forEach(card => {
    card.dataset.tilt = "true";
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const rx = ((e.clientY - r.top) / r.height - 0.5) * -7;
      const ry = ((e.clientX - r.left) / r.width - 0.5) * 9;
      card.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  });
}

/* ─── THREE.JS BG ─── */
const canvas = document.querySelector(".webgl");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, innerWidth/innerHeight, 0.1, 100);
camera.position.set(0, 0, 8);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

const group = new THREE.Group();
scene.add(group);

const knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(1.2, 0.28, 180, 24),
  new THREE.MeshPhysicalMaterial({ color:0xff4f7a, emissive:0x7a0f2d, emissiveIntensity:0.85, roughness:0.18, metalness:0.65, transparent:true, opacity:0.18, clearcoat:1 })
);
knot.position.set(2.6, 0.6, -1);
group.add(knot);

const orb = new THREE.Mesh(
  new THREE.IcosahedronGeometry(0.85, 1),
  new THREE.MeshBasicMaterial({ color:0xff6b90, wireframe:true, transparent:true, opacity:0.22 })
);
orb.position.set(-3, -1.2, -0.5);
group.add(orb);

const pos = new Float32Array(200 * 3);
for (let i = 0; i < 600; i += 3) {
  pos[i] = (Math.random()-0.5)*12; pos[i+1] = (Math.random()-0.5)*8; pos[i+2] = (Math.random()-0.5)*6;
}
const particles = new THREE.Points(
  Object.assign(new THREE.BufferGeometry(), { attributes: { position: new THREE.BufferAttribute(pos, 3) } }),
  new THREE.PointsMaterial({ color:0xff7b9d, size:0.03, transparent:true, opacity:0.72 })
);
group.add(particles);

scene.add(new THREE.AmbientLight(0xffffff, 0.8));
const pl1 = new THREE.PointLight(0xff4f7a, 10, 30); pl1.position.set(2,2,4); scene.add(pl1);
const pl2 = new THREE.PointLight(0xff4f7a, 8, 30); pl2.position.set(-3,-2,3); scene.add(pl2);

const mouse = {x:0,y:0};
addEventListener("mousemove", e => { mouse.x=(e.clientX/innerWidth-0.5)*2; mouse.y=(e.clientY/innerHeight-0.5)*2; });
addEventListener("resize", () => {
  camera.aspect = innerWidth/innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

const clock = new THREE.Clock();
(function tick() {
  const t = clock.getElapsedTime();
  knot.rotation.x = t*0.18 + mouse.y*0.4; knot.rotation.y = t*0.34 + mouse.x*0.6;
  knot.position.y = 0.6 + Math.sin(t*1.1)*0.18;
  orb.rotation.x = t*0.22; orb.rotation.y = t*0.28;
  orb.position.x = -3 + Math.sin(t*0.8)*0.25; orb.position.y = -1.2 + Math.cos(t*0.9)*0.2;
  particles.rotation.y = t*0.03; particles.rotation.x = t*0.02;
  group.rotation.x += (mouse.y*0.08 - group.rotation.x)*0.05;
  group.rotation.y += (mouse.x*0.12 - group.rotation.y)*0.05;
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
})();

/* ─── INIT ─── */
renderMoviesGrid("movies-grid-home", shownHome);
renderTrailerStrip();
bindTilt();
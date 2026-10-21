let coursesData = {
  cs: {
    title: "Diploma in Computer Science",
    wa: "https://chat.whatsapp.com/sample_cs",
    hod: "Dr. John Mwakipesile",
    photo: "images/hod1.jpg",
    staff:
      "Mr. Frank Mwaiposa - Programming Lecturer\nMs. Rehema Mwakyusa - Database Assistant",
    requirements:
      "1. Laptop mpya yenye 8GB RAM\n2. Sare rasmi za chuo\n3. Notebooks na stationary",
  },
  it: {
    title: "Diploma in Information Technology",
    wa: "https://chat.whatsapp.com/sample_it",
    hod: "Dr. Elizabeth Mwalongo",
    photo: "images/hod2.jpg",
    staff: "Mr. David Kiwia - Networking Specialist",
    requirements: "1. Laptop yenye uwezo wa Virtual Machines\n2. Flash drive",
  },
};

// Picha za Slide za Automatic kwa kozi zote
const defaultSlides =
  "images/slide 1.png, images/slide 2.png, images/slide 3.png, images/slide 4.png";

// Taarifa za Kudumu za Grades na GPA za Chuo (Zitakaa Kila Kozi)
const officialGradesAndGpaHTML = `
    <h4 style="color: var(--must-accent); margin-bottom: 12px;"><i class="fas fa-graduation-cap"></i> Mwongozo wa Alama (Grades) na GPA ya Chuo</h4>
    <p style="color: #cbd5e1; margin-bottom: 15px; font-size: 0.95rem;">Huu ni mfumo rasmi wa utolewaji wa alama na madaraja ya ufaulu:</p>
    
    <div style="overflow-x: auto; margin-bottom: 25px;">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem;">
            <thead>
                <tr style="background: rgba(1, 180, 143, 0.2); color: var(--must-accent);">
                    <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Marks</th>
                    <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Grade</th>
                    <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Grade Point</th>
                    <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Maana</th>
                </tr>
            </thead>
            <tbody style="color: #e2e8f0;">
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">70–100%</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">A</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">5</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Excellent</td></tr>
                <tr style="background: rgba(255,255,255,0.02);"><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">60–69%</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">B+</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">4</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Very Good</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">50–59%</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">B</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">3</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Good</td></tr>
                <tr style="background: rgba(255,255,255,0.02);"><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">40–49%</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">C</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">2</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Satisfactory</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">35–39%</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">D</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">1</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Weak</td></tr>
                <tr style="background: rgba(255,255,255,0.02);"><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">0–34%</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">E/F</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">0</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Poor/Fail</td></tr>
            </tbody>
        </table>
    </div>

    <h4 style="color: var(--must-accent); margin-bottom: 12px;"><i class="fas fa-award"></i> Cumulative GPA Classifications</h4>
    <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem;">
            <thead>
                <tr style="background: rgba(1, 180, 143, 0.2); color: var(--must-accent);">
                    <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Cumulative GPA</th>
                    <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Classification</th>
                </tr>
            </thead>
            <tbody style="color: #e2e8f0;">
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">4.4 – 5.0</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">🥇 First Class</td></tr>
                <tr style="background: rgba(255,255,255,0.02);"><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">3.5 – 4.3</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Upper Second Class</td></tr>
                <tr><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">2.7 – 3.4</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Lower Second Class</td></tr>
                <tr style="background: rgba(255,255,255,0.02);"><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">2.0 – 2.6</td><td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Pass</td></tr>
            </tbody>
        </table>
    </div>
`;

function loadStoredData() {
  let stored = localStorage.getItem("must_official_courses_v7");
  if (stored) {
    coursesData = JSON.parse(stored);
  }
}

function renderLandingCourses() {
  loadStoredData();
  let grid = document.getElementById("landingCoursesGrid");
  if (grid) {
    grid.innerHTML = "";
    for (let key in coursesData) {
      let course = coursesData[key];
      let btn = document.createElement("button");
      btn.className = "course-btn";
      btn.innerHTML = `<i class="fas fa-graduation-cap"></i> ${course.title}`;
      btn.onclick = () => openDashboard(key);
      grid.appendChild(btn);
    }
  }
}

window.onload = function () {
  renderLandingCourses();
  updateFreshersHeader();
};

// Sasisho la sehemu ya Freshers 2026/2027 kwa mtindo wa kitaalamu zaidi
function updateFreshersHeader() {
  let freshersBadge = document.getElementById("freshersText");
  if (freshersBadge) {
    freshersBadge.innerHTML =
      "<strong>MUST Freshers 2026/2027:</strong> Kijue chuo chako vizuri zaidi — fahamu kwa kina mazingira ya kitaalamu, muundo wa wahadhiri, mwongozo wa ufaulu, na mahitaji muhimu kwa ajili ya mafanikio yako ya kitaaluma.";
  }
}

let currentSlide = 0;
let slideInterval;

function setupSlideshow(slidesString) {
  let container = document.querySelector(".campus-slideshow");
  if (!container) return;
  let urls = slidesString
    ? slidesString.split(",").map((s) => s.trim())
    : defaultSlides.split(",").map((s) => s.trim());

  let html = "";
  urls.forEach((url, index) => {
    let activeClass = index === 0 ? "active" : "";
    html += `<div class="slide ${activeClass}"><img src="${url}" onerror="this.src='https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200'" alt="Campus Slide"></div>`;
  });
  html += `<div class="slide-badge">Mazingira Halisi ya Chuo Kikuu MUST</div>`;
  container.innerHTML = html;

  if (slideInterval) clearInterval(slideInterval);
  currentSlide = 0;

  let slideElements = container.querySelectorAll(".slide");
  if (slideElements.length > 1) {
    slideInterval = setInterval(() => {
      slideElements[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slideElements.length;
      slideElements[currentSlide].classList.add("active");
    }, 5000);
  }
}

let activeCourseKey = "";

function openDashboard(courseKey) {
  loadStoredData();
  activeCourseKey = courseKey;
  let data = coursesData[courseKey];
  if (!data) return;

  document.getElementById("dashTitle").innerText = data.title;
  document.getElementById("waLink").href = data.wa;
  document.getElementById("waText").innerText =
    `Jiunge na Group la WhatsApp la ${data.title}`;

  setupSlideshow(data.slides || defaultSlides);
  switchTab("gallery");

  document.getElementById("landing-page").style.display = "none";
  document.getElementById("dashboard-page").style.display = "block";
  window.scrollTo(0, 0);
}

function goHome() {
  document.getElementById("dashboard-page").style.display = "none";
  document.getElementById("landing-page").style.display = "block";
  renderLandingCourses();
}

function switchTab(tabName) {
  let buttons = document.querySelectorAll(".t-btn");
  buttons.forEach((b) => b.classList.remove("active"));
  event && event.currentTarget && event.currentTarget.classList.add("active");

  let data = coursesData[activeCourseKey];
  let area = document.getElementById("tabContentArea");
  if (!area || !data) return;

  if (tabName === "gallery") {
    area.innerHTML = `
            <h4><i class="fas fa-images"></i> Gallery ya Chuo & Changamano</h4>
            <p style="color: #cbd5e1; margin-bottom: 15px;">Mazingira safi ya chuo kikuu MUST, maabara, na kumbi za mihadhara.</p>
            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                <img src="images/slide 1.png" onerror="this.src='https://images.unsplash.com/photo-1562774053-701939374585?w=250'" style="width:140px; height:90px; border-radius:6px; object-fit:cover; border: 1px solid rgba(255,255,255,0.2);">
                <img src="images/slide 2.png" onerror="this.src='https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=250'" style="width:140px; height:90px; border-radius:6px; object-fit:cover; border: 1px solid rgba(255,255,255,0.2);">
            </div>
        `;
  } else if (tabName === "lecturers") {
    area.innerHTML = `
            <h4><i class="fas fa-users"></i> Head of Department (HOD) & Staff</h4>
            <div style="display: flex; align-items: center; gap: 20px; margin-top: 10px; margin-bottom: 15px;">
                <img src="${data.photo}" onerror="this.src='https://via.placeholder.com/150'" style="width: 85px; height: 85px; border-radius: 50%; object-fit: cover; border: 3px solid var(--must-accent);">
                <div>
                    <h5 style="color: var(--white); font-size: 1.15rem; margin-bottom: 4px;">${data.hod}</h5>
                    <p style="color: #94a3b8; font-size: 0.95rem;">Head of Department - ${data.title}</p>
                </div>
            </div>
            <hr style="border: 0.5px solid rgba(255,255,255,0.1); margin: 15px 0;">
            <h5 style="color: var(--must-accent); margin-bottom: 8px;">Orodha ya Walimu (Staff):</h5>
            <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6; white-space: pre-line;">${data.staff || "Hakuna walimu waliowekwa bado."}</p>
        `;
  } else if (tabName === "requirements") {
    area.innerHTML = `
            <h4><i class="fas fa-clipboard-list"></i> Vitu Muhimu (Requirements)</h4>
            <p style="color: #cbd5e1; font-size: 0.98rem; line-height: 1.6; white-space: pre-line;">${data.requirements || "Hakuna mahitaji yaliyowekwa bado."}</p>
        `;
  } else if (tabName === "others") {
    area.innerHTML = officialGradesAndGpaHTML;
  }
}

// ================= ADMIN SYSTEM =================
function promptAdmin() {
  let pass = prompt("Weka Password ya Admin:");
  if (pass === "must2026") {
    openAdminModal();
  } else {
    alert("Password siyo sahihi!");
  }
}

function openAdminModal() {
  loadStoredData();
  let select = document.getElementById("adminKeySelect");
  if (select) {
    select.innerHTML = '<option value="">-- Ongeza Kozi Mpya --</option>';
    for (let key in coursesData) {
      let opt = document.createElement("option");
      opt.value = key;
      opt.innerText = coursesData[key].title;
      select.appendChild(opt);
    }
  }

  setAdminFields("", "", "", "", "", "");
  let modal = document.getElementById("adminModal");
  if (modal) modal.style.display = "flex";
}

function closeAdmin() {
  let modal = document.getElementById("adminModal");
  if (modal) modal.style.display = "none";
}

function setAdminFields(key, title, wa, hod, photo, staff, requirements) {
  document.getElementById("adminKeyInput").value = key;
  document.getElementById("adminTitle").value = title;
  document.getElementById("adminWa").value = wa;
  document.getElementById("adminHod").value = hod;
  document.getElementById("adminPhoto").value = photo;
  document.getElementById("adminStaff").value = staff;
  document.getElementById("adminRequirements").value = requirements;
}

function populateAdminForm() {
  let key = document.getElementById("adminKeySelect").value;
  if (!key) {
    setAdminFields("", "", "", "", "", "");
    return;
  }

  let data = coursesData[key];
  setAdminFields(
    key,
    data.title,
    data.wa,
    data.hod,
    data.photo || "",
    data.staff || "",
    data.requirements || "",
  );
}

function saveAdminData(e) {
  e.preventDefault();
  let keyInput = document
    .getElementById("adminKeyInput")
    .value.trim()
    .toLowerCase();

  if (!keyInput) {
    alert("Weka kitambulisho cha kozi (ID)!");
    return;
  }

  coursesData[keyInput] = {
    title: document.getElementById("adminTitle").value,
    wa: document.getElementById("adminWa").value,
    hod: document.getElementById("adminHod").value,
    photo: document.getElementById("adminPhoto").value,
    staff: document.getElementById("adminStaff").value,
    requirements: document.getElementById("adminRequirements").value,
    slides: defaultSlides,
  };

  localStorage.setItem("must_official_courses_v7", JSON.stringify(coursesData));
  alert("Imefanikiwa! Taarifa za kozi zimehifadhiwa kikamilifu.");
  closeAdmin();
  renderLandingCourses();
}

function deleteCourse() {
  let key = document.getElementById("adminKeyInput").value;
  if (!key || !coursesData[key]) {
    alert("Chagua kozi halisi ya kufuta!");
    return;
  }

  if (confirm(`Una hakika unataka kufuta ${coursesData[key].title}?`)) {
    delete coursesData[key];
    localStorage.setItem(
      "must_official_courses_v7",
      JSON.stringify(coursesData),
    );
    alert("Kozi imefutwa!");
    closeAdmin();
    renderLandingCourses();
  }
}

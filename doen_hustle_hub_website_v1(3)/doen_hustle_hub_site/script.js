// ===== EDIT EVENT DETAILS HERE FOR EACH NEW EVENT =====
const eventInfo = {
  organizer: "Doen Hustle Hub",
  eventName: "Kids Fun Day",
  date: "05 December 2026",
  time: "10:00 AM – 6:00 PM",
  venue: "EGG Training Center",
  kidsPrice: "R80",
  adultsPrice: "R50",
  ticketNote: "Face painting is available for R20. Some activities or food may have separate costs.",
  contacts: ["078 308 6556", "073 343 1136"],
  mapSearch: "EGG Training Center South Africa"
};

// Games inspired by the two event posters. Add/edit/remove entries here.
const activities = [
  {icon:"🏰", title:"Jumping Castle", description:"Bounce, jump and burn off that happy energy!"},
  {icon:"🎪", title:"Jumbo Jumping Castle", description:"A bigger inflatable adventure for grown-ups, too."},
  {icon:"💦", title:"Water Splash", description:"Cool down and enjoy splash-filled fun."},
  {icon:"🎨", title:"Face Painting", description:"Add some color with fun face-paint designs. R20."},
  {icon:"🥎", title:"Blow the Balls", description:"A playful carnival challenge—aim, blow and win!"},
  {icon:"⭕", title:"Ring Toss", description:"Test your aim and try to land the rings."},
  {icon:"🎯", title:"Bean Bag Toss", description:"Aim for the targets and see how many you can score."},
  {icon:"🎈", title:"Balloon Darts", description:"A classic carnival-style balloon target game."}
];

const $ = (id) => document.getElementById(id);
function fillEventDetails(){
  document.title = `${eventInfo.eventName} | ${eventInfo.organizer}`;
  $('heroDate').textContent = eventInfo.date;
  $('heroTime').textContent = eventInfo.time;
  $('eventDateFull').textContent = eventInfo.date;
  $('eventTimeFull').textContent = eventInfo.time;
  $('eventVenue').textContent = eventInfo.venue;
  $('venueName').textContent = eventInfo.venue;
  $('kidsPrice').textContent = eventInfo.kidsPrice;
  $('adultsPrice').textContent = eventInfo.adultsPrice;
  $('ticketNote').textContent = eventInfo.ticketNote;
  $('mapLink').href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(eventInfo.mapSearch || eventInfo.venue)}`;
  $('year').textContent = new Date().getFullYear();
}
function renderActivities(){
  $('activitiesGrid').innerHTML = activities.map((game,index)=>`
    <article class="activity-card">
      <div class="activity-visual"><span>${game.icon}</span></div>
      <div class="activity-info"><h3>${index+1}. ${game.title}</h3><p>${game.description}</p></div>
    </article>`).join('');
}
function renderContacts(){
  $('contactButtons').innerHTML = eventInfo.contacts.map((phone,index)=>{
    // South African mobile number converted to international format for WhatsApp links.
    const international = phone.replace(/\D/g,'').replace(/^0/,'27');
    const message = encodeURIComponent(`Hi Doen Hustle Hub! I'd like to ask about ${eventInfo.eventName}.`);
    return `<a class="whatsapp-button" href="https://wa.me/${international}?text=${message}" target="_blank" rel="noopener">💬 WhatsApp ${phone}</a>`;
  }).join('');
}
fillEventDetails();renderActivities();renderContacts();
const menuToggle = $('menuToggle'), navMenu = $('navMenu');
menuToggle.addEventListener('click',()=>{const open=navMenu.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'✕':'☰';});
navMenu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navMenu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰';}));

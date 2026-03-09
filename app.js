const members = [
  { name: "권사빈", role: "Drums" },
  { name: "김동우", role: "Vocal, Guitar" },
  { name: "박민규", role: "Vocal" },
  { name: "박상우", role: "Vocal" },
  { name: "송재우", role: "Bass" },
  { name: "이시우", role: "Guitar" },
  { name: "이주영", role: "Vocal, Bass" },
];

const setlist = [
  {
    part: "Part 1",
    leader: "민규",
    songs: [
      {
        title: "Give It Away",
        artist: "Red Hot Chili Peppers",
        year: "1991",
        lineup: "V.민규 / G.시우 / B.재우 / D.사빈",
      },
      {
        title: "Muscle Museum",
        artist: "Muse",
        year: "1999",
        lineup: "V.민규 / G.시우 / B.재우 / D.사빈",
      },
      {
        title: "Exile",
        artist: "Sunday Baam",
        year: "2026",
        lineup: "V.민규 / G.시우 / B.재우 / D.사빈",
      },
    ],
  },
  {
    part: "Part 2",
    leader: "동우",
    songs: [
      {
        title: "Welcome To My Life",
        artist: "Simple Plan",
        year: "2004",
        lineup: "V.동우 / G1.시우 / G2.동우 / B.재우 / D.사빈",
      },
      {
        title: "Psycho",
        artist: "Muse",
        year: "2015",
        lineup: "V.동우 / G1.시우 / G2.동우 / B.주영 / D.사빈",
      },
      {
        title: "The Pretender",
        artist: "Foo Fighters",
        year: "2007",
        lineup: "V.동우 / G1.시우 / G2.동우 / B.주영 / D.사빈",
      },
      {
        title: "비냄새",
        artist: "극동아시아타이거즈",
        year: "2019",
        lineup: "V.동우 / G1.시우 / G2.동우 / B.주영 / D.사빈",
      },
      {
        title: "시간이 지나간다면",
        artist: "극동아시아타이거즈",
        year: "2019",
        lineup: "V.동우 / G1.시우 / G2.동우 / B.재우 / D.사빈",
      },
    ],
  },
  {
    part: "Part 3",
    leader: "상우",
    songs: [
      {
        title: "민물장어의 꿈",
        artist: "신해철",
        year: "1999",
        lineup: "V.상우 / K.시우",
      },
      {
        title: "Art-of-you (가제)",
        artist: "자작곡",
        year: "Unreleased",
        lineup: "V.상우 / G1.시우",
      },
      {
        title: "No Pain",
        artist: "실리카겔",
        year: "2022",
        lineup: "V.상우 / G1.시우 / G2.동우 / B.주영 / D.사빈",
      },
    ],
  },
  {
    part: "Part 4",
    leader: "민규",
    songs: [
      {
        title: "내 낡은 서랍 속 바다",
        artist: "브로큰 발렌타인",
        year: "2013",
        lineup: "V.민규 / G1.시우 / G2.동우 / B.재우 / D.사빈",
      },
      {
        title: "Let It Roll",
        artist: "Velvet Revolver",
        year: "2007",
        lineup: "V.민규 / G1.시우 / G2.동우 / B.재우 / D.사빈",
      },
      {
        title: "크게 라디오를 켜고",
        artist: "시나위",
        year: "1996",
        lineup: "V.민규 / G1.시우 / G2.동우 / B.주영 / D.사빈",
      },
    ],
  },
  {
    part: "Part 5",
    leader: "주영",
    songs: [
      {
        title: "비틀비틀 짝짜꿍",
        artist: "한로로",
        year: "2022",
        lineup: "V.주영 / G1.시우 / G2.동우 / B.재우 / D.사빈",
      },
      {
        title: "고민중독",
        artist: "QWER",
        year: "2012",
        lineup: "V.주영 / G1.시우 / G2.동우 / B.재우 / D.사빈",
      },
      {
        title: "Solanin",
        artist: "Asian Kung-Fu Generation",
        year: "2010",
        lineup: "V.주영 / G1.동우 / G2.시우 / B.재우 / D.사빈",
      },
    ],
  },
];

const membersRoot = document.querySelector("#members");
const setlistRoot = document.querySelector("#setlist");

membersRoot.innerHTML = members
  .map(
    (member, index) => `
      <article class="member-card reveal" style="transition-delay: ${index * 70}ms">
        <h3 class="member-card__name">${member.name}</h3>
        <p class="member-card__role">${member.role}</p>
      </article>
    `,
  )
  .join("");

setlistRoot.innerHTML = setlist
  .map(
    (part, partIndex) => `
      <article class="part-card reveal" style="transition-delay: ${partIndex * 90}ms">
        <div class="part-card__header">
          <div>
            <p class="part-card__tag">${part.part}</p>
            <h3 class="part-card__title">${part.leader}</h3>
          </div>
        </div>
        <div class="song-list">
          ${part.songs
            .map(
              (song, index) => `
                <article class="song-item">
                  <div class="song-item__headline">
                    <h4 class="song-item__title">${song.title}</h4>
                    <p class="song-item__artist">${song.artist}</p>
                    <p class="song-item__meta">${song.year}</p>
                  </div>
                  <p class="song-item__lineup">${song.lineup}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </article>
    `,
  )
  .join("");

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -8% 0px",
  },
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

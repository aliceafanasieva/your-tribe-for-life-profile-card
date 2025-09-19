<script>
  import { onMount, onDestroy } from "svelte";
  import Cross from "$lib/icons/Cross.svelte";

  let idx = 0; // current slide-index (0 = 1st)
  const total = 3; // total amount slides

  const next = () => (idx = (idx + 1) % total);
  const prev = () => (idx = (idx - 1 + total) % total);

  const handleKey = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  let startX = 0,
    deltaX = 0,
    touching = false;
  function onTouchStart(e) {
    touching = true;
    startX = e.touches[0].clientX;
    deltaX = 0;
  }
  function onTouchMove(e) {
    if (!touching) return;
    deltaX = e.touches[0].clientX - startX;
  }
  function onTouchEnd() {
    touching = false;
    const threshold = 40;
    if (deltaX > threshold) prev();
    else if (deltaX < -threshold) next();
    deltaX = 0;
  }

  onMount(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });
</script>

<div class="page">
  <div
    class="card"
    aria-roledescription="carousel"
    aria-label="Business card"
    aria-live="polite"
    on:touchstart={onTouchStart}
    on:touchmove={onTouchMove}
    on:touchend={onTouchEnd}
  >
    <!-- .track schuift met CSS d.m.v. custom property --i (idx) -->
    <div class="track" style="--i:{idx};">
      <!-- SLIDE 1 -->
      <section class="slide">
        <div class="bg fade"></div>
        <h1
          class="title preSlide"
          class:run={idx === 0}
          style="--reveal-delay:300ms"
        >
          ALISA AFANASIEVA
        </h1>
      </section>

      <!-- SLIDE 2 -->
      <section class="slide">
        <div class="bg fade"></div>

        <div class="skills">
          <span
            class="swash m preSlide"
            class:run={idx === 1}
            style="--reveal-delay:200ms"
          >
            <span class="fancy">M</span>otion design
          </span>

          <Cross center size={100} thickness={22} color="#fff" />

          <span
            class="swash g preSlide"
            class:run={idx === 1}
            style="--reveal-delay:400ms"
          >
            <span class="fancy">G</span>raphic design
          </span>

          <span
            class="swash f preSlide"
            class:run={idx === 1}
            style="--reveal-delay:700ms"
          >
            <span class="fancy">F</span>rontend dev
          </span>

          <span
            class="swash w preSlide"
            class:run={idx === 1}
            style="--reveal-delay:900ms"
          >
            <span class="fancy">W</span>ebdesign
          </span>
        </div>
      </section>

      <!-- SLIDE 3 -->
      <section class="slide">
        <div class="bg fade"></div>
        <ul
          class="contacts preSlide"
          class:run={idx === 2}
          style="--reveal-delay:300ms"
        >
          <li><b>tg:</b> @liskinroom</li>
          <li><b>ig:</b> @murkiny.glazki</li>
          <li><b>git:</b> aliceafanasieva</li>
          <li><b>e:</b> alice.afanasieva@gmail.com</li>
        </ul>
      </section>
    </div>

    <button class="nav prev" aria-label="Previous slide" on:click={prev}
      >‹</button
    >
    <button class="nav next" aria-label="Next slide" on:click={next}>›</button>
  </div>
</div>

<style>
  @font-face {
    font-family: "Milton One";
    src: url("/fonts/Milton_One_Bold.otf") format("opentype");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "Codystar";
    src: url("/fonts/Codystar-Regular.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
  }

  :global(html, body) {
    height: 100%;
    background: rgb(30, 30, 30);
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 300;
  }

  :global(.preSlide) {
    opacity: 0;
    transform: translateY(30px);
  }

  :global(.preSlide.run) {
    animation: fadeUp 700ms ease forwards;
    animation-delay: var(--reveal-delay, 0ms);
    will-change: transform, opacity;
  }

  @keyframes fadeUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @supports (animation-timeline: view()) {
    :global(.preSlide.run.scroll) {
      animation-timeline: view();
      animation-range: entry 20% cover 20%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    :global(.preSlide),
    :global(.preSlide.run) {
      animation: none !important;
      opacity: 1 !important;
      transform: none !important;
    }
  }

  .page {
    min-height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card {
    width: 94vw;
    height: 40vh;
    min-height: 280px;
    position: relative;
    overflow: hidden;
    background: #fff;
  }

  .track {
    width: 300%;
    height: 100%;
    display: flex;
    transform: translateX(calc(var(--i) * -33.3333%));
    transition: transform 350ms cubic-bezier(0.2, 0.7, 0.2, 1);
  }

  .slide {
    width: 100%;
    height: 100%;
    position: relative;
    flex: 0 0 33.3333%;
    color: #fff;
    display: grid;
    place-items: center;
    text-align: center;
  }

  .bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle farthest-corner at 50% 55%,
      #ea008c 0%,
      #f94fa7 24%,
      #ff8dc6 46%,
      #ffc9dc 72%,
      #fffefe 100%
    );
  }

  .title {
    font-family: "Codystar", system-ui, sans-serif;
    font-size: clamp(20px, 5.3vw, 56px);
    letter-spacing: 0.12em;
    z-index: 1;
    font-weight: 400;
  }

  .skills {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .swash {
    position: absolute;
    color: #fff;
    white-space: nowrap;
    font-size: clamp(18px, 3vw, 40px);
    line-height: 1.1;
  }

  .swash.m {
    top: 8%;
    left: 10%;
  }

  .swash.g {
    top: 20%;
    right: 7%;
    text-align: right;
  }

  .swash.f {
    bottom: 20%;
    left: 13%;
  }

  .swash.w {
    bottom: 8%;
    right: 10%;
  }

  .fancy {
    font-family: "Milton One", Georgia, serif;
    font-weight: 700;
    font-size: clamp(72px, 12vw, 80px);
    line-height: 1;
    margin-right: 0.06em;
    float: top;
  }

  .cross-wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 44px;
    height: 44px;
  }

  .cross-wrap svg {
    width: 100%;
    height: 100%;
    color: #fff;
  }

  .contacts {
    z-index: 1;
    list-style: none;
    margin: 0;
    padding: 0.8rem 1.1rem;
    display: grid;
    gap: 0.5rem;
    font-size: clamp(14px, 1.8vw, 20px);
  }

  .nav {
    position: absolute;
    top: 50%;
    translate: 0 -50%;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: none;
    background: none;
    color: #ffffff;
    font-size: 30px;
    display: grid;
    place-items: center;
    cursor: pointer;
  }

  .nav.prev {
    left: 10px;
  }

  .nav.next {
    right: 10px;
  }

  @media (min-width: 700px) {
    .card {
      width: min(60vw, 700);
      height: min(55vh, 600px);
      min-height: 290px;
    }
  }

  @media (min-width: 900px) {
    .card {
      width: min(55vw, 800px);
      height: min(50vh, 700px);
      min-height: 300px;
    }
  }
</style>

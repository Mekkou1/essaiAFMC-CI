<template>
  <section
    id="hero"
    class="hero-section text-white text-center py-5"
    style="background: url('/images/hero-bg.png') no-repeat center center; background-size: cover; height: 378px;"
  >
    <div
      class="container d-flex flex-column justify-content-center align-items-center h-100 animate__animated animate__fadeInUp"
      style="background-color: rgba(255, 100, 100, 0.4);"
    >
      <div
        style="background-color: rgba(245, 245, 220, 0.5); padding: 40px; border-radius: 10px; margin: 0 8px;"
        class="hover-effect animate__animated animate__fadeInUp"
      >
        <h1
          class="display-4 font-weight-bold animate__animated animate__fadeInUp"
          style="color: mediumblue; border: 1px solid blue; border-radius: 5px; text-shadow: 2px 2px 5px #000; animation: lightEffect 2s ease-in-out infinite; border-width: 5px; padding: 10px;"
        >
          Nous connaitre
        </h1>
      </div>
      <p
        class="lead animate__animated animate__fadeInUp"
        style="font-size: 18px; font-weight: bold;"
      />
    </div>
  </section>
</template>

<style scoped>
  @keyframes waveAnimation {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    50% { transform: translateY(0); }
  }
  @keyframes lightEffect {
    0% { box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px violet, 0 0 70px violet, 0 0 80px violet, 0 0 100px violet, 0 0 150px violet; }
    50% { box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px violet, 0 0 70px violet, 0 0 80px violet, 0 0 100px violet, 0 0 150px violet; }
  }
  .animated {
    animation: waveAnimation 5s ease-in-out infinite;
  }
  .hover-effect:hover {
    transform: scale(1.05);
    transition: transform 0.5s ease-in-out;
  }
  @media (max-width: 768px) {
    .hero-section {
      padding: 3rem 1.5rem;
    }
  }
</style>

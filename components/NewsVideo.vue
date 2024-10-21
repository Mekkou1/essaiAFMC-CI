<template>
  <div>
    <!-- News Section -->
    <section id="news" class="py-5" style="text-align: center;">
      <div class="container">
        <h2 class="font-weight-bold text-center">
          A la une
        </h2>
        <div class="row">
          <!-- Featured News -->
          <div class="col-md-12 mb-4">
            <div class="card border-0 shadow-sm">
              <div class="card-body">
                <h5 class="card-title font-weight-bold">
                  {{ featuredTitle }}
                </h5>
                <div class="embed-responsive embed-responsive-16by9 mb-3">
                  <iframe
                    class="embed-responsive-item youtube-video"
                    :src="videoUrl"
                    allowfullscreen
                    style="width: 100%; height: 450px;"
                  />
                </div>
                <marquee width="300" scrollamount="300" scrolldelay="5000" style="color: red;">
                  {{ marqueeText }}
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { newsData } from '~/assets/data/newsData.js'

export default {
  data () {
    return {
      featuredTitle: newsData.featuredTitle,
      videoUrl: newsData.videoUrl,
      marqueeText: newsData.marqueeText
    }
  }
}
</script>

  <style scoped>
  @keyframes customFadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .custom-animation {
    animation: customFadeIn 1s ease-out forwards;
  }

  @media (max-width: 768px) {
    .youtube-video {
      max-width: 100%;
      height: auto;
    }
  }

  @media (max-width: 480px) {
    .youtube-video {
      max-width: 100%;
      height: auto;
    }
  }
  </style>

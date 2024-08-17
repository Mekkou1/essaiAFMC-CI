<template>
  <div class="video-gallery">
    <div class="row">
      <div v-for="video in videos" :key="video.id" class="col-md-6 col-lg-4 mb-4">
        <div class="card">
          <div class="video-container">
            <iframe
              class="video-iframe"
              :src="'https://www.youtube.com/embed/' + video.youtubeId"
              allowfullscreen
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">
              {{ video.title }}
            </h5>
            <p class="card-text">
              {{ video.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoGallery',
  data () {
    return {
      videos: [
        {
          id: 1,
          youtubeId: '5DKPkFZF95A',
          title: 'Investiture de la Présidente',
          description: 'Cérémonie d\'investiture de la nouvelle présidente de l\'association.'
        },
        {
          id: 2,
          youtubeId: '2L8d_ihJ6_k',
          title: 'Journée mondiale du rein',
          description: 'Célébration de la journée Mondiale du rein avec le CNPTIR en partenariat avec l\'INSP.'
        }
        // Ajoutez d'autres vidéos ici
      ]
    }
  }
}
</script>

  <style scoped>
  .video-gallery {
    padding: 2rem 0;
  }

  .card {
    height: 100%;
    padding: 0;
    overflow: hidden;
  }

  .video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
    height: 0;
    overflow: hidden;
  }

  .video-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .card-body {
    padding: 1rem;
  }

  .card-title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .card-text {
    font-size: 0.9rem;
    margin-bottom: 0;
  }
  </style>

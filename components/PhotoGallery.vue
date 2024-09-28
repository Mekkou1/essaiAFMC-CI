<template>
  <div class="gallery-detail">
    <h2>{{ title }}</h2>
    <div class="gallery">
      <div v-for="(photo, index) in photos" :key="index" class="photo-item">
        <img :src="photo" :alt="`${title} photo ${index + 1}`">
      </div>
    </div>
    <button class="back-button" @click="$emit('go-back')">
      Retour
    </button>
  </div>
</template>

<script>
export default {
  name: 'PhotoGallery',
  props: {
    title: {
      type: String,
      required: true
    },
    photos: {
      type: Array,
      required: true
    }
  }
}
</script>

  <style scoped>
  .gallery-detail {
    padding: 2rem;
  }

  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .photo-item {
    margin: 1rem;
  }

  .photo-item img {
    border-radius: 15px;
    width: 100%;
    max-width: 300px;
    height: auto;
  }

  .back-button {
    margin-top: 2rem;
    padding: 10px 20px;
    background-color: #02063F;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .back-button:hover {
    background-color: #FB0683;
  }
  </style>

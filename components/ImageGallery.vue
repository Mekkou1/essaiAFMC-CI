<template>
  <section class="photo-gallery">
    <div class="gallery">
      <div v-for="(item, index) in galleryGroups" :key="index" class="gallery-item">
        <div class="gallery-content">
          <div class="photo-container">
            <img :src="item.coverImage" :alt="item.title" class="gallery-image">
          </div>
          <div class="text-container">
            <h3 class="gallery-title">
              {{ item.title }}
            </h3>
            <button class="read-more-button" @click="showPhotos(item.slug)">
              Lire plus
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ImageGallery',
  data () {
    return {
      galleryGroups: [
        {
          title: 'Audiences',
          coverImage: '/images/audiance.jpg',
          slug: 'audiences'
        },
        {
          title: 'Journée scientifique',
          coverImage: '/images/audiance2.jpg',
          slug: 'journee-scientifique'
        }
      ]
    }
  },
  methods: {
    showPhotos (slug) {
      // Émettre un événement au composant parent avec le slug en argument
      this.$emit('show-section', slug)
    }
  }
}
</script>

<style scoped>
.photo-gallery {
  text-align: center;
  padding: 2rem 1rem;
}

.gallery {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.gallery-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  overflow: hidden;
  padding: 1rem;
  height: 300px; /* Default height for larger screens */
}

.gallery-content {
  display: flex;
  align-items: flex-start; /* Align items to the top */
  width: 100%;
}

.photo-container {
  flex: 0 0 auto;
  margin-right: 1rem;
  border-radius: 15px;
  overflow: hidden;
  width: 300px; /* Default width for larger screens */
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align text to the top */
}

.gallery-title {
  margin-top: 0; /* Remove any default margin */
  font-size: 18px; /* Default font size for larger screens */
  color: black;
}

.read-more-button {
  background-color: #fb0683;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 14px; /* Default font size for larger screens */
  padding: 0.5rem 1rem;
  margin-top: 1rem; /* Add margin to separate the button from the title */
}

.read-more-button:hover {
  background-color: #e00473;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .gallery-item {
    flex-direction: column;
    height: auto; /* Adjust height for smaller screens */
  }

  .gallery-content {
    flex-direction: column; /* Stack content vertically */
    align-items: center;
  }

  .photo-container {
    width: 100%; /* Adjust width to fit screen */
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .text-container {
    align-items: center; /* Center align text on smaller screens */
  }

  .gallery-title {
    font-size: 16px; /* Smaller font size for smaller screens */
  }

  .read-more-button {
    font-size: 12px; /* Smaller font size for smaller screens */
    padding: 0.5rem;
  }
}

@media (max-width: 576px) {
  .gallery-title {
    font-size: 14px; /* Further reduce font size */
  }

  .read-more-button {
    font-size: 11px; /* Further reduce font size */
    padding: 0.5rem;
  }
}
</style>

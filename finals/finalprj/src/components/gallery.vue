<template>
  <div>
    <h1>Image Gallery</h1>
    <div class="image-gallery">
      <div v-for="image in imageList" :key="image.id" class="image-container">
        <img :src="image.src" :alt="image.alt">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageList: [
        { id: 1, src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRm83NAqEtDGFQGE01TPf_VjZ67lAGX9Mo-jDNwfbuN0_B69Tb7", alt: "Image 1" },
        { id: 2, src: "https://i.pinimg.com/originals/7b/aa/7e/7baa7e72d9b769cc46b376cfc7f36198.jpg", alt: "Image 2" },
        { id: 3, src: "https://m.media-amazon.com/images/I/718CuMByftL.jpg", alt: "Image 3" },
        { id: 4, src: "https://m.media-amazon.com/images/M/MV5BMTY1OTUyZjgtMmM5NS00NzQ4LTg1ZmQtZmVhNmQyMmJlZDMzXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg", alt: "Image 4" },
        { id: 5, src: "https://kbimages1-a.akamaihd.net/1ac4e96c-61f2-4bf8-b4f9-445d24f34991/1200/1200/False/mushoku-tensei-jobless-reincarnation-light-novel-vol-4.jpg", alt: "Image 5" },
      ],
    };
  },
};
</script>
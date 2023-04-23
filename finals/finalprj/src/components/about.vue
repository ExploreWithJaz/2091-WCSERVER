<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <ul>
      <li v-for="anime in animeList" :key="anime.id">{{ anime.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'about',
  
  data() {
    return {
      title: "My Anime Website",
      description: "The best place to find and watch your favorite anime!",
      animeList: [
        { id: 1, title: "Attack on Titan" },
        { id: 2, title: "One Piece" },
        { id: 3, title: "Demon Slayer" },
        { id: 4, title: "Naruto" },
        { id: 5, title: "My Hero Academia" },
      ],
    };
  },
};
</script>
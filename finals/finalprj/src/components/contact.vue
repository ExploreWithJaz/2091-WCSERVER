<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <p>If you have any questions or concerns, please feel free to contact us using the information below:</p>
    <ul>
      <li>Email: {{ email }}</li>
      <li>Phone: {{ phone }}</li>
      <li>Address: {{ address }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'contact',

  data() {
    return {
      email: "contact@myanimewebsite.com",
      phone: "+1-555-555-5555",
      address: "1234 Anime Street, Tokyo, Japan",
    };
  },
};
</script>
<template>
  <div>
    <!-- Topbar Start -->
    <div class="container-fluid bg-dark py-3 px-lg-5 d-none d-lg-block">
      <div class="row">
        <div class="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
          <div class="d-inline-flex align-items-center"></div>
        </div>
        <div class="col-md-6 text-center text-lg-right">
          <div class="d-inline-flex align-items-center">
            <a class="text-body px-3" href="">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a class="text-body px-3" href="">
              <i class="fab fa-twitter"></i>
            </a>
            <a class="text-body px-3" href="">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a class="text-body px-3" href="">
              <i class="fab fa-instagram"></i>
            </a>
            <a class="text-body pl-3" href="">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid position-relative nav-bar p-0">
      <div class="position-relative px-lg-5" style="z-index: 9">
        <nav
          class="
            navbar navbar-expand-lg
            bg-secondary
            navbar-dark
            py-3 py-lg-0
            pl-3 pl-lg-5
          "
        >
          <a href="" class="navbar-brand">
            <h1 class="text-uppercase text-light mb-1">Royal Cars</h1>
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active"
                  ><router-link to="/" class="nav-link">Home</router-link>
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link"
                  ><router-link to="/service" class="nav-link"
                    >Service</router-link
                  ></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link"
                  ><router-link to="/view" class="nav-link"
                    >Client List</router-link
                  ></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link"
                  ><router-link to="/aboutus" class="nav-link"
                    >About Us</router-link
                  ></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link"
                  ><router-link to="/contactus" class="nav-link"
                    >Contact Us</router-link
                  ></a
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
:root {
  --primary: #f77d0a;
  --secondary: #2b2e4a;
  --light: #f4f5f8;
  --dark: #1c1e32;
}

h1,
h2,
.font-weight-bold {
  font-weight: 700 !important;
}

h3,
h4,
.font-weight-semi-bold {
  font-weight: 600 !important;
}

h5,
h6,
.font-weight-medium {
  font-weight: 500 !important;
}
.btn-square {
  width: 36px;
  height: 36px;
}

.btn-sm-square {
  width: 28px;
  height: 28px;
}

.btn-lg-square {
  width: 46px;
  height: 46px;
}

.btn-square,
.btn-sm-square,
.btn-lg-square {
  padding-left: 0;
  padding-right: 0;
  text-align: center;
}

.back-to-top {
  position: fixed;
  display: none;
  right: 30px;
  bottom: 30px;
  z-index: 99;
}

.nav-bar::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 50%;
  top: 0;
  left: 0;
  background: var(--dark);
}

.nav-bar::after {
  position: absolute;
  content: '';
  width: 100%;
  height: 50%;
  bottom: 0;
  left: 0;
  background: #ffffff;
}

.navbar-dark .navbar-nav .nav-link {
  padding: 20px 15px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--light);
  outline: none;
}

.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link.active {
  color: var(--primary);
}

@media (max-width: 991.98px) {
  .navbar-dark .navbar-nav .nav-link {
    padding: 10px 15px;
  }
}

.carousel-caption {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(28, 30, 50, 0.7);
  z-index: 1;
}

@media (max-width: 576px) {
  .carousel-caption h4 {
    font-size: 18px;
    font-weight: 500 !important;
  }

  .carousel-caption h1 {
    font-size: 30px;
    font-weight: 600 !important;
  }
}
.bg-banner {
  background: linear-gradient(rgba(28, 30, 50, 0.9), rgba(28, 30, 50, 0.9));
  background-attachment: fixed;
}
</style>

<template>
  <div>
    <nav
      class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"
      aria-label="Offcanvas navbar large"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Toko Kami</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasNavbar2"
          aria-labelledby="offcanvasNavbar2Label"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Toko</h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/">Home</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/about">About</nuxt-link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li class="mb-3"><a class="dropdown-item" href="#">Action</a></li>
                  <li class="mb-3">
                    <a class="dropdown-item" href="#">Another action</a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="d-flex mt-3 mt-lg-0">
              
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <NuxtLink class="btn btn-warning nav-link mb-3" to="/register">Login</NuxtLink>
                </li>
                <li class="nav-item ml-nav">
                  <NuxtLink class="btn btn-warning nav-link mb-3" to="/register">Register</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

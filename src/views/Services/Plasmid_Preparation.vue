<template>
  <div class="container">
    <div class="header">
      <img src="../../assets/ngs/nextGene01.png" alt="QuinDyeTM Terminator Product">
    </div>
    <div class="navbar">
      <div class="nav-inner-container">
        <div class="nav-container">
          <span @click="scrollTo('overview')">Overview</span>
          <span @click="scrollTo('Workflow')">Analysis</span>
          <span @click="scrollTo('resources')">Resources</span>
        </div>
      </div>
      
    </div>
    <!-- 四个锚点内容区 -->
    <section id="Workflow" class="section-overview">
      <div class="overview-content">
        <h2 class="overview-title">
          <span>Overview</span>
        </h2>
        <p class="overview-desc">Our platform delivers fast, automated, and scalable data analysis with cutting-edge technology—turning extensive data into actionable insights effortlessly.</p>
        <div class="overview-features">
          <div class="feature-item">
            <div class="img">
              <svg viewBox="0 0 1024 1024" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00bc97"/>
      <stop offset="80%" stop-color="#4e3fa5"/>
    </linearGradient>
  </defs>
  <path fill="url(#gradient1)" d="M955.199 264.911l-0.387-1.89a27.106 27.106 0 0 0-1.648-5.158c-0.129-0.387-0.243-0.889-0.501-1.276a38.869 38.869 0 0 0-3.052-5.544l-1.003-1.39a31.72 31.72 0 0 0-3.295-3.897c-0.387-0.386-0.774-0.888-1.146-1.26a39.155 39.155 0 0 0-4.957-4.155c-0.244-0.143-0.63-0.387-0.888-0.516-1.147-0.745-2.278-1.504-3.554-2.149L528.831 36.083a38.396 38.396 0 0 0-33.998 0L88.881 237.69a33.095 33.095 0 0 0-3.553 2.15c-0.258 0.114-0.63 0.372-0.888 0.5-1.776 1.262-3.438 2.637-4.943 4.156-0.387 0.372-0.773 0.759-1.146 1.26-1.146 1.261-2.292 2.522-3.295 3.897l-1.017 1.39c-1.146 1.762-2.15 3.653-3.052 5.544-0.114 0.387-0.243 0.889-0.501 1.261-0.63 1.648-1.146 3.41-1.648 5.158l-0.387 1.905a41.161 41.161 0 0 0-0.63 6.806v480.852c0 14.37 8.123 27.365 21.06 33.783l405.952 201.622a8.782 8.782 0 0 0 1.003 0.373c1.777 0.874 3.811 1.504 5.717 2.005 0.759 0.258 1.39 0.516 2.149 0.645 2.664 0.63 5.458 1.003 8.252 1.003 2.794 0 5.587-0.372 8.252-1.003 0.76-0.143 1.39-0.516 2.15-0.63a37.966 37.966 0 0 0 5.716-2.02 8.782 8.782 0 0 1 1.002-0.373l405.952-201.622a37.78 37.78 0 0 0 21.06-33.783V271.717c-0.257-2.278-0.5-4.542-0.887-6.806zM511.954 106.07L851.587 277.49l-123.01 62.064-198.9-98.511a64.629 64.629 0 0 0-6.448-2.307c-0.802-0.272-1.604-0.544-2.55-0.816a45.273 45.273 0 0 0-6.16-0.817c-0.903 0-1.62-0.258-2.436-0.258a38.826 38.826 0 0 0-16.52 3.51c-0.085 0-69.341 31.806-207.739 95.417L172.321 277.49l339.633-171.42z m6.934 561.642l-138.698-67.25 138.297-75.445 136.02 76.878-135.619 65.817zM681.77 388.337V552.08l-130.632-82.924V318.58l130.632 69.772z m-195.948 80.388L342.137 552.08V386.203l143.699-67.623v150.145z m-341.123 35.617V317.491l125.475 60.803V604.43c0 0.659 0.143 1.303 0.272 2.091l0.401 4.212 0.817 3.811c0.272 1.175 0.673 2.364 1.088 3.539 0.545 1.318 1.075 2.622 1.763 3.94 0.272 0.659 0.544 1.189 0.816 1.834 2.293 3.682 4.198 6.175 6.505 8.41 3.31 3.109 6.59 5.4 10.172 7.22 0.544 0.258 0.945 0.53 1.49 0.788 0.286 0.086 68.239 32.923 203.885 98.498V901.21L144.7 730.477V504.342z m745.169 226.723L537.169 901.784V739.33l196.565-95.073c14.7-7.106 23.525-22.077 22.378-37.952l0.144-223.499 133.612-64.757v413.015z"/>
</svg>
            </div>
            <div>Cutting-edge platform</div>
          </div>
          <div class="feature-item">
            <div class="img">
              <svg viewBox="0 0 1024 1024" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00bc97"/>
      <stop offset="80%" stop-color="#4e3fa5"/>
    </linearGradient>
  </defs>
  <path fill="url(#gradient2)" d="M836.065882 252.626824a36.141176 36.141176 0 0 1 41.562353 48.368941l-2.409411 4.879059-354.785883 618.014117a36.141176 36.141176 0 0 1-52.645647 11.14353l-4.457412-3.855059-118.543058-120.71153a36.141176 36.141176 0 0 1 47.164235-54.512941l-4.457412 3.855059 85.11247 86.738824 290.213647-505.615059-571.813647 126.855529 60.958118 104.568471a36.141176 36.141176 0 0 1-7.649883 45.658353l-5.360941 3.794823a36.141176 36.141176 0 0 1-45.658353-7.710117l-3.734588-5.300706-85.895529-147.275294a36.141176 36.141176 0 0 1 18.070588-51.862589l-5.360941-1.626353 700.054588-155.407058z"/>
  <path fill="url(#gradient2)" d="M823.055059 258.349176a36.141176 36.141176 0 0 1 46.622117 54.814118l-4.939294 4.216471-543.021176 382.735059-21.38353 121.554823a36.141176 36.141176 0 0 1-36.020705 29.876706l-5.903059-0.602353a36.141176 36.141176 0 0 1-29.816471-35.960471l0.542118-5.842823 24.033882-136.252235a36.141176 36.141176 0 0 1 10.360471-19.636706l4.397176-3.614118 555.128471-391.288471z"/>
</svg>

            </div>
            <div>Fast and efficient</div>
          </div>
          <div class="feature-item">
            <div class="img">
              <svg viewBox="0 0 1024 1024" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00bc97"/>
      <stop offset="80%" stop-color="#4e3fa5"/>
    </linearGradient>
  </defs>
  <path fill="url(#gradient3)" d="M903 929.5H132.5c-20.1 0-36.5-16.4-36.5-36.6V119.5c0-13.8 11.2-25 25-25s25 11.2 25 25v760h757c13.8 0 25 11.2 25 25s-11.2 25-25 25z" stroke-width="1.5"/>
  <path fill="url(#gradient3)" stroke-width="1.5" d="M241 536.7h50V796h-50z m176.7-78.2h50V796h-50z m176.6 78.2h50V796h-50zM771 411h50v385h-50z m-524.1 56.2L217 426.8l218.9-156.9 185.8 114.3 182.8-150.4 32.5 38.4-211 173.6-187.9-115.7z"/>
  <path fill="url(#gradient3)" stroke-width="1.5" d="M715.2 184.2l194.6-3.9-43.9 187"/>
</svg>
            </div>
            <div>Automated analysis</div>
          </div>
          <div class="feature-item">
            <div class="img">
              <svg viewBox="0 0 1024 1024" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00bc97"/>
      <stop offset="80%" stop-color="#4e3fa5"/>
    </linearGradient>
  </defs>
  <path fill="url(#gradient4)" d="M611.346 61.725c19.934 0 38.947 8.154 52.543 21.748 13.57 13.597 21.748 32.61 21.748 53.438s-8.177 38.974-21.748 52.544c-13.596 13.57-32.635 22.668-52.543 22.668-21.063-0.205-40.049-8.94-53.699-22.908-13.36-13.33-21.488-31.474-21.488-52.304s8.129-39.868 21.724-53.438c13.598-13.445 32.3-21.749 52.943-21.749 0.183 0 0.366 0.001 0.549 0.002zM630.361 117.897c-4.762-5.040-11.489-8.177-18.95-8.177-0.021 0-0.044 0-0.067 0-8.124 0-14.487 2.734-19.011 8.177-5.467 4.523-8.203 11.781-8.203 19.013 0 7.258 2.734 14.491 7.282 19.040 5.444 4.549 11.808 8.153 19.935 8.153 7.258 0 13.57-3.629 19.013-8.153 4.523-4.549 7.258-11.781 7.258-19.040 0-7.233-2.759-14.491-7.258-19.013zM903.070 579.929c20.829 0 39.868 9.072 53.438 22.643 13.57 12.701 21.724 31.715 21.724 52.544 0 20.854-8.154 39.868-21.724 52.544-13.721 13.9-32.738 22.542-53.776 22.645-20.515-0.002-38.635-9.050-52.206-22.645-13.946-13.213-22.625-31.865-22.625-52.544 0-20.679 8.679-39.332 22.592-52.514 13.603-13.575 31.747-22.672 52.576-22.672zM922.085 636.102c-5.020-4.933-11.872-8.016-19.443-8.138-7.157 0.241-13.961 3.42-18.907 8.433-4.666 4.718-7.77 11.581-7.89 19.167 0.011 6.859 3.638 14.091 8.188 18.615 4.523 4.549 11.757 8.177 19.039 8.177 7.233 0 14.467-3.629 19.015-8.177 5.443-4.523 8.153-11.757 8.153-19.040 0-7.233-2.709-14.466-8.153-19.039zM218.139 220.276c20.828 0 38.974 8.153 52.544 21.748 13.57 13.569 21.748 32.635 21.748 53.463s-8.177 38.947-21.748 52.543c-13.57 13.572-31.715 22.644-52.544 22.644s-39.868-9.047-53.465-22.644c-13.57-13.596-21.748-31.714-21.748-52.543s8.177-39.868 21.748-53.465c13.609-13.445 32.321-21.749 52.974-21.749 0.172 0 0.345 0 0.516 0.001zM237.152 276.423c-5.443-5.444-11.757-8.154-19.013-8.154s-14.491 2.709-19.013 8.154c-5.443 4.523-8.177 11.78-8.177 19.039 0 7.233 2.734 14.491 8.177 19.013 4.523 4.525 11.757 8.154 19.013 8.154s13.57-3.629 19.013-8.154c4.525-4.523 8.177-11.78 8.177-19.013 0-7.233-3.629-14.491-8.177-19.039zM148.37 634.313c20.828 0 38.973 8.127 52.543 21.724 13.597 13.62 22.668 32.635 22.668 53.463s-9.047 38.924-22.668 52.544c-13.57 13.596-31.714 22.643-52.543 22.643s-39.868-9.047-53.438-22.643c-13.431-13.279-21.749-31.708-21.749-52.078 0-0.164 0-0.327 0.001-0.492 0-20.828 8.153-39.843 21.748-53.437 13.586-13.43 32.274-21.726 52.899-21.726 0.19 0 0.38 0.001 0.569 0.002zM167.408 690.484c-4.523-5.443-11.78-8.127-19.039-8.127-7.233 0-14.491 2.684-19.015 8.127c-5.443 4.523-8.153 11.807-8.153 19.040s2.709 13.596 8.153 19.013c4.525 4.573 11.781 8.153 19.015 8.153 7.258 0 14.514-3.604 19.039-8.153 4.525-4.499 8.154-11.781 8.154-19.013s-3.629-14.541-8.154-19.040zM534.32 811.851c20.828 0 38.924 9.046 52.544 22.667 13.596 13.597 21.748 31.691 21.748 52.544 0 20.828-8.154 39.868-21.748 53.438-13.279 13.431-31.708 21.749-52.078 21.749-0.164 0-0.327 0-0.492-0.001-20.803 0-39.843-8.153-53.413-21.748s-21.748-32.635-21.748-53.438c0-20.854 8.153-38.947 21.748-52.544 13.716-13.913 32.738-22.563 53.781-22.669zM553.359 868.048c-5.443-4.549-11.807-8.153-19.040-8.153-8.153 0-14.491 3.629-19.013 8.153-5.443 4.523-8.177 11.781-8.177 19.040 0 7.233 2.734 14.491 8.177 19.013 4.523 5.467 10.862 8.153 19.013 8.153 7.233 0 13.597-2.684 19.040-8.153 4.523-4.523 8.153-11.781 8.153-19.013 0-7.258-3.629-14.514-8.153-19.040z"/>
  <path fill="url(#gradient4)" d="M598.645 885.276c-10.886 7.233-25.377 3.629-32.635-7.233s-4.523-26.321 7.233-32.635l259.116-166.704c10.886-7.233 26.321-4.547 32.635 7.233 2.526 3.62 4.035 8.112 4.035 12.957 0 8.343-4.479 15.641-11.164 19.621l-259.219 166.764zM278.834 311.767c-12.676 5.443-26.271-0.894-31.714-12.676s0-26.271 11.78-31.714l282.654-124.126c2.846-1.298 6.174-2.055 9.678-2.055 9.875 0 18.347 6.012 21.953 14.576 4.63 11.937-0.837 26.429-12.594 31.846l-281.756 124.15zM185.527 662.423c-1.789 12.651-14.491 21.698-27.166 19.934-12.702-1.814-22.668-13.62-20.829-26.321l41.682-305.295c1.623-11.685 11.548-20.583 23.551-20.583 13.124 0 23.763 10.639 23.763 23.763 0 1.122-0.078 2.225-0.228 3.307l-40.773 305.196zM564.246 821.844c-0.921 13.596-12.726 22.643-26.271 21.748-11.861-1.077-21.083-10.975-21.083-23.025 0-1.146 0.084-2.272 0.243-3.373l57.973-619.588c0.894-12.675 12.676-22.643 25.377-20.828 13.57 0.895 22.643 12.676 21.748 25.377l-57.987 619.69z"/>
  <path fill="url(#gradient4)" d="M923.004 588.131c2.535 3.687 4.049 8.247 4.049 13.162 0 8.085-4.098 15.213-10.33 19.42-10.97 7.286-26.354 4.553-33.587-6.334l-266.397-405.883c-7.233-10.886-4.525-26.272 6.364-33.504 10.886-7.258 26.271-3.629 33.504 7.233l266.397 405.907zM526.167 812.798c1.817 3.346 2.886 7.326 2.886 11.556 0 8.905-4.735 16.705-11.825 21.015-3.451 1.873-7.424 2.937-11.647 2.937-8.901 0-16.697-4.731-21.010-11.814l-258.283-464.005c-6.314-10.886-1.789-26.272 9.991-32.635 10.862-6.338 25.377-1.815 32.61 9.966l257.277 462.977z"/>
  <path fill="url(#gradient4)" d="M850.528 610.775c11.78 6.337 15.385 20.852 9.942 32.61-4.111 7.675-12.074 12.805-21.236 12.805-4.166 0-8.085-1.060-11.5-2.928l-573.357-306.151c-7.682-4.121-12.819-12.098-12.819-21.273 0-4.161 1.056-8.075 2.914-11.488 4.298-7.081 12.094-11.823 20.996-11.823 4.238 0 8.225 1.075 11.703 2.966l573.355 305.282zM488.139 845.407c11.781 5.42 17.225 19.935 10.886 31.692-5.443 11.807-19.934 16.279-31.714 10.886l-276.34-136.803c-8.027-3.755-13.488-11.763-13.488-21.046 0-3.898 0.962-7.571 2.662-10.794 5.382-11.655 19.899-16.155 31.655-10.759l276.339 136.827z"/>
  <path fill="url(#gradient4)" d="M214.533 681.413c-4.455 5.387-11.139 8.791-18.619 8.791-5.651 0-10.85-1.945-14.961-5.202-9.918-8.114-11.731-23.5-3.58-33.466l372.354-469.34c8.129-9.968 22.618-11.757 33.506-3.629 9.966 8.177 11.78 23.563 3.629 33.53l-372.33 469.315z"/>
  <path fill="url(#gradient4)" d="M841.479 656.036c13.57-0.895 24.433 9.966 24.433 23.563 0 0.059 0.001 0.13 0.001 0.201 0 12.903-10.461 23.363-23.363 23.363-0.062 0-0.124 0-0.185-0.001l-644.161 12.675c-13.597 0-24.457-9.966-24.457-23.537 0-12.701 9.966-23.563 23.537-24.457l644.195-11.807z"/>
</svg>

            </div>
            <div>Extensive data</div>
          </div>
        </div>
      </div>
    </section>
    <section id="ourbusiness" class="section-business">
      <div class="aboutus-business-title">
        <span>Analysis</span>
      </div>
      <div class="aboutus-business-grid">
        <div
          v-for="(item, idx) in businessList"
          :key="item.title"
          class="business-item"
          :style="{ animationDelay: (0.15 * idx) + 's' }"
        >
          <div class="business-img">
            <img :src="item.img" :alt="item.title" />
          </div>
          <div class="business-info">
            <div class="business-title">{{ item.title }}</div>
            <div class="business-desc">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </section>

    <section id="resources" class="section-resources">
      <h2 class="resources-title">
        <span>Resources</span>
      </h2>
      <div class="resources-list">
        <div class="img">
          <img src="../../assets/services/datastatic.png" alt="" srcset="">
        </div>
      </div>
    </section>

  <div class="plasmid-preparation-page">
    <WeGoFastFooter />
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const businessList = [
  {
    img: new URL('../../assets/about/aboutus03.png', import.meta.url).href,
    title: 'Box plot',
    desc: ''
  },
  {
    img: new URL('../../assets/about/aboutus04.png', import.meta.url).href,
    title: 'CDR3 Length',
    desc: ''
  },
  {
    img: new URL('../../assets/about/aboutus05.png', import.meta.url).href,
    title: 'Gene Usage',
    desc: ''
  },
  {
    img: new URL('../../assets/about/aboutus06.png', import.meta.url).href,
    title: 'Top Clone',
    desc: ''
  },
  {
    img: new URL('../../assets/about/aboutus06.png', import.meta.url).href,
    title: 'Umap',
    desc: ''
  },
  {
    img: new URL('../../assets/about/aboutus06.png', import.meta.url).href,
    title: 'Db Alignment',
    desc: ''
  },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

import WeGoFastFooter from '@/components/WeGoFastFooter.vue'

</script>

<style lang="less" scoped>
.section-business {
  padding: 60px 0 40px 0;
  background: #fafbfc;
}
.aboutus-business-title {
  text-align: center;
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 40px;
  span {
    background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
}
.aboutus-business-grid {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px 48px;
  padding: 0 32px;
}
.business-item {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  box-shadow: none;
  animation: fadeInUp 0.8s both;
  transition: transform 0.2s, box-shadow 0.2s;
  border-bottom: 1px solid #ececec;
  padding-bottom: 24px;
  &:hover {
    transform: translateY(-6px) scale(1.03);
    .business-img img {
      transform: scale(1.08);
      box-shadow: 0 8px 32px 0 rgba(90,79,207,0.10);
    }
  }
  &:last-child, &:nth-last-child(2) {
    border-bottom: none;
  }
}
.business-img {
  flex-shrink: 0;
  width: 180px;
  height: 120px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
  border-radius: 8px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s, box-shadow 0.3s;
    border-radius: 8px;
  }
}
.business-info {
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}
.business-title {
  font-size: 1.18rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #222;
  letter-spacing: 0.01em;
}
.business-desc {
  font-size: 1rem;
  color: #666;
  line-height: 1.7;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
/* 手机端适配 (<768px) */
@media (max-width: 767px) {
  .section-overview .overview-title span {
    font-size: 2.2rem;
  }
  
  .services-title span {
    font-size: 2rem;
  }
  .services-table th,
  .services-table td {
    font-size: 0.8rem !important;
  }
}

/* 平板端适配 (768px-1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .section-overview .overview-desc {
    font-size: 1.1rem;
    line-height: 1.7;
  }
  
  .services-table th,
  .services-table td {
    font-size: 1rem;
  }
}

/* 手机端适配 (<768px) */
@media (max-width: 767px) {
  /* Overview部分适配 */
  .section-overview .overview-desc {
    font-size: clamp(0.875rem, 4vw, 1rem);
    line-height: 1.8;
  }
  
  .overview-features {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 0 10px;
    
    .feature-item {
      width: 100%;
      margin-bottom: 0;
      min-height: 180px;
     
    }
  }

  /* 服务表格适配 */
  .services-table-wrapper {
    width: 100%;
    overflow: hidden;
    height: fit-content;
  }
  
  .services-content {
    overflow: hidden;
  }
  
  .services-table {
    width: 100%;
    min-width: 600px;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
  
  .services-table thead,
  .services-table tbody {
    display: table;
    width: 100%;
  }

  .services-btns {
    flex-direction: column;
    gap: 15px;
    
    button {
      width: 90%;
      padding: 8px 20px;
      font-size: 1rem;
    }
  }

  /* Sample部分适配 */
  .sam-guide-title {
    font-size: 1.8rem;
    min-width: 300px;
    padding: 20px 30px;
  }

  @media (max-width: 480px) {
    .sam-guide-title {
      font-size: 1.5rem;
    }
  }

  .sam-guide-tabs {
    overflow-x: auto;
    flex-wrap: nowrap;
    
    .sam-guide-tab {
      font-size: 1.1rem;
      min-width: 140px;
      padding: 0 10px 8px;
    }
  }

  .sam-guide-content {
    font-size: 1rem;
    
    .sam-guide-desc {
      font-size: 0.95rem;
    }
  }
};
.container {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.header{
  width: 100%;
  height: 40%;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
.navbar{
  width: 100%;
  height: 50px;
  position: relative;
  background-color:rgba(42, 59, 119, 0.5) ;
  margin-top: -50px;
  .nav-inner-container{
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
    .nav-container{
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0 50px;
      gap: 40px;
      span{
        color: #ffffff;
        font-size: 20px;
        font-weight: 400;
        text-decoration: none;
        padding: 8px 16px;
      }
    }
  }
}

.section {
  padding: 80px 24px 40px 24px;
  min-height: 300px;
}

.section-overview {
  padding: 2vw 0;
  background: #fff;
  .overview-content {
    max-width: 1400px;
    margin: 0 auto;
    padding-left: 40px;
    padding-right: 40px;
  }
  .overview-title{
    text-align: center;
  }
  .overview-desc {
    text-align: left;
  }
  .overview-title {
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 14px;
    span {
      background-image: linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
  .overview-desc {
    font-size: 1.2rem;
    color: rgb(102, 102, 102);
    line-height: 1.6;
    margin: 0 0 0 0;
    padding: 10px 0;
    max-width: 100%;
  }
  .overview-features {
    display: flex;
    justify-content: flex-start;
    gap: 32px;
    margin-top: 30px;
    flex-wrap: wrap;
    padding: 0;
    .feature-item {
      padding: 0 20px;
      background: #f7f7f7;
      border-radius: 8px;
      width: 300px;
      min-height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 12px 0 rgba(90,79,207,0.06);
      transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s cubic-bezier(0.4,0,0.2,1);
      cursor: pointer;
      &:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 8px 32px 0 rgba(90,79,207,0.15);
        .img {
          filter: invert(1) hue-rotate(180deg) brightness(1.1) contrast(1.1);
          transition: filter 0.4s cubic-bezier(0.4,0,0.2,1);
        }
      }
      .img {
        width: 90px;
        height: 90px;
        object-fit: contain;
        transition: filter 0.4s cubic-bezier(0.4,0,0.2,1);
      }
      div {
        font-size: 1.15rem;
        color: rgb(102, 102, 102);
        text-align: center;
      }
    }
  }
}

.section-services {
  padding: 60px 0 40px 0;
  background: #fff;
  .services-content {
    max-width: 1400px;
    margin: 0 auto;
    text-align: center;
    padding: 0 24px;
  }
  .services-title {
    font-size: 2.6rem;
    font-weight: 600;
    margin-bottom: 36px;
    span {
      background: linear-gradient(90deg, #23c6c8 0%, #5a4fcf 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
  .services-table-wrapper {
    margin: 0 auto;
    max-width: 1400px;
    background: #fff;
    border-radius: 8px;
    box-shadow: none;
    padding: 0;
  }
  .services-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    // margin-bottom: 12px;
    thead tr th {
      // background: linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);
      color: #fff;
      font-size: 1.15rem;
      font-weight: 600;
      padding: 18px 0;
      border: none;
      border-radius: 0;
    }
    thead tr th:first-child { border-radius: 6px 0 0 0; }
    thead tr th:last-child { border-radius: 0 6px 0 0; }
    tbody td {
      font-size: 1.08rem;
      color: #444;
      padding: 16px 0;
      border: none;
      background: #fff;
    }
    tbody tr:nth-child(even) td {
      background: #f6f8fb;
    }
    .highlight {
      color: #23c6c8;
      font-weight: 500;
    }
  }}
  .services-note {
    text-align: left;
    font-size: 1rem;
    color: #666;
    // margin: 12px 0 32px 0;
    padding: 15px 0 15px 10px;
    border-bottom: 1px solid #e0e0e0;
    a {
      // color: #5a4fcf;
      color: #666;
      text-decoration: none;
      &:hover { color: #23c6c8; }
    }
  }
  .services-btns {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 24px;
    button {
      position: relative;
      z-index: 1;
      background: #fff;
      color: #23c6c8;
      font-size: 1.1rem;
      padding: 10px 36px;
      border-radius: 30px;
      cursor: pointer;
      font-weight: 500;
      border: 2px solid transparent;
      background-image:
        linear-gradient(#fff, #fff),
        linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);
      background-origin: padding-box, border-box;
      background-clip: padding-box, border-box;
      transition: background 0.2s, color 0.2s, border 0.2s;
      margin: 0 8px;
      &:hover {
        background-image:
          linear-gradient(to right, #00bc97 0%, #4e3fa5 80%),
          linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);
        color: #fff;
      }
    }
    .contact-btn {
      color: #4e3fa5;
    }
  }


.sam-guide {
  position: relative;
  width: 100%;
  min-height: 700px;
  background-image: url('../../assets/sanger/sangerS06.png');
  background-size: cover;
  background-position: center;
  padding: 0 0 80px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .sam-guide-bg {
    position: absolute;
    inset: 0;
    background: inherit;
    z-index: 0;
  }
  .sam-guide-inner {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .sam-guide-title-container {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 2;
    pointer-events: none;
    margin:  50px 0 50px 0;
  }
  .sam-guide-title {
    font-size: 2.3rem;
    font-weight: 700;
    color: #fff;
    text-align: center;
    text-shadow: 0 4px 24px rgba(90,79,207,0.18), 0 1px 2px #0004;
    background: transparent;
    padding: 32px 48px 18px 48px;
    border-radius: 18px 18px 0 0;
    pointer-events: auto;
    position: absolute;
    left: 50%;
    top: -48px;
    transform: translateX(-50%);
    min-width: 420px;
    max-width: 80vw;
  }
  .sam-guide-card {
    position: relative;
    z-index: 1;
    margin: 40px auto 0 auto;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 8px 32px 0 rgba(90,79,207,0.10);
    max-width: 1400px;
    width: 100%;
    min-width: 320px;
    padding: 40px 32px 32px 32px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .sam-guide-tabs {
    display: flex;
    border-bottom: 1px solid #d0d0d0;
    .sam-guide-tab {
      padding: 24px 32px 18px 32px;
      background: #f3f3f3;
      font-size: 2rem;
      color: #222;
      cursor: pointer;
      font-weight: 500;
      border-right: 1px solid #d0d0d0;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      position: relative;
      transition: background 0.2s, color 0.2s;
      &.active {
        background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
        color: #fff;
        z-index: 2;
        border-bottom: none;
      }
      .tab-arrow {
        display: block;
        position: absolute;
        left: 50%;
        bottom: -10px;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid #4e3fa5;
        content: '';
      }
    }
    .tab:last-child {
      border-right: none;
    }
  }
  .sam-guide-content {
    margin-top: 24px;
    font-size: 1.18rem;
    color: rgb(102, 102, 102);
    .sam-guide-desc {
      margin-bottom: 10px;
      line-height: 1.7;
    }
    .sam-guide-table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      margin: 24px 0 12px 0;
      th.gradient-th {
        color: #fff;
        font-size: 1.15rem;
        font-weight: 600;
        padding: 16px 0;
        border: none;
      }
      th, td {
        text-align: center;
        font-size: 1.08rem;
        padding: 14px 0;
        border: none;
      }
      tr:nth-child(2) td {
        background: #e9ebee;
        font-weight: 600;
        color: #444;
      }
      tr:nth-child(even) td {
        background: #f6f8fb;
      }
    }
    .sam-guide-footnote {
      font-size: 1rem;
      color: #666;
      margin-top: 18px;
      font-style: italic;
    }
  }
}

.section-resources {
  padding: 2.5vw 0;
  background: #fff;
  .resources-title {
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    // margin-bottom: 48px;
    span {
      background: linear-gradient(90deg, #23c6c8 0%, #5a4fcf 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
  .resources-list {
    display: flex;
    justify-content: center;
    gap: 40px;
    max-width: 1400px;
    margin: 0 auto;
    flex-wrap: wrap;
    padding: 0 20px;
  }
  .resource-card {
    background: #f7f8f9;
    border-radius: 10px;
    box-shadow: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    // width: 370px;
    flex: 1;
    min-height: 160px;
    padding: 24px 32px;
    // min-height: 200px;
    // padding: 36px 24px 32px 24px;
    transition: box-shadow 0.2s;
    &:hover {
      box-shadow: 0 4px 24px 0 rgba(90,79,207,0.10);
    }
  }
  .resource-icon-bg {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 18px;
  }
  .resource-icon {
    width: 54px;
    height: 54px;
    object-fit: contain;
  }
  .resource-title {
    font-size: 1.1rem;
    color: rgb(102, 102, 102);
    margin-bottom: 18px;
    text-align: center;
    font-weight: 400;
  }
  .resource-download-btn {
    display: inline-block;
    padding: 5px 25px;
    border-radius: 24px;
    border: 2px solid;
    font-size: 0.9rem;
    font-weight: 500;
    color: linear-gradient(to right, #00bc97 0%, #4e3fa5 80%)!important;
    background: #fff;
    border-image: linear-gradient(90deg, #23c6c8 0%, #5a4fcf 100%) 1;
    text-decoration: none;
    transition: background 0.2s, color 0.2s;
    &:hover {
      background: linear-gradient(90deg, #23c6c8 0%, #5a4fcf 100%);
      color: #fff;
    }
  }
}

.resource-card-horizontal {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #f7f8f9;
  border-radius: 10px;
  box-shadow: none;
  width: 470px;
  min-height: 140px;
  padding: 24px 32px;
  gap: 28px;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 24px 0 rgba(90,79,207,0.10);
  }
  .resource-icon-bg {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-bottom: 0;
  }
  .resource-icon {
    width: 54px;
    height: 54px;
    object-fit: contain;
  }
  .resource-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    flex: 1;
    align-items: flex-start;
  }
  .resource-title {
    font-size: 1.1rem;
    color: rgb(102, 102, 102);
    font-weight: 400;
    margin-bottom: 0;
    text-align: left;
    letter-spacing: 0.01em;
  }
  .resource-download-btn {
    display: inline-block;
    padding: 6px 32px 6px 32px;
    border-radius: 24px;
    border: 2px solid;
    font-size: 1rem;
    font-weight: 500;
    color: linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);
    background: #fff;
    border-image: linear-gradient(90deg, #23c6c8 0%, #5a4fcf 100%) 1;
    text-decoration: none;
    transition: background 0.2s, color 0.2s;
    text-align: center;
    width: fit-content;
    letter-spacing: 0.04em;
    &:hover {
      background: linear-gradient(90deg, #23c6c8 0%, #5a4fcf 100%);
      color: #fff;
    }
  }
}

.gradient-btn {
  position: relative;
  z-index: 1;
  background: linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);;
  color: linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);
  font-size: 0.9rem;
  padding: 5px 25px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 500;
  border: 2px solid transparent;
  background-image:
    linear-gradient(#fff, #fff),
    linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
  transition: background 0.2s, color 0.2s, border 0.2s;
  margin: 0 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  &:hover {
    background-image:
      linear-gradient(to right, #00bc97 0%, #4e3fa5 80%),
      linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);
    color: #fff;
  }
}

@media (max-width: 1024px) {
  .overview-content,
  .services-content,
  .sam-guide-inner,
  .resources-list {
    max-width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }
  .overview-features {
    gap: 18px;
  }
  .services-table-wrapper {
    padding: 0 8px;
  }
}

@media (max-width: 800px) {
  .overview-title {
    font-size: 2.1rem;
  }
  .overview-features {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: stretch;
    gap: 18px;
  }
  .feature-item {
    width: 100% !important;
    min-width: 0;
    min-height: 180px;
    font-size: 1rem;
  }
  .services-title {
    font-size: 1.5rem;
  }
  .services-table th, .services-table td {
    font-size: 0.95rem;
    padding: 10px 0;
  }
  .sam-guide-title {
    font-size: 1.3rem;
    min-width: 220px;
    padding: 18px 12px 8px 12px;
  }
  .sam-guide-card {
    padding: 32px 8px 18px 8px;
  }
  .sam-guide-tabs .sam-guide-tab {
    font-size: 1.1rem;
    padding-bottom: 6px;
  }
  .resources-title {
    font-size: 1.5rem;
    padding-left: 0;
  }
  .resources-list {
    flex-direction: column;
    align-items: stretch;
    gap: 18px;
    padding: 0 8px;
  }
  .resource-card-horizontal {
    width: 100%;
    min-width: 0;
    min-height: 90px;
    padding: 16px 12px;
    gap: 14px;
  }
  .resource-icon-bg {
    width: 48px;
    height: 48px;
  }
  .resource-icon {
    width: 32px;
    height: 32px;
  }
  .resource-title {
    font-size: 0.95rem;
  }
  .resource-download-btn, .gradient-btn {
    font-size: 0.85rem;
    padding: 4px 16px;
  }
}

@media (max-width: 500px) {
  .container {
    padding: 0;
  }
  .navbar .nav-inner-container {
    padding: 0 4px;
  }
  .navbar .nav-container {
    gap: 12px;
    padding: 0 4px;
  }
  .overview-content,
  .services-content,
  .sam-guide-inner,
  .resources-list {
    padding-left: 4px;
    padding-right: 4px;
  }
  .overview-title {
    font-size: 1.2rem;
  }
  .overview-desc {
    font-size: 0.95rem;
  }
  .feature-item {
    min-height: 90px;
    font-size: 0.9rem;
    padding: 8px 0;
  }
  .services-title {
    font-size: 1.1rem;
  }
  .services-table th, .services-table td {
    font-size: 0.7rem !important;
    padding: 4px 0;
  }
  .sam-guide .sam-guide-title {
    font-size: 1.5rem !important;
    min-width: 300px !important;
    padding: 8px 4px 4px 4px !important;
    top: -20px !important;
  }
  .sam-guide-card {
    padding: 12px 2px 8px 2px;
  }
  .sam-guide-tabs .sam-guide-tab {
    font-size: 0.95rem !important;
    min-width: 160px !important;
    padding: 0 8px 4px 8px !important;
    white-space: nowrap !important;
  }
  .resources-title {
    font-size: 1.5rem !important;
    padding-left: 0 !important;
    margin-bottom: 24px !important;
  }
  .resources-list {
    gap: 12px !important;
    padding: 0 8px !important;
  }
  .resource-card-horizontal {
    min-height: 80px !important;
    padding: 12px 8px !important;
    gap: 12px !important;
    flex-direction: row !important;
    align-items: center !important;
  }
  .resource-icon-bg {
    width: 28px;
    height: 28px;
  }
  .resource-icon {
    width: 18px;
    height: 18px;
  }
  .resource-title {
    font-size: 0.8rem;
  }
  .resource-download-btn, .gradient-btn {
    font-size: 0.7rem;
    padding: 2px 8px;
  }
}

@media (max-width: 768px) {
  /* Overview部分适配 */
  .section-overview .overview-desc {
    font-size: 1rem;
    line-height: 1.8;
  }
  
  .overview-features {
    flex-direction: column;
    align-items: center;
    
    .feature-item {
      width: 90%;
      margin-bottom: 20px;
    }
  }

  /* 服务表格适配 */
  .services-table-wrapper {
    overflow-x: auto;
  }
  
  .services-table {
    width: 120%;
    min-width: 600px;
  }

  .services-btns {
    flex-direction: column;
    gap: 15px;
    
    button {
      width: 90%;
      padding: 8px 20px;
      font-size: 1rem;
    }
  }

  /* Sample部分适配 */
  .sam-guide {
    min-height: auto;
    padding-bottom: 40px;
    
    .sam-guide-title {
      font-size: 1.8rem;
      min-width: 300px;
      padding: 20px 30px;
      top: -30px;
    }

    .sam-guide-tabs {
      overflow-x: auto;
      flex-wrap: nowrap;
      
      .sam-guide-tab {
        font-size: 1.1rem;
        min-width: 140px;
        padding: 0 10px 8px;
      }
    }

    .sam-guide-content {
      font-size: 1rem;
      padding: 0 10px;
      
      .sam-guide-desc {
        font-size: 0.95rem;
      }
      
      .sam-guide-table {
        width: 100%;
        overflow-x: auto;
        display: block;
        white-space: nowrap;
      }
    }
  }
}

.section-workflow {
  background: #f6f6f6;
  padding: 60px 0 40px 0;
  .workflow-content {
    max-width: 1400px;
    margin: 0 auto;
    text-align: center;
    padding: 0 24px;
  }
  .workflow-title {
    font-size: 3rem;
    // font-weight: 600;
    margin-bottom: 48px;
    span {
      background: linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
  .workflow-steps {
    display: flex;
    justify-content: center;
    gap: 48px;
    flex-wrap: wrap;
  }
  .workflow-step {
    background: #fff;
    border-radius: 50%;
    width: 260px;
    height: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 24px 0 rgba(90,79,207,0.08);
    position: relative;
    margin-bottom: 16px;
    .workflow-step-circle {
      position: absolute;
      top: 20px;
      left: 20px;
      transform: translateX(-50%);
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #00bc97 0%, #4e3fa5 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 2rem;
      font-weight: 600;
      box-shadow: 0 2px 8px rgba(90,79,207,0.10);
      z-index: 2;
    }
    img {
      margin: 20px 0 18px 0;
      object-fit: contain;
    }
    .workflow-step-title {
      font-size: 1.2rem;
      font-weight: 500;
      color: #222;
      // margin-top: 8px;
    }
    .workflow-step-desc {
      font-size: 1rem;
      color: #444;
      margin-top: 8px;
      text-align: center;
    }
  }
}

.section-services-accordion {
  margin: 40px 0;
  .services-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 32px;
    span {
      background: linear-gradient(to right, #00bc97 0%, #4e3fa5 80%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
  .accordion {
    padding: 0 40px;
    max-width: 1400px;
    margin: 0 auto;
  }
  .accordion-item {
    background: #f8fafd;
    border-radius: 6px;
    margin-bottom: 16px;
    box-shadow: 0 2px 8px rgba(90,79,207,0.04);
    overflow: hidden;
  }
  .accordion-title {
    font-size: 1.2rem;
    font-weight: 600;
    padding: 18px 24px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #eaf1fb;
    transition: background 0.2s;
    &.active {
      background: #e0e7f7;
    }
    .arrow {
      transition: transform 0.2s;
      &.open {
        transform: rotate(90deg);
      }
    }
  }
  .accordion-content {
    padding: 20px;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-top: none;
    .tabs {
      display: flex;
      border-bottom: 1px solid #d0d0d0;
      .tab {
        padding: 18px;
        background: #f3f3f3;
        font-size: 1.2rem;
        color: #222;
        cursor: pointer;
        font-weight: 500;
        border-right: 1px solid #d0d0d0;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        position: relative;
        transition: background 0.2s, color 0.2s;
        &.active {
          background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
          color: #fff;
          z-index: 2;
          border-bottom: none;
        }
        .tab-arrow {
          display: block;
          position: absolute;
          left: 50%;
          bottom: -10px;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid #4e3fa5;
          content: '';
        }
      }
      .tab:last-child {
        border-right: none;
      }
    }
    .tab-content {
      margin-top: 18px;
      font-size: 1.15rem;
      color: #444;
      .tab-desc {
        // margin-bottom: 18px;
        line-height: 1.7;
        padding: 12px 0;
        border-bottom: 1px solid #e0e0e0;
      }
      .tab-detail {
        // margin-bottom: 12px;
        padding: 12px 0;
        border-bottom: 1px solid #e0e0e0;
        display: flex;
        flex-direction: column;
        b {
          color: #222;
          font-weight: 700;
          margin-bottom: 4px;
        }
        span {
          color: #444;
        }
        &:last-child {
          border-bottom: none;
        }
      }
    }
    .accordion-btns {
      display: flex;
      gap: 24px;
      margin-top: 32px;
      justify-content: center;
      button {
        background: #fff;
        color: #23c6c8;
        border: 2px solid;
        border-image: linear-gradient(90deg, #23c6c8 0%, #5a4fcf 100%) 1;
        border-radius: 32px;
        padding: 16px 30px;
        font-size: 1.2rem;
        cursor: pointer;
        font-weight: 600;
        transition: background 0.2s, color 0.2s;
        &:hover {
          background: linear-gradient(90deg, #23c6c8 0%, #5a4fcf 100%);
          color: #fff;
        }
      }
      .contact-btn {
        color: #4e3fa5;
        border-image: linear-gradient(90deg, #4e3fa5 0%, #23c6c8 100%) 1;
      }
    }
  }
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px);}
  to { opacity: 1; transform: none;}
}

@media (max-width: 1024px) {
  .aboutus-business-grid {
    grid-template-columns: 1fr;
    gap: 24px 0;
    padding: 0 8px;
  }
  .business-item {
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 16px;
    .business-img {
      width: 100%;
      height: auto;
      margin-bottom: 12px;
    }
    .business-info {
      margin-left: 0;
    }
  }
}

@media (max-width: 767px) {
  .container {
    padding: 0 4px;
  }
  .aboutus-business-title {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  .overview-title {
    font-size: 1.3rem;
  }
  .overview-desc {
    font-size: 0.95rem;
  }
  .navbar .nav-container {
    gap: 12px;
    padding: 0 4px;
    span {
      font-size: 1rem;
      padding: 4px 8px;
    }
  }
  .resources-title {
    font-size: 1.2rem;
    margin-bottom: 16px;
  }
  .resources-list {
    flex-direction: column;
    gap: 12px;
    padding: 0 4px;
  }
  .resource-card-horizontal {
    flex-direction: column;
    width: 100%;
    min-width: 0;
    padding: 8px 4px;
    gap: 8px;
    align-items: flex-start;
  }
}

@media (max-width: 900px) {
  .resources-list {
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    gap: 16px;
    padding-bottom: 8px;
  }
  .resources-list > div,
  .resource-card,
  .resource-card-horizontal {
    min-width: 260px;
    max-width: 80vw;
    flex: 0 0 auto;
  }
}
</style>


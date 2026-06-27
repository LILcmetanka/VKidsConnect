<template>
  <div class="sport-card" @click="$router.push('/detail')">
    <div class="card-image">
      <svg
        width="172"
        height="177"
        viewBox="0 0 172 177"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.5235 93.5472L35.5693 93.5166C37.1892 91.8939 39.1132 90.6066 41.2312 89.7282C43.3491 88.8499 45.6195 88.3978 47.9124 88.3978C50.2052 88.3978 52.4756 88.8499 54.5935 89.7282C56.7115 90.6066 58.6355 91.8939 60.2554 93.5166L60.3471 93.593L73.4468 107.151L104.767 75.8466C108.042 72.5768 112.481 70.7404 117.11 70.7404C121.738 70.7404 126.177 72.5768 129.453 75.8466L171.534 117.989V31.4422C171.534 14.1085 157.425 0 140.091 0H31.4422C14.1085 0 0 14.1085 0 31.4422V129.682L35.5235 93.5472ZM52.8878 33.5975C55.3728 33.5975 57.8021 34.3344 59.8683 35.715C61.9346 37.0957 63.545 39.058 64.496 41.3539C65.447 43.6498 65.6958 46.1761 65.211 48.6134C64.7262 51.0507 63.5296 53.2895 61.7724 55.0467C60.0151 56.8039 57.7763 58.0006 55.339 58.4854C52.9017 58.9702 50.3754 58.7214 48.0795 57.7704C45.7836 56.8194 43.8213 55.209 42.4407 53.1427C41.06 51.0765 40.3231 48.6472 40.3231 46.1622C40.3231 42.8298 41.6469 39.6339 44.0032 37.2776C46.3596 34.9213 49.5554 33.5975 52.8878 33.5975Z"
          fill="#BBBBBB"
        />
        <path
          d="M50.5032 103.208C49.8071 102.53 48.8731 102.152 47.9016 102.155C46.9301 102.158 45.9984 102.541 45.3062 103.223L0.290405 148.988C2.3998 164.304 15.5606 176.119 31.4422 176.119H120.985L50.5032 103.208Z"
          fill="#BBBBBB"
        />
        <path
          d="M119.731 85.5682C119.031 84.882 118.09 84.4977 117.11 84.4977C116.13 84.4977 115.188 84.882 114.488 85.5682L83.0155 117.056L140.107 176.119C157.441 176.119 171.534 162.011 171.534 144.677V137.462L119.731 85.5682Z"
          fill="#BBBBBB"
        />
      </svg>
    </div>
    <div class="card-content">
      <div class="card-header">
        <div class="title-group">
          <h3>{{ title }}</h3>
          <h3 v-if="titleSecond" class="title-second">{{ titleSecond }}</h3>
          <span class="hashtag">{{ hashtag }}</span>
        </div>
        <div class="tags">
          <span v-if="freeFirst" class="tag outlined">Первое бесплатно</span>
          <span v-if="price" class="tag price-tag">{{ price }}</span>
          <span v-if="free" class="tag filled">Бесплатно</span>
        </div>
      </div>
      <div class="card-details">
        <div class="detail-row">
          <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
            <path
              d="M11.2265 11.236C10.7819 11.1704 10.7718 10.0455 10.7718 10.0455C10.7718 10.0455 12.0777 8.85398 12.3618 7.25249C13.1271 7.25249 13.5999 5.54948 12.834 4.9503C12.8669 4.31956 13.8177 0 8.99946 0C4.18173 0 5.13361 4.31956 5.16541 4.9503C4.40009 5.54948 4.87285 7.25249 5.63817 7.25249C5.92225 8.85398 7.22819 10.0455 7.22819 10.0455C7.22819 10.0455 7.21758 11.1704 6.77345 11.236C5.34243 11.4464 0 13.618 0 16H8.99946H18C18 13.618 12.6575 11.4464 11.2265 11.236Z"
              fill="#70232F"
            />
          </svg>
          <span>{{ age }}</span>
        </div>
        <div class="detail-row">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.1486 0.00073926C12.7399 0.0105774 12.3291 0.119323 11.9522 0.336914C10.7462 1.03322 10.3287 2.59269 11.0249 3.79871C11.0366 3.81883 11.0491 3.83834 11.0612 3.85806L8.07399 6.62991C7.23143 6.00368 6.18954 5.63235 5.06264 5.63235C4.74281 5.63235 4.43021 5.66312 4.1266 5.72024L3.19716 3.51748C3.94393 2.92097 4.16737 1.84144 3.67616 0.990631C3.13516 0.0535943 1.92045 -0.271073 0.983419 0.269926C0.0463785 0.810927 -0.279392 2.02454 0.261609 2.96158C0.65654 3.64562 1.41069 4.00413 2.15345 3.93716L3.04555 6.05313C1.25596 6.83484 0.000142818 8.62208 0.000142818 10.6949C0.000137193 12.2722 0.72725 13.6842 1.86342 14.6137C1.93048 14.7085 2.02528 14.7803 2.13478 14.8191C2.96236 15.4087 3.97253 15.7574 5.06264 15.7574C6.19042 15.7574 7.23329 15.3858 8.07619 14.7587C8.12366 14.7318 8.16695 14.6981 8.20472 14.6587C8.69943 14.2656 9.11872 13.7824 9.43848 13.2338L11.8137 13.7754C11.8103 14.1156 11.893 14.4604 12.0741 14.7741C12.6151 15.7111 13.8298 16.0358 14.7668 15.4948C15.7039 14.9538 16.0297 13.7401 15.4887 12.8031C14.9476 11.8661 13.7329 11.5403 12.7959 12.0813C12.5248 12.2378 12.3059 12.4514 12.1433 12.6976L9.89991 12.1846C10.0456 11.7132 10.1251 11.2131 10.1251 10.6948C10.1251 10.4864 10.1114 10.2815 10.0867 10.0796L12.0752 9.72694C12.6163 10.6631 13.8302 10.9884 14.7668 10.4476C15.7039 9.90665 16.0285 8.69193 15.4875 7.75489C14.9465 6.81785 13.7329 6.49319 12.7959 7.03419C12.2028 7.37664 11.8554 7.98849 11.817 8.62941L9.82628 8.98316C9.61501 8.39784 9.29861 7.86214 8.90013 7.39893L11.8511 4.66004C12.6243 5.15372 13.6407 5.21376 14.4856 4.72596C15.6916 4.02966 16.1102 2.47129 15.4139 1.26527C14.9352 0.43613 14.0478 -0.0209153 13.1486 0.00073926ZM5.06269 6.75733C7.24398 6.75733 9.0002 8.51355 9.0002 10.6948C9.0002 11.6932 8.63168 12.6016 8.02352 13.2942C7.68038 12.6693 7.14525 12.1643 6.49862 11.8594C6.99486 11.4455 7.31269 10.824 7.31269 10.1323C7.31269 8.89636 6.29867 7.88232 5.06269 7.88233C3.82672 7.88233 2.81269 8.89636 2.81269 10.1323C2.81269 10.824 3.13054 11.4455 3.62679 11.8594C2.98026 12.1645 2.44494 12.6691 2.10188 13.2942C1.49372 12.6016 1.12519 11.6932 1.12519 10.6948C1.12519 8.51354 2.88141 6.75733 5.06269 6.75733Z"
              fill="#70232F"
            />
          </svg>
          <span>{{ address }}</span>
        </div>
        <div class="detail-row">
          <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
            <path
              d="M5.625 0C2.51797 0 0 2.51865 0 5.625C0 10.9957 5.625 18 5.625 18C5.625 18 11.25 10.9957 11.25 5.625C11.25 2.51865 8.73158 0 5.625 0ZM5.625 8.73C3.94718 8.73 2.5875 7.3701 2.5875 5.6925C2.5875 4.0149 3.94718 2.655 5.625 2.655C7.30237 2.655 8.6625 4.0149 8.6625 5.6925C8.6625 7.3701 7.30237 8.73 5.625 8.73Z"
              fill="#70232F"
            />
          </svg>
          <span>{{ location }}</span>
        </div>
      </div>
      <div class="bottom-row">
        <div class="schedule-row">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.25 7.06699V3.75C8.25 3.336 7.914 3 7.5 3C7.086 3 6.75 3.336 6.75 3.75V7.49163C6.74868 7.62397 6.78244 7.75475 6.8475 7.86985C6.9206 7.99405 7.01698 8.08868 7.13225 8.15371L10.3726 10.0245C10.7311 10.2315 11.1901 10.1085 11.3971 9.75C11.6041 9.39147 11.4811 8.93248 11.1226 8.72548L8.25 7.06699ZM7.5 0C11.6422 0 15 3.35776 15 7.5C15 11.6422 11.6422 15 7.5 15C3.35776 15 0 11.6422 0 7.5C0 3.35776 3.35776 0 7.5 0Z"
              fill="#70232F"
            />
          </svg>
          <span class="days">{{ days }}</span>
          <div class="time-badges">
            <span v-for="time in times" :key="time" class="time-badge">{{
              time
            }}</span>
          </div>
        </div>
        <button class="btn-primary">Подробнее</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  titleSecond: String,
  hashtag: String,
  age: String,
  address: String,
  location: String,
  days: String,
  times: Array,
  free: Boolean,
  freeFirst: Boolean,
  price: String,
});
</script>

<style scoped>
.sport-card {
  display: flex;
  background: #ffffff;
  border-radius: 5px;
  border-top: 2px solid #70232f;
  overflow: hidden;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.sport-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 172px;
  height: 177px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  margin: 30px 5px 30px 30px;
}

.card-image svg {
  width: 100%;
  height: 100%;
}

.card-content {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
}

.title-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}

.title-group h3 {
  font-size: 16px;
  font-weight: 600;
  color: #333333;
  margin: 0;
  line-height: 1.3;
}

.title-second {
  font-weight: 600;
}

.hashtag {
  font-size: 12px;
  color: #d86b79;
  margin-top: 2px;
}

.tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  flex-shrink: 0;
}

.tag {
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}

.tag.outlined {
  border: 1px solid #d86b79;
  color: #2f050f;
  background: transparent;
}

.tag.filled {
  background: #d86b79;
  color: #ffffff;
}

.tag.price-tag {
  background: #d86b79;
  color: #ffffff;
}

.card-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.detail-row {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #333333;
}

.bottom-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.schedule-row {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #333333;
  flex-wrap: wrap;
}

.days {
  font-weight: 500;
}

.time-badges {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.time-badge {
  background: #f7daab;
  padding: 5px 24px;
  border-radius: 5px;
  font-size: 14px;
  color: #333333;
}

.btn-primary {
  padding: 10px 20px;
  background: #70232f;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  flex-shrink: 0;
}

.btn-primary:hover {
  background: #5a1a25;
}
</style>

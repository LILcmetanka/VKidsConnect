<template>
  <div class="search-bar-container">
    <div class="search-input-wrapper">
      <svg
        class="search-icon"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <circle cx="9" cy="9" r="6" stroke="#333333" stroke-width="1.5" />
        <path
          d="M13 13L17 17"
          stroke="#333333"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
      <input type="text" placeholder="Поиск" />
    </div>
    <div class="filter-tabs">
      <button class="tab active">Все</button>
      <button class="tab">Платные</button>
      <button class="tab">Бесплатные</button>
    </div>
    <button class="map-btn">
      На карте
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 1C6.24 1 4 3.24 4 6C4 9.75 9 17 9 17C9 17 14 9.75 14 6C14 3.24 11.76 1 9 1Z"
          fill="#70232F"
        />
        <circle cx="9" cy="6" r="2" fill="white" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.search-bar-container {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  flex-wrap: wrap;
}

.search-input-wrapper {
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 5px;
  padding: 10px 20px;
  gap: 10px;
  width: 241px;
  border: 1px solid #e0e0e0;
}

.search-input-wrapper input {
  border: none;
  font-size: 16px;
  color: #333333;
  width: 100%;
  background: transparent;
}

.search-input-wrapper input::placeholder {
  color: #d86b79;
  opacity: 1;
}

.search-input-wrapper input::-webkit-input-placeholder {
  color: #d86b79;
  opacity: 1;
}

.search-input-wrapper input::-moz-placeholder {
  color: #d86b79;
  opacity: 1;
}

.search-input-wrapper input:-ms-input-placeholder {
  color: #d86b79;
  opacity: 1;
}

.filter-tabs {
  display: flex;
  gap: 10px;
}

.tab {
  padding: 10px 20px;
  background: transparent;
  border-radius: 5px;
  font-size: 16px;
  color: #333333;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.tab.active {
  background: #ffffff;
  font-weight: 500;
}

.map-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background: #ffffff;
  border-radius: 5px;
  font-size: 16px;
  color: #333333;
  margin-left: auto;
  border: none;
  cursor: pointer;
}
</style>

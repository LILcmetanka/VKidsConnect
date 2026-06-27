<template>
  <aside class="filter-sidebar">
    <div class="filter-section">
      <h3 class="filter-label">Возраст</h3>
      <div class="dropdown">
        <span>Любой</span>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path
            d="M3 5.5L7.5 10L12 5.5"
            stroke="#333333"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>

    <div class="filter-section">
      <h3 class="filter-label">Пол</h3>
      <div class="checkbox-group-inline">
        <label class="checkbox-label-inline">
          <input type="checkbox" checked />
          Мужской
        </label>
        <label class="checkbox-label-inline">
          <input type="checkbox" checked />
          Женский
        </label>
      </div>
    </div>

    <div class="filter-section">
      <h3 class="filter-label">Каталог</h3>
      <div class="catalog-list">
        <div class="catalog-item" @click="toggleCategory('power')">
          <div class="item-left">
            <span>Силовой спорт</span>
            <span class="count">3</span>
          </div>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            :class="{ rotated: openCategories.power }"
          >
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div v-if="openCategories.power" class="sub-item">
          <div class="sub-item-left">
            <span>• Тяжелая атлетика</span>
            <span class="count">3</span>
          </div>
        </div>
        <div v-if="openCategories.power" class="sub-item">
          <div class="sub-item-left">
            <span>• Пауэрлифтинг</span>
            <span class="count">1</span>
          </div>
        </div>

        <div class="catalog-item" @click="toggleCategory('combat')">
          <div class="item-left">
            <span>Единоборства</span>
            <span class="count">2</span>
          </div>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            :class="{ rotated: openCategories.combat }"
          >
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div v-if="openCategories.combat" class="sub-item">
          <div class="sub-item-left">
            <span>• Вольная борьба</span>
            <span class="count">1</span>
          </div>
        </div>
        <div v-if="openCategories.combat" class="sub-item">
          <div class="sub-item-left">
            <span>• Дзюдо</span>
            <span class="count">1</span>
          </div>
        </div>

        <div class="catalog-item">
          <div class="item-left">
            <span>ДПИ и ремесла</span>
            <span class="count"></span>
          </div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="catalog-item">
          <div class="item-left">
            <span>Техническое конструирование</span>
            <span class="count"></span>
          </div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="catalog-item">
          <div class="item-left">
            <span>Словесность</span>
            <span class="count"></span>
          </div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="catalog-item">
          <div class="item-left">
            <span>Иностранные языки</span>
            <span class="count"></span>
          </div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="catalog-item">
          <div class="item-left">
            <span>Развитие интеллекта</span>
            <span class="count"></span>
          </div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="catalog-item">
          <div class="item-left">
            <span>Информационные технологии</span>
            <span class="count"></span>
          </div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="catalog-item">
          <div class="item-left">
            <span>История и Традиции</span>
            <span class="count"></span>
          </div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="catalog-item">
          <div class="item-left">
            <span>Педагогика</span>
            <span class="count"></span>
          </div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="catalog-item">
          <div class="item-left">
            <span>Музыка и звук</span>
            <span class="count"></span>
          </div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="catalog-item">
          <div class="item-left">
            <span>Пение</span>
            <span class="count"></span>
          </div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="catalog-item">
          <div class="item-left">
            <span>Хореография(танцы)</span>
            <span class="count"></span>
          </div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="catalog-item">
          <div class="item-left">
            <span>Зрелищные искусства</span>
            <span class="count"></span>
          </div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="catalog-item">
          <div class="item-left">
            <span>Мода и стиль</span>
            <span class="count"></span>
          </div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="catalog-item">
          <div class="item-left">
            <span>Познавательные развлечения</span>
            <span class="count"></span>
          </div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="catalog-item">
          <div class="item-left">
            <span>Туризм</span>
            <span class="count"></span>
          </div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="catalog-item">
          <div class="item-left">
            <span>Естественные науки</span>
            <span class="count"></span>
          </div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="catalog-item">
          <div class="item-left">
            <span>Люди и животные</span>
            <span class="count"></span>
          </div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="catalog-item">
          <div class="item-left">
            <span>Эстетические виды спорта</span>
            <span class="count"></span>
          </div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="catalog-item">
          <div class="item-left">
            <span>Технические виды спорта</span>
            <span class="count"></span>
          </div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="catalog-item">
          <div class="item-left">
            <span>Командно-игровой спорт</span>
            <span class="count"></span>
          </div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="catalog-item">
          <div class="item-left">
            <span>Индивидуально игровой спорт</span>
            <span class="count"></span>
          </div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="catalog-item">
          <div class="item-left">
            <span>Водные виды спорта</span>
            <span class="count"></span>
          </div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="catalog-item">
          <div class="item-left">
            <span>Лёгкая атлетика и гимнастика</span>
            <span class="count"></span>
          </div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="catalog-item">
          <div class="item-left">
            <span>Физкультура</span>
            <span class="count"></span>
          </div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 5.5L7.5 10L12 5.5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";

const openCategories = ref({
  power: true,
  combat: true,
});

const toggleCategory = (key) => {
  openCategories.value[key] = !openCategories.value[key];
};
</script>

<style scoped>
.filter-sidebar {
  width: 330px;
  background: #ffffff;
  border-radius: 5px;
  border-top: 2px solid #70232f;
  padding: 20px;
  flex-shrink: 0;
  align-self: flex-start;
}

.filter-section {
  margin-bottom: 20px;
}

.filter-label {
  font-size: 14px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 10px;
}

.dropdown {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  border-bottom: 1px solid #70232f;
  font-size: 14px;
  color: #333333;
  cursor: pointer;
}

.checkbox-group-inline {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.checkbox-label-inline {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #333333;
  cursor: pointer;
  white-space: nowrap;
}

.checkbox-label-inline input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: #70232f;
  margin: 0;
}

.catalog-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.catalog-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #333333;
  padding: 5px 0;
  cursor: pointer;
  gap: 10px;
}

.item-left {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.catalog-item svg {
  flex-shrink: 0;
  transition: transform 0.2s;
}

.catalog-item svg.rotated {
  transform: rotate(180deg);
}

.sub-item {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333333;
  padding: 3px 0 3px 15px;
  gap: 10px;
}

.sub-item-left {
  display: flex;
  align-items: center;
  gap: 5px;
}

.count {
  color: #70232f;
  font-size: 14px;
  white-space: nowrap;
}
</style>

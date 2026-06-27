<template>
  <div class="catalog-page">
    <AppHeader :logoSrc="logo1" />
    <div class="gray-container">
      <SearchBar />

      <div class="main-layout">
        <div class="content-area">
          <section class="sport-section">
            <h2 class="section-title">Силовой спорт</h2>
            <SportCard
              title="Тяжелая атлетика"
              titleSecond="(в Юбилейном мкр.)"
              hashtag="#Тяжелая атлетика"
              age="10-18 лет"
              address="г. Иркутск, Юбилейный мкр., стр. 49/1"
              location="ФОК 'Юбилейный'"
              days="Пн, Ср, Пт"
              :times="['09:00 - 10:30', '12:00 - 13:30', '18:00 - 19:30']"
              :free="true"
              :freeFirst="false"
            />
            <SportCard
              title="Тяжелая атлетика"
              titleSecond="(на ул. Боткина)"
              hashtag="#Тяжелая атлетика"
              age="10-18 лет"
              address="г. Иркутск, Юбилейный мкр., стр. 49/1"
              location="ФОК 'Юбилейный'"
              days="Пн, Ср, Пт"
              :times="['09:00 - 10:30', '12:00 - 13:30']"
              :free="false"
              :freeFirst="true"
              price="500 руб."
            />
            <SportCard
              title="Тяжелая атлетика"
              titleSecond="(на ул. Норильской)"
              hashtag="#Тяжелая атлетика"
              age="10-18 лет"
              address="г. Иркутск, Юбилейный мкр., стр. 49/1"
              location="ФОК 'Юбилейный'"
              days="Пн, Ср, Пт"
              :times="['09:00 - 10:30', '12:00 - 13:30', '18:00 - 19:30']"
              :free="false"
              :freeFirst="true"
              price="3200 руб. 8 занятий"
            />
            <SportCard
              title="Пауэрлифтинг"
              titleSecond=""
              hashtag="#Пауэрлифтинг"
              age="10-18 лет"
              address="г. Иркутск, Юбилейный мкр., стр. 49/1"
              location="ФОК 'Юбилейный'"
              days="Пн, Ср, Пт"
              :times="['09:00 - 10:30', '12:00 - 13:30', '18:00 - 19:30']"
              :free="true"
              :freeFirst="false"
            />
          </section>

          <section class="sport-section">
            <h2 class="section-title">Единоборства</h2>
            <SportCard
              title="Дзюдо"
              titleSecond=""
              hashtag="#Дзюдо"
              age="6-18 лет"
              address="г. Иркутск, ул. Трудовая, д. 115А"
              location="СК 'Вымпел'"
              days="Пн, Ср, Пт"
              :times="['09:00 - 10:30', '12:00 - 13:30', '18:00 - 19:30']"
              :free="true"
              :freeFirst="false"
            />
            <SportCard
              title="Вольная борьба"
              titleSecond="(на ул. Норильская)"
              hashtag="#Дзюдо"
              age="6-18 лет"
              address="г. Иркутск, ул. Трудовая, д. 115А"
              location="СК 'Вымпел'"
              days="Пн, Ср, Пт"
              :times="['09:00 - 10:30', '12:00 - 13:30', '18:00 - 19:30']"
              :free="false"
              :freeFirst="true"
              price="3200 руб. месяц"
            />
          </section>
        </div>

        <div class="filter-section">
          <h2 class="section-title">Фильтры</h2>
          <FilterSidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppHeader from "../components/AppHeader.vue";
import SearchBar from "../components/SearchBar.vue";
import FilterSidebar from "../components/FilterSidebar.vue";
import SportCard from "../components/SportCard.vue";
import logo1 from "@/image/logo_1.png";
</script>

<style scoped>
.catalog-page {
  min-height: 100vh;
  background: #ffffff;
  padding-bottom: 40px;
}

.gray-container {
  background: #efefef;
  margin: 20px 200px;
  padding: 30px 40px;
  border-radius: 5px;
}

.main-layout {
  display: flex;
  gap: 20px;
  justify-content: space-between;
}

.content-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0;
}

.filter-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sport-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  color: #333333;
  margin: 0;
}
</style>

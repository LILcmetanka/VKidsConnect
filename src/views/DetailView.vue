<template>
  <div class="detail-page">
    <AppHeader :logoSrc="logo2" />

    <div class="gray-container">
      <div class="container-inner">
        <div class="top-bar">
          <button class="back-btn" @click="$router.push('/')">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M12 4L6 10L12 16"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Назад
          </button>
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

        <h1 class="page-title">Лёгкая атлетика (в Юбилейном мкр.)</h1>

        <div class="top-card">
          <div class="card-image">
            <img :src="detailImage" alt="Лёгкая атлетика" />
          </div>
          <div class="card-info">
            <div class="top-tags">
              <span class="tag outlined">Набор открыт</span>
              <span class="tag filled">Бесплатно</span>
            </div>
            <div class="info-list">
              <div class="info-item">
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
                  <path
                    d="M11.2265 11.236C10.7819 11.1704 10.7718 10.0455 10.7718 10.0455C10.7718 10.0455 12.0777 8.85398 12.3618 7.25249C13.1271 7.25249 13.5999 5.54948 12.834 4.9503C12.8669 4.31956 13.8177 0 8.99946 0C4.18173 0 5.13361 4.31956 5.16541 4.9503C4.40009 5.54948 4.87285 7.25249 5.63817 7.25249C5.92225 8.85398 7.22819 10.0455 7.22819 10.0455C7.22819 10.0455 7.21758 11.1704 6.77345 11.236C5.34243 11.4464 0 13.618 0 16H8.99946H18C18 13.618 12.6575 11.4464 11.2265 11.236Z"
                    fill="#70232F"
                  />
                </svg>
                <span>10-18 лет</span>
              </div>
              <div class="info-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.1486 0.00073926C12.7399 0.0105774 12.3291 0.119323 11.9522 0.336914C10.7462 1.03322 10.3287 2.59269 11.0249 3.79871C11.0366 3.81883 11.0491 3.83834 11.0612 3.85806L8.07399 6.62991C7.23143 6.00368 6.18954 5.63235 5.06264 5.63235C4.74281 5.63235 4.43021 5.66312 4.1266 5.72024L3.19716 3.51748C3.94393 2.92097 4.16737 1.84144 3.67616 0.990631C3.13516 0.0535943 1.92045 -0.271073 0.983419 0.269926C0.0463785 0.810927 -0.279392 2.02454 0.261609 2.96158C0.65654 3.64562 1.41069 4.00413 2.15345 3.93716L3.04555 6.05313C1.25596 6.83484 0.000142818 8.62208 0.000142818 10.6949C0.000137193 12.2722 0.72725 13.6842 1.86342 14.6137C1.93048 14.7085 2.02528 14.7803 2.13478 14.8191C2.96236 15.4087 3.97253 15.7574 5.06264 15.7574C6.19042 15.7574 7.23329 15.3858 8.07619 14.7587C8.12366 14.7318 8.16695 14.6981 8.20472 14.6587C8.69943 14.2656 9.11872 13.7824 9.43848 13.2338L11.8137 13.7754C11.8103 14.1156 11.893 14.4604 12.0741 14.7741C12.6151 15.7111 13.8298 16.0358 14.7668 15.4948C15.7039 14.9538 16.0297 13.7401 15.4887 12.8031C14.9476 11.8661 13.7329 11.5403 12.7959 12.0813C12.5248 12.2378 12.3059 12.4514 12.1433 12.6976L9.89991 12.1846C10.0456 11.7132 10.1251 11.2131 10.1251 10.6948C10.1251 10.4864 10.1114 10.2815 10.0867 10.0796L12.0752 9.72694C12.6163 10.6631 13.8302 10.9884 14.7668 10.4476C15.7039 9.90665 16.0285 8.69193 15.4875 7.75489C14.9465 6.81785 13.7329 6.49319 12.7959 7.03419C12.2028 7.37664 11.8554 7.98849 11.817 8.62941L9.82628 8.98316C9.61501 8.39784 9.29861 7.86214 8.90013 7.39893L11.8511 4.66004C12.6243 5.15372 13.6407 5.21376 14.4856 4.72596C15.6916 4.02966 16.1102 2.47129 15.4139 1.26527C14.9352 0.43613 14.0478 -0.0209153 13.1486 0.00073926ZM5.06269 6.75733C7.24398 6.75733 9.0002 8.51355 9.0002 10.6948C9.0002 11.6932 8.63168 12.6016 8.02352 13.2942C7.68038 12.6693 7.14525 12.1643 6.49862 11.8594C6.99486 11.4455 7.31269 10.824 7.31269 10.1323C7.31269 8.89636 6.29867 7.88232 5.06269 7.88233C3.82672 7.88233 2.81269 8.89636 2.81269 10.1323C2.81269 10.824 3.13054 11.4455 3.62679 11.8594C2.98026 12.1645 2.44494 12.6691 2.10188 13.2942C1.49372 12.6016 1.12519 11.6932 1.12519 10.6948C1.12519 8.51354 2.88141 6.75733 5.06269 6.75733Z"
                    fill="#70232F"
                  />
                </svg>
                <span>г. Иркутск, Юбилейный мкр., стр. 49/1</span>
              </div>
              <div class="info-item">
                <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
                  <path
                    d="M5.625 0C2.51797 0 0 2.51865 0 5.625C0 10.9957 5.625 18 5.625 18C5.625 18 11.25 10.9957 11.25 5.625C11.25 2.51865 8.73158 0 5.625 0ZM5.625 8.73C3.94718 8.73 2.5875 7.3701 2.5875 5.6925C2.5875 4.0149 3.94718 2.655 5.625 2.655C7.30237 2.655 8.6625 4.0149 8.6625 5.6925C8.6625 7.3701 7.30237 8.73 5.625 8.73Z"
                    fill="#70232F"
                  />
                </svg>
                <span>ФОК "Юбилейный"</span>
              </div>
            </div>
            <button class="btn-enroll">Записаться</button>
          </div>
        </div>

        <div class="groups-schedule-container">
          <div class="groups-section">
            <h2 class="block-title">ГРУППЫ</h2>
            <p class="block-subtitle">Этап начальной подготовки</p>
            <div class="info-list">
              <div class="info-item">
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path
                    d="M12.7768 9.65005C12.8843 9.65005 12.9861 9.61147 13.0538 9.54489C13.1215 9.47835 13.1479 9.39106 13.1257 9.30729L12.9011 8.46083C13.029 8.36229 13.1094 8.2247 13.1094 8.07172C13.1094 7.91068 13.0194 7.76785 12.8796 7.66861V4.72916L11.9792 5.17287V7.66861C11.8394 7.76785 11.7493 7.91068 11.7493 8.07172C11.7493 8.22472 11.8297 8.36231 11.9577 8.46083L11.733 9.30729C11.7108 9.39108 11.7373 9.47837 11.805 9.54489C11.8727 9.61143 11.9744 9.65005 12.082 9.65005H12.7768ZM13.0819 3.01388L7.22456 0.12639C7.05302 0.0422422 6.85964 0 6.66626 0C6.47288 0 6.27936 0.0422068 6.10886 0.12639L0.2514 3.01388C0.0949934 3.09095 0 3.22708 0 3.37358C0 3.52011 0.0949933 3.65628 0.2514 3.73347L6.10883 6.62099C6.27933 6.70522 6.47285 6.74738 6.66623 6.74738C6.85961 6.74738 7.05302 6.70517 7.22453 6.62099L13.0819 3.73347C13.2383 3.65631 13.3333 3.52011 13.3333 3.37358C13.3333 3.22708 13.2383 3.09091 13.0819 3.01388ZM6.66623 7.46435C6.30136 7.46435 5.94525 7.38365 5.63485 7.23065L2.21818 5.5462V8.44667C2.21818 9.3051 4.21058 10 6.66623 10C9.12276 10 11.115 9.30508 11.115 8.44667V5.5462L7.69846 7.23065C7.38805 7.38365 7.0311 7.46435 6.66623 7.46435Z"
                    fill="#70232F"
                  />
                </svg>
                <span>Петрова Елена Александровна</span>
              </div>
              <div class="info-item">
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                  <path
                    d="M1.78276 0.0453606C1.74524 0.082881 1.73992 0.133842 1.75322 0.399282C1.79606 1.30536 1.79886 1.4448 1.76932 1.49842C1.7318 1.57346 1.65676 1.56814 1.50122 1.48498C1.4315 1.44746 1.35114 1.42058 1.32692 1.42604C1.21702 1.44746 1.21968 1.50108 1.3671 2.17392L1.512 2.82814L1.5281 3.59212L1.5442 4.3561L1.64066 4.6242C1.78276 5.0183 1.83372 5.1282 1.99724 5.3802C2.1742 5.65096 2.4423 5.92438 2.68884 6.08524C2.8497 6.18982 2.86846 6.2139 2.86846 6.28894C2.86846 6.45512 2.86048 6.46058 2.58972 6.46058C2.12856 6.46324 1.77744 6.58126 1.50934 6.8278C1.43164 6.89752 1.09648 7.31836 0.76412 7.7581C0.00265995 8.77142 0 8.77954 0 9.56774C0 10.0691 0.0322 10.254 0.16352 10.514C0.30828 10.8009 0.65674 11.0984 0.9597 11.1895L1.01864 11.2083V10.6963C1.01864 10.2673 1.02662 10.1682 1.06148 10.1065C1.20624 9.86524 1.56016 9.9134 1.6352 10.1842C1.64864 10.2378 1.66208 10.5006 1.66208 10.7685V11.2591H3.80408H5.94874L5.95686 10.6935L5.96484 10.1277L6.0641 10.0366C6.18744 9.9267 6.3322 9.91326 6.44476 10.0017C6.5842 10.1116 6.59484 10.1679 6.59484 10.7255V11.2403L6.73428 11.2242C6.92734 11.2001 7.22484 11.0526 7.4018 10.8891L7.55468 10.7496H8.76372H9.97276V10.3207C9.97276 9.89982 9.97542 9.88904 10.0398 9.82464C10.1256 9.73616 10.2649 9.73616 10.3669 9.82198L10.4419 9.88624L10.4499 10.3071L10.4607 10.7279L10.5679 10.7118C10.8494 10.6663 11.171 10.4062 11.3078 10.1114C11.3667 9.9827 11.3802 9.91032 11.3883 9.67442L11.3991 9.39022L11.2168 9.3688C10.6351 9.3072 10.064 9.02034 9.6432 8.5806C8.83624 7.73612 8.6996 6.46268 9.30804 5.46546C9.45798 5.21934 9.87882 4.77974 10.0745 4.66438L10.1898 4.59732L10.1818 4.14162C10.1738 3.69922 10.171 3.68046 10.096 3.52772C9.99138 3.3159 9.82254 3.15238 9.60274 3.0478L9.42312 2.96198L8.72074 2.954L8.01836 2.94322L7.86282 2.74484C7.6993 2.53302 7.6216 2.49816 7.5733 2.6054C7.525 2.7153 7.45808 2.69388 7.18998 2.47408C6.86826 2.2113 6.87092 2.2113 6.81996 2.25428C6.7851 2.28382 6.77978 2.36152 6.79854 2.83332C6.81996 3.46066 6.81996 3.458 6.59204 3.35076C6.47402 3.29448 6.45526 3.29182 6.41774 3.32668C6.38288 3.3642 6.39366 3.43126 6.5009 3.92182C6.62158 4.47132 6.62158 4.4821 6.62158 4.98344V5.4901L6.71804 5.76352C6.82794 6.08258 6.91908 6.25142 7.09604 6.47122C7.2086 6.61066 7.44996 6.81702 7.59738 6.90284C7.6349 6.92426 7.64022 6.95114 7.62692 7.02884L7.60816 7.1253L7.3213 7.13608C7.05586 7.14406 7.01834 7.15218 6.84418 7.238L6.65378 7.3318L6.46884 7.10934C6.0935 6.64818 5.79054 6.49012 5.2759 6.48732C5.01592 6.48732 5.0078 6.482 4.9756 6.28628C4.95684 6.1817 4.9595 6.17638 5.0855 6.09868C5.26512 5.98612 5.55198 5.7099 5.70738 5.49822C5.87356 5.2703 6.01034 4.99688 6.14978 4.6109L6.25968 4.30262V3.17674C6.25968 2.06682 6.25968 2.04806 6.19808 1.87656C6.0319 1.4154 5.64858 1.07772 5.19008 0.994561C5.09894 0.978461 4.68076 0.965021 4.21162 0.965021L3.39122 0.962361L3.20362 0.718341C2.93818 0.372541 2.86314 0.337681 2.78544 0.517301C2.71838 0.667381 2.66742 0.645961 2.26534 0.310941C2.0643 0.139441 1.88202 9.53674e-07 1.86326 9.53674e-07C1.8417 -0.000139236 1.80684 0.0186205 1.78276 0.0453606Z"
                    fill="#70232F"
                  />
                  <path
                    d="M11.3451 4.66719C11.2138 4.70471 11.0583 4.87355 11.0234 5.02111C11.0046 5.09615 10.9912 5.38035 10.9912 5.74757V6.35335H10.3478C9.56223 6.35335 9.48187 6.37477 9.35321 6.62677C9.23785 6.85469 9.32101 7.16297 9.53549 7.29695C9.63475 7.35589 9.65883 7.35855 10.3129 7.36667L10.9885 7.37465L10.9965 8.03685C11.0045 8.68561 11.0045 8.70171 11.0716 8.81973C11.2298 9.09861 11.597 9.16021 11.841 8.94573C12.0019 8.80363 12.0098 8.76079 12.0098 8.02887V7.37199H12.6533C13.176 7.37199 13.3181 7.36401 13.3985 7.33181C13.814 7.15485 13.8301 6.61333 13.4254 6.40431C13.3342 6.35867 13.2619 6.35335 12.6667 6.35335H12.01V5.69661C12.01 4.96469 12.002 4.92185 11.8411 4.77975C11.6964 4.65109 11.5302 4.61357 11.3451 4.66719Z"
                    fill="#70232F"
                  />
                </svg>
                <span>15 из 20</span>
              </div>
              <div class="info-item">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.2975 5.45623C12.0053 5.54006 11.6957 5.5851 11.375 5.5851C9.60309 5.5851 8.16667 4.20981 8.16667 2.5133C8.16667 2.14272 8.2352 1.78748 8.3608 1.45854C7.70709 1.23737 7.00364 1.11702 6.27083 1.11702C2.80762 1.11702 0 3.80493 0 7.12101C0 10.4371 2.80762 13.125 6.27083 13.125C9.73405 13.125 12.5417 10.4371 12.5417 7.12101C12.5417 6.54339 12.4565 5.98484 12.2975 5.45623ZM5.06409 7.7947H8.72998V4.78604H5.06409H4.36573V10.1347H5.06409V7.7947Z"
                    fill="#70232F"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.375 5.0266C12.8247 5.0266 14 3.90135 14 2.5133C14 1.12524 12.8247 0 11.375 0C9.92525 0 8.75 1.12524 8.75 2.5133C8.75 3.90135 9.92525 5.0266 11.375 5.0266ZM10.2083 1.95479L9.625 2.5133L11.0833 3.90957L13.125 1.95479L12.5417 1.39628L11.0833 2.79255L10.2083 1.95479Z"
                    fill="#70232F"
                  />
                </svg>
                <span>12 месяцев</span>
              </div>
            </div>
          </div>

          <div class="schedule-section">
            <h2 class="block-title">РАСПИСАНИЕ ЗАНЯТИЙ</h2>
            <div class="schedule-list">
              <div class="schedule-item">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <circle cx="7.5" cy="7.5" r="6.5" fill="#70232F" />
                  <path
                    d="M7.5 4V7.5L10 9"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
                <span class="days-bold">Пн, Вт, Чт, Сб</span>
              </div>
              <div class="schedule-item">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <circle cx="7.5" cy="7.5" r="6.5" fill="#70232F" />
                  <path
                    d="M7.5 4V7.5L10 9"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
                <span class="days-bold">Пн, Вт, Чт, Сб</span>
                <div class="time-badges">
                  <span class="time-badge">08:00 - 10:00</span>
                  <span class="time-badge">18:00 - 19:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="info-block full-width">
          <h2 class="block-title">ОПИСАНИЕ</h2>
          <p class="description-text">
            Легкая атлетика - олимпийский вид спорта, объединяющий беговые виды,
            спортивную ходьбу, технические виды (прыжки и метания), многоборья,
            пробеги (бег по шоссе), кроссы (бег по пересеченной местности).
          </p>
        </div>

        <div class="info-block full-width">
          <h2 class="block-title">СОДЕРЖАНИЕ ПРОГРАММЫ</h2>

          <div class="accordion">
            <div class="accordion-item">
              <div class="accordion-header" @click="toggleLevel('basic')">
                <h3>Базовый уровень</h3>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  :class="{ rotated: openLevels.basic }"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#1E1E1E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div v-if="openLevels.basic" class="accordion-content">
                <p>
                  Базовый уровень сложности первый-второй год обучения, 252
                  часа.
                </p>
                <ul>
                  <li>
                    Обязательные предметы области (количество часов – 15);
                  </li>
                  <li>
                    Вариативные предметные области (количество часов – 10);
                  </li>
                  <li>Теория (количество часов – 5);</li>
                  <li>Практика (количество часов – 216);</li>
                  <li>Самостоятельная работа (количество часов – 2);</li>
                  <li>Аттестация (количество часов – 4).</li>
                </ul>
                <p>
                  Базовый уровень сложности третий-четвертый год обучения, 416
                  часов.
                </p>
                <ul>
                  <li>
                    Обязательные предметы области (количество часов – 25);
                  </li>
                  <li>
                    Вариативные предметные области (количество часов – 15);
                  </li>
                  <li>Теория (количество часов – 7);</li>
                  <li>Практика (количество часов – 361);</li>
                  <li>Самостоятельная работа (количество часов – 4);</li>
                  <li>Аттестация (количество часов – 4).</li>
                </ul>
                <p>
                  Базовый уровень сложности пятый-шестой год обучения, 420
                  часов.
                </p>
                <ul>
                  <li>
                    Обязательные предметы области (количество часов – 27);
                  </li>
                  <li>
                    Вариативные предметные области (количество часов – 15);
                  </li>
                  <li>Теория (количество часов – 8);</li>
                  <li>Практика (количество часов – 360);</li>
                  <li>Самостоятельная работа (количество часов – 6);</li>
                  <li>Аттестация (количество часов – 4).</li>
                </ul>
              </div>
            </div>

            <div class="accordion-item">
              <div class="accordion-header" @click="toggleLevel('advanced')">
                <h3>Углубленный уровень</h3>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  :class="{ rotated: openLevels.advanced }"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#1E1E1E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div v-if="openLevels.advanced" class="accordion-content">
                <p>
                  Углубленный уровень сложности первый-второй год обучения, 504
                  часа.
                </p>
                <ul>
                  <li>
                    Обязательные предметы области (количество часов – 30);
                  </li>
                  <li>
                    Вариативные предметные области (количество часов – 20);
                  </li>
                  <li>Теория (количество часов – 9);</li>
                  <li>Практика (количество часов – 433);</li>
                  <li>Самостоятельная работа (количество часов – 8);</li>
                  <li>Аттестация (количество часов – 4).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AppHeader from "../components/AppHeader.vue";
import logo2 from "@/image/logo_2.png";
import detailImage from "@/image/image.png";

const openLevels = ref({
  basic: true,
  advanced: false,
});

const toggleLevel = (key) => {
  openLevels.value[key] = !openLevels.value[key];
};
</script>

<style scoped>
.detail-page {
  min-height: 100vh;
  background: #ffffff;
  padding-bottom: 40px;
}

.gray-container {
  background: #efefef;
  margin: 20px 200px;
  border-radius: 5px;
}

.container-inner {
  padding: 30px 40px;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.back-btn,
.map-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: #ffffff;
  border-radius: 5px;
  font-size: 16px;
  color: #333333;
  border: none;
  cursor: pointer;
}

.back-btn:hover,
.map-btn:hover {
  background: #f5f5f5;
}

.page-title {
  font-size: 24px;
  font-weight: 600;
  color: #2f050f;
  margin: 0 0 20px 0;
}

.top-card {
  display: flex;
  gap: 20px;
  background: #ffffff;
  border-radius: 5px;
  border-top: 2px solid #70232f;
  padding: 20px;
  margin-bottom: 20px;
}

.card-image {
  width: 200px;
  height: 200px;
  flex-shrink: 0;
  border-radius: 15px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.top-tags {
  display: flex;
  gap: 10px;
  justify-content: space-between;
}

.tag {
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
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

.info-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #333333;
}

.btn-enroll {
  align-self: flex-end;
  padding: 10px 20px;
  background: #70232f;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: auto;
}

.btn-enroll:hover {
  background: #5a1a25;
}

.groups-schedule-container {
  display: flex;
  gap: 150px;
  background: #ffffff;
  border-radius: 5px;
  border-top: 2px solid #70232f;
  padding: 20px;
  margin-bottom: 20px;
}

.schedule-section {
  flex: 1;
  padding-left: 0;
}

.days-bold {
  font-weight: 600;
}

.info-block {
  background: #ffffff;
  border-radius: 5px;
  border-top: 2px solid #70232f;
  padding: 20px;
}

.info-block.full-width {
  width: 100%;
  margin-bottom: 20px;
}

.block-title {
  font-size: 18px;
  font-weight: 600;
  color: #70232f;
  text-transform: uppercase;
  margin: 0 0 10px 0;
}

.block-subtitle {
  font-size: 16px;
  font-weight: 500;
  color: #333333;
  margin: 0 0 15px 0;
}

.schedule-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.schedule-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #333333;
  flex-wrap: wrap;
}

.time-badges {
  display: flex;
  gap: 15px;
}

.time-badge {
  background: #f7daab;
  padding: 5px 25px;
  border-radius: 5px;
  font-size: 14px;
}

.description-text {
  font-size: 14px;
  color: #333333;
  line-height: 1.5;
}

.accordion {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.accordion-item {
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px 0;
}

.accordion-header h3 {
  font-size: 16px;
  font-weight: 600;
  color: #70232f;
  margin: 0;
}

.accordion-header svg {
  transition: transform 0.2s;
}

.accordion-header svg.rotated {
  transform: rotate(180deg);
}

.accordion-content {
  padding: 10px 0 10px 10px;
}

.accordion-content p {
  font-size: 14px;
  color: #000000;
  line-height: 1.5;
  margin: 10px 0;
}

.accordion-content ul {
  padding-left: 20px;
  margin: 5px 0;
}

.accordion-content li {
  font-size: 14px;
  color: #000000;
  line-height: 1.5;
  margin-bottom: 3px;
}
</style>

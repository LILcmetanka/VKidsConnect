<template>
  <div class="detail-card">
    <div class="card-image">
      <img
        src="https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=400&h=300&fit=crop"
        alt="Лёгкая атлетика"
      />
    </div>
    <div class="card-content">
      <div class="tags">
        <span class="tag outlined">Набор открыт</span>
        <span class="tag filled">Бесплатно</span>
      </div>
      <div class="card-details">
        <div class="detail-row">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M9 1C6.24 1 4 3.24 4 6C4 9.75 9 17 9 17C9 17 14 9.75 14 6C14 3.24 11.76 1 9 1Z"
              fill="#70232F"
            />
          </svg>
          <span>10-18 лет</span>
        </div>
        <div class="detail-row">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="6" cy="5" r="2" fill="#70232F" />
            <circle cx="12" cy="5" r="2" fill="#70232F" />
            <circle cx="9" cy="10" r="2" fill="#70232F" />
            <path
              d="M3 15C3 13 5 12 9 12C13 12 15 13 15 15"
              stroke="#70232F"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <span>г. Иркутск, Юбилейный мкр., стр. 49/1</span>
        </div>
        <div class="detail-row">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M9 2C6.24 2 4 4.24 4 7C4 10.75 9 16 9 16C9 16 14 10.75 14 7C14 4.24 11.76 2 9 2Z"
              fill="#70232F"
            />
            <circle cx="9" cy="7" r="2" fill="white" />
          </svg>
          <span>ФОК "Юбилейный"</span>
        </div>
      </div>
      <button class="btn-primary">Записаться</button>
    </div>
  </div>
</template>

<style scoped>
.detail-card {
  display: flex;
  background: #ffffff;
  border-radius: 5px;
  border-top: 2px solid #70232f;
  overflow: hidden;
  padding: 20px;
  gap: 20px;
}

.card-image {
  width: 200px;
  height: 200px;
  flex-shrink: 0;
  border-radius: 5px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.tags {
  display: flex;
  gap: 10px;
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

.card-details {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.detail-row {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #333333;
}

.btn-primary {
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
  transition: background 0.2s;
}

.btn-primary:hover {
  background: #5a1a25;
}
</style>

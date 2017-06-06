<template>
   <div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        <div class="image-card">
          <div class="image-card__picture">
            <img src="../assets/header2.jpg" alt="">
          </div>
          
          <div class="image-card__comment mdl-card__actions">
            <img src="../assets/icons/beach-umbrella.svg" alt="" class="home--icon">
            <span>Praias</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        <div class="image-card">
          <div class="image-card__picture">
            <img src="../assets/header2.jpg" alt="">
          </div>
          
          <div class="image-card__comment mdl-card__actions">
            <img src="../assets/icons/park.svg" alt="" class="home--icon">
            <span>Parques</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        <div class="image-card">
          <div class="image-card__picture">
            <img src="../assets/header2.jpg" alt="">
          </div>
          
          <div class="image-card__comment mdl-card__actions">
            <img src="../assets/icons/dinner.svg" alt="" class="home--icon">
            <span>Culinaria</span>
          </div>
        </div>
      </div>
    </div>
   </div>
</template>

<script>

</script>

<style scoped>
  .add-picture-button {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 998;
  }
  .image-card {
    position: relative;
    margin-bottom: 8px;
  }
  .image-card__picture > img {
    width:100%;
  }
  .image-card__comment {
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    bottom: 0;
    height: 100%;
    padding: 16px;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
  }
  .image-card__comment > span {
    padding-top: 10px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
  .home--icon{
    margin: 0 auto;
    width: 70px;
    height: 70px;
  }
</style>

const summaryItemsContainer = document.querySelector(".summary-items")

fetch('data.json')
  .then(response => response.json())
  .then(data => {

    const dataScore = data.map((item) => {
        const { category, score, icon, itemClass, textClass } = item
        return `
        <div class="item ${itemClass}">
            <img class="icon" src=${icon}>
            <p class=${textClass}>${category}</p>
            <p class="score-items">${score}<span>  / 100</span></p>
      </div>`

    }).join('')

    summaryItemsContainer.innerHTML = dataScore
  })
  .catch(error => console.error(error));

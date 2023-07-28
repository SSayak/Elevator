const elevator = document.querySelector('.elevator');
const upButton = document.getElementById('up-btn');
const downButton = document.getElementById('down-btn');
const goButton = document.getElementById('go-btn');
const buildingHeight = 500;
const floorHeight = buildingHeight / 5; // Assuming a 5-floor building

let currentFloor = 1;

function moveElevator(targetFloor) {
  const targetPosition = (targetFloor - 1) * floorHeight;
  elevator.style.transition = 'bottom 2s';
  elevator.style.bottom = targetPosition + 'px';
  currentFloor = targetFloor;
}

upButton.addEventListener('click', () => {
  if (currentFloor < 5) {
    moveElevator(currentFloor + 1);
  }
});

downButton.addEventListener('click', () => {
  if (currentFloor > 1) {
    moveElevator(currentFloor - 1);
  }
});

goButton.addEventListener('click', () => {
  const inputFloor = prompt('Выберите этаж (от 1 до 5):');
  const desiredFloor = parseInt(inputFloor);

  if (desiredFloor >= 1 && desiredFloor <= 5 && desiredFloor !== currentFloor) {
    moveElevator(desiredFloor);
  } else {
    alert('Вы ввели не верные данные!');
  }
});

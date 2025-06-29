// --- Cấu hình cho tầng 1 (Di chuyển ngang) ---
const layer1 = document.getElementById('layer1');
let currentLeft1 = 0; // Vị trí hiện tại từ mép trái
let direction1 = 1;   // 1 = phải, -1 = trái
const speed1 = 5;     // Số pixel di chuyển mỗi lần
const maxLeft1 = window.innerWidth - layer1.offsetWidth; // Giới hạn di chuyển (cạnh bên phải của màn hình) 

// Hàm di chuyển tầng 1
function moveLayer1() {
  currentLeft1 += speed1 * direction1;

  con
  // Kiểm tra và đảo chiều khi chạm biên
  if (currentLeft1 >= maxLeft1 || currentLeft1 <= 0) {
    direction1 *= -1; // Đảo chiều
  }

  // Áp dụng vị trí mới
  layer1.style.left = currentLeft1 + 'px';
}

// --- Cấu hình cho tầng 2 (Di chuyển dọc) ---
const layer2 = document.getElementById('layer2');
let currentTop2 = 0;  // Vị trí hiện tại từ mép trên
let direction2 = 1;   // 1 = xuống, -1 = lên
const speed2 = 3;     // Số pixel di chuyển mỗi lần
const maxHeight2 = window.innerHeight - layer2.offsetHeight; // Giới hạn di chuyển (cạnh dưới của màn hình)

// Hàm di chuyển tầng 2
function moveLayer2() {
  currentTop2 += speed2 * direction2;

  // Kiểm tra và đảo chiều khi chạm biên
  if (currentTop2 >= maxHeight2 || currentTop2 <= 0) {
    direction2 *= -1; // Đảo chiều
  }

  // Áp dụng vị trí mới
  layer2.style.top = currentTop2 + 'px';
}

// --- Bắt đầu di chuyển khi trang tải xong ---
document.addEventListener('DOMContentLoaded', function () {
  // Cập nhật giá trị maxLeft1 và maxHeight2 khi DOM đã sẵn sàng và kích thước phần tử được tính toán
  maxLeft1 = window.innerWidth - layer1.offsetWidth;
  maxHeight2 = window.innerHeight - layer2.offsetHeight;

  // Thiết lập interval để gọi các hàm di chuyển
  setInterval(moveLayer1, 20); // Gọi mỗi 20 mili giây (nhanh hơn, mượt hơn)
  setInterval(moveLayer2, 30); // Gọi mỗi 30 mili giây
});

// Cập nhật lại giới hạn khi thay đổi kích thước cửa sổ trình duyệt
window.addEventListener('resize', function () {
  maxLeft1 = window.innerWidth - layer1.offsetWidth;
  maxHeight2 = window.innerHeight - layer2.offsetHeight;
});

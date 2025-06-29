function CapNhat() {
  // Bước 1: Tạo một đối tượng Date để lấy thời gian hiện tại của hệ thống
  const now = new Date();

  // Bước 2: Lấy giờ, phút, giây từ đối tượng Date
  let hours = now.getHours();    // Lấy giờ (0-23)
  let minutes = now.getMinutes();  // Lấy phút (0-59)
  let seconds = now.getSeconds();  // Lấy giây (0-59)

  // Bước 3: Định dạng thời gian để đảm bảo có 2 chữ số (ví dụ: 05 thay vì 5)
  // Nếu số < 10, thêm số 0 vào phía trước
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Bước 4: Tạo chuỗi thời gian định dạng "HH:MM:SS"
  const timeString = `${hours}:${minutes}:${seconds}`;

  // Bước 5: Tìm thẻ H1 bằng ID của nó
  const clockElement = document.getElementById('clock');

  // Bước 6: Kiểm tra xem thẻ H1 có tồn tại không trước khi cập nhật
  if (clockElement) {
    // Gán chuỗi thời gian vào thuộc tính innerText của thẻ H1
    clockElement.innerText = timeString;
  } else {
    // Nếu không tìm thấy thẻ H1, ghi lỗi vào console (để dễ debug)
    console.error("Lỗi: Không tìm thấy phần tử HTML có ID 'clock'.");
  }
}

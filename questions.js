const QUESTION_BANK = [
  {
    "diff": "DỄ",
    "case": "Email tên miền lạ",
    "tag": "PHISHING",
    "exp": "Một email yêu cầu đăng nhập tại vaa-login-secure.com để giữ tài khoản.",
    "q": "Dấu hiệu nào đáng nghi nhất?",
    "a": [
      "Tên miền không phải website chính thức",
      "Email có lời chào",
      "Email có tiêu đề",
      "Email gửi lúc sáng"
    ],
    "c": 0,
    "tip": "Tên miền giả thường được dùng để đánh cắp tài khoản."
  },
  {
    "diff": "DỄ",
    "case": "Mật khẩu yếu",
    "tag": "PASSWORD",
    "exp": "Tài khoản sinh viên đang dùng mật khẩu 123456.",
    "q": "Cách cải thiện đúng nhất là gì?",
    "a": [
      "Dùng mật khẩu dài, khó đoán và bật 2FA",
      "Giữ nguyên cho dễ nhớ",
      "Chia sẻ mật khẩu cho bạn thân",
      "Ghi mật khẩu lên Facebook"
    ],
    "c": 0,
    "tip": "Mật khẩu mạnh kết hợp 2FA sẽ an toàn hơn."
  },
  {
    "diff": "DỄ",
    "case": "USB lạ",
    "tag": "MALWARE",
    "exp": "Một USB được bỏ quên trong phòng máy.",
    "q": "Bạn nên làm gì?",
    "a": [
      "Không cắm vào máy và báo người phụ trách",
      "Cắm vào máy để tìm chủ",
      "Copy file về xem",
      "Đưa người khác mở thử"
    ],
    "c": 0,
    "tip": "USB lạ có thể chứa mã độc."
  },
  {
    "diff": "DỄ",
    "case": "OTP",
    "tag": "ACCOUNT",
    "exp": "Có người xin mã OTP qua tin nhắn.",
    "q": "Bạn nên xử lý thế nào?",
    "a": [
      "Không cung cấp OTP",
      "Gửi ngay để xác minh",
      "Đăng lên nhóm lớp",
      "Chụp màn hình gửi người lạ"
    ],
    "c": 0,
    "tip": "OTP là mã xác thực cá nhân."
  },
  {
    "diff": "DỄ",
    "case": "Cập nhật",
    "tag": "PATCHING",
    "exp": "Máy báo có bản vá bảo mật.",
    "q": "Vì sao nên cập nhật?",
    "a": [
      "Vá lỗi bảo mật",
      "Để mất dữ liệu",
      "Để tắt Wi-Fi",
      "Không có lý do"
    ],
    "c": 0,
    "tip": "Bản vá giúp giảm nguy cơ bị khai thác."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Brute Force",
    "tag": "BRUTE FORCE",
    "exp": "Log có 50 lần failed login vào tài khoản admin trong 2 phút.",
    "q": "Đây giống hiện tượng gì?",
    "a": [
      "Brute Force",
      "Sao lưu",
      "Nén file",
      "Thiết kế giao diện"
    ],
    "c": 0,
    "tip": "Thử mật khẩu liên tục là dấu hiệu brute force."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Quyền ứng dụng",
    "tag": "PRIVACY",
    "exp": "App ghi chú yêu cầu quyền danh bạ, camera, vị trí, SMS.",
    "q": "Nguyên tắc đúng là gì?",
    "a": [
      "Chỉ cấp quyền cần thiết",
      "Cấp toàn bộ quyền",
      "Tắt mật khẩu",
      "Xóa trình duyệt"
    ],
    "c": 0,
    "tip": "Least privilege áp dụng cả với quyền ứng dụng."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Wi-Fi công cộng",
    "tag": "NETWORK",
    "exp": "Bạn cần đăng nhập tài khoản quan trọng khi dùng Wi-Fi mở.",
    "q": "Cách an toàn hơn là gì?",
    "a": [
      "Dùng mạng tin cậy/VPN và hạn chế thao tác nhạy cảm",
      "Đăng nhập thoải mái",
      "Tắt antivirus",
      "Gửi mật khẩu qua chat"
    ],
    "c": 0,
    "tip": "Wi-Fi công cộng có thể bị nghe lén."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Tường lửa web",
    "tag": "FIREWALL",
    "exp": "Máy chủ web public cần mở dịch vụ web.",
    "q": "Cổng thường cần mở là gì?",
    "a": [
      "80/443",
      "23/3389 cho mọi người",
      "Tất cả cổng",
      "Không cổng nào"
    ],
    "c": 0,
    "tip": "HTTP/HTTPS dùng 80 và 443."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "MFA",
    "tag": "MFA",
    "exp": "Tài khoản admin chỉ có mật khẩu.",
    "q": "Cách tăng bảo mật đăng nhập là gì?",
    "a": [
      "Bật MFA/2FA",
      "Dùng password 123456",
      "Ghi mật khẩu ra giấy",
      "Tắt log"
    ],
    "c": 0,
    "tip": "MFA giảm rủi ro khi mật khẩu bị lộ."
  },
  {
    "diff": "KHÓ",
    "case": "SQL Injection",
    "tag": "SQL INJECTION",
    "exp": "URL có chuỗi ' OR '1'='1 làm lộ dữ liệu.",
    "q": "Cách phòng chống chính là gì?",
    "a": [
      "Prepared Statement / Parameterized Query",
      "Đổi màu web",
      "Tăng RAM",
      "Tắt màn hình"
    ],
    "c": 0,
    "tip": "Truy vấn tham số hóa giúp chống SQL Injection."
  },
  {
    "diff": "KHÓ",
    "case": "XSS",
    "tag": "XSS",
    "exp": "Bình luận chứa <script>alert(1)</script>.",
    "q": "Biện pháp phù hợp là gì?",
    "a": [
      "Encode output và kiểm tra input",
      "Cho chạy mọi script",
      "Xóa database",
      "Tắt bàn phím"
    ],
    "c": 0,
    "tip": "XSS cần được xử lý bằng encode output, validate input và CSP."
  },
  {
    "diff": "KHÓ",
    "case": "Ransomware",
    "tag": "INCIDENT RESPONSE",
    "exp": "Nhiều file bị đổi đuôi lạ và không mở được.",
    "q": "Bước xử lý hợp lý là gì?",
    "a": [
      "Cô lập máy, báo sự cố, kiểm tra backup",
      "Trả tiền ngay",
      "Cắm USB copy file",
      "Xóa hết log"
    ],
    "c": 0,
    "tip": "Ứng cứu ransomware cần cô lập và khôi phục từ backup sạch."
  },
  {
    "diff": "KHÓ",
    "case": "NIST CSF",
    "tag": "NIST",
    "exp": "Identify, Protect, Detect, Respond, Recover là 5 nhóm chức năng.",
    "q": "Đây thuộc framework nào?",
    "a": [
      "NIST Cybersecurity Framework",
      "Mô hình bán hàng",
      "Scrum Board",
      "MVC"
    ],
    "c": 0,
    "tip": "NIST CSF gồm 5 chức năng chính."
  },
  {
    "diff": "KHÓ",
    "case": "ISO 27001",
    "tag": "ISO 27001",
    "exp": "Tổ chức muốn xây dựng ISMS.",
    "q": "ISO 27001 tập trung vào gì?",
    "a": [
      "Hệ thống quản lý an toàn thông tin",
      "Thiết kế poster",
      "Chơi game",
      "Tăng tốc CPU"
    ],
    "c": 0,
    "tip": "ISO 27001 là tiêu chuẩn về ISMS."
  },
  {
    "diff": "DỄ",
    "case": "Email tên miền lạ #2",
    "tag": "PHISHING",
    "exp": "Một email yêu cầu đăng nhập tại vaa-login-secure.com để giữ tài khoản.\nMã bằng chứng: EV-016",
    "q": "Dấu hiệu nào đáng nghi nhất?",
    "a": [
      "Tên miền không phải website chính thức",
      "Email có lời chào",
      "Email có tiêu đề",
      "Email gửi lúc sáng"
    ],
    "c": 0,
    "tip": "Tên miền giả thường được dùng để đánh cắp tài khoản."
  },
  {
    "diff": "DỄ",
    "case": "Mật khẩu yếu #2",
    "tag": "PASSWORD",
    "exp": "Tài khoản sinh viên đang dùng mật khẩu 123456.\nMã bằng chứng: EV-017",
    "q": "Cách cải thiện đúng nhất là gì?",
    "a": [
      "Dùng mật khẩu dài, khó đoán và bật 2FA",
      "Giữ nguyên cho dễ nhớ",
      "Chia sẻ mật khẩu cho bạn thân",
      "Ghi mật khẩu lên Facebook"
    ],
    "c": 0,
    "tip": "Mật khẩu mạnh kết hợp 2FA sẽ an toàn hơn."
  },
  {
    "diff": "DỄ",
    "case": "USB lạ #2",
    "tag": "MALWARE",
    "exp": "Một USB được bỏ quên trong phòng máy.\nMã bằng chứng: EV-018",
    "q": "Bạn nên làm gì?",
    "a": [
      "Không cắm vào máy và báo người phụ trách",
      "Cắm vào máy để tìm chủ",
      "Copy file về xem",
      "Đưa người khác mở thử"
    ],
    "c": 0,
    "tip": "USB lạ có thể chứa mã độc."
  },
  {
    "diff": "DỄ",
    "case": "OTP #2",
    "tag": "ACCOUNT",
    "exp": "Có người xin mã OTP qua tin nhắn.\nMã bằng chứng: EV-019",
    "q": "Bạn nên xử lý thế nào?",
    "a": [
      "Không cung cấp OTP",
      "Gửi ngay để xác minh",
      "Đăng lên nhóm lớp",
      "Chụp màn hình gửi người lạ"
    ],
    "c": 0,
    "tip": "OTP là mã xác thực cá nhân."
  },
  {
    "diff": "DỄ",
    "case": "Cập nhật #2",
    "tag": "PATCHING",
    "exp": "Máy báo có bản vá bảo mật.\nMã bằng chứng: EV-020",
    "q": "Vì sao nên cập nhật?",
    "a": [
      "Vá lỗi bảo mật",
      "Để mất dữ liệu",
      "Để tắt Wi-Fi",
      "Không có lý do"
    ],
    "c": 0,
    "tip": "Bản vá giúp giảm nguy cơ bị khai thác."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Brute Force #2",
    "tag": "BRUTE FORCE",
    "exp": "Log có 50 lần failed login vào tài khoản admin trong 2 phút.\nMã bằng chứng: EV-021",
    "q": "Đây giống hiện tượng gì?",
    "a": [
      "Brute Force",
      "Sao lưu",
      "Nén file",
      "Thiết kế giao diện"
    ],
    "c": 0,
    "tip": "Thử mật khẩu liên tục là dấu hiệu brute force."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Quyền ứng dụng #2",
    "tag": "PRIVACY",
    "exp": "App ghi chú yêu cầu quyền danh bạ, camera, vị trí, SMS.\nMã bằng chứng: EV-022",
    "q": "Nguyên tắc đúng là gì?",
    "a": [
      "Chỉ cấp quyền cần thiết",
      "Cấp toàn bộ quyền",
      "Tắt mật khẩu",
      "Xóa trình duyệt"
    ],
    "c": 0,
    "tip": "Least privilege áp dụng cả với quyền ứng dụng."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Wi-Fi công cộng #2",
    "tag": "NETWORK",
    "exp": "Bạn cần đăng nhập tài khoản quan trọng khi dùng Wi-Fi mở.\nMã bằng chứng: EV-023",
    "q": "Cách an toàn hơn là gì?",
    "a": [
      "Dùng mạng tin cậy/VPN và hạn chế thao tác nhạy cảm",
      "Đăng nhập thoải mái",
      "Tắt antivirus",
      "Gửi mật khẩu qua chat"
    ],
    "c": 0,
    "tip": "Wi-Fi công cộng có thể bị nghe lén."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Tường lửa web #2",
    "tag": "FIREWALL",
    "exp": "Máy chủ web public cần mở dịch vụ web.\nMã bằng chứng: EV-024",
    "q": "Cổng thường cần mở là gì?",
    "a": [
      "80/443",
      "23/3389 cho mọi người",
      "Tất cả cổng",
      "Không cổng nào"
    ],
    "c": 0,
    "tip": "HTTP/HTTPS dùng 80 và 443."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "MFA #2",
    "tag": "MFA",
    "exp": "Tài khoản admin chỉ có mật khẩu.\nMã bằng chứng: EV-025",
    "q": "Cách tăng bảo mật đăng nhập là gì?",
    "a": [
      "Bật MFA/2FA",
      "Dùng password 123456",
      "Ghi mật khẩu ra giấy",
      "Tắt log"
    ],
    "c": 0,
    "tip": "MFA giảm rủi ro khi mật khẩu bị lộ."
  },
  {
    "diff": "KHÓ",
    "case": "SQL Injection #2",
    "tag": "SQL INJECTION",
    "exp": "URL có chuỗi ' OR '1'='1 làm lộ dữ liệu.\nMã bằng chứng: EV-026",
    "q": "Cách phòng chống chính là gì?",
    "a": [
      "Prepared Statement / Parameterized Query",
      "Đổi màu web",
      "Tăng RAM",
      "Tắt màn hình"
    ],
    "c": 0,
    "tip": "Truy vấn tham số hóa giúp chống SQL Injection."
  },
  {
    "diff": "KHÓ",
    "case": "XSS #2",
    "tag": "XSS",
    "exp": "Bình luận chứa <script>alert(1)</script>.\nMã bằng chứng: EV-027",
    "q": "Biện pháp phù hợp là gì?",
    "a": [
      "Encode output và kiểm tra input",
      "Cho chạy mọi script",
      "Xóa database",
      "Tắt bàn phím"
    ],
    "c": 0,
    "tip": "XSS cần được xử lý bằng encode output, validate input và CSP."
  },
  {
    "diff": "KHÓ",
    "case": "Ransomware #2",
    "tag": "INCIDENT RESPONSE",
    "exp": "Nhiều file bị đổi đuôi lạ và không mở được.\nMã bằng chứng: EV-028",
    "q": "Bước xử lý hợp lý là gì?",
    "a": [
      "Cô lập máy, báo sự cố, kiểm tra backup",
      "Trả tiền ngay",
      "Cắm USB copy file",
      "Xóa hết log"
    ],
    "c": 0,
    "tip": "Ứng cứu ransomware cần cô lập và khôi phục từ backup sạch."
  },
  {
    "diff": "KHÓ",
    "case": "NIST CSF #2",
    "tag": "NIST",
    "exp": "Identify, Protect, Detect, Respond, Recover là 5 nhóm chức năng.\nMã bằng chứng: EV-029",
    "q": "Đây thuộc framework nào?",
    "a": [
      "NIST Cybersecurity Framework",
      "Mô hình bán hàng",
      "Scrum Board",
      "MVC"
    ],
    "c": 0,
    "tip": "NIST CSF gồm 5 chức năng chính."
  },
  {
    "diff": "KHÓ",
    "case": "ISO 27001 #2",
    "tag": "ISO 27001",
    "exp": "Tổ chức muốn xây dựng ISMS.\nMã bằng chứng: EV-030",
    "q": "ISO 27001 tập trung vào gì?",
    "a": [
      "Hệ thống quản lý an toàn thông tin",
      "Thiết kế poster",
      "Chơi game",
      "Tăng tốc CPU"
    ],
    "c": 0,
    "tip": "ISO 27001 là tiêu chuẩn về ISMS."
  },
  {
    "diff": "DỄ",
    "case": "Email tên miền lạ #3",
    "tag": "PHISHING",
    "exp": "Một email yêu cầu đăng nhập tại vaa-login-secure.com để giữ tài khoản.\nMã bằng chứng: EV-031",
    "q": "Dấu hiệu nào đáng nghi nhất?",
    "a": [
      "Tên miền không phải website chính thức",
      "Email có lời chào",
      "Email có tiêu đề",
      "Email gửi lúc sáng"
    ],
    "c": 0,
    "tip": "Tên miền giả thường được dùng để đánh cắp tài khoản."
  },
  {
    "diff": "DỄ",
    "case": "Mật khẩu yếu #3",
    "tag": "PASSWORD",
    "exp": "Tài khoản sinh viên đang dùng mật khẩu 123456.\nMã bằng chứng: EV-032",
    "q": "Cách cải thiện đúng nhất là gì?",
    "a": [
      "Dùng mật khẩu dài, khó đoán và bật 2FA",
      "Giữ nguyên cho dễ nhớ",
      "Chia sẻ mật khẩu cho bạn thân",
      "Ghi mật khẩu lên Facebook"
    ],
    "c": 0,
    "tip": "Mật khẩu mạnh kết hợp 2FA sẽ an toàn hơn."
  },
  {
    "diff": "DỄ",
    "case": "USB lạ #3",
    "tag": "MALWARE",
    "exp": "Một USB được bỏ quên trong phòng máy.\nMã bằng chứng: EV-033",
    "q": "Bạn nên làm gì?",
    "a": [
      "Không cắm vào máy và báo người phụ trách",
      "Cắm vào máy để tìm chủ",
      "Copy file về xem",
      "Đưa người khác mở thử"
    ],
    "c": 0,
    "tip": "USB lạ có thể chứa mã độc."
  },
  {
    "diff": "DỄ",
    "case": "OTP #3",
    "tag": "ACCOUNT",
    "exp": "Có người xin mã OTP qua tin nhắn.\nMã bằng chứng: EV-034",
    "q": "Bạn nên xử lý thế nào?",
    "a": [
      "Không cung cấp OTP",
      "Gửi ngay để xác minh",
      "Đăng lên nhóm lớp",
      "Chụp màn hình gửi người lạ"
    ],
    "c": 0,
    "tip": "OTP là mã xác thực cá nhân."
  },
  {
    "diff": "DỄ",
    "case": "Cập nhật #3",
    "tag": "PATCHING",
    "exp": "Máy báo có bản vá bảo mật.\nMã bằng chứng: EV-035",
    "q": "Vì sao nên cập nhật?",
    "a": [
      "Vá lỗi bảo mật",
      "Để mất dữ liệu",
      "Để tắt Wi-Fi",
      "Không có lý do"
    ],
    "c": 0,
    "tip": "Bản vá giúp giảm nguy cơ bị khai thác."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Brute Force #3",
    "tag": "BRUTE FORCE",
    "exp": "Log có 50 lần failed login vào tài khoản admin trong 2 phút.\nMã bằng chứng: EV-036",
    "q": "Đây giống hiện tượng gì?",
    "a": [
      "Brute Force",
      "Sao lưu",
      "Nén file",
      "Thiết kế giao diện"
    ],
    "c": 0,
    "tip": "Thử mật khẩu liên tục là dấu hiệu brute force."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Quyền ứng dụng #3",
    "tag": "PRIVACY",
    "exp": "App ghi chú yêu cầu quyền danh bạ, camera, vị trí, SMS.\nMã bằng chứng: EV-037",
    "q": "Nguyên tắc đúng là gì?",
    "a": [
      "Chỉ cấp quyền cần thiết",
      "Cấp toàn bộ quyền",
      "Tắt mật khẩu",
      "Xóa trình duyệt"
    ],
    "c": 0,
    "tip": "Least privilege áp dụng cả với quyền ứng dụng."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Wi-Fi công cộng #3",
    "tag": "NETWORK",
    "exp": "Bạn cần đăng nhập tài khoản quan trọng khi dùng Wi-Fi mở.\nMã bằng chứng: EV-038",
    "q": "Cách an toàn hơn là gì?",
    "a": [
      "Dùng mạng tin cậy/VPN và hạn chế thao tác nhạy cảm",
      "Đăng nhập thoải mái",
      "Tắt antivirus",
      "Gửi mật khẩu qua chat"
    ],
    "c": 0,
    "tip": "Wi-Fi công cộng có thể bị nghe lén."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Tường lửa web #3",
    "tag": "FIREWALL",
    "exp": "Máy chủ web public cần mở dịch vụ web.\nMã bằng chứng: EV-039",
    "q": "Cổng thường cần mở là gì?",
    "a": [
      "80/443",
      "23/3389 cho mọi người",
      "Tất cả cổng",
      "Không cổng nào"
    ],
    "c": 0,
    "tip": "HTTP/HTTPS dùng 80 và 443."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "MFA #3",
    "tag": "MFA",
    "exp": "Tài khoản admin chỉ có mật khẩu.\nMã bằng chứng: EV-040",
    "q": "Cách tăng bảo mật đăng nhập là gì?",
    "a": [
      "Bật MFA/2FA",
      "Dùng password 123456",
      "Ghi mật khẩu ra giấy",
      "Tắt log"
    ],
    "c": 0,
    "tip": "MFA giảm rủi ro khi mật khẩu bị lộ."
  },
  {
    "diff": "KHÓ",
    "case": "SQL Injection #3",
    "tag": "SQL INJECTION",
    "exp": "URL có chuỗi ' OR '1'='1 làm lộ dữ liệu.\nMã bằng chứng: EV-041",
    "q": "Cách phòng chống chính là gì?",
    "a": [
      "Prepared Statement / Parameterized Query",
      "Đổi màu web",
      "Tăng RAM",
      "Tắt màn hình"
    ],
    "c": 0,
    "tip": "Truy vấn tham số hóa giúp chống SQL Injection."
  },
  {
    "diff": "KHÓ",
    "case": "XSS #3",
    "tag": "XSS",
    "exp": "Bình luận chứa <script>alert(1)</script>.\nMã bằng chứng: EV-042",
    "q": "Biện pháp phù hợp là gì?",
    "a": [
      "Encode output và kiểm tra input",
      "Cho chạy mọi script",
      "Xóa database",
      "Tắt bàn phím"
    ],
    "c": 0,
    "tip": "XSS cần được xử lý bằng encode output, validate input và CSP."
  },
  {
    "diff": "KHÓ",
    "case": "Ransomware #3",
    "tag": "INCIDENT RESPONSE",
    "exp": "Nhiều file bị đổi đuôi lạ và không mở được.\nMã bằng chứng: EV-043",
    "q": "Bước xử lý hợp lý là gì?",
    "a": [
      "Cô lập máy, báo sự cố, kiểm tra backup",
      "Trả tiền ngay",
      "Cắm USB copy file",
      "Xóa hết log"
    ],
    "c": 0,
    "tip": "Ứng cứu ransomware cần cô lập và khôi phục từ backup sạch."
  },
  {
    "diff": "KHÓ",
    "case": "NIST CSF #3",
    "tag": "NIST",
    "exp": "Identify, Protect, Detect, Respond, Recover là 5 nhóm chức năng.\nMã bằng chứng: EV-044",
    "q": "Đây thuộc framework nào?",
    "a": [
      "NIST Cybersecurity Framework",
      "Mô hình bán hàng",
      "Scrum Board",
      "MVC"
    ],
    "c": 0,
    "tip": "NIST CSF gồm 5 chức năng chính."
  },
  {
    "diff": "KHÓ",
    "case": "ISO 27001 #3",
    "tag": "ISO 27001",
    "exp": "Tổ chức muốn xây dựng ISMS.\nMã bằng chứng: EV-045",
    "q": "ISO 27001 tập trung vào gì?",
    "a": [
      "Hệ thống quản lý an toàn thông tin",
      "Thiết kế poster",
      "Chơi game",
      "Tăng tốc CPU"
    ],
    "c": 0,
    "tip": "ISO 27001 là tiêu chuẩn về ISMS."
  },
  {
    "diff": "DỄ",
    "case": "Email tên miền lạ #4",
    "tag": "PHISHING",
    "exp": "Một email yêu cầu đăng nhập tại vaa-login-secure.com để giữ tài khoản.\nMã bằng chứng: EV-046",
    "q": "Dấu hiệu nào đáng nghi nhất?",
    "a": [
      "Tên miền không phải website chính thức",
      "Email có lời chào",
      "Email có tiêu đề",
      "Email gửi lúc sáng"
    ],
    "c": 0,
    "tip": "Tên miền giả thường được dùng để đánh cắp tài khoản."
  },
  {
    "diff": "DỄ",
    "case": "Mật khẩu yếu #4",
    "tag": "PASSWORD",
    "exp": "Tài khoản sinh viên đang dùng mật khẩu 123456.\nMã bằng chứng: EV-047",
    "q": "Cách cải thiện đúng nhất là gì?",
    "a": [
      "Dùng mật khẩu dài, khó đoán và bật 2FA",
      "Giữ nguyên cho dễ nhớ",
      "Chia sẻ mật khẩu cho bạn thân",
      "Ghi mật khẩu lên Facebook"
    ],
    "c": 0,
    "tip": "Mật khẩu mạnh kết hợp 2FA sẽ an toàn hơn."
  },
  {
    "diff": "DỄ",
    "case": "USB lạ #4",
    "tag": "MALWARE",
    "exp": "Một USB được bỏ quên trong phòng máy.\nMã bằng chứng: EV-048",
    "q": "Bạn nên làm gì?",
    "a": [
      "Không cắm vào máy và báo người phụ trách",
      "Cắm vào máy để tìm chủ",
      "Copy file về xem",
      "Đưa người khác mở thử"
    ],
    "c": 0,
    "tip": "USB lạ có thể chứa mã độc."
  },
  {
    "diff": "DỄ",
    "case": "OTP #4",
    "tag": "ACCOUNT",
    "exp": "Có người xin mã OTP qua tin nhắn.\nMã bằng chứng: EV-049",
    "q": "Bạn nên xử lý thế nào?",
    "a": [
      "Không cung cấp OTP",
      "Gửi ngay để xác minh",
      "Đăng lên nhóm lớp",
      "Chụp màn hình gửi người lạ"
    ],
    "c": 0,
    "tip": "OTP là mã xác thực cá nhân."
  },
  {
    "diff": "DỄ",
    "case": "Cập nhật #4",
    "tag": "PATCHING",
    "exp": "Máy báo có bản vá bảo mật.\nMã bằng chứng: EV-050",
    "q": "Vì sao nên cập nhật?",
    "a": [
      "Vá lỗi bảo mật",
      "Để mất dữ liệu",
      "Để tắt Wi-Fi",
      "Không có lý do"
    ],
    "c": 0,
    "tip": "Bản vá giúp giảm nguy cơ bị khai thác."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Brute Force #4",
    "tag": "BRUTE FORCE",
    "exp": "Log có 50 lần failed login vào tài khoản admin trong 2 phút.\nMã bằng chứng: EV-051",
    "q": "Đây giống hiện tượng gì?",
    "a": [
      "Brute Force",
      "Sao lưu",
      "Nén file",
      "Thiết kế giao diện"
    ],
    "c": 0,
    "tip": "Thử mật khẩu liên tục là dấu hiệu brute force."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Quyền ứng dụng #4",
    "tag": "PRIVACY",
    "exp": "App ghi chú yêu cầu quyền danh bạ, camera, vị trí, SMS.\nMã bằng chứng: EV-052",
    "q": "Nguyên tắc đúng là gì?",
    "a": [
      "Chỉ cấp quyền cần thiết",
      "Cấp toàn bộ quyền",
      "Tắt mật khẩu",
      "Xóa trình duyệt"
    ],
    "c": 0,
    "tip": "Least privilege áp dụng cả với quyền ứng dụng."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Wi-Fi công cộng #4",
    "tag": "NETWORK",
    "exp": "Bạn cần đăng nhập tài khoản quan trọng khi dùng Wi-Fi mở.\nMã bằng chứng: EV-053",
    "q": "Cách an toàn hơn là gì?",
    "a": [
      "Dùng mạng tin cậy/VPN và hạn chế thao tác nhạy cảm",
      "Đăng nhập thoải mái",
      "Tắt antivirus",
      "Gửi mật khẩu qua chat"
    ],
    "c": 0,
    "tip": "Wi-Fi công cộng có thể bị nghe lén."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Tường lửa web #4",
    "tag": "FIREWALL",
    "exp": "Máy chủ web public cần mở dịch vụ web.\nMã bằng chứng: EV-054",
    "q": "Cổng thường cần mở là gì?",
    "a": [
      "80/443",
      "23/3389 cho mọi người",
      "Tất cả cổng",
      "Không cổng nào"
    ],
    "c": 0,
    "tip": "HTTP/HTTPS dùng 80 và 443."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "MFA #4",
    "tag": "MFA",
    "exp": "Tài khoản admin chỉ có mật khẩu.\nMã bằng chứng: EV-055",
    "q": "Cách tăng bảo mật đăng nhập là gì?",
    "a": [
      "Bật MFA/2FA",
      "Dùng password 123456",
      "Ghi mật khẩu ra giấy",
      "Tắt log"
    ],
    "c": 0,
    "tip": "MFA giảm rủi ro khi mật khẩu bị lộ."
  },
  {
    "diff": "KHÓ",
    "case": "SQL Injection #4",
    "tag": "SQL INJECTION",
    "exp": "URL có chuỗi ' OR '1'='1 làm lộ dữ liệu.\nMã bằng chứng: EV-056",
    "q": "Cách phòng chống chính là gì?",
    "a": [
      "Prepared Statement / Parameterized Query",
      "Đổi màu web",
      "Tăng RAM",
      "Tắt màn hình"
    ],
    "c": 0,
    "tip": "Truy vấn tham số hóa giúp chống SQL Injection."
  },
  {
    "diff": "KHÓ",
    "case": "XSS #4",
    "tag": "XSS",
    "exp": "Bình luận chứa <script>alert(1)</script>.\nMã bằng chứng: EV-057",
    "q": "Biện pháp phù hợp là gì?",
    "a": [
      "Encode output và kiểm tra input",
      "Cho chạy mọi script",
      "Xóa database",
      "Tắt bàn phím"
    ],
    "c": 0,
    "tip": "XSS cần được xử lý bằng encode output, validate input và CSP."
  },
  {
    "diff": "KHÓ",
    "case": "Ransomware #4",
    "tag": "INCIDENT RESPONSE",
    "exp": "Nhiều file bị đổi đuôi lạ và không mở được.\nMã bằng chứng: EV-058",
    "q": "Bước xử lý hợp lý là gì?",
    "a": [
      "Cô lập máy, báo sự cố, kiểm tra backup",
      "Trả tiền ngay",
      "Cắm USB copy file",
      "Xóa hết log"
    ],
    "c": 0,
    "tip": "Ứng cứu ransomware cần cô lập và khôi phục từ backup sạch."
  },
  {
    "diff": "KHÓ",
    "case": "NIST CSF #4",
    "tag": "NIST",
    "exp": "Identify, Protect, Detect, Respond, Recover là 5 nhóm chức năng.\nMã bằng chứng: EV-059",
    "q": "Đây thuộc framework nào?",
    "a": [
      "NIST Cybersecurity Framework",
      "Mô hình bán hàng",
      "Scrum Board",
      "MVC"
    ],
    "c": 0,
    "tip": "NIST CSF gồm 5 chức năng chính."
  },
  {
    "diff": "KHÓ",
    "case": "ISO 27001 #4",
    "tag": "ISO 27001",
    "exp": "Tổ chức muốn xây dựng ISMS.\nMã bằng chứng: EV-060",
    "q": "ISO 27001 tập trung vào gì?",
    "a": [
      "Hệ thống quản lý an toàn thông tin",
      "Thiết kế poster",
      "Chơi game",
      "Tăng tốc CPU"
    ],
    "c": 0,
    "tip": "ISO 27001 là tiêu chuẩn về ISMS."
  },
  {
    "diff": "DỄ",
    "case": "Email tên miền lạ #5",
    "tag": "PHISHING",
    "exp": "Một email yêu cầu đăng nhập tại vaa-login-secure.com để giữ tài khoản.\nMã bằng chứng: EV-061",
    "q": "Dấu hiệu nào đáng nghi nhất?",
    "a": [
      "Tên miền không phải website chính thức",
      "Email có lời chào",
      "Email có tiêu đề",
      "Email gửi lúc sáng"
    ],
    "c": 0,
    "tip": "Tên miền giả thường được dùng để đánh cắp tài khoản."
  },
  {
    "diff": "DỄ",
    "case": "Mật khẩu yếu #5",
    "tag": "PASSWORD",
    "exp": "Tài khoản sinh viên đang dùng mật khẩu 123456.\nMã bằng chứng: EV-062",
    "q": "Cách cải thiện đúng nhất là gì?",
    "a": [
      "Dùng mật khẩu dài, khó đoán và bật 2FA",
      "Giữ nguyên cho dễ nhớ",
      "Chia sẻ mật khẩu cho bạn thân",
      "Ghi mật khẩu lên Facebook"
    ],
    "c": 0,
    "tip": "Mật khẩu mạnh kết hợp 2FA sẽ an toàn hơn."
  },
  {
    "diff": "DỄ",
    "case": "USB lạ #5",
    "tag": "MALWARE",
    "exp": "Một USB được bỏ quên trong phòng máy.\nMã bằng chứng: EV-063",
    "q": "Bạn nên làm gì?",
    "a": [
      "Không cắm vào máy và báo người phụ trách",
      "Cắm vào máy để tìm chủ",
      "Copy file về xem",
      "Đưa người khác mở thử"
    ],
    "c": 0,
    "tip": "USB lạ có thể chứa mã độc."
  },
  {
    "diff": "DỄ",
    "case": "OTP #5",
    "tag": "ACCOUNT",
    "exp": "Có người xin mã OTP qua tin nhắn.\nMã bằng chứng: EV-064",
    "q": "Bạn nên xử lý thế nào?",
    "a": [
      "Không cung cấp OTP",
      "Gửi ngay để xác minh",
      "Đăng lên nhóm lớp",
      "Chụp màn hình gửi người lạ"
    ],
    "c": 0,
    "tip": "OTP là mã xác thực cá nhân."
  },
  {
    "diff": "DỄ",
    "case": "Cập nhật #5",
    "tag": "PATCHING",
    "exp": "Máy báo có bản vá bảo mật.\nMã bằng chứng: EV-065",
    "q": "Vì sao nên cập nhật?",
    "a": [
      "Vá lỗi bảo mật",
      "Để mất dữ liệu",
      "Để tắt Wi-Fi",
      "Không có lý do"
    ],
    "c": 0,
    "tip": "Bản vá giúp giảm nguy cơ bị khai thác."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Brute Force #5",
    "tag": "BRUTE FORCE",
    "exp": "Log có 50 lần failed login vào tài khoản admin trong 2 phút.\nMã bằng chứng: EV-066",
    "q": "Đây giống hiện tượng gì?",
    "a": [
      "Brute Force",
      "Sao lưu",
      "Nén file",
      "Thiết kế giao diện"
    ],
    "c": 0,
    "tip": "Thử mật khẩu liên tục là dấu hiệu brute force."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Quyền ứng dụng #5",
    "tag": "PRIVACY",
    "exp": "App ghi chú yêu cầu quyền danh bạ, camera, vị trí, SMS.\nMã bằng chứng: EV-067",
    "q": "Nguyên tắc đúng là gì?",
    "a": [
      "Chỉ cấp quyền cần thiết",
      "Cấp toàn bộ quyền",
      "Tắt mật khẩu",
      "Xóa trình duyệt"
    ],
    "c": 0,
    "tip": "Least privilege áp dụng cả với quyền ứng dụng."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Wi-Fi công cộng #5",
    "tag": "NETWORK",
    "exp": "Bạn cần đăng nhập tài khoản quan trọng khi dùng Wi-Fi mở.\nMã bằng chứng: EV-068",
    "q": "Cách an toàn hơn là gì?",
    "a": [
      "Dùng mạng tin cậy/VPN và hạn chế thao tác nhạy cảm",
      "Đăng nhập thoải mái",
      "Tắt antivirus",
      "Gửi mật khẩu qua chat"
    ],
    "c": 0,
    "tip": "Wi-Fi công cộng có thể bị nghe lén."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Tường lửa web #5",
    "tag": "FIREWALL",
    "exp": "Máy chủ web public cần mở dịch vụ web.\nMã bằng chứng: EV-069",
    "q": "Cổng thường cần mở là gì?",
    "a": [
      "80/443",
      "23/3389 cho mọi người",
      "Tất cả cổng",
      "Không cổng nào"
    ],
    "c": 0,
    "tip": "HTTP/HTTPS dùng 80 và 443."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "MFA #5",
    "tag": "MFA",
    "exp": "Tài khoản admin chỉ có mật khẩu.\nMã bằng chứng: EV-070",
    "q": "Cách tăng bảo mật đăng nhập là gì?",
    "a": [
      "Bật MFA/2FA",
      "Dùng password 123456",
      "Ghi mật khẩu ra giấy",
      "Tắt log"
    ],
    "c": 0,
    "tip": "MFA giảm rủi ro khi mật khẩu bị lộ."
  },
  {
    "diff": "KHÓ",
    "case": "SQL Injection #5",
    "tag": "SQL INJECTION",
    "exp": "URL có chuỗi ' OR '1'='1 làm lộ dữ liệu.\nMã bằng chứng: EV-071",
    "q": "Cách phòng chống chính là gì?",
    "a": [
      "Prepared Statement / Parameterized Query",
      "Đổi màu web",
      "Tăng RAM",
      "Tắt màn hình"
    ],
    "c": 0,
    "tip": "Truy vấn tham số hóa giúp chống SQL Injection."
  },
  {
    "diff": "KHÓ",
    "case": "XSS #5",
    "tag": "XSS",
    "exp": "Bình luận chứa <script>alert(1)</script>.\nMã bằng chứng: EV-072",
    "q": "Biện pháp phù hợp là gì?",
    "a": [
      "Encode output và kiểm tra input",
      "Cho chạy mọi script",
      "Xóa database",
      "Tắt bàn phím"
    ],
    "c": 0,
    "tip": "XSS cần được xử lý bằng encode output, validate input và CSP."
  },
  {
    "diff": "KHÓ",
    "case": "Ransomware #5",
    "tag": "INCIDENT RESPONSE",
    "exp": "Nhiều file bị đổi đuôi lạ và không mở được.\nMã bằng chứng: EV-073",
    "q": "Bước xử lý hợp lý là gì?",
    "a": [
      "Cô lập máy, báo sự cố, kiểm tra backup",
      "Trả tiền ngay",
      "Cắm USB copy file",
      "Xóa hết log"
    ],
    "c": 0,
    "tip": "Ứng cứu ransomware cần cô lập và khôi phục từ backup sạch."
  },
  {
    "diff": "KHÓ",
    "case": "NIST CSF #5",
    "tag": "NIST",
    "exp": "Identify, Protect, Detect, Respond, Recover là 5 nhóm chức năng.\nMã bằng chứng: EV-074",
    "q": "Đây thuộc framework nào?",
    "a": [
      "NIST Cybersecurity Framework",
      "Mô hình bán hàng",
      "Scrum Board",
      "MVC"
    ],
    "c": 0,
    "tip": "NIST CSF gồm 5 chức năng chính."
  },
  {
    "diff": "KHÓ",
    "case": "ISO 27001 #5",
    "tag": "ISO 27001",
    "exp": "Tổ chức muốn xây dựng ISMS.\nMã bằng chứng: EV-075",
    "q": "ISO 27001 tập trung vào gì?",
    "a": [
      "Hệ thống quản lý an toàn thông tin",
      "Thiết kế poster",
      "Chơi game",
      "Tăng tốc CPU"
    ],
    "c": 0,
    "tip": "ISO 27001 là tiêu chuẩn về ISMS."
  },
  {
    "diff": "DỄ",
    "case": "Email tên miền lạ #6",
    "tag": "PHISHING",
    "exp": "Một email yêu cầu đăng nhập tại vaa-login-secure.com để giữ tài khoản.\nMã bằng chứng: EV-076",
    "q": "Dấu hiệu nào đáng nghi nhất?",
    "a": [
      "Tên miền không phải website chính thức",
      "Email có lời chào",
      "Email có tiêu đề",
      "Email gửi lúc sáng"
    ],
    "c": 0,
    "tip": "Tên miền giả thường được dùng để đánh cắp tài khoản."
  },
  {
    "diff": "DỄ",
    "case": "Mật khẩu yếu #6",
    "tag": "PASSWORD",
    "exp": "Tài khoản sinh viên đang dùng mật khẩu 123456.\nMã bằng chứng: EV-077",
    "q": "Cách cải thiện đúng nhất là gì?",
    "a": [
      "Dùng mật khẩu dài, khó đoán và bật 2FA",
      "Giữ nguyên cho dễ nhớ",
      "Chia sẻ mật khẩu cho bạn thân",
      "Ghi mật khẩu lên Facebook"
    ],
    "c": 0,
    "tip": "Mật khẩu mạnh kết hợp 2FA sẽ an toàn hơn."
  },
  {
    "diff": "DỄ",
    "case": "USB lạ #6",
    "tag": "MALWARE",
    "exp": "Một USB được bỏ quên trong phòng máy.\nMã bằng chứng: EV-078",
    "q": "Bạn nên làm gì?",
    "a": [
      "Không cắm vào máy và báo người phụ trách",
      "Cắm vào máy để tìm chủ",
      "Copy file về xem",
      "Đưa người khác mở thử"
    ],
    "c": 0,
    "tip": "USB lạ có thể chứa mã độc."
  },
  {
    "diff": "DỄ",
    "case": "OTP #6",
    "tag": "ACCOUNT",
    "exp": "Có người xin mã OTP qua tin nhắn.\nMã bằng chứng: EV-079",
    "q": "Bạn nên xử lý thế nào?",
    "a": [
      "Không cung cấp OTP",
      "Gửi ngay để xác minh",
      "Đăng lên nhóm lớp",
      "Chụp màn hình gửi người lạ"
    ],
    "c": 0,
    "tip": "OTP là mã xác thực cá nhân."
  },
  {
    "diff": "DỄ",
    "case": "Cập nhật #6",
    "tag": "PATCHING",
    "exp": "Máy báo có bản vá bảo mật.\nMã bằng chứng: EV-080",
    "q": "Vì sao nên cập nhật?",
    "a": [
      "Vá lỗi bảo mật",
      "Để mất dữ liệu",
      "Để tắt Wi-Fi",
      "Không có lý do"
    ],
    "c": 0,
    "tip": "Bản vá giúp giảm nguy cơ bị khai thác."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Brute Force #6",
    "tag": "BRUTE FORCE",
    "exp": "Log có 50 lần failed login vào tài khoản admin trong 2 phút.\nMã bằng chứng: EV-081",
    "q": "Đây giống hiện tượng gì?",
    "a": [
      "Brute Force",
      "Sao lưu",
      "Nén file",
      "Thiết kế giao diện"
    ],
    "c": 0,
    "tip": "Thử mật khẩu liên tục là dấu hiệu brute force."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Quyền ứng dụng #6",
    "tag": "PRIVACY",
    "exp": "App ghi chú yêu cầu quyền danh bạ, camera, vị trí, SMS.\nMã bằng chứng: EV-082",
    "q": "Nguyên tắc đúng là gì?",
    "a": [
      "Chỉ cấp quyền cần thiết",
      "Cấp toàn bộ quyền",
      "Tắt mật khẩu",
      "Xóa trình duyệt"
    ],
    "c": 0,
    "tip": "Least privilege áp dụng cả với quyền ứng dụng."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Wi-Fi công cộng #6",
    "tag": "NETWORK",
    "exp": "Bạn cần đăng nhập tài khoản quan trọng khi dùng Wi-Fi mở.\nMã bằng chứng: EV-083",
    "q": "Cách an toàn hơn là gì?",
    "a": [
      "Dùng mạng tin cậy/VPN và hạn chế thao tác nhạy cảm",
      "Đăng nhập thoải mái",
      "Tắt antivirus",
      "Gửi mật khẩu qua chat"
    ],
    "c": 0,
    "tip": "Wi-Fi công cộng có thể bị nghe lén."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Tường lửa web #6",
    "tag": "FIREWALL",
    "exp": "Máy chủ web public cần mở dịch vụ web.\nMã bằng chứng: EV-084",
    "q": "Cổng thường cần mở là gì?",
    "a": [
      "80/443",
      "23/3389 cho mọi người",
      "Tất cả cổng",
      "Không cổng nào"
    ],
    "c": 0,
    "tip": "HTTP/HTTPS dùng 80 và 443."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "MFA #6",
    "tag": "MFA",
    "exp": "Tài khoản admin chỉ có mật khẩu.\nMã bằng chứng: EV-085",
    "q": "Cách tăng bảo mật đăng nhập là gì?",
    "a": [
      "Bật MFA/2FA",
      "Dùng password 123456",
      "Ghi mật khẩu ra giấy",
      "Tắt log"
    ],
    "c": 0,
    "tip": "MFA giảm rủi ro khi mật khẩu bị lộ."
  },
  {
    "diff": "KHÓ",
    "case": "SQL Injection #6",
    "tag": "SQL INJECTION",
    "exp": "URL có chuỗi ' OR '1'='1 làm lộ dữ liệu.\nMã bằng chứng: EV-086",
    "q": "Cách phòng chống chính là gì?",
    "a": [
      "Prepared Statement / Parameterized Query",
      "Đổi màu web",
      "Tăng RAM",
      "Tắt màn hình"
    ],
    "c": 0,
    "tip": "Truy vấn tham số hóa giúp chống SQL Injection."
  },
  {
    "diff": "KHÓ",
    "case": "XSS #6",
    "tag": "XSS",
    "exp": "Bình luận chứa <script>alert(1)</script>.\nMã bằng chứng: EV-087",
    "q": "Biện pháp phù hợp là gì?",
    "a": [
      "Encode output và kiểm tra input",
      "Cho chạy mọi script",
      "Xóa database",
      "Tắt bàn phím"
    ],
    "c": 0,
    "tip": "XSS cần được xử lý bằng encode output, validate input và CSP."
  },
  {
    "diff": "KHÓ",
    "case": "Ransomware #6",
    "tag": "INCIDENT RESPONSE",
    "exp": "Nhiều file bị đổi đuôi lạ và không mở được.\nMã bằng chứng: EV-088",
    "q": "Bước xử lý hợp lý là gì?",
    "a": [
      "Cô lập máy, báo sự cố, kiểm tra backup",
      "Trả tiền ngay",
      "Cắm USB copy file",
      "Xóa hết log"
    ],
    "c": 0,
    "tip": "Ứng cứu ransomware cần cô lập và khôi phục từ backup sạch."
  },
  {
    "diff": "KHÓ",
    "case": "NIST CSF #6",
    "tag": "NIST",
    "exp": "Identify, Protect, Detect, Respond, Recover là 5 nhóm chức năng.\nMã bằng chứng: EV-089",
    "q": "Đây thuộc framework nào?",
    "a": [
      "NIST Cybersecurity Framework",
      "Mô hình bán hàng",
      "Scrum Board",
      "MVC"
    ],
    "c": 0,
    "tip": "NIST CSF gồm 5 chức năng chính."
  },
  {
    "diff": "KHÓ",
    "case": "ISO 27001 #6",
    "tag": "ISO 27001",
    "exp": "Tổ chức muốn xây dựng ISMS.\nMã bằng chứng: EV-090",
    "q": "ISO 27001 tập trung vào gì?",
    "a": [
      "Hệ thống quản lý an toàn thông tin",
      "Thiết kế poster",
      "Chơi game",
      "Tăng tốc CPU"
    ],
    "c": 0,
    "tip": "ISO 27001 là tiêu chuẩn về ISMS."
  },
  {
    "diff": "DỄ",
    "case": "Email tên miền lạ #7",
    "tag": "PHISHING",
    "exp": "Một email yêu cầu đăng nhập tại vaa-login-secure.com để giữ tài khoản.\nMã bằng chứng: EV-091",
    "q": "Dấu hiệu nào đáng nghi nhất?",
    "a": [
      "Tên miền không phải website chính thức",
      "Email có lời chào",
      "Email có tiêu đề",
      "Email gửi lúc sáng"
    ],
    "c": 0,
    "tip": "Tên miền giả thường được dùng để đánh cắp tài khoản."
  },
  {
    "diff": "DỄ",
    "case": "Mật khẩu yếu #7",
    "tag": "PASSWORD",
    "exp": "Tài khoản sinh viên đang dùng mật khẩu 123456.\nMã bằng chứng: EV-092",
    "q": "Cách cải thiện đúng nhất là gì?",
    "a": [
      "Dùng mật khẩu dài, khó đoán và bật 2FA",
      "Giữ nguyên cho dễ nhớ",
      "Chia sẻ mật khẩu cho bạn thân",
      "Ghi mật khẩu lên Facebook"
    ],
    "c": 0,
    "tip": "Mật khẩu mạnh kết hợp 2FA sẽ an toàn hơn."
  },
  {
    "diff": "DỄ",
    "case": "USB lạ #7",
    "tag": "MALWARE",
    "exp": "Một USB được bỏ quên trong phòng máy.\nMã bằng chứng: EV-093",
    "q": "Bạn nên làm gì?",
    "a": [
      "Không cắm vào máy và báo người phụ trách",
      "Cắm vào máy để tìm chủ",
      "Copy file về xem",
      "Đưa người khác mở thử"
    ],
    "c": 0,
    "tip": "USB lạ có thể chứa mã độc."
  },
  {
    "diff": "DỄ",
    "case": "OTP #7",
    "tag": "ACCOUNT",
    "exp": "Có người xin mã OTP qua tin nhắn.\nMã bằng chứng: EV-094",
    "q": "Bạn nên xử lý thế nào?",
    "a": [
      "Không cung cấp OTP",
      "Gửi ngay để xác minh",
      "Đăng lên nhóm lớp",
      "Chụp màn hình gửi người lạ"
    ],
    "c": 0,
    "tip": "OTP là mã xác thực cá nhân."
  },
  {
    "diff": "DỄ",
    "case": "Cập nhật #7",
    "tag": "PATCHING",
    "exp": "Máy báo có bản vá bảo mật.\nMã bằng chứng: EV-095",
    "q": "Vì sao nên cập nhật?",
    "a": [
      "Vá lỗi bảo mật",
      "Để mất dữ liệu",
      "Để tắt Wi-Fi",
      "Không có lý do"
    ],
    "c": 0,
    "tip": "Bản vá giúp giảm nguy cơ bị khai thác."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Brute Force #7",
    "tag": "BRUTE FORCE",
    "exp": "Log có 50 lần failed login vào tài khoản admin trong 2 phút.\nMã bằng chứng: EV-096",
    "q": "Đây giống hiện tượng gì?",
    "a": [
      "Brute Force",
      "Sao lưu",
      "Nén file",
      "Thiết kế giao diện"
    ],
    "c": 0,
    "tip": "Thử mật khẩu liên tục là dấu hiệu brute force."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Quyền ứng dụng #7",
    "tag": "PRIVACY",
    "exp": "App ghi chú yêu cầu quyền danh bạ, camera, vị trí, SMS.\nMã bằng chứng: EV-097",
    "q": "Nguyên tắc đúng là gì?",
    "a": [
      "Chỉ cấp quyền cần thiết",
      "Cấp toàn bộ quyền",
      "Tắt mật khẩu",
      "Xóa trình duyệt"
    ],
    "c": 0,
    "tip": "Least privilege áp dụng cả với quyền ứng dụng."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Wi-Fi công cộng #7",
    "tag": "NETWORK",
    "exp": "Bạn cần đăng nhập tài khoản quan trọng khi dùng Wi-Fi mở.\nMã bằng chứng: EV-098",
    "q": "Cách an toàn hơn là gì?",
    "a": [
      "Dùng mạng tin cậy/VPN và hạn chế thao tác nhạy cảm",
      "Đăng nhập thoải mái",
      "Tắt antivirus",
      "Gửi mật khẩu qua chat"
    ],
    "c": 0,
    "tip": "Wi-Fi công cộng có thể bị nghe lén."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "Tường lửa web #7",
    "tag": "FIREWALL",
    "exp": "Máy chủ web public cần mở dịch vụ web.\nMã bằng chứng: EV-099",
    "q": "Cổng thường cần mở là gì?",
    "a": [
      "80/443",
      "23/3389 cho mọi người",
      "Tất cả cổng",
      "Không cổng nào"
    ],
    "c": 0,
    "tip": "HTTP/HTTPS dùng 80 và 443."
  },
  {
    "diff": "TRUNG BÌNH",
    "case": "MFA #7",
    "tag": "MFA",
    "exp": "Tài khoản admin chỉ có mật khẩu.\nMã bằng chứng: EV-100",
    "q": "Cách tăng bảo mật đăng nhập là gì?",
    "a": [
      "Bật MFA/2FA",
      "Dùng password 123456",
      "Ghi mật khẩu ra giấy",
      "Tắt log"
    ],
    "c": 0,
    "tip": "MFA giảm rủi ro khi mật khẩu bị lộ."
  }
];
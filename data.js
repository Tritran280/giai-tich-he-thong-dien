const questionsData = {
    "question1": {
        "id": 1,
        "question": "Câu 1: Hệ thống điện (HTĐ) được định nghĩa là ?",
        "options": [
            "HTĐ bao gồm các nhà máy điện, trạm biến áp, các đường dây tải điện và các thiết bị khác nối với nhau thành hệ thống nhất",
            "HTĐ bao gồm khâu sản xuất điện, truyền tải điện, phân phối điện năng và cung cấp cho các hộ tiêu thụ điện.",
            "HTĐ bao gồm nhà máy điện, đường dây truyền tải điện và cung cấp điện năng cho các hộ tiêu thụ.",
            "HTĐ chỉ bao gồm khâu phân phối, truyền tải và cung cấp điện năng cho các hộ tiêu thụ điện."
        ],
        "trueOption": 0
    },
    "question2": {
        "id": 2,
        "question": "Câu 2: Hệ thống cung cấp điện là gì ?",
        "options": [
            "Hệ thống cung cấp điện chỉ bao gồm khâu phân phối, truyền tải và cung cấp điện năng cho các hộ tiêu thụ điện",
            "Hệ thống cung cấp điện là hệ thống chỉ cung cấp cho các phụ tải điện (y tế, quân sự, khu công nghiệp, dân dụng,..).",
            "Hệ thống cung cấp điện chỉ bao gồm khâu phân phối và cung cấp điện năng cho các hộ tiêu dùng điện.",
            "Hệ thống cung cấp điện là hệ thống nhà máy điện, trạm biến áp, các đường dây tải điện và các thiết bị khác nối với nhau thành hệ thống nhất."
        ],
        "trueOption": 0
    },
    "question3": {
        "id": 3,
        "question": "Câu 3: Ưu điểm của thủy điện là gì ?",
        "options": [
            "Không phải chi phí cho nhiên liệu, mức phát thải thấp",
            "Nguồn tương đối ổn định, thời gian xây dựng nhanh.",
            "Thân thiện với môi trường, chi phí đầu tư thấp.",
            "Không phải chí phí cho nhiên liệu, mức phát thải cao, có thể thay đổi công suất nhanh theo yêu cầu phụ tải."
        ],
        "trueOption": 0
    },
    "question4": {
        "id": 4,
        "question": "Câu 4: Hạn chế của nhiệt điện là gì?",
        "options": [
            "Tác động đến môi trường, thay đổi công suất chậm",
            "Chi phí đầu tư ban đầu cao hơn thủy điện, thời gian xây dựng lâu.",
            "Chi phí thường xuyên cao hơn thủy điện nhưng thấp hơn các nguồn khác, thay đổi công suất nhanh.",
            "Than, dầu, khí không phải là tài nguyên dồi dào và sẵn có, trong tương lai là phải nhập khẩu, chi phí đầu tư ban đầu cao."
        ],
        "trueOption": 3
    },
    "question5": {
        "id": 5,
        "question": "Câu 5: Lưới hệ thống ở Việt Nam có điện áp từ:",
        "options": [
            "110-500kV.",
            "220-500kV",
            "220V-500kV",
            "110V-500kV"
        ],
        "trueOption": 0
    },
    "question6": {
        "id": 6,
        "question": "Câu 6: Lưới hệ thống bao gồm những gì?",
        "options": [
            "Các đường dây tải điện và trạm biến áp khu vực, nối liền với các nhà máy điện tạo thành hệ thống điện.",
            "Bao gồm trạm trung áp và hạ áp",
            "Bao gồm các đường dây và trạm biến áp, nối liền với phụ tải.",
            "Bao gồm các đường dây trung áp và hạ áp, trạm biến áp nối liền các nhà máy điện cung cấp cho phụ tải điện"
        ],
        "trueOption": 0
    },
    "question7": {
        "id": 7,
        "question": "Câu 7: Lưới truyền tải ở Việt Nam có các cấp điện áp ?",
        "options": [
            "35,110, 220 kV",
            "36,110,200 kV",
            "110, 220,500 kV",
            "22,35,110 kV"
        ],
        "trueOption": 0
    },
    "question8": {
        "id": 8,
        "question": "Câu 8: Lưới truyền tải có nhiệm vụ gì?",
        "options": [
            "Tải điện từ các TKV đến các trạm trung gian",
            "Phân phối điện từu trung gian đến phụ tải.",
            "Phân phối trung áp và hạ áp đến các phụ tải.",
            "Tải điện từ các TKV đến các phụ tải."
        ],
        "trueOption": 0
    },
    "question9": {
        "id": 9,
        "question": "Câu 9: Lưới phân phối có nhiệm vụ gì?",
        "options": [
            "Phân phối điện từ trạm trung gian (TKV hay thanh cái nhà máy điện) đến phụ tải",
            "Tải điện từ các TKV đến các trạm trung gian.",
            "Phân phối cao áp, trung áp và cao áp.",
            "Tải điện từ các TKV đến các trạm trung gian đến phụ tải."
        ],
        "trueOption": 0
    },
    "question10": {
        "id": 10,
        "question": "Câu 10: Phân phối trung áp bao gồm các cấp điện áp nào?",
        "options": [
            "6,10,15,22 và 35 kV.",
            "110 và 220 kV",
            "0,4/22kV",
            "35,110 và 220 kV"
        ],
        "trueOption": 0
    },
    "question11": {
        "id": 11,
        "question": "Câu 11: Phân phối hạ áp bao gồm các cấp điện áp nào?",
        "options": [
            "0,4/22kV.",
            "220/380V",
            "110/220V",
            "220V"
        ],
        "trueOption": 0
    },
    "question12": {
        "id": 12,
        "question": "Câu 12: Tần số điện công nghiệp là bao nhiêu ?",
        "options": [
            "50Hz.",
            "60Hz",
            "50Hz và 60Hz",
            "100Hz"
        ],
        "trueOption": 0
    },
    "question13": {
        "id": 13,
        "question": "Câu 13: Có thể chia hộ tiêu thụ theo nguồn cung cấp ra làm mấy loại?",
        "options": [
            "2.",
            "3",
            "4",
            "5"
        ],
        "trueOption": 0
    },
    "question14": {
        "id": 14,
        "question": "Câu 14: Có thể chia hộ tiêu thụ điện theo chế độ việc ra làm mấy loại?",
        "options": [
            "3.",
            "2",
            "4",
            "6"
        ],
        "trueOption": 0
    },
    "question15": {
        "id": 15,
        "question": "Câu 15: Theo mức độ tin cậy cung cấp điện người ta phụ tải ra làm?",
        "options": [
            "Loại 1, loại 2, loại 3",
            "Dài hạn, ngắn hạn, ngắn hạn lặp lại.",
            "Một chiều, xoay chiều 1 pha và xoay chiều 3 pha.",
            "Y tế, sản suất, kinh doanh và khu dân cư."
        ],
        "trueOption": 0
    },
    "question16": {
        "id": 16,
        "question": "Câu 16: Chỉ danh role áp suất là",
        "options": [
            "62.",
            "63",
            "C.64",
            "7"
        ],
        "trueOption": 1
    },
    "question17": {
        "id": 17,
        "question": "Câu 17: Hiện tại EVN có mấy Tổng Công ty điện lực kinh doanh điện lực tới khách hàng?",
        "options": [
            "5",
            "6",
            "7",
            "8"
        ],
        "trueOption": 0
    },
    "question18": {
        "id": 18,
        "question": "Câu 18: Vấn đề huy đọng nguồn điện để đáp ứng phụ tải hệ thống điện Quốc gia trong hiện nay được thực hiện theo nguyên tắc:",
        "options": [
            "Yêu cầu kỹ thuật, yêu cầu khách quan, các ràng buộc trong hợp đồng mua bán điện, theo tính toán tối ưu và tính toán thị trường điện",
            "Theo các ràng buộc trong hợp đồng mua bán điện, huy động theo tính toán tối ưu và tính toán thị trường, yêu cầu kỹ thuật, yêu cầu khách quan.",
            "Yêu cầu kỹ thuật, các ràng buộc trong hợp đồng mua bán điện, tính toán tối ưu và tính toán thị trường điện, theo các yêu cầu khác quan.",
            "Theo các ràng buộc trong hợp đồng mua bán điện, yêu cầu kỹ thuật, theo yêu cầu khách quan, theo tính toán tối ưu và tính toán thị trường điện."
        ],
        "trueOption": 0
    },
    "question19": {
        "id": 19,
        "question": "Câu 19: Mạch 1 của đường dây 500kV được đưa vào vận hành vào thời gian nào?",
        "options": [
            "Tháng 9 năm 1994.",
            "Tháng 10 năm 1994",
            "Cuối năm 2005",
            "Đầu năm 2005"
        ],
        "trueOption": 0
    },
    "question20": {
        "id": 20,
        "question": "Câu 20: Mạch 2 của đường dây 500kV được đưa vào vận hành vào thời gian nào?",
        "options": [
            "Cuối năm 2005.",
            "Tháng 9 năm 2005",
            "Đầu năm 2005",
            "Cuối năm 1994"
        ],
        "trueOption": 0
    },
    "question21": {
        "id": 21,
        "question": "Câu 21: Chất lượng điện năng được đánh giá bằng chỉ tiêu nào?",
        "options": [
            "Tần số và điện áp",
            "Công suất và điện áp",
            "Tần số và công suất",
            "Công suất, tần số và điện áp."
        ],
        "trueOption": 0
    },
    "question22": {
        "id": 22,
        "question": "Câu 22: Máy phát trong hệ thống điện là máy điện gì ?",
        "options": [
            "Máy phát không đồng bộ xoay chiều.",
            "Máy phát một chiều",
            "Máy phát đồng bộ xoay chiều",
            "Cả A và C đều đúng"
        ],
        "trueOption": 2
    },
    "question23": {
        "id": 23,
        "question": "Câu 23: EVN đã đồng bộ hóa hệ thống điện phân phối cho khu vực đô thị với cấp điện áp?",
        "options": [
            "22kV.",
            "35kV",
            "110kV",
            "220V"
        ],
        "trueOption": 0
    },
    "question24": {
        "id": 24,
        "question": "Câu 24: EVN đã đồng bộ hóa hệ thống điện phân phối cho khu vực nông thôn và miền núi với cấp điện áp ?",
        "options": [
            "35kV.",
            "22kV",
            "110kV",
            "220V"
        ],
        "trueOption": 0
    },
    "question25": {
        "id": 25,
        "question": "Câu 25: Người ta chia việc điều hành HTĐ quốc gia thành mấy cấp độ ?",
        "options": [
            "3",
            "2.",
            "4.",
            "5."
        ],
        "trueOption": 0
    },
    "question26": {
        "id": 26,
        "question": "Câu 26: Độ lệch tần số so với tần số định mức được qui định là bao nhiêu?",
        "options": [
            "+-0,5 Hz.",
            "+-1 Hz",
            "+-5 Hz",
            "+-10 Hz"
        ],
        "trueOption": 0
    },
    "question27": {
        "id": 27,
        "question": "Câu 27: Theo qui hoạch điện 7 điều chỉnh, khối lượng lưới điện truyền tải dự kiến trạm 500kV giai đoạn 2026-2030 là bao nhiêu MVA",
        "options": [
            "23.550",
            "32.750",
            "3.714",
            "3.435"
        ],
        "trueOption": 0
    },
    "question28": {
        "id": 28,
        "question": "Câu 28: Ý nghĩa của hệ số công suất là gì?",
        "options": [
            "Đánh giá sự hoạt động hiệu quả của thiết bị (động cơ, đường dây,máy biến áp…)",
            "Tỉ lệ giữa công suất thực và công suất biểu khiến chạy trong mạch.",
            "Thành phần từ hóa, tạo từ trường trong các bước biến đổi năng lượng điện thành năng lượng khác.",
            "Đánh giá mức độ sử dụng điện của một đơn vị có tiết kiệm hay không."
        ],
        "trueOption": 1
    },
    "question29": {
        "id": 29,
        "question": "Câu 29: Nguyên nhân chính gây gây tổn thất trên đường dây là do:",
        "options": [
            "Điện trở",
            "Điện kháng.",
            "Điện dung.",
            "Điện dẫn."
        ],
        "trueOption": 0
    },
    "question30": {
        "id": 30,
        "question": "Câu 30: Điện kháng là nguyên nhân gây ra:",
        "options": [
            "Sụt áp dọc đường dây",
            "Tổn thất chính.",
            "Triệt tiêu một phần dòng điện cảm ứng (của phụ tải) trong dây dẫn.",
            "Gây ra tỏn thất do những dòng điện rò giữa các dây dẫn hoặc giữa dây dẫn với đất."
        ],
        "trueOption": 0
    },
    "question31": {
        "id": 31,
        "question": "Câu 31: Điện dẫn thường được bỏ qua khi :",
        "options": [
            "Điện áp nhỏ hơn 220kV.",
            "Điện áp lớn hơn 500kV",
            "Điện áp lớn hơn 220V",
            "Điện áp lớn hơn 110kV"
        ],
        "trueOption": 0
    },
    "question32": {
        "id": 32,
        "question": "Câu 32: Người ta truyền tải DC khi nào ?",
        "options": [
            "Khoảng cách truyền tải lớn (>750 km)",
            "Khoảng các truyền công suất nhỏ và dưới nước.",
            "Cung cấp cho những hệ thống điện đồng bộ.",
            "Khoảng các truyền tải nhỏ (<100km)."
        ],
        "trueOption": 0
    },
    "question33": {
        "id": 33,
        "question": "Câu 33: Đảo pha của đường dây nhằm để làm gì ?",
        "options": [
            "Cân bằng pha",
            "Cân bằng hổ cảm",
            "Tăng công suất phản kháng",
            "Giảm tổn thất"
        ],
        "trueOption": 1
    },
    "question34": {
        "id": 34,
        "question": "Câu 34: Phân pha của đường dây nhằm để làm gì ?",
        "options": [
            "Khống chế được hiện tượng corona",
            "Cân bằng pha",
            "Cân bằng hổ cảm và tự cảm",
            "Giảm tổn thất"
        ],
        "trueOption": 0
    },
    "question35": {
        "id": 35,
        "question": "Câu 35: Vì sao điện trở AC thường cao hơn điện trở DC ?",
        "options": [
            "Vì khi tần số càng cao thì ở dây dẫn AC sẽ xảy ra hiệu ứng bề mặt làm điện trở AC lớn hơn DC",
            "Vì điện áp AC luôn lớn hơn áp DC.",
            "Vì dòng điện DC luôn lớn hơn điện áp DC.",
            "Tất cả các ý trên đều đúng."
        ],
        "trueOption": 0
    },
    "question36": {
        "id": 36,
        "question": "Câu 36: Với hệ thống có tần số 60Hz thì điện trở AC cao hơn DC khoảng bao nhiêu?",
        "options": [
            "2%.",
            "3%",
            "5%",
            "10%"
        ],
        "trueOption": 0
    },
    "question37": {
        "id": 37,
        "question": "Câu 37: Điện cảm L do :",
        "options": [
            "Từ trường sinh ra",
            "Điện trường sinh ra.",
            "Điện từ trường sinh ra.",
            "Khi có dòng điện chạy qua dây dẫn, nó chỉ sinh ra điện cảm L."
        ],
        "trueOption": 0
    },
    "question38": {
        "id": 38,
        "question": "Câu 38: Nút phụ tải trong hệ thống điện thường cho biết các thông số ?",
        "options": [
            "P,Q",
            "P,V",
            "Q,V",
            "U,δ"
        ],
        "trueOption": 0
    },
    "question39": {
        "id": 39,
        "question": "Câu 39: Quyền điều khiển điều độ quốc gia ?",
        "options": [
            "Các nhà máy điện lớn",
            "Hệ thống điện 500kV",
            "Tần số hệ thống, điện áp các nút chính.",
            "Tất cả đều đúng"
        ],
        "trueOption": 3
    },
    "question40": {
        "id": 40,
        "question": "Câu 40: Giá trị r’ ứng với số sợi 19 sợi là bao nhiêu ?",
        "options": [
            "0,758R.",
            "0,779R",
            "0,726R",
            "0,774R"
        ],
        "trueOption": 0
    },
    "question41": {
        "id": 41,
        "question": "Câu 41: Tổn thất vầng quang phụ thuộc vào ?",
        "options": [
            "Thời tiết và cấu trúc đường dây",
            "Thời tiết.",
            "Cấu trúc đường dây.",
            "Điện năng thoát ra ngoài không khí."
        ],
        "trueOption": 0
    },
    "question42": {
        "id": 42,
        "question": "Câu 42: Đường dây trung bình có độ dài khoảng ?",
        "options": [
            "80 km ≤ l < 240 km",
            "l > 240 km.",
            "l < 80 km.",
            "60 km < l < 240 km."
        ],
        "trueOption": 0
    },
    "question43": {
        "id": 43,
        "question": "Câu 43: 231 là kí hiệu thiết bị gì ?",
        "options": [
            "Máy cắt điện tổng 220kV nối vào phân đoạn TC 220kV số 1",
            "Dao cách ly nối vào phân đoạn TC số 1.",
            "Máy cắt của tụ điện có cấp điện áp 220kV ở đường dây số 1.",
            "Máy cắt liên lạc giữa thanh cái 3 và thanh cái 1."
        ],
        "trueOption": 0
    },
    "question44": {
        "id": 44,
        "question": "Câu 44: Số thứ nhất của chống sét van có ý nghĩa gì ?",
        "options": [
            "Chỉ cấp điện áp CSV làm việc",
            "Chỉ số của đối tượng được bảo vệ.",
            "Thứ tự CSV trong trạm.",
            "Chỉ điện áp vận hành."
        ],
        "trueOption": 0
    },
    "question45": {
        "id": 45,
        "question": "Câu 45: Ý nghĩa kí hiệu TC21 là gì?",
        "options": [
            "Phân đoạn thanh cái 220kV số 1.",
            "2 phân đoạn thanh cái đường vòng 110kV",
            "Phân đoạn thanh cái 110kV số 2",
            "2 phân đoạn thanh cái đường vòng 220kV"
        ],
        "trueOption": 0
    },
    "question46": {
        "id": 46,
        "question": "Câu 46: Máy biến áp là một loại thiết bị điện tĩnh, làm việc trên nguyên lý ?",
        "options": [
            "Cảm ứng điện từ.",
            "Cảm ứng điện trường",
            "Tương hổ điện trường",
            "Tương hổ điện điện từ"
        ],
        "trueOption": 0
    },
    "question47": {
        "id": 47,
        "question": "Câu 47: Máy biến áp biến đổi điện áp này thành cấp điện áp khác với:",
        "options": [
            "Tần số không đổi",
            "Tần số thay đổi.",
            "Tần số có thể thay đổi hoặc không thay đổi.",
            "Tần số bằng 0."
        ],
        "trueOption": 0
    },
    "question48": {
        "id": 48,
        "question": "Câu 48: Ý nghĩa của việc đấu Y/D – 11 là gì ?",
        "options": [
            "Phía cao áp đấu sao, hạ áp đấu tam giác, góc lệch 330 độ",
            "Phía cao áp đấu sao, hạ áp đấu tam giác, góc lệch 110 độ",
            "Phía cao áp đấu tam giác, hạ áp đấu sao, góc lệch 120 độ.",
            "Phía cao áp đấu tam giác, hạ áp đấu sao, góc lệch 110 độ."
        ],
        "trueOption": 0
    },
    "question49": {
        "id": 49,
        "question": "Câu 49: Làm mát bằng phương pháp tuần hoàn cưỡng bức dầu và có tăng thêm quạt:",
        "options": [
            "Công suất 80 MVA.",
            "Công suất 16 MVA trở lại",
            "Công suất 100 MVA",
            "Công suất 200 MVA"
        ],
        "trueOption": 0
    },
    "question50": {
        "id": 50,
        "question": "Câu 50: Làm mát bằng không khí tự nhiên:",
        "options": [
            "Máy biến áp làm mát dầu bằng nước.",
            "Máy biến áp kiểu ướt.",
            "Máy biến áp làm mát bằng dầu.",
            "Máy biến áp kiểu khô"
        ],
        "trueOption": 3
    },
    "question51": {
        "id": 51,
        "question": "Câu 51: Máy biến áp khô làm mát không khí tự nhiên có kí hiệu là ?",
        "options": [
            "AN.",
            "AF",
            "ONAN",
            "ONAF"
        ],
        "trueOption": 0
    },
    "question52": {
        "id": 52,
        "question": "Câu 52: Máy biến áp tuần hoàn dầu và không khí tự nhiên có kí hiệu là ?",
        "options": [
            "ONAN",
            "ONAF.",
            "OFAF.",
            "ODAF."
        ],
        "trueOption": 0
    },
    "question53": {
        "id": 53,
        "question": "Câu 53:Máy biến áp thông gió cững bức và tuần hoàn dầu định hướng có kí hiệu là?",
        "options": [
            "ODAF",
            "ONAF.",
            "OFAF.",
            "ONAN."
        ],
        "trueOption": 0
    },
    "question54": {
        "id": 54,
        "question": "Câu 54: Máy điện đồng bộ có 3 bộ chính gồm:",
        "options": [
            "Phần cảm, phần ứng, phần kích từ",
            "Stato, Roto, vỏ máy.",
            "Phần cảm, phần ứng, phần vỏ máy.",
            "Stato, Roto, chổi than."
        ],
        "trueOption": 0
    },
    "question55": {
        "id": 55,
        "question": "Câu 55: Đặc tính không tải của động cơ đồng bộ :",
        "options": [
            "Biểu diễn sự thay đổi sức điện động E0 cảm ứng trong dây quấn phần ứng đối với dòng điện kích từ",
            "Là sự không đổi của sức điện động E0.",
            "Là sự thay đổi của E0 theo điện áp.",
            "Sức điện động E0 khác với điện áp nguồn."
        ],
        "trueOption": 0
    },
    "question56": {
        "id": 56,
        "question": "Câu 56: Đặc tính ngoài của máy phát điện là ?",
        "options": [
            "Mối quan hệ giữa điện áp U trên cực máy phát và dòng điện tải khi ikt, nđb không đổi.",
            "Mối quan hệ giữa điện áp U trên cực máy phát và dòng điện khi Ikt không đổi.",
            "Mối quan hệ giữa điện áp U trên cực máy phát và dòng điện khi nđb không đổi.",
            "Mối quan hệ giữa tốc độ và điện áp khi dòng điện ikt không đổi."
        ],
        "trueOption": 1
    },
    "question57": {
        "id": 57,
        "question": "Câu 57: Nút cân bằng là nút ?",
        "options": [
            "Nút nguồn có công suất lớn nhất trong HTĐ",
            "Nút nguồn có công suất P hữu hạn.",
            "Nút tiêu thụ công suất P, Q là hằng số.",
            "Nút có P = 0 và Q = 0."
        ],
        "trueOption": 0
    },
    "question58": {
        "id": 58,
        "question": "Câu 58: Nút máy phát là nút có:",
        "options": [
            "Công suất P hữu hạn, điện áp không đổi",
            "Điện áp không đổi, công suất P, Q thay đổi.",
            "Công suất P,Q là hằng số.",
            "Công suất P và Q đều bằng 0."
        ],
        "trueOption": 0
    },
    "question59": {
        "id": 59,
        "question": "Câu 59: Nút có P = 0, Q = 0 được gọi là nút:",
        "options": [
            "Nút trung gian.",
            "Nút cân bằng",
            "Nút phụ tải",
            "Nút máy phát"
        ],
        "trueOption": 0
    },
    "question60": {
        "id": 60,
        "question": "Câu 60: Nút tiêu thụ cống suất P, trong đó Q là hằng số được gọi là nút ?",
        "options": [
            "Nút phụ tải.",
            "Nút cân bằng",
            "Nút trung gian",
            "Nút máy phát"
        ],
        "trueOption": 0
    },
    "question61": {
        "id": 61,
        "question": "Câu 61: Ma trận được sử dụng chủ yếu trong việc phân tích hư hỏng (tính toán ngắn mạch) của hệ thống là ?",
        "options": [
            "Ma trận tổng trở.",
            "Ma trận tổng dẫn",
            "Ma trận tổng",
            "Ma trận tổng trở và ma trận tổng dẫn."
        ],
        "trueOption": 0
    },
    "question62": {
        "id": 62,
        "question": "Câu 62: Khi tải thuần dung tăng lên, để duy trì điện áp trên cực máy phát không đổi ta cần",
        "options": [
            "Giảm dòng kích từ.",
            "Tăng dòng kích từ",
            "Giữ nguyên dòng kích từ",
            "Điều chỉnh cho dòng kích từ bằng 0"
        ],
        "trueOption": 0
    },
    "question63": {
        "id": 63,
        "question": "Câu 63: Khi tải thuần trở tăng, để duy trì điện áp trên cực máy phát không đổi ta cần ?",
        "options": [
            "Tăng dòng kích từ.",
            "Giảm dòng kích từ",
            "Giữ nguyên dòng kích từ",
            "Điều chỉnh cho dòng kích từ bằng 0"
        ],
        "trueOption": 0
    },
    "question64": {
        "id": 64,
        "question": "Câu 64: Khi tải thuần cảm tăng, để duy trì điện áp trên cực máy phát ta cần ?",
        "options": [
            "Tăng dòng kích từ, khoảng 1,7 - 2,2 lần Ikt0",
            "Giảm dòng kích từ, khoảng 0,8 - 0,9 lần Ikt0.",
            "Giữ nguyên dòng kích từ.",
            "Điều chỉnh dòng kích bằng 0."
        ],
        "trueOption": 0
    },
    "question65": {
        "id": 65,
        "question": "Câu 65: Máy biến áp có điều kiện làm mát OFAF là máy ?",
        "options": [
            "MBA tuần hoàn dầu tự nhiên, thông gió cưỡng bức.",
            "MBA tuần hoàn tự nhiên, dầu định hướng.",
            "MBA tuần hoàn dầu và nước cưỡng bức",
            "MBA tuần hoàn dầu tự nhiên, thông gió cưỡng bức."
        ],
        "trueOption": 2
    },
    "question66": {
        "id": 66,
        "question": "Câu 66: Nút cân bằng trong hệ thống điện còn được gọi là nút ?",
        "options": [
            "Nút chuẩn",
            "Nút trung gian",
            "Nút máy phát",
            "Nút phụ tải"
        ],
        "trueOption": 0
    },
    "question67": {
        "id": 67,
        "question": "Câu 67: Cảm kháng đường dây sinh ra là do ?",
        "options": [
            "Hiện tượng tự cảm và vầng quang",
            "Hiện tượng hổ cảm và tự cảm",
            "Hiện tường vầng quang và dung kháng",
            "Hiện tưởng hổ cảm và vầng quang."
        ],
        "trueOption": 1
    },
    "question68": {
        "id": 68,
        "question": "Câu 68: Đại lượng nào của hệ thống chỉ do máy phát cung cấp ?",
        "options": [
            "P, V",
            "P,Q",
            "U,f",
            "Q,U"
        ],
        "trueOption": 0
    },
    "question69": {
        "id": 69,
        "question": "Câu 69: Người ta tiến hành phân pha với cấp điện áp nào ?",
        "options": [
            "110kV",
            "220kV",
            "500kV",
            "1000kV"
        ],
        "trueOption": 1
    },
    "question70": {
        "id": 70,
        "question": "Câu 70: Nguyên nhân gây ra tổn thất chính trên đường dây chủ yếu là do ?",
        "options": [
            "Điện trở",
            "Điện kháng",
            "Điện dung",
            "Tất cả đều đúng"
        ],
        "trueOption": 0
    },
    "question71": {
        "id": 71,
        "question": "Câu 71: Điều kiện hòa đồng bộ của máy phát điện là gì ?",
        "options": [
            "Tần số máy phát bằng tần số hệ thống.",
            "Điện áp máy phát bằng điện áp máy phát.",
            "Máy phát và hệ thống cùng thứ tự pha",
            "Tất cả ý trên đều đúng."
        ],
        "trueOption": 3
    },
    "question72": {
        "id": 72,
        "question": "Câu 72: Trong hệ thống điện có các thứ tự pha là ?",
        "options": [
            "ABC và CAB",
            "ABC và CBA",
            "CAB và BAC",
            "BA và ACB"
        ],
        "trueOption": 2
    },
    "question73": {
        "id": 73,
        "question": "Câu 73: Lưới điện 220kV có mấy công ty quản lý ?",
        "options": [
            "3",
            "4",
            "5",
            "7"
        ],
        "trueOption": 1
    },
    "question74": {
        "id": 74,
        "question": "Câu 74: Nhà máy nhiệt điện lấy nguồn nhiên liệu hóa thạch đó là các nguồn nào?",
        "options": [
            "Than, dầu, khí",
            "Than",
            "Than, dầu, gas",
            "Than, dầu"
        ],
        "trueOption": 0
    },
    "question75": {
        "id": 75,
        "question": "Câu 75: Tại sao phải chia nhiều cấp điện áp?",
        "options": [
            "Giảm tổn thất khi truyền tải",
            "Tiết kiệm dây",
            "Phù hợp với yêu cầu của từng vừng miền và điều kiện tự nhiên",
            "Tất cả các ý trên đều đúng"
        ],
        "trueOption": 3
    },
    "question76": {
        "id": 76,
        "question": "Câu 76: Máy biến áp trong hệ thống truyền tải dùng để làm gì ?",
        "options": [
            "Tăng giảm điện áp phù hợp với điều kiện thực tế",
            "Tăng điện áp đầu gửi",
            "Tăng điện áp đầu nhận",
            "Tất cả đều sai"
        ],
        "trueOption": 0
    },
    "question77": {
        "id": 77,
        "question": "Câu 77: Điện dẫn là nguyên nhân gây ra ?",
        "options": [
            "Gây ra tổn thất do những dòng điện rò giữa các dây dẫn hoặc giữa dây dẫn với đất.",
            "Tổn thất chính",
            "Sụt áp dọc đường dây",
            "Tất các ý trên đều đúng"
        ],
        "trueOption": 0
    },
    "question78": {
        "id": 78,
        "question": "Câu 78: Mô hình mạch T chuẩn là mô hình gì?",
        "options": [
            "Điện dung C của đường dây tập trung ở giữa đường dây",
            "Điện dung C của đường dây tập trung ở hai đầu đường dây",
            "Điện dung C/2 của đường dây tập trung ở giữa đường dây",
            "Điện dung C/2 của đường dây tập trung ở hai đầu đường dây."
        ],
        "trueOption": 0
    },
    "question79": {
        "id": 79,
        "question": "Câu 79: Mô hình mạch Π chuẩn là mô hình gì?",
        "options": [
            "Điện dung C/2 tập trung ở tại mỗi đầu đường dây.",
            "Điện dung C/2 tập trung ở tại giữa đường dây",
            "Điện dung C tập trung ở tại mỗi đầu đường dây",
            "Điện dung C tập trung ở tại giữa đường dây"
        ],
        "trueOption": 0
    },
    "question80": {
        "id": 80,
        "question": "Câu 80: Để nâng cao điện áp cuối đường dây ta bù bằng ?",
        "options": [
            "Bù ngang bằng tụ",
            "Bù ngang bằng cuộn cảm",
            "Cả A và B đều đúng",
            "Cả A và B đều sai."
        ],
        "trueOption": 0
    },
    "question81": {
        "id": 81,
        "question": "Câu 81: Phương pháp bù dọc đường dây bằng tụ là ?",
        "options": [
            "Bù nối tiếp",
            "Bù song song",
            "Cả A và B đều đúng",
            "Cả A và B đều sai"
        ],
        "trueOption": 0
    },
    "question82": {
        "id": 82,
        "question": "Câu 82: Lưới điện trong hệ thống điện bao gồm?",
        "options": [
            "Nhà máy điện, trạm biến áp, đường dây.",
            "Nhà máy điện, trạm biến áp, đường dây, phụ tải.",
            "Nhà máy điện, đường đây, phụ tải.",
            "Trạm biến áp đường dây."
        ],
        "trueOption": 1
    },
    "question83": {
        "id": 83,
        "question": "Câu 83: Thông số công suất ghi trên máy biến áp là công suất gì ?",
        "options": [
            "Công suất biểu kiến (S)",
            "Công suất tác dụng (P)",
            "Công suất phản kháng (Q)",
            "Có thể là công suất biểu kiến S hoặc là công suất tác dụng P"
        ],
        "trueOption": 0
    },
    "question84": {
        "id": 84,
        "question": "Câu 84: Máy biến áp áp dùng để tăng áp người ta đấu kiểu gì ?",
        "options": [
            "∆/Y",
            "Y/∆",
            "∆/∆",
            "Y/Y"
        ],
        "trueOption": 0
    },
    "question85": {
        "id": 85,
        "question": "Câu 85: Ở máy phát, khi hòa lưới muốn điều chỉnh tốc độ ta cần điều chỉnh thông số nào?",
        "options": [
            "Chỉnh dòng kích từ",
            "Chỉnh tần số",
            "Chỉnh điện áp",
            "Chỉnh thứ tự pha"
        ],
        "trueOption": 0
    },
    "question86": {
        "id": 86,
        "question": "Câu 86: Ở máy phát, trước khi hòa lên hệ thống muốn điều chỉnh điện áp ta điều chỉnh?",
        "options": [
            "Điều chỉnh dòng kích từ",
            "Điều chỉnh nguyên liệu đầu vào",
            "Điều chỉnh tần số",
            "Điều chỉnh công suất"
        ],
        "trueOption": 0
    },
    "question87": {
        "id": 87,
        "question": "Câu 87: Ở máy phát, sau khi hào lưới ta điều chỉnh dòng kích từ thì đại lượng nào thay đổi ?",
        "options": [
            "Công suất",
            "Dòng định mức",
            "Tần số",
            "Điện áp"
        ],
        "trueOption": 0
    },
    "question88": {
        "id": 88,
        "question": "Câu 88: Trong ma trận tính Zbus người ta chọn nút gì?",
        "options": [
            "Nút cân bằng",
            "Nút phụ tải",
            "Nút máy phát",
            "Nút trung gian."
        ],
        "trueOption": 0
    },
    "question89": {
        "id": 89,
        "question": "Câu 89: Đặc tuyến U và Ikt với tốc độ không đổi là khảo sát đặc tính gì?",
        "options": [
            "Đặc tính không tải",
            "Hãm động cơ",
            "Đặc tính điều chỉnh của máy phát",
            "Tất cả đều sai"
        ],
        "trueOption": 2
    },
}
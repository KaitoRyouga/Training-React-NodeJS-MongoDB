BACSIC REACT ROUTER

Ta cần một React web app
Bây giờ ta tạo một cái nha
Bước đầu tiên
Tạo cài đặt create-react-app với project là demo-app
Bằng cách dùng lệnh

![image](https://user-images.githubusercontent.com/54676091/105972688-78b34780-60be-11eb-938e-d722dab237b0.png)




![image](https://user-images.githubusercontent.com/54676091/105972104-db581380-60bd-11eb-8b49-e246c38b99c0.png)



Kết quả như vầy:
 
 
![image](https://user-images.githubusercontent.com/54676091/105972203-f62a8800-60bd-11eb-847c-25807ca101a4.png)
 
 
Bước Cài Đặt:
Bạn có thể cài đặt ở plulic npm registry mã nguồn mở hoặc những nơi khác:
Chúng ta sẽ cần sử dụng react-router-dom trong project này
Dùng lệnh:
![image](https://user-images.githubusercontent.com/54676091/105972870-a9937c80-60be-11eb-8f9b-0d7eea4fc007.png)

chạy như hình:
 
 
 ![image](https://user-images.githubusercontent.com/54676091/105972260-03477700-60be-11eb-91d0-68add0b70984.png)
 

Sau đó copy và dán các ví dụ sau vào src/App.js

VÍ DỤ ĐẦU TIÊN -1-: ĐINH TUYẾN CƠ BẢN
Trong ví dụ này, chúng ta có 3 trang là : a home page, an about page, và ausers page
Có nghĩ chúng ta đang làm 3 trang này..sao cho khi di chuyển con trỏ click đến các trang này chúng sẽ hiển thị ra nội dung trang của chúng
Lưu ý: ở trong code ví dụ này còn làm cho người dùng có thể dùng bàn phím để thao tác
Copy cái code này vào src/App.js nha!!!



![image](https://user-images.githubusercontent.com/54676091/105993381-ecfae480-60d8-11eb-9a3b-fb08739847d6.png)


Đã xong bước 1- chúng ta qua bước 2 nhé




BƯỚC 2:  ĐỊNH TUYẾN LỒNG VÀO NHAU
Cái ví dụ này sẽ cho ta thấy cách các định tuyến lồng vào nhau để hoạt động, The route /topics loads the Topics component ,
Hiển thị bất cứ đường dẫn <ROUTER>  ở trên paths : id value
Tiếp tục cóp cái code này và paste vào App.js

![image](https://user-images.githubusercontent.com/54676091/105993597-30555300-60d9-11eb-9fbf-4c14d2200c76.png)
![image](https://user-images.githubusercontent.com/54676091/105993677-43682300-60d9-11eb-9e05-91ac35208f60.png)






Kết Quả :

  

![image](https://user-images.githubusercontent.com/54676091/105972324-18240a80-60be-11eb-8b96-1190359052c7.png)

![image](https://user-images.githubusercontent.com/54676091/105972380-240fcc80-60be-11eb-932d-0465128013e5.png)



Xong










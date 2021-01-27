-BACSIC REACT ROUTER-

Ta cần một React web app
Bây giờ ta tạo một cái nha
Bước đầu tiên
Tạo cài đặt create-react-app với project là demo-app
Bằng cách dùng lệnh

npx create-react-app demo-app
cd demo-app

![image](https://user-images.githubusercontent.com/54676091/105972104-db581380-60bd-11eb-8b49-e246c38b99c0.png)



Kết quả như vầy:
 
 
![image](https://user-images.githubusercontent.com/54676091/105972203-f62a8800-60bd-11eb-847c-25807ca101a4.png)
 
 
Bước Cài Đặt:
Bạn có thể cài đặt ở plulic npm registry mã nguồn mở hoặc những nơi khác:
Chúng ta sẽ cần sử dụng react-router-dom trong project này
Dùng lệnh:
npm install react-router-dom
chạy như hình:
 
 
 ![image](https://user-images.githubusercontent.com/54676091/105972260-03477700-60be-11eb-91d0-68add0b70984.png)
 

Sau đó copy và dán các ví dụ sau vào src/App.js

VÍ DỤ ĐẦU TIÊN -1-: ĐINH TUYẾN CƠ BẢN
Trong ví dụ này, chúng ta có 3 trang là : a home page, an about page, và ausers page
Có nghĩ chúng ta đang làm 3 trang này..sao cho khi di chuyển con trỏ click đến các trang này chúng sẽ hiển thị ra nội dung trang của chúng
Lưu ý: ở trong code ví dụ này còn làm cho người dùng có thể dùng bàn phím để thao tác
Copy cái code này vào src/App.js nha!!!
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

Đã xong bước 1- chúng ta qua bước 2 nhé
BƯỚC 2:  ĐỊNH TUYẾN LỒNG VÀO NHAU
Cái ví dụ này sẽ cho ta thấy cách các định tuyến lồng vào nhau để hoạt động, The route /topics loads the Topics component ,
Hiển thị bất cứ đường dẫn <ROUTER>  ở trên paths : id value
Tiếp tục cóp cái code này và paste vào App.js

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

Kết Quả :

  

![image](https://user-images.githubusercontent.com/54676091/105972324-18240a80-60be-11eb-8b96-1190359052c7.png)

![image](https://user-images.githubusercontent.com/54676091/105972380-240fcc80-60be-11eb-932d-0465128013e5.png)

![qwee](https://user-images.githubusercontent.com/54676091/105972452-368a0600-60be-11eb-9716-2c0736d13d7f.jpg)


Xong










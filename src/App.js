import "./App.css";
import HomePage from "./Page/HomePage/HomePage";
import NavBar from "./component/NavBar/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;

/*


<>
      <Spinner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          ></Route>

          <Route
            path="/movie/:maPhim"
            element={
              <Layout>
                <DetailMain />
              </Layout>
            }
          ></Route>
          <Route
            path="/booking/:maLichChieu"
            element={
              <Layout>
                <BookingTicket />
              </Layout>
            }
          ></Route>
          <Route
            path="/userinfo"
            element={
              <Layout>
                <UserInfo />
              </Layout>
            }
          ></Route>
          <Route path="/login" element={<UserLogin />}></Route>
          <Route path="/dangky" element={<DangKy />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>

*/

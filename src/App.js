
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout.js";
import PublicLayout from "./layout/PublicLayout.js";



import AdminRoutes from "./routes/AdminRoutes.jsx";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<PublicLayout />} />
          <Route path='/admin/*' element={<AdminRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

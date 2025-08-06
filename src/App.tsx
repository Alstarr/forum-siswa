import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./page/home";
import KritikForm from "./page/kritik";
import HarapanForm from './page/harapan'
import BullyingForm from './page/perundungan'
// import Thanks from './page/thanks'
// import NotFound from './page/notfound'
import MainLayout from "./layouts/mainLayout";

export default function AppRoutes() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kritik" element={<KritikForm />} />
            <Route path="/harapan" element={<HarapanForm />} />
            <Route path="/perundungan" element={<BullyingForm />} />
            {/* <Route path="/thanks" element={<Thanks />} />
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </MainLayout>
    </>
  );
}

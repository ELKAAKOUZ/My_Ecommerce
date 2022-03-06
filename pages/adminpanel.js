import React from "react";
import AdminForm from "../components/AdminForm";
import Advertistments from "../components/Advertistments";
import { useSession } from "next-auth/react";
import Header from "../components/Header";

function adminpanel() {
  const { data: session, status } = useSession();
  const adminAuthenticated = status === "authenticated";
  return (
    <div>
      <Header />

      {adminAuthenticated && (
        <div>
          <AdminForm />
          <Advertistments />
        </div>
      )}
    </div>
  );
}

export default adminpanel;

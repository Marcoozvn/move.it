import { useSession } from "next-auth/client";
import Sidebar from "./Sidebar";

export function Layout(props) {
  const [session, loading] = useSession();

  return (
    <>
      {!loading && session &&
        <div style={{ display: 'flex' }}>
          <Sidebar />
          {props.children}
        </div>
      }

      {!session &&
        <>
          {props.children}
        </>
      }
    </>
  );
}
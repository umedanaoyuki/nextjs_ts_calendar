import { ClientComponent } from "./ClientComponent";
import { ServerComponent } from "./ServerComponent";

export default function Home() {
  return (
   <div className="flex h-screen flex-col items-center justify-center">
    <ClientComponent />
    <ServerComponent />
   </div>
  );
}

import { useState } from "react";
import SearchForm from "./searchForm";
import StatusCard, { StatusType } from "./statusCard";
import getUrl from "@/utils/getUrl";

function StatusCheckPage() {
  const [status, setStatus] = useState<null | StatusType>(null);

  const handleSubmit = async (nid: string) => {
    const url = getUrl(`/users/status?nid=${nid}`);

    const res = await fetch(url);

    if (res.status === 404) {
      setStatus({ isRegistered: false });
      return;
    }
    console.log(res);

    const statusInfo = await res.json();

    setStatus({
      isRegistered: true,
      ...statusInfo,
    });
  };
  return (
    <main className="flex-1 container max-w-screen-xxl mx-auto px-4 py-8">
      <SearchForm submit={handleSubmit} />

      {status && <StatusCard {...status} />}
    </main>
  );
}

export default StatusCheckPage;
